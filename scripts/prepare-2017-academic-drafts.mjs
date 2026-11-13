import { writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

// Preliminary editorial records: only the academic context is confirmed per project.
// wx preserves any document already created or edited from Tina.
const projects = [
  {slug: 'discovery', title: 'Discovery', esAccent: 'entrega académica', enAccent: 'academic project',
    source: 'davinci/multimedia/2017/video/discovery',
    candidates: ['Delgado_Alejandro_DM5TN.mp4', 'starTrekDiscoveryIntro-6 folder/starTrekDiscoveryIntro-6.aep'],
    specificEs: 'Precisar la consigna de la intro y qué elementos visuales, animación y montaje realicé. Identificar referencias a Star Trek y derechos de imágenes y música.',
    specificEn: 'Clarify the intro brief and which visual elements, animation and editing I created. Identify Star Trek references and image/music rights.'},
  {slug: 'tren', title: 'Tren', esAccent: 'entrega académica', enAccent: 'academic project',
    source: 'davinci/multimedia/2017/video/tren',
    candidates: ['produccion-1.mp4', 'parte-4-defrag-3 folder/parte-4-defrag-3.aep'],
    specificEs: 'Precisar qué escena filmé, qué partes fueron compuestas y cuáles eran recursos proporcionados o de terceros. Confirmar el trabajo individual o en equipo.',
    specificEn: 'Clarify which scene I filmed, which elements were composited and which assets were supplied or third-party material. Confirm individual and team responsibilities.'},
  {slug: 'pitufos', title: 'Pitufos', esAccent: 'entrega académica', enAccent: 'academic project',
    source: 'davinci/multimedia/2017/video/pitufos',
    candidates: ['final3.mp4.mp4', 'PitufosArgentina.mp4', 'prueba2.mov', 'aldeaConPitufoCaminante05.max', 'final8Precompuesto2.aep'],
    specificEs: 'Precisar qué parte del personaje, aldea, rig y animación realicé, qué modelos recibí y si la integración en una escena filmada corresponde a esta entrega. Identificar créditos de personajes y recursos.',
    specificEn: 'Clarify my contribution to the character, village, rig and animation, which models were supplied, and whether the live-action integration belongs to this assignment. Identify character and asset credits.'},
];
for (const item of projects) {
  const locales = {};
  for (const language of ['es', 'en']) {
    const es = language === 'es';
    locales[language] = {
      title: `${item.title} // ${es ? item.esAccent : item.enAccent}`,
      description: es ? `${item.title} es una entrega académica realizada para Da Vinci. Esta ficha inicia la recuperación del trabajo y la documentación de mi participación.` : `${item.title} is an academic assignment completed for Da Vinci. This draft begins documenting the work and my contribution.`,
      type: es ? 'Trabajo académico · Da Vinci' : 'Academic work · Da Vinci',
      role: es ? 'Participación por precisar' : 'Contribution to be clarified',
      client: 'Da Vinci',
      timeline: es ? 'Fecha por confirmar' : 'Date to be confirmed',
      status: es ? 'Trabajo académico' : 'Academic work',
      contentBlocks: [
        {_template: 'section', title: es ? 'El contexto' : 'The context',
          text: es ? `Realicé ${item.title} como una entrega académica en Da Vinci. Forma parte de los trabajos que conservo de mi etapa de formación y que estoy recuperando para el portfolio.` : `I completed ${item.title} as an academic assignment at Da Vinci. It is part of the work preserved from my training that I am revisiting for my portfolio.`},
        {_template: 'section', title: es ? 'Notas para completar el artículo' : 'Notes for completing the article', collapsed: true,
          text: es ? `El contexto académico está confirmado por Alejandro. La carpeta ${item.source} y sus nombres de archivo son referencias de archivo, no una confirmación de fecha, autoría o versión final.\n\nPara esta tanda, Alejandro describió herramientas y procesos de 3ds Max, After Effects, rigging, postproducción, filmación, trackeo e integración 3D. Falta distribuir esas tareas entre los trabajos; no se atribuyen todas a cada pieza.\n\nCandidatos conservados: ${item.candidates.join('; ')}.` : `Alejandro has confirmed the academic context. The folder ${item.source} and its filenames are archival references, not confirmation of the date, authorship or final version.\n\nFor this batch, Alejandro described 3ds Max, After Effects, rigging, post-production, filming, tracking and 3D integration. These tasks still need to be assigned to the individual projects; they are not all attributed to every piece.\n\nPreserved candidates: ${item.candidates.join('; ')}.`,
          bullets: [es ? item.specificEs : item.specificEn,
            es ? 'Confirmar año, materia, consigna y título definitivo.' : 'Confirm the year, course, brief and final title.',
            es ? 'Describir el proceso, una dificultad concreta y qué aprendí.' : 'Describe the process, a concrete challenge and what I learned.',
            es ? 'Seleccionar la versión final y los fotogramas después de revisar el contenido; identificar créditos, música y permisos.' : 'Select the final version and stills after reviewing their content; identify credits, music and permissions.',
            es ? 'Preparar descripción visual, transcripción y subtítulos si el audio aporta información.' : 'Prepare a visual description, transcript and captions if audio conveys information.'],
        },
      ],
    };
  }
  const data = {title: item.title, publicationStatus: 'draft', contentFormat: 'bilingual', language: 'es', stack: [], categories: ['academic'], showInPortfolio: true, showInResume: false, locales};
  await writeFile(new URL(`../src/content/projects/${item.slug}.mdx`, import.meta.url), matter.stringify('', data), {flag: 'wx'});
  console.log(`Created ${item.slug}: single bilingual draft, no assumed media or date.`);
}
