import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const file = new URL('../src/content/projects/chokie.mdx',import.meta.url);
const raw = await readFile(file,'utf8');
const parsed = matter(raw);
const images = JSON.parse(await readFile(new URL('../src/editorial/assets/chokie-images-manifest.json',import.meta.url),'utf8'));
parsed.data.image = '/revision/media/chokie-land-14.webp';
for (const language of ['es','en']) {
  const es = language === 'es';
  const copy = parsed.data.locales[language];
  const credit = es ? '3D y simulación de chocolate: Alejandro Delgado. Los pósters en Photoshop de la primera etapa fueron realizados por un compañero; ver créditos del artículo.' : '3D work and chocolate simulation: Alejandro Delgado. A classmate created the initial stage’s Photoshop posters; see article credits.';
  copy.imageAlt = es ? 'Vista del proyecto del valle de chocolate, conservada como land-14.png.' : 'View of the chocolate valley project, preserved as land-14.png.';
  copy.imageCaption = es ? 'Imagen del proyecto elegida como portada de revisión; no indica una versión final.' : 'Project image selected as the review cover; it does not establish a final version.';
  copy.imageCredit = credit;
  const title = es ? 'Vistas del valle de chocolate' : 'Chocolate valley views';
  if (!copy.contentBlocks.some(block => block.title === title)) {
    const index = copy.contentBlocks.findIndex(block => block.title === (es ? 'La continuación: una isla flotante' : 'The continuation: a floating island'));
    if (index < 0) throw new Error(`Missing valley section: ${language}`);
    copy.contentBlocks.splice(index+1,0,{_template:'gallery',title,images:images.map(image=>{
      const original = image.source.split(/[\\/]/).pop();
      return {src:`/revision/media/${image.file}`,
        alt:es ? `Imagen del proyecto del valle de chocolate, variante ${original.replace(/\.(jpg|png)$/i,'')}.` : `Chocolate valley project image, variant ${original.replace(/\.(jpg|png)$/i,'')}.`,
        caption:es ? `Material del trabajo conservado como ${original}.` : `Project material preserved as ${original}.`,credit};
    })});
  }
  const notes = copy.contentBlocks.find(block=>block.collapsed);
  if (notes) {
    notes.text = es ? 'Título de esta ficha descriptivo y provisional. Fuente de archivo: davinci/multimedia/2017/3D/chokie-v2; la carpeta no confirma el año. Se incorporó la selección de imágenes land-1, land-4, land-6, land-7, land-8, land-13, land-14 y render_00211render tras la respuesta de Alejandro. Se conserva la distinción entre producción 3D y pósters del compañero; falta completar su nombre y la correspondencia de créditos por imagen. El tutorial de RealFlow de la carpeta es referencia, no un entregable propio.' : 'This descriptive article title is provisional. Archive source: davinci/multimedia/2017/3D/chokie-v2; the folder does not confirm the year. The land-1, land-4, land-6, land-7, land-8, land-13, land-14 and render_00211render selection was added following Alejandro’s reply. The distinction between 3D production and the classmate’s posters is preserved; their name and image-specific credits still need completion. The RealFlow tutorial in the folder is a reference, not my deliverable.';
    notes.bullets = es ? ['Confirmar año, materia y título definitivo.', 'Completar el nombre del compañero y los créditos por imagen, manteniendo separadas las dos etapas.', 'Revisar encuadres y selección final de portada y galería.', 'Ampliar cómo resolví la simulación, una dificultad concreta y lo que aprendí.', 'Confirmar recursos externos y si existe una exportación propia de video; el tutorial no se publica como trabajo.'] : ['Confirm the year, course and final title.', 'Complete the classmate’s name and image-specific credits, keeping the two stages separate.', 'Review framing and the final cover/gallery selection.', 'Describe the simulation, a concrete challenge and what I learned.', 'Confirm external assets and whether an original video export exists; the tutorial is not published as my work.'];
  }
}
await writeFile(new URL(`../.e2e/content-intake/chokie-before-images-${Date.now()}.mdx`,import.meta.url),raw,{flag:'wx'});
await writeFile(file,matter.stringify(parsed.content,parsed.data));
console.log('Added a shared Chokie cover and eight-image gallery to both locales; draft preserved.');
