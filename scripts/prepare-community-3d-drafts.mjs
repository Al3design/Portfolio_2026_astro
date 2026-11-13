import {writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const projects = [
  {
    slug:'botf', name:'BOTF', stack:['3ds Max','Photoshop'],
    images:[['botf-vesta-perspective.webp','Vesta · perspectiva','Vesta · perspective'],['botf-vesta-front.webp','Vesta · vista frontal','Vesta · front view'],['botf-vesta-left.webp','Vesta · vista lateral','Vesta · side view']],
    es:{
      title:'BOTF // naves para la comunidad',
      description:'Modelado de naves para mods de Star Trek: Birth of the Federation, en colaboración con modders de la comunidad de Armada Fleet Command. Trabajo realizado con 3ds Max, Photoshop y herramientas de importación de la época.',
      type:'Colaboración comunitaria · Modding', role:'Modelado de naves 3D', client:'Comunidad de Armada Fleet Command', status:'Colaboración comunitaria',
      credit:'Naves 3D: Alejandro Delgado, dentro de una colaboración de modding. Star Trek y los diseños de referencia pertenecen a sus respectivos titulares. Créditos específicos y selección por revisar.',
      sections:[
        ['Participar de un juego desde sus mods','Mi participación en BOTF nació en la comunidad de modding de Star Trek: Birth of the Federation. Colaboré con otros modders de Armada Fleet Command aportando naves para las modificaciones del juego.\n\nMi trabajo se concentró en las naves. El desarrollo de los mods y el trabajo de integración formaban parte de una colaboración más amplia de la comunidad.'],
        ['Del modelado al formato del juego','Trabajé con 3ds Max y Photoshop, además de programas específicos de la época para preparar la importación. Ese paso conectaba el trabajo realizado en las herramientas de diseño con los formatos que necesitaba el juego.\n\nLa ficha reúne material del archivo de esas naves. Los nombres de las herramientas de conversión, sus restricciones y los mods concretos en los que se integraron quedan por documentar.'],
        ['Un archivo organizado por naves','La carpeta conserva imágenes de distintas naves y estaciones, agrupadas por nombre. Para esta primera selección se reúnen tres archivos de Vesta identificados como perspectiva, frente y lateral. La selección permite empezar por una misma nave antes de ampliar la galería con otras familias del archivo.'],
      ],
      gallery:'Vesta · selección inicial',
      pending:['Confirmar fechas de la colaboración y mods concretos; no se usa como fecha de realización el año recordado del juego.', 'Identificar herramientas de importación, tareas de texturizado y participación de los demás modders.', 'Revisar las tres imágenes seleccionadas, su correspondencia con el aporte propio y los créditos de referencias. Ampliar después con otras naves.'],
    },
    en:{
      title:'BOTF // ships for the community',
      description:'Ship modeling for Star Trek: Birth of the Federation mods, collaborating with modders from the Armada Fleet Command community. Created with 3ds Max, Photoshop and period-specific import tools.',
      type:'Community collaboration · Modding', role:'3D ship modeling', client:'Armada Fleet Command community', status:'Community collaboration',
      credit:'3D ships: Alejandro Delgado, as part of a modding collaboration. Star Trek and reference designs belong to their respective owners. Specific credits and selection to be reviewed.',
      sections:[
        ['Contributing to a game through its mods','My involvement in BOTF began in the Star Trek: Birth of the Federation modding community. I collaborated with other Armada Fleet Command modders by contributing ships for modifications of the game.\n\nMy work focused on ships. Developing the mods and integrating contributions were part of a broader community collaboration.'],
        ['From modeling to the game’s format','I worked with 3ds Max and Photoshop, alongside specialized tools of the time to prepare imports. This step connected work created in design software with the formats required by the game.\n\nThis article brings together archived material from those ships. The conversion tools, their constraints and the specific mods that used them still need to be documented.'],
        ['An archive organized by ship','The folder preserves images of different ships and stations, grouped by name. This initial selection uses three Vesta files labeled as perspective, front and side views. It starts with one ship before expanding the gallery to other groups in the archive.'],
      ],
      gallery:'Vesta · initial selection',
      pending:['Confirm collaboration dates and specific mods; the remembered release year of the game is not used as a project date.', 'Identify import tools, texturing tasks and the contributions of other modders.', 'Review the three selected images, their relationship to my contribution and reference credits. Expand to other ships afterward.'],
    },
  },
  {
    slug:'supremacy', name:'Supremacy', stack:[],
    images:[['supremacy-study-021.webp','Estudio del archivo SUPREMACY · composición 021','Study from the SUPREMACY archive · composition 021'],['supremacy-study-023.webp','Estudio del archivo SUPREMACY · composición 023','Study from the SUPREMACY archive · composition 023']],
    es:{
      title:'Supremacy // del dibujo al 3D',
      description:'Aporte inconcluso a un proyecto independiente que buscaba continuar la propuesta de BOTF desde cero. Mi tarea fue llevar a 3D un dibujo realizado por otra persona de la comunidad.',
      type:'Colaboración comunitaria · Proyecto independiente', role:'Adaptación de una referencia a 3D', client:'Proyecto Supremacy', status:'Inconcluso',
      credit:'Adaptación a 3D: Alejandro Delgado. Dibujo de referencia: otra persona de la comunidad, nombre pendiente. Material de proceso del archivo SUPREMACY; selección por confirmar.',
      sections:[
        ['Un proyecto separado de BOTF','Supremacy era un proyecto de otro desarrollador para continuar la propuesta de BOTF en una nueva versión, hecha desde cero. Mi aporte a ese proyecto fue distinto de la colaboración con los mods del juego original.'],
        ['Interpretar una referencia ajena','El punto de partida fue un dibujo realizado por alguien de la comunidad. Me tocó trasladar esa referencia al espacio tridimensional. La autoría del dibujo y el trabajo de adaptación a 3D son aportes diferentes: el diseño de referencia no era mío.'],
        ['Un proceso que quedó abierto','No llegué a terminar el modelado. Por eso esta ficha presenta un trabajo de proceso, sin atribuirle una entrega final ni una incorporación al juego.\n\nLa carpeta conserva imágenes y archivos de trabajo. Las dos composiciones seleccionadas son candidatas para revisar qué parte del proceso conviene mostrar y cómo identificar la referencia original.'],
      ],
      gallery:'Material de proceso · selección provisional',
      pending:['Identificar a la persona autora del dibujo y la referencia exacta.', 'Confirmar qué imágenes corresponden a esta adaptación y cuáles son referencias u otros estudios.', 'Confirmar herramientas utilizadas, fechas y etapa alcanzada antes de abandonar el trabajo. No se infieren herramientas personales solo por las extensiones del archivo.'],
    },
    en:{
      title:'Supremacy // from drawing to 3D',
      description:'An unfinished contribution to an independent project intended to continue the BOTF concept from scratch. My task was to translate a drawing by another community member into 3D.',
      type:'Community collaboration · Independent project', role:'Adapting a reference to 3D', client:'Supremacy project', status:'Unfinished',
      credit:'3D adaptation: Alejandro Delgado. Reference drawing: another community member, name pending. Process material from the SUPREMACY archive; selection to be confirmed.',
      sections:[
        ['A separate project from BOTF','Supremacy was another developer’s project to continue the BOTF concept in a new version built from scratch. My contribution was separate from my collaboration on mods for the original game.'],
        ['Interpreting someone else’s reference','The starting point was a drawing made by someone in the community. My task was to translate that reference into three-dimensional form. The drawing and its adaptation to 3D were separate contributions: the reference design was not mine.'],
        ['A process left unfinished','I did not finish the modeling. This article therefore presents work in progress, without claiming a final delivery or inclusion in the game.\n\nThe folder preserves images and working files. The two selected compositions are candidates for reviewing which parts of the process to show and how to identify the original reference.'],
      ],
      gallery:'Process material · provisional selection',
      pending:['Identify the author of the drawing and the exact reference.', 'Confirm which images belong to this adaptation and which are references or other studies.', 'Confirm tools, dates and the stage reached before stopping. Personal tool use is not inferred solely from file extensions.'],
    },
  },
  {
    slug:'casa', name:'Casa', stack:[],
    images:[['casa-render-01.webp','Prueba de visualización de mi casa · render 01','Visualization study of my home · render 01'],['casa-render-05.webp','Prueba de visualización de mi casa · render 05','Visualization study of my home · render 05'],['casa-render-09.webp','Prueba de visualización de mi casa · render 09','Visualization study of my home · render 09']],
    es:{
      title:'Casa // probar antes de decidir',
      description:'Pruebas personales de visualización de mi casa para explorar cómo quedarían determinados muebles y la iluminación. Una serie de renders para pensar el espacio doméstico.',
      type:'Proyecto personal · Visualización 3D', role:'Pruebas de visualización', client:'Proyecto personal', status:'Exploración personal',
      credit:'Pruebas y renders de la vivienda: Alejandro Delgado. Procedencia de modelos, materiales y recursos por completar.',
      sections:[
        ['Usar el 3D para pensar mi casa','Estos renders surgieron como pruebas personales para ver cómo quedarían ciertos muebles y la iluminación de mi casa. El trabajo parte de un espacio propio y de preguntas concretas sobre cómo podría verse.'],
        ['Muebles, luz y posibilidades','La visualización permite plantear esas posibilidades antes de llevarlas al espacio físico. En este caso, el objetivo era ensayar el aspecto de los muebles y la iluminación, sin presentarlo como un encargo profesional de arquitectura o interiorismo.'],
        ['Una serie de pruebas','El archivo conserva nueve renders y distintas versiones de trabajo. La primera selección reúne los renders 01, 05 y 09 como muestra de esa exploración.\n\nLa numeración identifica archivos del conjunto: todavía no se documentó qué cambia entre cada imagen ni cuáles representan decisiones que finalmente se realizaron en la vivienda.'],
      ],
      gallery:'Pruebas de la vivienda',
      pending:['Explicar qué muebles, alternativas de iluminación o decisiones se exploraron en las imágenes seleccionadas.', 'Confirmar herramientas, motor de render, fechas y procedencia de modelos/materiales.', 'Revisar la selección antes de publicar imágenes del espacio personal y aclarar si alguna prueba se llevó a la práctica.'],
    },
    en:{
      title:'Home // exploring before deciding',
      description:'Personal visualization studies of my home, exploring how particular furniture and lighting might look. A series of renders used to think through a domestic space.',
      type:'Personal project · 3D visualization', role:'Visualization studies', client:'Personal project', status:'Personal exploration',
      credit:'Home visualization studies and renders: Alejandro Delgado. Sources of models, materials and assets to be completed.',
      sections:[
        ['Using 3D to think about my home','These renders began as personal studies to see how certain furniture and lighting might look in my home. The work starts with my own space and concrete questions about its possible appearance.'],
        ['Furniture, light and possibilities','Visualization provides a way to explore those possibilities before changing the physical space. Here, the goal was to try out the appearance of furniture and lighting, rather than an architectural or interior design commission.'],
        ['A series of studies','The archive preserves nine renders and different working versions. The initial selection brings together renders 01, 05 and 09 as a sample of that exploration.\n\nThe numbering identifies files in the set: the differences between images and whether any of the ideas were implemented in the home have not yet been documented.'],
      ],
      gallery:'Home visualization studies',
      pending:['Explain which furniture, lighting alternatives or decisions were explored in the selected images.', 'Confirm tools, rendering engine, dates and sources of models and materials.', 'Review the selection before publishing images of a personal space and clarify whether any studies were implemented.'],
    },
  },
];

for (const project of projects) {
  const locales = {};
  for (const language of ['es','en']) {
    const copy = project[language];
    const images = project.images.map(([file,es,en]) => ({
      src:`/revision/media/${file}`,alt:language === 'es' ? es : en,
      caption:language === 'es' ? es : en,credit:copy.credit,
      href:`/revision/media/${file}`,linkLabel:language === 'es' ? 'Abrir imagen completa' : 'Open full image',
    }));
    locales[language] = {
      title:copy.title,description:copy.description,type:copy.type,role:copy.role,client:copy.client,
      timeline:language === 'es' ? 'Fecha por confirmar' : 'Date to be confirmed',status:copy.status,
      imageAlt:images[0].alt,imageCaption:images[0].caption,imageCredit:copy.credit,
      contentBlocks:[
        ...copy.sections.map(([title,text]) => ({_template:'section',title,text})),
        {_template:'gallery',title:copy.gallery,layout:'grid',images},
        {_template:'section',title:language === 'es' ? 'Notas para completar el artículo' : 'Notes to complete the article',text:language === 'es' ? 'Selección y detalles pendientes de revisión.' : 'Selection and details pending review.',collapsed:true,bullets:copy.pending},
      ],
    };
  }
  await writeFile(`src/content/projects/${project.slug}.mdx`,matter.stringify('',{
    title:project.name,publicationStatus:'draft',contentFormat:'bilingual',language:'es',
    image:`/revision/media/${project.images[0][0]}`,stack:project.stack,categories:['3d'],
    showInPortfolio:true,showInResume:false,locales,
  }),{encoding:'utf8',flag:'wx'});
  console.log(`Created bilingual draft: ${project.slug}`);
}
