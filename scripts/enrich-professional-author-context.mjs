import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const context={
 gitcron:{
  es:{description:'Proyecto personal para trabajar con Git desde una interfaz amena e intuitiva, reduciendo la dependencia del CMD. Evolucionó hacia un entorno que reúne mi metodología con OpenSpec, diagramas de estructura y asistencia de IA.',
   intro:'GitCron empezó con una necesidad propia: manejar Git desde una interfaz amena e intuitiva, en lugar de depender del CMD para las tareas cotidianas. Quería llevar esas operaciones a un entorno visual que pudiera recorrer con claridad.\n\nCon el tiempo, el proyecto fue creciendo hasta acercarse a mi propia metodología de trabajo. Sigue en evolución: además del manejo de repositorios, incorpora OpenSpec, diagramas para entender la estructura de un proyecto y asistencia de IA en las distintas pantallas.',
   section:['De un cliente Git a mi entorno de trabajo','La evolución del proyecto conecta tres formas de mirar un mismo trabajo. Git permite seguir los cambios; OpenSpec organiza la definición del cambio que se quiere realizar; y los diagramas ayudan a mostrar cómo está armado y estructurado el proyecto.\n\nLa integración de IA acompaña los procesos de las distintas pantallas. Esa combinación fue llevando GitCron hacia una interfaz vinculada a mi forma de trabajar, con el contexto del proyecto presente al pasar entre planificación, estructura y cambios.'],
   pending:'Profundizar el mayor desafío técnico o de UX y los aprendizajes de esta evolución; la motivación y el uso de OpenSpec/diagramas/IA ya fueron confirmados.'},
  en:{description:'A personal project for working with Git through a friendly, intuitive interface, reducing dependence on the command prompt. It evolved into an environment that connects my workflow with OpenSpec, structural diagrams and AI assistance.',
   intro:'GitCron began with a personal need: managing Git through a friendly, intuitive interface rather than relying on the command prompt for everyday tasks. I wanted to bring those operations into a visual environment that I could navigate clearly.\n\nOver time, the project grew closer to my own working methodology. It continues to evolve: beyond repository management, it incorporates OpenSpec, diagrams for understanding project structure and AI assistance across different screens.',
   section:['From a Git client to my working environment','The project’s evolution connects three ways of looking at the same work. Git tracks changes; OpenSpec organizes the definition of the intended change; and diagrams help show how the project is built and structured.\n\nAI integration supports processes across the different screens. This combination has moved GitCron toward an interface tied to the way I work, keeping project context present when moving between planning, structure and changes.'],
   pending:'Expand on the biggest technical or UX challenge and lessons from this evolution; motivation and the use of OpenSpec/diagrams/AI have been confirmed.'}},
 odontopau:{
  es:{description:'Sitio de Paula Gualtieri Odontología, creado para dar visibilidad a la profesional en búsquedas web, presentar sus casos clínicos y acompañar su presencia en redes sociales para llegar a una audiencia mayor.',
   intro:'El pedido de la cliente era ganar visibilidad: aparecer en las búsquedas web, mostrar sus casos clínicos y tener presencia en redes sociales para llegar a una audiencia mayor. El sitio de Paula Gualtieri Odontología forma parte de esa presentación profesional.\n\nLa web reúne información de la profesional, tratamientos y contenidos orientados a pacientes. Su estructura editorial ofrece un lugar donde desarrollar esos contenidos y compartirlos desde otros canales.',
   section:['Visibilidad y contenido con continuidad','El objetivo del proyecto no terminaba en tener una página de presentación. Mostrar casos y sostener una presencia profesional requiere organizar contenidos que puedan encontrarse, leerse y compartirse.\n\nLa home introduce a la profesional y la navegación abre el recorrido hacia servicios, artículos e instrucciones. Esa relación entre presentación y contenido acompaña el pedido de ampliar la audiencia. La presencia en buscadores y redes es un objetivo del trabajo, sin atribuirle posiciones, tráfico o consultas que no se hayan medido.'],
   pending:'Ampliar una decisión concreta de diseño o desarrollo y sus aprendizajes. La necesidad de visibilidad, casos clínicos y redes ya fue confirmada; resultados y métricas siguen pendientes.'},
  en:{description:'Paula Gualtieri Odontología’s website, created to improve the practitioner’s visibility in web searches, present clinical cases and support a social media presence aimed at reaching a wider audience.',
   intro:'The client’s request was to gain visibility: appear in web searches, show clinical cases and build a social media presence to reach a wider audience. Paula Gualtieri Odontología’s website forms part of that professional presentation.\n\nThe website brings together the practitioner’s information, treatments and patient-oriented content. Its editorial structure provides a place to develop that material and share it through other channels.',
   section:['Visibility and ongoing content','The project’s objective went beyond an introductory page. Presenting cases and maintaining a professional presence requires organizing content that can be found, read and shared.\n\nThe home page introduces the practitioner, while navigation leads to services, articles and instructions. That relationship between introduction and content supports the request to reach a wider audience. Search and social visibility are objectives of the work, without claiming unmeasured rankings, traffic or inquiries.'],
   pending:'Expand on a specific design or development decision and its lessons. The need for visibility, clinical cases and social presence is confirmed; outcomes and metrics remain pending.'}},
 odontopro:{
  es:{description:'Sistema integral para clínicas odontológicas, orientado a acompañar la relación con el paciente: expediente e historial clínico, recetas, facturación y avisos de calendario por turnos. Diseño y desarrollo integral con asistencia de IA.',
   intro:'OdontoPro responde a la necesidad de un sistema integral para clínicas odontológicas. El alcance planteado abarca el trato con el paciente, desde su expediente e historial clínico hasta las recetas, la facturación y los avisos de calendario asociados a los turnos.\n\nEs un trabajo para un cliente particular. La aplicación concentra los circuitos de gestión; UseOdontoPro es su portal público y OdontoPau es el sitio independiente de la profesional.',
   section:['Acompañar el recorrido del paciente','El problema se plantea como un recorrido que atraviesa varias tareas: organizar la atención, consultar el expediente, mantener el historial y dar continuidad a los aspectos administrativos y de comunicación.\n\nPor eso la ficha, la agenda y los módulos administrativos forman parte de un mismo producto. Las recetas, la facturación y los avisos de calendario completan el alcance descrito por el cliente y el autor. Las capturas de esta ficha muestran solo el directorio y la ficha de prueba, no todos esos recorridos.'],
   pending:'Precisar una decisión concreta de UX o desarrollo y sus aprendizajes. El alcance de expediente, historial, recetas, facturación y avisos fue confirmado para la app OdontoPro, no para el portal UseOdontoPro.'},
  en:{description:'An integrated system for dental practices, supporting patient-related workflows: records and clinical history, prescriptions, billing and appointment calendar notifications. End-to-end design and development with AI assistance.',
   intro:'OdontoPro addresses the need for an integrated system for dental practices. Its intended scope covers patient-related workflows, from records and clinical history to prescriptions, billing and calendar notifications associated with appointments.\n\nIt is work for a private client. The application brings together management workflows; UseOdontoPro is its public portal, while OdontoPau is the practitioner’s independent website.',
   section:['Supporting the patient journey','The problem spans several tasks: organizing care, consulting records, maintaining history and following through on administrative and communication activities.\n\nThat is why patient records, scheduling and administrative modules belong to the same product. Prescriptions, billing and calendar notifications complete the scope described by the client and author. The screenshots in this article show only the test directory and record, not every one of those workflows.'],
   pending:'Detail a specific UX or development decision and its lessons. Records, history, prescriptions, billing and notifications were confirmed as the scope of the OdontoPro application, not the UseOdontoPro portal.'}}
};

for(const [slug,project] of Object.entries(context)) {
 const path=`src/content/projects/${slug}.mdx`;
 const raw=await readFile(path,'utf8');
 await writeFile(`.e2e/content-intake/${slug}-before-author-context-${Date.now()}.mdx`,raw,{flag:'wx'});
 const doc=matter(raw);
 for(const language of ['es','en']) {
  const copy=project[language];
  const locale=doc.data.locales[language];
  locale.description=copy.description;
  const blocks=locale.contentBlocks;
  const intro=blocks.find(block=>block._template==='section' && !block.collapsed);
  if(intro) intro.text=copy.intro;
  const added={_template:'section',title:copy.section[0],text:copy.section[1]};
  const existing=blocks.findIndex(block=>block.title===added.title);
  if(existing>=0) blocks[existing]=added; else blocks.splice(1,0,added);
  const notes=blocks.find(block=>block.collapsed);
  if(notes?.bullets) notes.bullets=notes.bullets.map(text=>text.startsWith(language==='es'?'Ampliar el problema':'Expand on the original problem')?copy.pending:text);
 }
 if(slug==='odontopro') {
  const src='/revision/media/odontopro-patients-demo.webp';
  doc.data.image=src;
  for(const language of ['es','en']) {
   const es=language==='es';
   const copy=doc.data.locales[language];
   const credit=es?'Diseño y desarrollo: Alejandro Delgado, con asistencia de IA. Captura existente de pruebas con registros sintéticos; versión histórica, no acredita uso clínico real.':'Design and development: Alejandro Delgado, with AI assistance. Existing test screenshot using synthetic records; historical version, not evidence of real clinical use.';
   const images=[{src,alt:es?'Directorio de pacientes con navegación lateral, filtros y un registro sintético.':'Patient directory with sidebar navigation, filters and one synthetic record.',caption:es?'Directorio de pacientes · datos de prueba.':'Patient directory · test data.',credit,href:src,linkLabel:es?'Abrir imagen completa':'Open full image'},
    {src:'/revision/media/odontopro-record-demo.webp',alt:es?'Ficha de prueba con resumen del expediente y controles de odontograma.':'Test patient record showing a summary and dental-chart controls.',caption:es?'Ficha y odontograma · datos de prueba.':'Record and dental chart · test data.',credit,href:'/revision/media/odontopro-record-demo.webp',linkLabel:es?'Abrir imagen completa':'Open full image'}];
   copy.imageAlt=images[0].alt;copy.imageCaption=images[0].caption;copy.imageCredit=credit;
   const gallery={_template:'gallery',title:es?'Directorio y ficha del paciente':'Patient directory and record',layout:'grid',images};
   const index=copy.contentBlocks.findIndex(block=>block.collapsed);
   copy.contentBlocks.splice(index<0?copy.contentBlocks.length:index,0,gallery);
   const notes=copy.contentBlocks.find(block=>block.collapsed);
   if(notes) {
    notes.text=es?'Contexto del sistema e imágenes de prueba incorporados; falta ampliar decisiones y revisar la selección final.':'System context and test images added; decisions and the final selection still need review.';
    notes.bullets=notes.bullets?.map(text=>text.startsWith(es?'Seleccionar imágenes':'Select representative images')?(es?'Revisar esta selección de pruebas y reemplazarla por una demostración editorial preparada si corresponde.':'Review this test selection and replace it with a prepared editorial demonstration if appropriate.'):text);
   }
  }
 }
 await writeFile(path,matter.stringify(doc.content,doc.data));
 console.log(`Updated confirmed author context: ${slug}`);
}
