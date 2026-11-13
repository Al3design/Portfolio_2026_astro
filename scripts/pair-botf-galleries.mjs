import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const path='src/content/projects/botf.mdx';
const raw=await readFile(path,'utf8');
await writeFile(`.e2e/content-intake/botf-before-paired-galleries-${Date.now()}.mdx`,raw,{flag:'wx'});
const doc=matter(raw);
const profile='https://sketchfab.com/Aledesign/models';
doc.data.image='/revision/media/botf-textured-collage.webp';
for(const language of ['es','en']) {
  const es=language==='es';
  const copy=doc.data.locales[language];
  copy.imageAlt=es?'Collage de tres modelos texturizados: Titan, una nave Borg y una estación Immense.':'Collage of three textured models: Titan, a Borg ship and an Immense station.';
  copy.imageCaption=es?'BOTF · selección de modelos texturizados.':'BOTF · selected textured models.';
  copy.imageCredit=es?'Modelos: Alejandro Delgado, colaboración de modding. Collage editorial compuesto con asistencia de IA desde tres imágenes del archivo; las vistas originales se conservan en las galerías.':'Models: Alejandro Delgado, modding collaboration. Editorial collage composed with AI assistance from three archived images; original views are preserved in the galleries.';
  for(const block of copy.contentBlocks) {
    if(block._template!=='gallery') continue;
    block.layout='grid';
    for (let i=0;i<block.images.length;i++) {
      const caption=`${block.title} · ${es?(i===0?'modelado / proceso':'texturizado / integración'):(i===0?'modeling / process':'textured / integration')}`;
      block.images[i].caption=caption;
      block.images[i].alt=caption;
    }
    if(block.title==='Miranda proto') Object.assign(block.images[1],{src:'/revision/media/botf-miranda-textured.webp',href:'/revision/media/botf-miranda-textured.webp'});
    if(block.title==='Kelvin') Object.assign(block.images[1],{src:'/revision/media/botf-kelvin-textured.webp',href:'/revision/media/botf-kelvin-textured.webp'});
    if(block.title==='Titan' || block.title==='Borg probe') {
      block.images[0].caption=block.images[0].alt=es?`${block.title} · versión texturizada`:`${block.title} · textured version`;
    }
    if(block.title==='Vesta') {
      const rawView=block.images[0];
      block.images=[rawView,{...rawView,src:'/revision/media/botf-vesta-textured.webp',href:'/revision/media/botf-vesta-textured.webp',alt:es?'Vesta texturizada sobre fondo blanco.':'Textured Vesta on a white background.',caption:es?'Vesta · versión texturizada.':'Vesta · textured version.'}];
    }
  }
  const credit=es?'Imagen de Vesta: Alejandro Delgado. Enlace al perfil de modelos facilitado por el autor; no se identifica cada modelo publicado.':'Vesta image: Alejandro Delgado. Link to the model profile provided by the author; individual published models are not identified.';
  // Existing image-link fields keep the reference editable in Tina and Markdown.
  const reference={_template:'gallery',title:es?'Más modelos en Sketchfab':'More models on Sketchfab',layout:'grid',images:[{
    src:'/revision/media/botf-vesta-textured.webp',alt:es?'Vesta texturizada; enlace al perfil de modelos de Sketchfab.':'Textured Vesta; link to the Sketchfab model profile.',
    caption:es?'También podés consultar mi perfil de modelos como referencia.':'You can also browse my model profile as a reference.',
    credit,href:profile,linkLabel:es?'Ver modelos en Sketchfab':'View models on Sketchfab',
  }]};
  const index=copy.contentBlocks.findIndex(block=>block.collapsed);
  copy.contentBlocks.splice(index<0?copy.contentBlocks.length:index,0,reference);
}
await writeFile(path,matter.stringify(doc.content,doc.data));
console.log('Updated BOTF paired galleries, collage cover and Sketchfab reference in ES/EN.');
