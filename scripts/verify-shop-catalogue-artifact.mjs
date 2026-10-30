import { readFile, readdir, access, mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative, extname } from 'node:path';

// Inspect the built output, not source templates or the development server.
const root = resolve('dist');
const slugs = ['arbol-decorativo', 'figura-articulada-verde-roja', 'flor-decorativa-blanca', 'jarron-acanalado', 'maceta-acanalada-con-plato', 'maceta-perro', 'pieza-articulada-roja-negra', 'soporte-control-creeper'];
const errors = [];
const pages = [];
const photos = new Set();
for (const [base, price, delivery, included] of [
  ['tienda', 'Precio a consultar', 'Según stock y a confirmar.', 'Solo incluye la impresión 3D.'],
  ['en/shop-3d', 'Price on enquiry', 'Subject to stock; to be confirmed.', 'Only the 3D print is included.'],
]) {
  for (const slug of ['', base === 'tienda' ? 'coleccion' : 'collection', ...slugs]) {
    const page = [base, slug, 'index.html'].filter(Boolean).join('/');
    try {
      const html = await readFile(resolve(root, page), 'utf8');
      pages.push(page);
      if (!html.includes(price) || !html.includes(delivery) || !html.includes(included)) errors.push(`${page}: missing enquiry terms`);
      if (/\b(?:href|src)=["'][^"']*(?:\/revision\/|\/admin\/)/.test(html)) errors.push(`${page}: editorial URL exposed`);
      if (slugs.includes(slug) && !html.includes(`/${base}/${slug}/`)) errors.push(`${page}: missing canonical piece URL`);
      const webp = [...html.matchAll(/\bsrc=["'](\/_astro\/[^"']+\.webp(?:\?[^"']*)?)["']/g)];
      if (!webp.length) errors.push(`${page}: missing optimized photos`);
      for (const [, src] of webp) {
        const asset = decodeURIComponent(src.split('?')[0]);
        photos.add(asset);
        try { await access(resolve(root, `.${asset}`)); }
        catch { errors.push(`${page}: missing asset ${asset}`); }
      }
    } catch (error) { errors.push(`${page}: ${error.message}`); }
  }
}
async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesAt(resolve(directory, entry.name)) : [resolve(directory, entry.name)]))).flat();
}
const files = await filesAt(root);
for (const file of files) {
  const name = relative(root, file).replaceAll('\\', '/');
  if (/(^|\/)(?:revision|shop-products|shop-assets)(\/|$)/.test(name)) errors.push(`${name}: private editorial path in output`);
  if (slugs.some(slug => name.endsWith(`/${slug}.json`) || name === `${slug}.json`)) errors.push(`${name}: editorial JSON in output`);
  if (['.html', '.js', '.json', '.map'].includes(extname(file))) {
    const text = await readFile(file, 'utf8');
    if (text.includes('Confirmación vigente del titular, 29/10/2026') || text.includes('Historial de fuente/licencia previo a esa confirmación')) {
      errors.push(`${name}: private licence history in output`);
    }
  }
}
const result = { pages: pages.length, optimizedPhotoSources: photos.size, errors };
await mkdir('output/shop-r37', { recursive: true });
await writeFile('output/shop-r37/artifact.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
