import { readFile, writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const manifest = JSON.parse(await readFile(new URL('../src/editorial/assets/academic-2017-media-manifest.json', import.meta.url), 'utf8'));
const youtube = {
  discovery: {url: 'https://www.youtube.com/watch?v=MCpE5tW1KGo', title: 'Intro de mi serie del alma'},
  pitufos: {url: 'https://www.youtube.com/watch?v=DmUvogI5eu0', title: 'Aldea de Pitufos'},
};
const titles = {discovery: {es: 'Discovery', en: 'Discovery'}, tren: {es: 'Tren', en: 'Train'}, pitufos: {es: 'Pitufos', en: 'Smurfs'}};
const credits = {
  discovery: {es: 'Realización: Alejandro Delgado. Inspirado en Star Trek. Música y otros recursos pendientes de acreditar.', en: 'Production: Alejandro Delgado. Inspired by Star Trek. Music and other source assets still require credits.'},
  tren: {es: 'Postproducción: Alejandro Delgado. Modelos OBJ descargados de terceros; autores y licencias por identificar.', en: 'Post-production: Alejandro Delgado. Third-party OBJ models; authors and licenses still to be identified.'},
  pitufos: {es: 'Rigging, aldea 3D, tracking y postproducción: Alejandro Delgado. Personaje descargado de terceros; autor y licencia por identificar.', en: 'Rigging, 3D village, tracking and post-production: Alejandro Delgado. Third-party character model; author and license still to be identified.'},
};
for (const item of manifest) {
  const slug = item.slug;
  const file = new URL(`../src/content/projects/${slug}.mdx`, import.meta.url);
  const raw = await readFile(file, 'utf8');
  const parsed = matter(raw);
  parsed.data.image = `/revision/media/${slug}-poster.webp`;
  for (const language of ['es','en']) {
    const es = language === 'es';
    const copy = parsed.data.locales[language];
    const title = titles[slug][language];
    const credit = credits[slug][language];
    copy.imageAlt = es ? `Imagen del trabajo académico ${title}, tomada del material conservado de la entrega.` : `Image from the ${title} academic assignment, taken from its preserved material.`;
    copy.imageCaption = es ? 'Imagen del archivo del trabajo. Selección preliminar para revisión del portfolio.' : 'Image from the project archive. Preliminary selection for portfolio review.';
    copy.imageCredit = credit;
    const additions = [];
    if (youtube[slug]) additions.push({_template:'image', src:parsed.data.image,
      alt:es ? `Abrir el video de ${title} en el canal Al3Design.` : `Open the ${title} video on the Al3Design channel.`,
      caption:es ? `Video del canal: «${youtube[slug].title}».` : `Channel video: “${youtube[slug].title}”.`,
      credit, href:youtube[slug].url,
      linkLabel:es ? 'Ver video en YouTube' : 'Watch video on YouTube'});
    additions.push({_template:'gallery', title:es ? 'Imágenes del trabajo' : 'Project images',
      images:[1,2].map(index => ({src:`/revision/media/${slug}-frame-${index}.webp`,
        alt:es ? `Fotograma ${index} del video conservado de ${title}.` : `Frame ${index} from the preserved ${title} video.`,
        caption:es ? 'Fotograma del video de archivo; versión de entrega por confirmar.' : 'Frame from the archived video; submitted version still to be confirmed.', credit}))});
    const seconds = Math.round(item.previewSeconds * 10) / 10;
    additions.push({_template:'video', title:es ? 'Muestra del video conservado' : 'Archived video excerpt',
      src:`/revision/media/${slug}-preview.mp4`, poster:parsed.data.image,
      caption:es ? `Extracto local de ${seconds} segundos, sin audio. No reemplaza la versión completa ni confirma que sea la entrega final.` : `A ${seconds}-second local excerpt without audio. It does not replace the complete version or establish it as the final submission.`,
      transcript:es ? `Muestra sin audio de la secuencia audiovisual conservada de ${title}. Las imágenes pertenecen al archivo de esta entrega. Queda pendiente la descripción visual detallada de la versión que se elija publicar.` : `A silent excerpt from the preserved ${title} audiovisual sequence. Images come from this assignment’s archive. A detailed visual description is still required for the version selected for publication.`,
      hasAudio:false, credit});
    const notesIndex = copy.contentBlocks.findIndex(block => block.collapsed);
    // Preserve all edited copy and append media before editorial notes only once.
    if (!copy.contentBlocks.some(block => block.src === `/revision/media/${slug}-preview.mp4`)) copy.contentBlocks.splice(notesIndex < 0 ? copy.contentBlocks.length : notesIndex,0,...additions);
    const notes = copy.contentBlocks.find(block => block.collapsed);
    if (notes) notes.text += es ? '\n\nMedios de revisión incorporados desde el archivo local. Las muestras se sirven solo en desarrollo y sin audio; la selección final, la descripción visual detallada y los créditos siguen pendientes.' : '\n\nReview media added from the local archive. Excerpts are served only in development and without audio; final selection, detailed visual descriptions and credits remain pending.';
  }
  await writeFile(new URL(`../.e2e/content-intake/${slug}-before-media-${Date.now()}.mdx`, import.meta.url),raw,{flag:'wx'});
  await writeFile(file,matter.stringify(parsed.content,parsed.data));
  console.log(`Added ${slug}: shared cover, ES/EN gallery and local excerpt${youtube[slug] ? ', channel video link' : ''}.`);
}
