import { readFile, writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const projects = {
  discovery: {
    categories: ['animation', 'academic'], stack: ['After Effects'],
    es: {
      title: 'Discovery // mirada Trekker', role: 'Realización integral',
      description: 'Entrega académica de Da Vinci inspirada en Star Trek. Como Trekker, tomé ese universo de ciencia ficción como referencia para un trabajo cuya realización estuvo enteramente a mi cargo.',
      sections: [
        ['Una referencia personal', 'Star Trek fue el punto de partida de Discovery. Soy Trekker y elegí trabajar sobre ese universo de ciencia ficción para esta entrega de Da Vinci. La referencia tenía un vínculo personal: era una oportunidad de llevar una serie que me gusta a un ejercicio de realización audiovisual.'],
        ['Mi participación', 'La realización completa del trabajo estuvo a mi cargo. La inspiración en Star Trek forma parte de su contexto, mientras que las decisiones y la ejecución de esta entrega fueron propias.\n\nEs importante distinguir ambas cosas: se trata de un ejercicio académico inspirado en una obra existente, no de una producción oficial de la franquicia.'],
        ['Del referente a la pieza', 'El trabajo tomó forma a partir de esa elección temática y de su desarrollo como pieza audiovisual. Conservé tanto una exportación de video como el proyecto de After Effects, que permiten retomar la entrega y documentar su proceso.\n\nQueda por ampliar qué decisiones tomé en cada etapa, cómo construí los elementos de la composición y qué ajustes hicieron falta para llegar a la versión de entrega.'],
      ],
      credit: 'Realización: Alejandro Delgado. Inspiración: Star Trek. Ejercicio académico sin afiliación con la franquicia. Pendiente identificar procedencia y licencia de música, imágenes o recursos que pudieran formar parte de la pieza.',
      pending: ['Confirmar año, materia y título definitivo.', 'Detallar etapas, herramientas adicionales, decisiones visuales y una dificultad o aprendizaje concreto.', 'Elegir la exportación final y confirmar la relación con el video de YouTube inventariado como “Intro de mi serie del alma”.', 'Identificar recursos externos y derechos de música antes de publicar; realización integral no equivale a titularidad de la franquicia ni de todos los recursos.'],
    },
    en: {
      title: 'Discovery // a Trekker’s perspective', role: 'Full production',
      description: 'A Da Vinci academic assignment inspired by Star Trek. As a Trekker, I chose that science-fiction universe as a reference for a project I produced entirely myself.',
      sections: [
        ['A personal reference', 'Star Trek was the starting point for Discovery. I am a Trekker, and I chose that science-fiction universe for this Da Vinci assignment. The reference was personal: it gave me an opportunity to bring a series I enjoy into an audiovisual production exercise.'],
        ['My contribution', 'I was responsible for the complete production of the assignment. Star Trek provided the inspiration, while the decisions and execution of this academic piece were my own.\n\nThese are distinct aspects: this is an academic exercise inspired by an existing work, not an official franchise production.'],
        ['From reference to piece', 'The project grew from that thematic choice into an audiovisual piece. I preserved both a video export and the After Effects project, allowing me to revisit the assignment and document its process.\n\nThe account still needs more detail about the decisions at each stage, how I built the composition’s elements and which adjustments led to the submitted version.'],
      ],
      credit: 'Production: Alejandro Delgado. Inspiration: Star Trek. Academic exercise with no franchise affiliation. The sources and licenses of any music, images or other assets still need to be identified.',
      pending: ['Confirm the year, course and final title.', 'Describe the stages, additional tools, visual decisions and a concrete challenge or learning outcome.', 'Select the final export and confirm its relationship to the inventoried YouTube video “Intro de mi serie del alma”.', 'Identify external assets and music rights before publication; full production does not imply ownership of the franchise or all source assets.'],
    },
  },
  tren: {
    categories: ['3d', 'animation', 'academic'], stack: ['After Effects'],
    es: {
      title: 'Tren // postproducción', role: 'Postproducción en After Effects',
      description: 'Trabajo académico de Da Vinci realizado con modelos OBJ gratuitos descargados de sitios web. Mi participación se centró en la postproducción, desarrollada enteramente en After Effects.',
      sections: [
        ['El punto de partida', 'Para este trabajo de Da Vinci utilicé modelos 3D descargados de sitios web gratuitos, en formato OBJ. Esos modelos fueron recursos de partida: no los modelé yo. Esa distinción permite explicar con claridad dónde estuvo mi aporte.'],
        ['Mi participación', 'Realicé toda la postproducción en After Effects. El artículo se centra en esa etapa del trabajo y en cómo se construyó la pieza final a partir del material disponible, sin presentar los modelos descargados como creación propia.'],
        ['Recursos y tratamiento final', 'La entrega combinó el uso de recursos 3D existentes con una etapa de postproducción propia. Para reconstruir el proceso en detalle todavía falta precisar qué operaciones de composición, efectos y ajustes apliqué, y cómo se relacionaban con la consigna de la materia.\n\nEl siguiente paso editorial es elegir la versión que represente la entrega y acompañarla con ejemplos de esa postproducción.'],
      ],
      credit: 'Postproducción: Alejandro Delgado. Modelos 3D: recursos OBJ gratuitos de terceros. Sitios, autores y licencias por identificar; una descarga gratuita no confirma permiso de redistribución.',
      pending: ['Confirmar año, materia y título definitivo.', 'Identificar las páginas de descarga, autores y licencias de los modelos OBJ.', 'Precisar si hubo filmación propia, trabajo en equipo u otras etapas a mi cargo.', 'Detallar los efectos y ajustes realizados en After Effects y elegir el video final; revisar audio y créditos.'],
    },
    en: {
      title: 'Train // post-production', role: 'After Effects post-production',
      description: 'A Da Vinci academic project using free OBJ models downloaded from websites. My contribution focused on post-production, carried out entirely in After Effects.',
      sections: [
        ['The starting point', 'For this Da Vinci assignment I used 3D models downloaded from free websites in OBJ format. Those models were starting assets; I did not model them myself. That distinction makes my contribution clear.'],
        ['My contribution', 'I carried out all post-production in After Effects. This article focuses on that stage and how the final piece was developed from the available material, without presenting the downloaded models as my own creations.'],
        ['Assets and final treatment', 'The assignment combined existing 3D assets with my own post-production work. A detailed process account still needs to specify which compositing operations, effects and adjustments I applied and how they related to the course brief.\n\nThe next editorial step is to select the version representing the submitted work and illustrate that post-production.'],
      ],
      credit: 'Post-production: Alejandro Delgado. 3D models: free third-party OBJ assets. Source websites, authors and licenses still need to be identified; a free download does not establish redistribution rights.',
      pending: ['Confirm the year, course and final title.', 'Identify download websites, authors and OBJ model licenses.', 'Clarify any original filming, teamwork or additional stages I handled.', 'Describe the After Effects work and select the final video; review audio and credits.'],
    },
  },
  pitufos: {
    categories: ['3d', 'animation', 'academic'], stack: ['3ds Max', 'After Effects'],
    es: {
      title: 'Pitufos // de la aldea a la escena', role: 'Rigging, aldea 3D, tracking y postproducción',
      description: 'Entrega académica de Da Vinci con un personaje descargado gratuitamente. Realicé su rigging, toda la aldea de los Pitufos en 3D y el tracking y la postproducción del video en After Effects.',
      sections: [
        ['Un personaje, un entorno y una escena', 'Este trabajo de Da Vinci reunió distintas etapas: preparar un personaje 3D, construir el entorno de la aldea y trabajar su integración con video. El pitufo partió de un modelo descargado gratuitamente; el rigging, la aldea 3D, el tracking y la postproducción fueron realizados por mí.'],
        ['Del modelo al rig', 'El modelo del personaje no es propio. Mi intervención sobre ese recurso fue realizar el rigging, como parte del trabajo de preparación del personaje. La procedencia del modelo y el desarrollo del rig son aportes distintos y deben acreditarse por separado.\n\nEsta etapa se enmarca en el trabajo con 3ds Max. Todavía falta documentar cómo resolví los controles y qué dificultades aparecieron al preparar el personaje para animarlo.'],
        ['La aldea en 3D', 'Realicé toda la aldea de los Pitufos en 3D. A diferencia del personaje descargado, el entorno de esta entrega fue parte de mi producción. La aldea aporta el escenario del trabajo y permite mostrar una contribución propia más allá de la preparación del personaje.'],
        ['Tracking y postproducción', 'El tracking del video y toda la postproducción se realizaron en After Effects. El flujo de trabajo partía de una escena filmada: se seguía su movimiento para incorporar elementos 3D y continuar la composición.\n\nMi participación en tracking y postproducción está confirmada. Queda por precisar quién realizó la filmación y qué versión conservada muestra mejor el resultado de la integración.'],
      ],
      credit: 'Rigging, aldea 3D, tracking y postproducción: Alejandro Delgado. Modelo del pitufo: descarga gratuita de terceros, autor y licencia pendientes de identificar. Personajes y universo de Los Pitufos utilizados como referencia académica, sin afiliación oficial.',
      pending: ['Confirmar año, materia y título definitivo.', 'Identificar autor, sitio y licencia del personaje descargado, y créditos de audio u otros recursos.', 'Precisar quién filmó la escena y si participaron otras personas.', 'Describir el rig, los desafíos del tracking y los aprendizajes; elegir la versión final y confirmar la relación con el video de YouTube “Aldea de Pitufos”.'],
    },
    en: {
      title: 'Smurfs // from village to scene', role: 'Rigging, 3D village, tracking and post-production',
      description: 'A Da Vinci academic assignment using a freely downloaded character. I created its rig and the entire 3D Smurf village, and handled video tracking and post-production in After Effects.',
      sections: [
        ['A character, an environment and a scene', 'This Da Vinci project combined several stages: preparing a 3D character, creating the village environment and working on integration with video. The Smurf used a freely downloaded model; I carried out the rigging, 3D village creation, tracking and post-production.'],
        ['From model to rig', 'The character model is not my own. My contribution to that asset was creating its rig as part of the character preparation work. The model’s source and the rig’s development are different contributions and should be credited separately.\n\nThis stage was part of the 3ds Max work. The account still needs to document how I designed the controls and which challenges arose while preparing the character for animation.'],
        ['The 3D village', 'I created the entire Smurf village in 3D. Unlike the downloaded character, the environment was part of my own production for this assignment. The village provides the setting and shows a contribution beyond preparing the character.'],
        ['Tracking and post-production', 'Video tracking and all post-production were carried out in After Effects. The workflow started with a filmed scene: its motion was tracked to incorporate 3D elements and continue compositing.\n\nMy tracking and post-production contribution is confirmed. Who filmed the scene and which preserved version best represents the integration still need clarification.'],
      ],
      credit: 'Rigging, 3D village, tracking and post-production: Alejandro Delgado. Smurf model: free third-party download; author and license still to be identified. Smurfs characters and universe used as academic references, without official affiliation.',
      pending: ['Confirm the year, course and final title.', 'Identify the downloaded character’s author, website and license, plus audio and other asset credits.', 'Clarify who filmed the scene and whether others participated.', 'Describe the rig, tracking challenges and learning outcomes; choose the final version and confirm the relationship to the YouTube video “Aldea de Pitufos”.'],
    },
  },
};
for (const [slug, update] of Object.entries(projects)) {
  const file = new URL(`../src/content/projects/${slug}.mdx`, import.meta.url);
  const raw = await readFile(file, 'utf8');
  const parsed = matter(raw);
  parsed.data.stack = update.stack;
  parsed.data.categories = update.categories;
  for (const language of ['es', 'en']) {
    const copy = update[language];
    const current = parsed.data.locales[language];
    const archivalNotes = current.contentBlocks.find(block => block.collapsed)?.text ?? '';
    Object.assign(current, {title: copy.title, description: copy.description, role: copy.role});
    current.contentBlocks = [
      ...copy.sections.map(([title, text]) => ({_template: 'section', title, text})),
      {_template: 'section', title: language === 'es' ? 'Autoría y créditos' : 'Authorship and credits', text: copy.credit},
      {_template: 'section', title: language === 'es' ? 'Notas para completar el artículo' : 'Notes for completing the article', collapsed: true,
        text: (language === 'es' ? 'Borrador ampliado a partir de la confirmación directa de Alejandro. La fecha y la selección final de medios siguen pendientes. Los nombres y títulos de archivo no prueban por sí solos el resultado o la autoría.\n\n' : 'Draft expanded from Alejandro’s direct confirmation. The date and final media selection remain pending. Filenames and titles alone do not establish the result or authorship.\n\n') + archivalNotes.split(language === 'es' ? 'Candidatos conservados:' : 'Preserved candidates:').slice(1).map(text => (language === 'es' ? 'Candidatos conservados:' : 'Preserved candidates:') + text).join(''),
        bullets: copy.pending},
    ];
  }
  await writeFile(new URL(`../.e2e/content-intake/${slug}-before-confirmed-copy-${Date.now()}.mdx`, import.meta.url), raw, {flag: 'wx'});
  await writeFile(file, matter.stringify(parsed.content, parsed.data));
  console.log(`Updated ${slug}: confirmed roles/credits, ES/EN; draft preserved.`);
}
