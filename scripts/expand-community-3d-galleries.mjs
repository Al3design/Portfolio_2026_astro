import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const manifest=JSON.parse(await readFile('src/editorial/assets/community-3d-expanded-manifest.json','utf8'));
const timestamp=Date.now();
const documents={};
for (const slug of ['botf','supremacy']) {
  const raw=await readFile(`src/content/projects/${slug}.mdx`,'utf8');
  await writeFile(`.e2e/content-intake/${slug}-before-expanded-galleries-${timestamp}.mdx`,raw,{flag:'wx'});
  documents[slug]=matter(raw);
}
const image=(file,caption,credit,language) => ({src:`/revision/media/${file}`,alt:caption,caption,credit,href:`/revision/media/${file}`,linkLabel:language==='es'?'Abrir imagen completa':'Open full image'});

for (const language of ['es','en']) {
  const es=language==='es';
  const copy=documents.botf.data.locales[language];
  const credit=copy.imageCredit;
  const groups=new Map();
  for (const entry of manifest.filter(entry=>entry.group!=='SUPREMACY')) {
    const images=groups.get(entry.group) || [];
    const suffix=images.length===0 ? (es?'modelado / proceso':'modeling / process') : (es?'otra vista / integración':'additional view / integration');
    images.push(image(entry.file,`${entry.group} · ${suffix}`,credit,language));
    groups.set(entry.group,images);
  }
  groups.set('Vesta', ['perspective','front','left'].map((view,i)=>image(`botf-vesta-${view}.webp`,es?['Vesta · perspectiva','Vesta · vista frontal','Vesta · vista lateral'][i]:['Vesta · perspective','Vesta · front view','Vesta · side view'][i],credit,language)));
  // Preserve all other Tina-authored sections and notes; replace only the initial gallery.
  copy.contentBlocks=copy.contentBlocks.flatMap(block=>block._template==='gallery'
    ? [...groups].map(([title,images])=>({_template:'gallery',title,layout:'columns',images})) : [block]);
  const archiveSection=copy.contentBlocks.find(block=>block._template==='section' && block.title===(es?'Un archivo organizado por naves':'An archive organized by ship'));
  if (archiveSection) archiveSection.text=es
    ? 'El archivo reúne naves, estaciones y una torreta, con imágenes del modelado, versiones texturizadas y vistas dentro del juego. La selección se organiza en diez grupos: Miranda proto, Kelvin, Saladin, Titan, Turret, Immense stations, Constitution Kelvin, K7 station, Borg probe y Vesta.\n\nCada grupo conserva sus propias imágenes y epígrafes. Así se puede recorrer el conjunto y comparar etapas sin confundir las capturas de integración con la autoría del juego o de la interfaz.'
    : 'The archive brings together ships, stations and a turret, with modeling images, textured versions and in-game views. The selection is organized into ten groups: Miranda proto, Kelvin, Saladin, Titan, Turret, Immense stations, Constitution Kelvin, K7 station, Borg probe and Vesta.\n\nEach group preserves its own images and captions, making it possible to explore the collection and compare stages without attributing the game or interface design to the ship modeler.';
  const notes=copy.contentBlocks.find(block=>block.collapsed);
  if(notes?.bullets) notes.bullets=notes.bullets.map(text=>text.includes(es?'Revisar las tres imágenes':'Review the three selected images')
    ? (es?'Revisar los créditos de los diez grupos y detallar qué mod/versión aparece en cada imagen. No se incorporan automáticamente todas las variantes de archivo.':'Review credits for the ten groups and identify the mod/version shown in each image. Not every archived variant is automatically included.') : text);

  const supremacy=documents.supremacy.data.locales[language];
  const referenceCredit=es?'Dibujos de referencia de otra persona de la comunidad. Autoría nominal pendiente; no son ilustraciones de Alejandro Delgado.':'Reference drawings by another community member. Name pending; these are not illustrations by Alejandro Delgado.';
  const modelCredit=es?'Adaptación y pruebas 3D: Alejandro Delgado. Diseño de referencia de otra persona de la comunidad, nombre pendiente. Trabajo inconcluso.':'3D adaptation and studies: Alejandro Delgado. Reference design by another community member, name pending. Unfinished work.';
  const captions=es
    ? ['Entorno 3D · prueba de arquitectura y terreno.','Modelado de cuerpo · vista frontal, en proceso.','Modelado de cuerpo · detalle del torso, en proceso.','Modelado de cuerpo · vista posterior, en proceso.']
    : ['3D environment · architecture and terrain study.','Body modeling · front view, work in progress.','Body modeling · torso detail, work in progress.','Body modeling · back view, work in progress.'];
  const models=[1,2,3,5].map((n,i)=>image(`supremacy-3d-${n}.webp`,captions[i],modelCredit,language));
  supremacy.contentBlocks=supremacy.contentBlocks.flatMap(block=>block._template==='gallery'
    ? [{...block,title:es?'Dibujos de referencia · comunidad':'Reference drawings · community',layout:'columns',images:block.images.map((entry,i)=>({...entry,credit:referenceCredit,alt:es?`Dibujo de referencia de la comunidad · composición ${i===0?'021':'023'}.`:`Community reference drawing · composition ${i===0?'021':'023'}.`,caption:es?`Referencia ilustrada · composición ${i===0?'021':'023'}.`:`Illustrated reference · composition ${i===0?'021':'023'}.`}))},
      {_template:'gallery',title:es?'Del entorno al personaje · pruebas 3D':'From environment to character · 3D studies',layout:'columns',images:models}]
    : [block]);
  const unfinished=supremacy.contentBlocks.find(block=>block.title===(es?'Un proceso que quedó abierto':'A process left unfinished'));
  if(unfinished) unfinished.text=es
    ? 'No llegué a terminar el modelado. La galería distingue los dibujos de referencia de las pruebas tridimensionales: un entorno con arquitectura y terreno, y un cuerpo todavía sin terminar, visto de frente, en detalle y desde atrás.\n\nSon imágenes de proceso. No representan una entrega final ni prueban que el material se haya incorporado al juego.'
    : 'I did not finish the modeling. The gallery separates the reference drawings from the three-dimensional studies: an environment with architecture and terrain, and an unfinished body shown from the front, in detail and from the back.\n\nThese are process images. They do not represent a final delivery or prove inclusion in the game.';
  supremacy.imageAlt=models[0].alt;
  supremacy.imageCaption=models[0].caption;
  supremacy.imageCredit=modelCredit;
}
documents.supremacy.data.image='/revision/media/supremacy-3d-1.webp';
for(const [slug,doc] of Object.entries(documents)) {
  await writeFile(`src/content/projects/${slug}.mdx`,matter.stringify(doc.content,doc.data));
  console.log(`Expanded bilingual galleries: ${slug}`);
}
