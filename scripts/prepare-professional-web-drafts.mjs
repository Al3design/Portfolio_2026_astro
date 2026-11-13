import {writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const projects=[
 {slug:'gitcron',name:'GitCron',personal:true,stack:['Electron','Next.js','React','TypeScript'],categories:['systems','web-dev'],
  es:{title:'GitCron // un flujo Git propio',description:'Cliente Git de escritorio desarrollado como proyecto personal: historial visual, trabajo con repositorios y conexión con GitHub. Un trabajo integral de producto, diseño y desarrollo con asistencia de IA.',
   sections:[
    ['Un cliente de escritorio para trabajar con Git','GitCron es mi proyecto personal de cliente Git de escritorio. Reúne en una interfaz visual el trabajo con repositorios, el historial de commits y operaciones de Git, junto con la integración con GitHub.\n\nEl proyecto busca cubrir un flujo de trabajo propio dentro de una aplicación de escritorio. Su alcance va más allá de una landing: incluye interfaz, estado de la aplicación y comunicación con operaciones sobre repositorios locales.'],
    ['Entre la historia visual y las operaciones locales','El historial y el grafo ayudan a recorrer commits y ramas. Las vistas de cambios y preparación de commits acompañan el trabajo sobre el repositorio. Electron conecta la interfaz construida con herramientas web con el entorno de escritorio.\n\nLa integración con GitHub forma otra parte del producto. Esta ficha describe el alcance documentado del proyecto; las versiones disponibles y los recorridos que se mostrarán en el portfolio se seleccionarán por separado.'],
    ['Mi participación','Llevé adelante el trabajo completo: idea, diseño UX/UI, desarrollo y contenido, con asistencia de herramientas de IA durante el proceso. En GitCron, eso reúne decisiones de producto con la construcción de una aplicación que trabaja sobre archivos e historial reales.'],
   ]},
  en:{title:'GitCron // my own Git workflow',description:'A desktop Git client developed as a personal project: visual history, repository workflows and GitHub integration. End-to-end product, design and development work with AI assistance.',
   sections:[
    ['A desktop client for working with Git','GitCron is my personal desktop Git client project. It brings repository work, commit history and Git operations into a visual interface, alongside GitHub integration.\n\nThe project aims to support my own workflow in a desktop application. Its scope goes beyond a landing page: it includes the interface, application state and communication with operations on local repositories.'],
    ['Visual history and local operations','The history and graph help users explore commits and branches. Change and commit-preparation views support work on a repository. Electron connects an interface built with web tools to the desktop environment.\n\nGitHub integration is another part of the product. This article describes its documented scope; available versions and the workflows to demonstrate in the portfolio will be selected separately.'],
    ['My contribution','I led the complete work: concept, UX/UI design, development and content, with AI tools assisting throughout the process. For GitCron, this combines product decisions with building an application that operates on real files and history.'],
   ]}},
 {slug:'odontopro',name:'OdontoPro',stack:['Next.js','React','TypeScript','Sass','Supabase'],categories:['systems','web-dev'],
  es:{title:'OdontoPro // gestión del consultorio',description:'Aplicación de gestión odontológica para un cliente particular, con pacientes, agenda y circuitos administrativos y clínicos. Diseño y desarrollo integral con asistencia de IA.',
   sections:[
    ['El producto de gestión','OdontoPro es una aplicación de gestión odontológica. Su alcance documentado reúne pacientes, turnos, tratamientos, presupuestos y la ficha odontológica, dentro de una arquitectura pensada para separar los espacios de trabajo de distintas clínicas.\n\nEs un trabajo para un cliente particular. La ficha del portfolio presenta el producto y mi participación; la disponibilidad operativa y el uso clínico requieren una confirmación específica y no se deducen de que una función exista en el código.'],
    ['Organizar información y tareas relacionadas','La agenda, la ficha del paciente y los circuitos de presupuesto se relacionan, pero resuelven tareas diferentes. El diseño necesita dar a cada una un lugar claro y mantener el contexto al pasar de una a otra.\n\nLa base técnica usa Next.js, React y TypeScript para la aplicación, Sass para los estilos y Supabase para servicios de datos y autenticación. Esa arquitectura se documenta aquí como parte del trabajo de desarrollo, sin convertirla en una certificación de seguridad o cumplimiento.'],
    ['Mi participación','Realicé el trabajo integral, desde la idea y el diseño UX/UI hasta desarrollo y contenido, con asistencia de IA. El alcance de esta ficha se concentra en la aplicación; su portal público y el sitio de la profesional son proyectos diferenciados.'],
   ]},
  en:{title:'OdontoPro // managing the practice',description:'A dental practice management application for a private client, covering patients, scheduling and administrative and clinical workflows. End-to-end design and development with AI assistance.',
   sections:[
    ['The management product','OdontoPro is a dental practice management application. Its documented scope brings together patients, appointments, treatments, estimates and dental records, within an architecture designed to separate workspaces for different practices.\n\nIt is work for a private client. This portfolio article presents the product and my contribution; operational availability and clinical use require separate confirmation and cannot be inferred from a feature existing in code.'],
    ['Organizing related information and tasks','Scheduling, patient records and estimate workflows are connected, but serve different tasks. The design needs to give each a clear place while maintaining context when moving between them.\n\nThe technical foundation uses Next.js, React and TypeScript for the application, Sass for styling and Supabase for data and authentication services. This architecture is documented as development work, without presenting it as a security or compliance certification.'],
    ['My contribution','I carried out the complete work, from concept and UX/UI design to development and content, with AI assistance. This article focuses on the application; its public portal and the practitioner’s website are separate projects.'],
   ]}},
 {slug:'useodontopro',name:'UseOdontoPro',stack:['Astro','CSS'],categories:['web-dev'],
  es:{title:'UseOdontoPro // la cara pública',description:'Portal público de OdontoPro: presentación del producto, información sobre planes y contacto. Un proyecto web para un cliente particular, separado de la aplicación de gestión.',
   sections:[
    ['Explicar el producto antes de entrar a la aplicación','UseOdontoPro es el portal público de OdontoPro. Su tarea es presentar el producto, organizar la información sobre propuestas de planes y ofrecer una vía de consulta.\n\nLa audiencia y el propósito son distintos de los de la aplicación: aquí se busca comprender la propuesta y contactar, mientras que el sistema de gestión está destinado al trabajo dentro del consultorio.'],
    ['Una web con alcance propio','El sitio reúne superficies de presentación, planes, contacto y contenido institucional. Su base actual usa Astro y CSS, en un repositorio separado del de OdontoPro.\n\nEsa separación permite tratar la comunicación pública como un proyecto propio, sin presentar el portal como si fuera la interfaz de pacientes, agenda u odontograma. Tampoco convierte un formulario de consulta en un alta automática del servicio.'],
    ['Mi participación','Hice el trabajo completo para un cliente particular: idea, UX/UI, desarrollo y contenido, con asistencia de IA. El proyecto exige traducir un producto de gestión en una explicación pública que permita entender su alcance sin recorrer la aplicación.'],
   ]},
  en:{title:'UseOdontoPro // the public-facing site',description:'OdontoPro’s public portal: product presentation, information about plans and contact. A website for a private client, separate from the management application.',
   sections:[
    ['Explaining the product before entering the application','UseOdontoPro is OdontoPro’s public portal. Its purpose is to introduce the product, organize information about proposed plans and provide a way to make an inquiry.\n\nIts audience and purpose differ from those of the application: visitors come here to understand the proposal and get in touch, while the management system supports work inside the practice.'],
    ['A website with its own scope','The site brings together product presentation, plans, contact and institutional content. Its current foundation uses Astro and CSS, in a repository separate from OdontoPro.\n\nThis separation makes public communication a project in its own right, rather than presenting the portal as a patient, scheduling or dental-chart interface. An inquiry form is not automatic service activation.'],
    ['My contribution','I carried out the complete work for a private client: concept, UX/UI, development and content, with AI assistance. The project involves translating a management product into a public explanation that can be understood without navigating the application.'],
   ]}},
 {slug:'odontopau',name:'OdontoPau',stack:['Next.js','React','TypeScript','Sass','TinaCMS'],categories:['web-dev'],
  es:{title:'OdontoPau // presencia profesional',description:'Sitio institucional de Paula Gualtieri Odontología, con tratamientos, artículos y contenido orientado a pacientes. Trabajo integral de diseño y desarrollo para una cliente particular, con asistencia de IA.',
   sections:[
    ['Un sitio para la profesional','OdontoPau es el sitio institucional de Paula Gualtieri Odontología. Organiza la presentación de la profesional y contenido sobre tratamientos, artículos e instrucciones para pacientes.\n\nEs un proyecto independiente de OdontoPro y de UseOdontoPro: presenta una práctica profesional concreta, en lugar de comercializar el software de gestión o reemplazar su aplicación.'],
    ['Diseño y continuidad editorial','El sitio no se limita a una presentación inicial. Su estructura contempla distintas clases de contenido y un circuito editorial para preparar, revisar y publicar información. La base usa Next.js, React, TypeScript, estilos Sass y contenido conectado a TinaCMS.\n\nLa autoría técnica del sitio y la responsabilidad sobre el contenido clínico son distintas: los materiales clínicos requieren revisión y aprobación de la profesional. Esta ficha describe el trabajo web, sin atribuirme conocimientos ni validaciones clínicas.'],
    ['Mi participación','Me ocupé del trabajo integral para la cliente: idea, diseño UX/UI, desarrollo y contenido, con asistencia de herramientas de IA. El proyecto combina la identidad del sitio con una estructura que permita mantener información y publicaciones a lo largo del tiempo.'],
   ]},
  en:{title:'OdontoPau // a professional presence',description:'Paula Gualtieri Odontología’s institutional website, with treatments, articles and patient-oriented content. End-to-end design and development for a private client, with AI assistance.',
   sections:[
    ['A website for the practitioner','OdontoPau is the institutional website of Paula Gualtieri Odontología. It organizes the practitioner’s presentation and content about treatments, articles and patient instructions.\n\nIt is independent from OdontoPro and UseOdontoPro: it presents a specific professional practice rather than marketing management software or replacing its application.'],
    ['Design and editorial continuity','The website goes beyond an initial introduction. Its structure supports different content types and an editorial process for preparing, reviewing and publishing information. The foundation uses Next.js, React, TypeScript, Sass styles and content connected to TinaCMS.\n\nTechnical authorship of the website and responsibility for clinical content are separate: clinical material requires the practitioner’s review and approval. This article describes web work without claiming clinical expertise or validation on my part.'],
    ['My contribution','I handled the complete work for the client: concept, UX/UI design, development and content, with AI tools assisting the process. The project combines the site’s identity with a structure for maintaining information and publications over time.'],
   ]}},
];

for(const project of projects) {
  const locales={};
  for(const language of ['es','en']) {
    const es=language==='es';
    const copy=project[language];
    locales[language]={title:copy.title,description:copy.description,
      type:project.personal?(es?'Proyecto personal':'Personal project'):(es?'Trabajo para cliente particular':'Private client work'),
      role:es?'Idea, UX/UI, desarrollo y contenido':'Concept, UX/UI, development and content',
      client:project.personal?(es?'Proyecto personal':'Personal project'):(es?'Cliente particular':'Private client'),
      timeline:es?'Fecha por confirmar':'Date to be confirmed',status:es?'Estado por confirmar':'Status to be confirmed',
      contentBlocks:[
        ...copy.sections.map(([title,text])=>({_template:'section',title,text})),
        {_template:'section',title:es?'Un proceso con asistencia de IA':'A process supported by AI',text:es
          ? 'El recorrido de trabajo pasó por Google Stitch y Google Studio, y continuó con herramientas como Claude, Codex, Antigravity y Qwen local. La IA formó parte del proceso de diseño y desarrollo; la dirección del proyecto y las decisiones fueron mías. Las tareas concretas realizadas con cada herramienta quedan por detallar.'
          : 'The workflow started with Google Stitch and Google Studio and continued with tools including Claude, Codex, Antigravity and local Qwen. AI was part of the design and development process; project direction and decisions were mine. The specific tasks performed with each tool still need to be detailed.'},
        {_template:'section',title:es?'Notas para completar el artículo':'Notes to complete the article',text:es?'Ficha inicial, pendiente de imágenes y ampliación del relato.':'Initial draft, pending images and a more detailed account.',collapsed:true,bullets:es
          ? ['Confirmar fechas, estado actual y enlaces públicos que convenga mostrar.', 'Seleccionar imágenes representativas con datos de demostración, sin información privada de repositorios o pacientes.', 'Ampliar el problema de origen, decisiones concretas de UX/UI, dificultades y aprendizajes; no se inventan métricas ni resultados.', 'Precisar el nombre de Google Studio y la versión de Qwen citados por el autor antes de publicarlos como referencias técnicas.']
          : ['Confirm dates, current status and public links to feature.', 'Select representative images with demonstration data, without private repository or patient information.', 'Expand on the original problem, specific UX/UI decisions, challenges and lessons learned; no metrics or results are invented.', 'Clarify the Google Studio name and Qwen version cited by the author before publishing them as technical references.']},
      ],
    };
  }
  await writeFile(`src/content/projects/${project.slug}.mdx`,matter.stringify('',{
    title:project.name,publicationStatus:'draft',contentFormat:'bilingual',language:'es',stack:project.stack,
    categories:project.categories,showInPortfolio:true,showInResume:false,locales,
  }),{encoding:'utf8',flag:'wx'});
  console.log(`Created bilingual professional draft: ${project.slug}`);
}
