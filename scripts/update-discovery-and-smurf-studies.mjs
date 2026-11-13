import { readFile, writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const sources = ['discovery', 'pitufos'];
for (const slug of sources) {
  const file = new URL(`../src/content/projects/${slug}.mdx`, import.meta.url);
  const raw = await readFile(file, 'utf8');
  const parsed = matter(raw);
  if (slug === 'discovery') {
    parsed.data.categories = [...new Set([...parsed.data.categories, '3d'])];
    parsed.data.stack = [...new Set([...parsed.data.stack, 'OBJ'])];
  }
  for (const language of ['es', 'en']) {
    const es = language === 'es';
    const copy = parsed.data.locales[language];
    const blocks = copy.contentBlocks;
    if (slug === 'discovery') {
      copy.role = es ? 'Modelado 3D y realización audiovisual' : '3D modeling and audiovisual production';
      copy.description = es ? 'Entrega académica de Da Vinci inspirada en Star Trek y mi vínculo como Trekker. Modelé todos los elementos en 3D y los importé como OBJ a After Effects para continuar la realización audiovisual.' : 'A Da Vinci academic project inspired by Star Trek and my connection to it as a Trekker. I modeled all elements in 3D and imported them as OBJ files into After Effects to continue the audiovisual production.';
      const contribution = blocks.find(block => block.title === (es ? 'Mi participación' : 'My contribution'));
      contribution.text = es ? 'La realización completa del trabajo estuvo a mi cargo, incluido el modelado 3D de todos los elementos. No partí de modelos descargados para esta pieza: construí los elementos en 3D y después los llevé a After Effects mediante el formato OBJ.\n\nStar Trek fue la referencia temática. El modelado y la realización de esta entrega fueron propios, dentro de un ejercicio académico inspirado en ese universo.' : 'I was responsible for the complete project, including modeling all its elements in 3D. I did not use downloaded models for this piece: I built the 3D elements and then brought them into After Effects in OBJ format.\n\nStar Trek provided the thematic reference. The modeling and production of this assignment were my own, as part of an academic exercise inspired by that universe.';
      const process = blocks.find(block => block.title === (es ? 'Del referente a la pieza' : 'From reference to piece'));
      process.title = es ? 'Del modelado 3D a After Effects' : 'From 3D modeling to After Effects';
      process.text = es ? 'El flujo de trabajo conectó dos etapas: primero el modelado de los elementos en 3D y después su importación como OBJ en After Effects. Ese paso permitió continuar la composición audiovisual a partir de los modelos que había construido.\n\nLa pieza reúne así un trabajo de modelado propio y una etapa posterior de composición. El video conservado y el enlace del canal permiten ver el resultado de esa realización.' : 'The workflow connected two stages: first modeling the elements in 3D, then importing them into After Effects as OBJ files. This allowed the audiovisual composition to continue from the models I had built.\n\nThe piece brings together my own modeling work and a subsequent compositing stage. The preserved video and channel link show the result of that production.';
      const credit = es ? 'Modelado 3D de todos los elementos y realización audiovisual: Alejandro Delgado. Inspiración: Star Trek. Música y otros recursos no modelados pendientes de acreditar.' : '3D modeling of all elements and audiovisual production: Alejandro Delgado. Inspiration: Star Trek. Music and other non-modeled source assets still require credits.';
      blocks.find(block => block.title === (es ? 'Autoría y créditos' : 'Authorship and credits')).text = credit;
      copy.imageCredit = credit;
      for (const block of blocks) {
        if (block.credit) block.credit = credit;
        for (const image of block.images ?? []) image.credit = credit;
      }
      const notes = blocks.find(block => block.collapsed);
      if (notes) notes.text += es ? '\n\nAclaración posterior del titular: todos los elementos fueron modelados en 3D por Alejandro e importados como OBJ a After Effects. No falta confirmar la autoría de los modelos; sí precisar programa de modelado, decisiones concretas, audio y recursos adicionales.' : '\n\nSubsequent clarification from the author: Alejandro modeled all elements in 3D and imported them as OBJ files into After Effects. Model authorship is confirmed; the modeling application, specific decisions, audio and other assets still need detail.';
    } else {
      const title = es ? 'La aldea y los estudios de hongos' : 'The village and mushroom studies';
      if (blocks.some(block => block.title === title)) continue;
      const credit = es ? 'Modelado de la aldea: Alejandro Delgado. El personaje que aparece en la vista general es un modelo descargado de terceros.' : 'Village modeling: Alejandro Delgado. The character in the overall view is a downloaded third-party model.';
      const images = [{src:'/revision/media/pitufos-poster.webp',
        alt:es ? 'Vista general de la aldea 3D del trabajo de Pitufos.' : 'Overall view of the Smurfs project’s 3D village.',
        caption:es ? 'Vista del entorno conservada como aldeaPastoPitufo.png.' : 'Environment view preserved as aldeaPastoPitufo.png.', credit}];
      for (const version of ['1','2','3','3-2','3-3']) images.push({
        src:`/revision/media/pitufos-mushroom-${version}.webp`,
        alt:es ? `Estudio de un hongo de la aldea, prueba ${version}.` : `Study of a village mushroom, test ${version}.`,
        caption:es ? `Prueba de modelado de la aldea · versión ${version}.` : `Village modeling study · version ${version}.`,
        credit:es ? 'Modelado de la aldea: Alejandro Delgado. Imagen del archivo del trabajo.' : 'Village modeling: Alejandro Delgado. Image from the project archive.',
      });
      const index = blocks.findIndex(block => block.title === (es ? 'La aldea en 3D' : 'The 3D village'));
      if (index < 0) throw new Error(`Missing village section: ${language}`);
      blocks.splice(index + 1, 0, {_template:'gallery',title,images});
    }
  }
  await writeFile(new URL(`../.e2e/content-intake/${slug}-before-modeling-studies-${Date.now()}.mdx`, import.meta.url), raw, {flag:'wx'});
  await writeFile(file, matter.stringify(parsed.content, parsed.data));
  console.log(`Updated ${slug}: ${slug === 'discovery' ? 'confirmed modeling/OBJ workflow and credits' : 'village and five mushroom studies'} in ES/EN.`);
}
