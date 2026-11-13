import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';
const path='src/content/projects/odontopau.mdx';
const raw=await readFile(path,'utf8');
await writeFile(`.e2e/content-intake/odontopau-before-home-cover-${Date.now()}.mdx`,raw,{flag:'wx'});
const doc=matter(raw);
const src='/revision/media/odontopau-home-desktop.webp';
doc.data.image=src;
for(const language of ['es','en']) {
 const es=language==='es';
 const copy=doc.data.locales[language];
 copy.imageAlt=es?'Home de Paula Gualtieri Odontología en escritorio: navegación y presentación sobre el fondo del consultorio.':'Desktop homepage of Paula Gualtieri Odontología: navigation and introductory panel over a practice background.';
 copy.imageCaption=es?'Página principal · escritorio, 1440 × 900.':'Homepage · desktop, 1440 × 900.';
 copy.imageCredit=es?'Diseño y desarrollo web: Alejandro Delgado, con asistencia de IA. Captura del sitio público paulagualtieri.com, 19/10/2026.':'Web design and development: Alejandro Delgado, with AI assistance. Screenshot of public website paulagualtieri.com, October 19, 2026.';
 const gallery=copy.contentBlocks.find(block=>block._template==='gallery' && block.images?.some(image=>image.src.includes('odontopau-article-mobile')));
 if(gallery) {
  gallery.title=es?'Página principal y plantilla de artículos':'Homepage and article template';
  if(!gallery.images.some(image=>image.src===src)) gallery.images.unshift({src,alt:copy.imageAlt,caption:copy.imageCaption,credit:copy.imageCredit,href:src,linkLabel:es?'Abrir imagen completa':'Open full image'});
 }
 const about=copy.contentBlocks.find(block=>block._template==='section' && block.title===(es?'Sobre estas imágenes':'About these images'));
 if(about) about.text=es
  ? 'La portada muestra la página principal del sitio público en escritorio, capturada el 19 de octubre de 2026. La galería permite abrirla completa y conserva una captura anterior del inicio de un artículo en móvil, con su aviso de borrador. Se muestran así dos superficies distintas del trabajo: presentación institucional y plantilla editorial.'
  : 'The cover shows the desktop homepage of the public website, captured on October 19, 2026. The gallery provides the full image and preserves an earlier screenshot of the beginning of a mobile article, including its draft notice. These illustrate two different parts of the work: institutional presentation and the editorial template.';
}
await writeFile(path,matter.stringify(doc.content,doc.data));
console.log('Updated OdontoPau homepage cover and gallery in ES/EN.');
