// One-time/reviewed asset preparation, not a build or verification hook.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SlidersHorizontal, Package, FolderKanban, FileText, Settings2, Images, Menu, PanelLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(root, 'public/admin-theme');
const require = createRequire(import.meta.url);
const fontRoot = dirname(require.resolve('@fontsource/inter/package.json'));
await mkdir(resolve(target, 'fonts'), { recursive: true });
await mkdir(resolve(target, 'icons'), { recursive: true });
for (const weight of [400, 500, 600]) {
  const name = `inter-latin-${weight}-normal.woff2`;
  await copyFile(resolve(fontRoot, 'files', name), resolve(target, 'fonts', name));
}
await copyFile(resolve(fontRoot, 'LICENSE'), resolve(target, 'fonts/LICENSE.txt'));
for (const [name, Icon] of Object.entries({
  'sliders-horizontal': SlidersHorizontal, package: Package, 'folder-kanban': FolderKanban,
  'file-text': FileText, 'settings-2': Settings2, images: Images, menu: Menu,
  'panel-left-close': PanelLeftClose, 'panel-left-open': PanelLeftOpen,
  'panel-left': PanelLeft,
})) {
  await writeFile(resolve(target, 'icons', `${name}.svg`), renderToStaticMarkup(createElement(Icon, {
    xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, strokeWidth: 1.75, 'aria-hidden': true,
  })) + '\n');
}
console.log('Prepared admin theme: three local font weights, font licence and ten Lucide icons.');
