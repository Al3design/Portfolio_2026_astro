import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const selection={
 gitcron:{layout:'grid',
  es:{title:'Interfaz y asistencia contextual',
   credit:'Diseño y desarrollo: Alejandro Delgado, con asistencia de IA. Captura existente con repositorio de prueba; no acredita estado productivo actual.',
   note:'Estas vistas muestran el historial del repositorio junto al panel de asistencia contextual y su menú. El repositorio visible es de prueba. Las capturas documentan una versión del diseño, sin presentar esta muestra como un ensayo funcional nuevo.',
   images:[['gitcron-context-panel.webp','Interfaz de GitCron con repositorio de prueba, historial y panel de conversación contextual.','Repositorio de prueba y panel contextual.'],['gitcron-context-menu.webp','Interfaz de GitCron con el menú de acciones del panel contextual abierto.','Menú del panel contextual.']]},
  en:{title:'Interface and contextual assistance',
   credit:'Design and development: Alejandro Delgado, with AI assistance. Existing screenshot using a test repository; it does not establish current production status.',
   note:'These views show repository history alongside the contextual assistance panel and its menu. The visible repository is a test fixture. The screenshots document a version of the design, rather than a new functional test.',
   images:[['gitcron-context-panel.webp','GitCron interface showing a test repository, history and contextual conversation panel.','Test repository and contextual panel.'],['gitcron-context-menu.webp','GitCron interface with the contextual panel action menu open.','Contextual panel menu.']]}},
 useodontopro:{layout:'previews',
  es:{title:'Home y planes · escritorio y móvil',
   credit:'Diseño y desarrollo: Alejandro Delgado, con asistencia de IA. Captura histórica de diseño del portal. Cifras, contactos, planes y promesas dentro de la imagen requieren revisión; no son resultados ni condiciones vigentes acreditadas.',
   note:'La selección conserva una versión anterior de la home y la página de planes, en escritorio y móvil. Permite comparar la composición editorial y el apilado de contenido. El panel ilustrativo, las métricas y las prestaciones comerciales que aparecen en estas imágenes son parte de ese diseño histórico: no se presentan como datos reales del servicio ni como disponibilidad actual.',
   images:[['useodontopro-home-desktop.webp','Diseño histórico de la home de UseOdontoPro con presentación, panel ilustrativo y secciones de producto.','Home · versión histórica de escritorio.'],['useodontopro-home-mobile.webp','Diseño histórico móvil de la home de UseOdontoPro con contenido apilado en una columna.','Home · versión histórica móvil.'],['useodontopro-plans-desktop.webp','Diseño histórico de la página de planes con tres tarjetas comparativas en escritorio.','Planes · versión histórica de escritorio.'],['useodontopro-plans-mobile.webp','Diseño histórico de planes en móvil con las tarjetas organizadas verticalmente.','Planes · versión histórica móvil.']]},
  en:{title:'Home and plans · desktop and mobile',
   credit:'Design and development: Alejandro Delgado, with AI assistance. Historical portal design screenshot. Figures, contacts, plans and claims within the image require review; they are not established results or current terms.',
   note:'The selection preserves an earlier version of the home and plans pages on desktop and mobile. It provides a comparison of editorial composition and content stacking. The illustrative panel, metrics and commercial features visible in these images belong to that historical design: they are not presented as actual service data or current availability.',
   images:[['useodontopro-home-desktop.webp','Historical UseOdontoPro home design with introduction, illustrative panel and product sections.','Home · historical desktop version.'],['useodontopro-home-mobile.webp','Historical mobile UseOdontoPro home design with content stacked in one column.','Home · historical mobile version.'],['useodontopro-plans-desktop.webp','Historical plans page design with three comparison cards on desktop.','Plans · historical desktop version.'],['useodontopro-plans-mobile.webp','Historical mobile plans design with cards arranged vertically.','Plans · historical mobile version.']]}},
 odontopau:{layout:'grid',
  es:{title:'La plantilla editorial en móvil',
   credit:'Diseño y desarrollo web: Alejandro Delgado, con asistencia de IA. Contenido clínico: Paula Gualtieri Odontología, sujeto a su revisión. Captura existente de una vista previa editorial; no es prueba de publicación.',
   note:'La imagen muestra el inicio de un artículo en móvil: encabezado, ruta de navegación, aviso de borrador, categoría, título, resumen y metadatos de lectura. Se conserva el aviso de vista previa para distinguir esta pantalla del contenido publicado. Las capturas de escritorio con radiografías no se incorporan a esta ficha de diseño web.',
   images:[['odontopau-article-mobile.webp','Vista previa móvil de un artículo con navegación, aviso de borrador, categoría, título y resumen; no muestra radiografías.','Artículo en móvil · vista previa editorial.']]},
  en:{title:'The editorial template on mobile',
   credit:'Web design and development: Alejandro Delgado, with AI assistance. Clinical content: Paula Gualtieri Odontología, subject to her review. Existing editorial-preview screenshot; not proof of publication.',
   note:'The image shows the beginning of a mobile article: header, breadcrumb, draft notice, category, title, summary and reading metadata. The preview notice is preserved to distinguish this screen from published content. Desktop screenshots containing radiographs are not included in this web design article.',
   images:[['odontopau-article-mobile.webp','Mobile article preview with navigation, draft notice, category, title and summary; no radiographs are shown.','Mobile article · editorial preview.']]}}
};

for(const [slug,project] of Object.entries(selection)) {
  const path=`src/content/projects/${slug}.mdx`;
  const raw=await readFile(path,'utf8');
  await writeFile(`.e2e/content-intake/${slug}-before-media-${Date.now()}.mdx`,raw,{flag:'wx'});
  const doc=matter(raw);
  doc.data.image=`/revision/media/${project.es.images[0][0]}`;
  for(const language of ['es','en']) {
    const copy=project[language];
    const locale=doc.data.locales[language];
    const es=language==='es';
    const images=copy.images.map(([file,alt,caption])=>({src:`/revision/media/${file}`,alt,caption,credit:copy.credit,href:`/revision/media/${file}`,linkLabel:es?'Abrir imagen completa':'Open full image'}));
    locale.imageAlt=images[0].alt;
    locale.imageCaption=images[0].caption;
    locale.imageCredit=copy.credit;
    const notesIndex=locale.contentBlocks.findIndex(block=>block.collapsed);
    locale.contentBlocks.splice(notesIndex<0?locale.contentBlocks.length:notesIndex,0,
      {_template:'section',title:es?'Sobre estas imágenes':'About these images',text:copy.note},
      {_template:'gallery',title:copy.title,layout:project.layout,images});
    const notes=locale.contentBlocks.find(block=>block.collapsed);
    if(notes) {
      notes.text=es?'Imágenes iniciales incorporadas; falta ampliar el relato y aprobar la selección final.':'Initial images added; the account and final selection still need review.';
      if(notes.bullets) notes.bullets=notes.bullets.map(text=>text.startsWith(es?'Seleccionar imágenes':'Select representative images')
        ? (es?'Revisar esta selección histórica y decidir si hace falta reemplazarla por material actualizado antes de publicar.':'Review this historical selection and decide whether updated material is needed before publication.') : text);
    }
  }
  await writeFile(path,matter.stringify(doc.content,doc.data));
  console.log(`Added selected editorial media: ${slug}`);
}
