import {readFile,writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const additions={
 gitcron:{
  es:{title:'Tres capas de una misma herramienta',cards:[
   {title:'Leer el repositorio',text:'El grafo, el historial y las referencias de ramas organizan la lectura del proyecto. La interfaz diferencia esa consulta del trabajo sobre cambios que todavía no forman parte de un commit.',tags:['Historial','Ramas']},
   {title:'Preparar el próximo cambio',text:'Los cambios sin preparar y los listos para guardar ocupan espacios diferenciados. El área de commit reúne el mensaje y las acciones asociadas a esa preparación.',tags:['Staging','Commit']},
   {title:'Conservar el contexto',text:'La asistencia contextual aparece junto al repositorio. Las capturas seleccionadas muestran un panel con conversaciones y accesos a acciones de consulta, dentro del mismo espacio de trabajo.',tags:['Contexto','Interfaz']},
  ],section:['Una interfaz entre el escritorio y Git','La base combina Electron con una interfaz en Next.js, React y TypeScript. El trabajo de diseño abarca tanto lo que se ve en pantalla como la forma de presentar las operaciones y sus estados.\n\nLa separación entre historial, cambios locales y asistencia contextual permite explicar el alcance del proyecto en partes: consultar lo ocurrido, preparar lo siguiente y pedir ayuda sobre el contexto de trabajo. Esos recorridos ofrecen un punto de partida para ampliar el relato con situaciones concretas de uso.']},
  en:{title:'Three layers of the same tool',cards:[
   {title:'Read the repository',text:'The graph, history and branch references organize how the project is explored. The interface distinguishes that activity from working on changes that are not yet part of a commit.',tags:['History','Branches']},
   {title:'Prepare the next change',text:'Unstaged and staged changes occupy distinct areas. The commit area brings together the message and actions associated with that preparation.',tags:['Staging','Commit']},
   {title:'Keep the context',text:'Contextual assistance sits alongside the repository. The selected screenshots show conversations and access to inquiry actions within the same workspace.',tags:['Context','Interface']},
  ],section:['An interface between the desktop and Git','The foundation combines Electron with an interface in Next.js, React and TypeScript. The design work spans both the visible screen and the presentation of operations and their states.\n\nSeparating history, local changes and contextual assistance makes the scope easier to explain: explore what happened, prepare what comes next and ask for help about the working context. These workflows provide a starting point for expanding the account with concrete situations.']}},
 odontopro:{
  es:{title:'Del turno a la información del paciente',cards:[
   {title:'Organización del consultorio',text:'La agenda articula turnos, profesionales y espacios de atención. Es la entrada a una parte del trabajo cotidiano distinta de la lectura de una ficha o de la preparación de un presupuesto.',tags:['Agenda','Organización']},
   {title:'Información del paciente',text:'La ficha reúne información vinculada a la atención, con el odontograma y registros asociados. Su presentación tiene que conservar la relación entre el paciente seleccionado y la tarea que se está realizando.',tags:['Ficha','Odontograma']},
   {title:'Circuito administrativo',text:'Tratamientos y presupuestos forman otra parte del producto. Su presencia dentro de la aplicación permite describir el proyecto como un sistema de trabajo con módulos relacionados, en lugar de una única pantalla.',tags:['Tratamientos','Presupuestos']},
  ],section:['Una base visual para varias superficies','La aplicación utiliza estilos Sass y tokens semánticos compartidos. Esto da una base común a pantallas con tareas distintas, desde una vista de agenda hasta la ficha del paciente.\n\nEn la arquitectura documentada, los espacios de trabajo de cada clínica se distinguen mediante su identidad y permisos. La ficha del portfolio se centra en cómo se organiza ese producto; los detalles de uso real y resultados se completarán con ejemplos confirmados.']},
  en:{title:'From appointments to patient information',cards:[
   {title:'Practice organization',text:'Scheduling connects appointments, practitioners and treatment spaces. It supports a part of everyday work distinct from reading a record or preparing an estimate.',tags:['Scheduling','Organization']},
   {title:'Patient information',text:'The record brings together care-related information, including the dental chart and associated records. Its presentation needs to preserve the relationship between the selected patient and the task in progress.',tags:['Records','Dental chart']},
   {title:'Administrative workflows',text:'Treatments and estimates form another part of the product. Their presence allows the application to be described as a system of related modules rather than a single screen.',tags:['Treatments','Estimates']},
  ],section:['A visual foundation for different surfaces','The application uses Sass styles and shared semantic tokens. These provide a common foundation for screens serving different tasks, from scheduling to patient records.\n\nIn the documented architecture, each practice workspace is distinguished through its identity and permissions. The portfolio article focuses on how the product is organized; real-use details and results will be expanded with confirmed examples.']}},
 useodontopro:{
  es:{title:'Presentar, orientar y conectar',cards:[
   {title:'Presentación del producto',text:'La home introduce la propuesta y organiza módulos y usos. El contenido permite acercarse al producto antes de entrar en el detalle de la aplicación.',tags:['Home','Contenido']},
   {title:'Información comercial',text:'La superficie de planes organiza alternativas y vías de consulta. Las capturas históricas muestran una exploración de esa presentación, no una oferta comercial vigente acreditada.',tags:['Planes','Jerarquía']},
   {title:'Contacto e información institucional',text:'El contacto y las páginas institucionales completan el recorrido público. Son superficies del portal y se mantienen separadas del acceso a pacientes o tareas dentro del consultorio.',tags:['Contacto','Navegación']},
  ],section:['Un lenguaje editorial para el producto','Las capturas conservadas muestran una dirección visual cálida, con fondos en tonos ámbar, títulos de carácter editorial y tarjetas claras. La comparación entre escritorio y móvil permite observar cómo las columnas pasan a una secuencia vertical.\n\nEs una forma de presentar información de producto con una identidad propia, distinta del entorno de trabajo de la aplicación. Las versiones históricas se conservan como documentación del diseño y están identificadas en los epígrafes.']},
  en:{title:'Introduce, guide and connect',cards:[
   {title:'Product presentation',text:'The home page introduces the proposal and organizes modules and uses. Its content helps visitors approach the product before exploring application details.',tags:['Home','Content']},
   {title:'Commercial information',text:'The plans surface organizes alternatives and inquiry paths. Historical screenshots show an exploration of that presentation, not established current commercial terms.',tags:['Plans','Hierarchy']},
   {title:'Contact and institutional information',text:'Contact and institutional pages complete the public journey. They belong to the portal and remain separate from patient access or tasks inside the practice.',tags:['Contact','Navigation']},
  ],section:['An editorial language for the product','The preserved screenshots show a warm visual direction, with amber-toned backgrounds, editorial headings and light cards. Desktop and mobile views show columns becoming a vertical sequence.\n\nThis presents product information with an identity distinct from the application workspace. Historical versions are kept as design documentation and identified in captions.']}},
 odontopau:{
  es:{title:'Una identidad que continúa en el contenido',cards:[
   {title:'Presentación institucional',text:'La home combina la marca, una introducción central y accesos para conocer a la profesional o explorar especialidades. La captura de escritorio muestra esa primera jerarquía de lectura.',tags:['Home','Identidad']},
   {title:'Navegación y contexto',text:'Servicios, artículos e instrucciones se organizan como destinos distintos. En la plantilla editorial, la ruta de navegación y la categoría ubican cada contenido dentro del sitio.',tags:['Navegación','Categorías']},
   {title:'Continuidad editorial',text:'La estructura permite preparar contenidos y distinguir su revisión de su publicación. El aviso visible de borrador en la captura móvil forma parte de esa distinción.',tags:['Contenido','Revisión']},
  ],section:['Una plantilla modular para los artículos','El circuito de contenido separa los datos del artículo de su presentación. La plantilla contempla texto, listas, galerías y otros bloques según la información disponible, sin necesitar una página de código nueva para cada publicación.\n\nEn el sitio, los artículos pueden relacionarse con tratamientos y organizarse en archivos. Esa estructura acompaña la continuidad del proyecto: la presentación inicial y los contenidos posteriores comparten identidad, aunque resuelvan necesidades diferentes.']},
  en:{title:'An identity that carries into the content',cards:[
   {title:'Institutional introduction',text:'The home page combines branding, a central introduction and links to learn about the practitioner or explore specialties. The desktop capture shows that initial reading hierarchy.',tags:['Home','Identity']},
   {title:'Navigation and context',text:'Services, articles and instructions are organized as different destinations. In the editorial template, breadcrumbs and categories locate each piece within the website.',tags:['Navigation','Categories']},
   {title:'Editorial continuity',text:'The structure supports preparing content and distinguishing review from publication. The visible draft notice in the mobile screenshot is part of that distinction.',tags:['Content','Review']},
  ],section:['A modular article template','The content workflow separates article data from its presentation. The template supports text, lists, galleries and other blocks according to the available information, without requiring a newly coded page for each publication.\n\nArticles can be related to treatments and organized into archives. This structure supports continuity: the initial presentation and subsequent content share an identity while serving different needs.']}}
};

for(const [slug,addition] of Object.entries(additions)) {
 const path=`src/content/projects/${slug}.mdx`;
 const raw=await readFile(path,'utf8');
 await writeFile(`.e2e/content-intake/${slug}-before-structure-copy-${Date.now()}.mdx`,raw,{flag:'wx'});
 const doc=matter(raw);
 for(const language of ['es','en']) {
  const copy=addition[language];
  const blocks=doc.data.locales[language].contentBlocks;
  const newBlocks=[{_template:'cards',title:copy.title,cards:copy.cards},
    {_template:'section',title:copy.section[0],text:copy.section[1]}];
  // Update these sections on rerun, preserving other Tina-authored blocks.
  for(const block of newBlocks) {
   const existing=blocks.findIndex(item=>item.title===block.title);
   if(existing>=0) blocks[existing]=block;
   else {
    const position=blocks.findIndex(item=>item._template==='section' && item.title===(language==='es'?'Mi participación':'My contribution'));
    blocks.splice(position<0?blocks.length:position,0,block);
   }
  }
 }
 await writeFile(path,matter.stringify(doc.content,doc.data));
 console.log(`Expanded product structure: ${slug}`);
}
