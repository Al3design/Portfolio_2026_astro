import { readFile, writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const file = new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url);
const raw = await readFile(file, 'utf8');
const parsed = matter(raw);
for (const language of ['es', 'en']) {
  const es = language === 'es';
  const blocks = parsed.data.locales[language].contentBlocks;
  for (const kind of ['layout', 'alert']) {
    const gallery = blocks.find(block => block._template === 'gallery' && block.images?.some(image => image.src.startsWith(`/revision/media/around-${kind}-`)));
    if (!gallery) throw new Error(`Missing gallery ${language}/${kind}`);
    const layout = kind === 'layout';
    gallery.images = [{
      src: `/revision/media/around-${kind}-slide.webp`,
      alt: es
        ? (layout ? 'Lámina de Ingest Monitor que compara grillas de 24, 15 y 8 vistas y niveles de zoom 1X, 2X y 3X.' : 'Lámina de Ingest Monitor con ejemplos de alertas y advertencias, mensajes de estado y señales de ingesta.')
        : (layout ? 'Ingest Monitor slide comparing grids of 24, 15 and 8 views and zoom levels 1X, 2X and 3X.' : 'Ingest Monitor slide showing alert and warning examples, status messages and ingest signals.'),
      caption: es ? 'Lámina completa de la presentación, con los elementos de interfaz y las anotaciones originales.' : 'Complete presentation slide, including interface elements and original annotations.',
      credit: es ? `Presentación de Alejandro Delgado · Case-study-AD.pdf, página ${layout ? 6 : 7}. Interfaz de Around; material audiovisual de terceros como referencia.` : `Alejandro Delgado’s presentation · Case-study-AD.pdf, page ${layout ? 6 : 7}. Around interface; third-party audiovisual material as reference.`,
    }];
    // A single full-width figure keeps the composed slide readable in the article.
    Object.assign(gallery, {_template: 'image', ...gallery.images[0]});
    delete gallery.images;
  }
}
await writeFile(new URL(`../.e2e/content-intake/around-before-composed-slides-${Date.now()}.mdx`, import.meta.url), raw, {flag: 'wx'});
await writeFile(file, matter.stringify(parsed.content, parsed.data));
console.log('Replaced background-only extracts with full-width composed slides in ES/EN.');
