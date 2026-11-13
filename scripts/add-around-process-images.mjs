import { readFile, writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const file = new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url);
const raw = await readFile(file, 'utf8');
const parsed = matter(raw);
const videoUrl = 'https://www.youtube.com/watch?v=i7BmQZgSdpc';
for (const language of ['es', 'en']) {
  const es = language === 'es';
  const blocks = parsed.data.locales[language].contentBlocks;
  const video = blocks.find(block => block.src === 'https://i.ytimg.com/vi/i7BmQZgSdpc/hqdefault.jpg');
  if (!video) throw new Error(`Missing official video reference: ${language}`);
  video.href = videoUrl;
  video.linkLabel = es ? 'Ver video oficial en YouTube' : 'Watch the official video on YouTube';
  const groups = [
    {after: es ? 'Una grilla para distintas cantidades de señales' : 'A grid for different signal counts',
      title: es ? 'Exploraciones de layout' : 'Layout explorations', page: 6, prefix: 'layout',
      caption: es ? 'Material de la lámina sobre distribución de vistas y zoom.' : 'Material from the slide about view layouts and zoom.'},
    {after: es ? 'Distinguir estados y niveles de atención' : 'Distinguishing states and levels of attention',
      title: es ? 'Exploraciones de alertas' : 'Alert explorations', page: 7, prefix: 'alert',
      caption: es ? 'Material de la lámina sobre alertas y advertencias de ingesta.' : 'Material from the slide about ingest alerts and warnings.'},
  ];
  for (const group of groups) {
    if (blocks.some(block => block.title === group.title)) continue;
    const index = blocks.findIndex(block => block.title === group.after);
    if (index < 0) throw new Error(`Missing section: ${group.after}`);
    blocks.splice(index + 1, 0, {_template: 'gallery', title: group.title,
      images: ['a', 'b'].map((variant, index) => ({
        src: `/revision/media/around-${group.prefix}-${variant}.webp`,
        alt: es ? `Variante ${index + 1} de interfaz de Ingest Monitor, extraída de la lámina de ${group.prefix === 'layout' ? 'layouts' : 'alertas'} de la presentación.` : `Ingest Monitor interface variant ${index + 1}, extracted from the presentation’s ${group.prefix === 'layout' ? 'layout' : 'alert'} slide.`,
        caption: group.caption,
        credit: es ? `Presentación de Alejandro Delgado · Case-study-AD.pdf, página ${group.page}. Interfaz de Around; contenido audiovisual de terceros mostrado como referencia.` : `Alejandro Delgado’s presentation · Case-study-AD.pdf, page ${group.page}. Around interface; third-party audiovisual content shown as reference.`,
      })),
    });
  }
}
await writeFile(new URL(`../.e2e/content-intake/around-before-process-images-${Date.now()}.mdx`, import.meta.url), raw, {flag: 'wx'});
await writeFile(file, matter.stringify(parsed.content, parsed.data));
console.log('Linked official video and added two source-image galleries in ES/EN; draft preserved.');
