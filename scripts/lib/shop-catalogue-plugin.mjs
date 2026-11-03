import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, extname } from 'node:path';
import { readShopSelection } from './shop-catalogue-selection.mjs';

const moduleId = 'virtual:shop-catalogue';
const resolvedId = '\0' + moduleId;

/** Only selected photos enter Astro's image pipeline. Public uploads are
 * copied into an ignored, content-addressed cache because public/ files are
 * otherwise copied verbatim by Astro. No private source is copied to public.
 * @returns {import('vite').Plugin}
 */
export function shopCataloguePlugin() {
  let root = process.cwd();
  return {
    name: 'shop-selected-catalogue',
    configResolved(config) { root = config.root; },
    resolveId(id) { if (id === moduleId) return resolvedId; },
    async load(id) {
      if (id !== resolvedId) return;
      const { selection, documents, photoFiles } = await readShopSelection(root, file => this.addWatchFile(file));
      const imports = [];
      const entries = [];
      for (const [source, file] of photoFiles) {
        let imagePath = file;
        if (source.startsWith('/')) {
          const data = await readFile(file);
          const hash = createHash('sha256').update(data).digest('hex');
          const cache = resolve(root, '.astro/shop-media');
          await mkdir(cache, { recursive: true });
          imagePath = resolve(cache, hash + extname(file).toLowerCase());
          await writeFile(imagePath, data, { flag: 'wx' }).catch(error => {
            if (error.code !== 'EEXIST') throw error;
          });
        }
        const name = `photo${entries.length}`;
        // Vite's /@fs/ path handles absolute Windows and POSIX image imports.
        imports.push(`import ${name} from ${JSON.stringify('/@fs/' + imagePath.replaceAll('\\', '/'))};`);
        entries.push(`${JSON.stringify(source)}: ${name}`);
      }
      return `${imports.join('\n')}\nexport const selection = ${JSON.stringify(selection)};\nexport const documents = ${JSON.stringify(documents)};\nexport const images = {${entries.join(',')}};`;
    },
    configureServer(server) {
      const refresh = (file) => {
        const normalized = file.replaceAll('\\', '/');
        const base = root.replaceAll('\\', '/').replace(/\/$/, '');
        if (!['/src/editorial/shop-catalogue/', '/src/editorial/shop-products/', '/src/editorial/shop-assets/', '/public/assets/shop/']
          .some(directory => normalized.startsWith(base + directory))) return;
        const module = server.moduleGraph.getModuleById(resolvedId);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', refresh).on('change', refresh).on('unlink', refresh);
      server.httpServer?.once('close', () => {
        server.watcher.off('add', refresh).off('change', refresh).off('unlink', refresh);
      });
    },
  };
}
