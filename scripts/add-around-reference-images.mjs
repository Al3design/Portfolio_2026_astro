import { readFile, writeFile, mkdir } from 'node:fs/promises';
import matter from 'gray-matter';

const file = new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url);
const raw = await readFile(file, 'utf8');
const parsed = matter(raw);
const officialPage = 'https://around.net/products/ingest/';
const officialVideo = 'https://www.youtube.com/watch?v=i7BmQZgSdpc';
parsed.data.image = 'https://around.net/img/products/ingest/ingest-header.jpg';
for (const language of ['es', 'en']) {
  const copy = parsed.data.locales[language];
  const es = language === 'es';
  copy.imageAlt = es ? 'Imagen de presentación de Ingest Monitor utilizada por Around en su página oficial.' : 'Ingest Monitor presentation image used by Around on its official product page.';
  copy.imageCaption = es ? 'Material de presentación del producto publicado por Around; no es una captura de mi proceso de diseño.' : 'Product presentation material published by Around; this is not a screenshot of my design process.';
  copy.imageCredit = `Around · ${officialPage}`;
  const src = 'https://i.ytimg.com/vi/i7BmQZgSdpc/hqdefault.jpg';
  if (!copy.contentBlocks.some(block => block.src === src)) {
    const index = copy.contentBlocks.findIndex(block => block.title === (es ? 'El contexto del producto' : 'Product context'));
    copy.contentBlocks.splice(index < 0 ? 1 : index + 1, 0, {
      _template: 'image', src,
      alt: es ? 'Miniatura del video oficial de Ingest Monitor enlazado desde la web de Around.' : 'Thumbnail of the official Ingest Monitor video linked from Around’s website.',
      caption: es ? 'Video de presentación del producto. Referencia pública para contextualizar el trabajo; no constituye un entregable individual mío.' : 'Product presentation video. Public reference providing context for the work; not an individual deliverable of mine.',
      credit: `Around · YouTube · ${officialVideo}`,
    });
  }
  const notes = copy.contentBlocks.find(block => block.collapsed);
  if (notes) notes.text = notes.text.replace('No se copiaron teléfonos, enlaces obsoletos ni capturas de clientes en este documento.', 'Se omiten teléfonos y enlaces obsoletos. Las imágenes de referencia pública de Around se identifican con su fuente.').replace('No phone numbers, obsolete links or client screenshots were copied into this document.', 'Phone numbers and obsolete links are omitted. Public Around reference images are identified with their source.');
}
await mkdir(new URL('../.e2e/content-intake/', import.meta.url), {recursive: true});
await writeFile(new URL(`../.e2e/content-intake/around-before-reference-images-${Date.now()}.mdx`, import.meta.url), raw, {flag: 'wx'});
await writeFile(file, matter.stringify(parsed.content, parsed.data));
console.log('Added attributed official product references to both locales; article remains draft.');
