import {readFile, writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const videos = {
  mundo: {url:'https://www.youtube.com/watch?v=zBnXh_qTv24', title:'Paisaje ficticio'},
  toplomero: {url:'https://www.youtube.com/watch?v=Sh4ZFfaQSls', title:'Toplomero'},
};
for (const [slug, video] of Object.entries(videos)) {
  const file = new URL(`../src/content/projects/${slug}.mdx`, import.meta.url);
  const raw = await readFile(file,'utf8');
  const parsed = matter(raw);
  for (const language of ['es','en']) {
    const es = language === 'es';
    const blocks = parsed.data.locales[language].contentBlocks;
    if (!blocks.some(block => block.href === video.url)) {
      const index = blocks.findIndex(block => block._template === 'video');
      blocks.splice(index < 0 ? blocks.length - 1 : index, 0, {_template:'image', src:parsed.data.image,
        alt: es ? `Abrir «${video.title}» en el canal Al3Design.` : `Open “${video.title}” on the Al3Design channel.`,
        caption:es ? `Video del canal: «${video.title}». Puede corresponder a una versión distinta de la muestra local.` : `Channel video: “${video.title}”. It may differ from the local excerpt.`,
        credit: slug === 'mundo'
          ? (es ? 'Entorno y composición: Alejandro Delgado. Calavera OBJ de terceros y fondo predeterminado de VUE.' : 'Environment and compositing: Alejandro Delgado. Third-party skull OBJ and preset VUE background.')
          : (es ? 'Modelado, rigging y postproducción: Alejandro Delgado. Créditos de audio y otros recursos pendientes de completar.' : 'Modeling, rigging and post-production: Alejandro Delgado. Audio and other asset credits still to be completed.'),
        href:video.url, linkLabel:es ? 'Ver video en YouTube' : 'Watch video on YouTube'});
    }
    if (slug === 'toplomero') {
      const credit = es ? 'Material de proceso del trabajo de Alejandro Delgado. Selección preliminar del archivo, pendiente de revisión visual.' : 'Process material from Alejandro Delgado’s project. Preliminary archive selection, pending visual review.';
      const galleries = [
        {after:es ? 'Personaje y escenario' : 'Character and setting', title:es ? 'Pruebas del pelaje' : 'Fur studies',
          images:[['toplomero-fur-3.webp','pruebaFur3.jpg'],['toplomero-fur-6.webp','pruebaFur6.jpg']]},
        {after:es ? 'Agua y postproducción' : 'Water and postproduction', title:es ? 'Escenario y pruebas de la escena' : 'Setting and scene studies',
          images:[['toplomero-setting-2.webp','pruebaSotano2.jpg'],['toplomero-scene-5.webp','casiCompleto5.png'],['toplomero-water-6.webp','conAgua0006.png']]},
      ];
      for (const gallery of galleries) {
        if (blocks.some(block => block.title === gallery.title)) continue;
        const index = blocks.findIndex(block => block.title === gallery.after);
        if (index < 0) throw new Error(`Missing ${language} section: ${gallery.after}`);
        blocks.splice(index+1,0,{_template:'gallery',title:gallery.title,images:gallery.images.map(([filename, original], index) => ({
          src:`/revision/media/${filename}`,
          alt:es ? `${gallery.title}, imagen ${index+1} del archivo de Toplomero.` : `${gallery.title}, image ${index+1} from the Toplomero archive.`,
          caption:es ? `Prueba conservada como ${original}.` : `Study preserved as ${original}.`,credit,
        }))});
      }
    }
  }
  await writeFile(new URL(`../.e2e/content-intake/${slug}-before-next-intake-${Date.now()}.mdx`,import.meta.url),raw,{flag:'wx'});
  await writeFile(file,matter.stringify(parsed.content,parsed.data));
  console.log(`Updated ${slug}: channel link${slug === 'toplomero' ? ' and five process images' : ''} in ES/EN.`);
}
