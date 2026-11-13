import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const file=new URL('../src/content/projects/paris.mdx',import.meta.url);
const raw=await readFile(file,'utf8');
const parsed=matter(raw);
for (const language of ['es','en']) {
  const es=language==='es';
  const gallery=parsed.data.locales[language].contentBlocks.find(block=>block._template==='gallery');
  if (!gallery) throw new Error(`Missing ${language} Paris gallery`);
  gallery.layout='columns';
  const src='/revision/media/paris-gallery.webp';
  if (!gallery.images.some(image=>image.src===src)) {
    gallery.images.splice(1,0,{src,
      alt:es?'Diseño de la página Galería del sitio París, recuperado de la mesa GALERIA del archivo Photoshop original.':'Paris website Gallery page design, recovered from the original Photoshop file’s GALERIA artboard.',
      caption:es?'Galería · diseño original recuperado del PSD.':'Gallery · original design recovered from the PSD.',
      credit:parsed.data.locales[language].imageCredit,
      href:src,linkLabel:es?'Abrir imagen completa':'Open full image'});
  }
}
await writeFile(new URL(`../.e2e/content-intake/paris-before-gallery-layout-${Date.now()}.mdx`,import.meta.url),raw,{flag:'wx'});
await writeFile(file,matter.stringify(parsed.content,parsed.data));
console.log('Added Paris Gallery artboard and independent column layout in ES/EN.');
