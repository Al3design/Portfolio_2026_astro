import {writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const media = file => `/revision/media/${file}.webp`;
const section = (title, text) => ({_template:'section', title, text});
const projects = [
  {
    slug:'mate', name:'Mate', stack:['Photoshop'], categories:['academic'],
    es:{
      title:'Mate // una campaña en cuatro formatos',
      description:'Campaña académica realizada en Photoshop, con un post de Instagram, un banner lateral, un banner horizontal y un volante para impresión.',
      type:'Trabajo académico · Da Vinci', role:'Diseño gráfico', client:'Da Vinci', status:'Trabajo académico',
      credit:'Diseño de las piezas: Alejandro Delgado. Recursos de marca y fotografías de terceros; procedencia y créditos por completar.',
      sections:[
        ['Una campaña como entrega académica','El trabajo consistió en desarrollar una campaña gráfica alrededor del mate. La realicé en Photoshop como entrega académica. El material conservado reúne cuatro piezas: un post para Instagram, dos banners digitales y un volante para impresión.'],
        ['Una idea, distintas proporciones','La serie permite recorrer una misma propuesta en soportes muy diferentes: el cuadrado del post, la franja vertical del banner lateral, el formato apaisado del banner horizontal y la pieza impresa. Cada proporción cambia el espacio disponible para organizar imagen, marca y mensaje.\n\nLos archivos permiten comparar esas adaptaciones y ver cómo se plantea una campaña más allá de una única composición.'],
        ['Del archivo de trabajo a la pieza final','Se conservan los documentos de Photoshop y sus exportaciones JPG. Para esta ficha preparé versiones optimizadas de las cuatro piezas, manteniendo los originales como referencia. El volante y los banners corresponden a la entrega histórica.'],
      ],
      galleryTitle:'Las cuatro piezas de la campaña',
      images:[['mate-instagram','Post cuadrado de la campaña académica sobre mate.','Post de Instagram · 1080 × 1080.'],['mate-sidebar','Banner vertical de la campaña académica sobre mate.','Banner lateral · 250 × 600.'],['mate-banner','Banner horizontal de la campaña académica sobre mate.','Banner horizontal · 970 × 200.'],['mate-flyer','Volante de la campaña académica sobre mate, preparado para impresión.','Volante para impresión.']],
      pending:['Confirmar año, materia y consigna original.', 'Ampliar el concepto de campaña, las decisiones de composición y los aprendizajes.', 'Precisar si hubo equipo y completar los créditos de fotografías y recursos. La carpeta contiene un recurso de Cruz de Malta; no se presenta como un encargo de la marca.'],
    },
    en:{
      title:'Mate // a campaign in four formats',
      description:'An academic campaign created in Photoshop, comprising an Instagram post, a vertical banner, a horizontal banner and a print flyer.',
      type:'Academic work · Da Vinci', role:'Graphic design', client:'Da Vinci', status:'Academic work',
      credit:'Design of the pieces: Alejandro Delgado. Third-party brand assets and photographs; sources and credits to be completed.',
      sections:[
        ['A campaign for an academic assignment','This assignment involved developing a graphic campaign around mate. I created it in Photoshop as academic work. The preserved material includes four pieces: an Instagram post, two digital banners and a print flyer.'],
        ['One idea, different proportions','The series presents the same proposal across very different formats: a square post, a narrow vertical banner, a horizontal banner and a printed piece. Each proportion changes the space available for arranging imagery, branding and the message.\n\nThe files provide a way to compare those adaptations and explore a campaign beyond a single composition.'],
        ['From working file to finished piece','The archive contains Photoshop documents and their JPG exports. For this article, I prepared optimized versions of all four pieces, preserving the originals as references. The flyer and banners belong to the historical assignment.'],
      ],
      galleryTitle:'The four campaign pieces',
      images:[['mate-instagram','Square post from the academic campaign about mate.','Instagram post · 1080 × 1080.'],['mate-sidebar','Vertical banner from the academic campaign about mate.','Vertical banner · 250 × 600.'],['mate-banner','Horizontal banner from the academic campaign about mate.','Horizontal banner · 970 × 200.'],['mate-flyer','Print flyer from the academic campaign about mate.','Print flyer.']],
      pending:['Confirm year, course and original brief.', 'Expand on the campaign concept, composition decisions and lessons learned.', 'Clarify any teamwork and complete credits for photographs and other assets. The folder contains a Cruz de Malta asset; this is not presented as a commission from the brand.'],
    },
  },
  {
    slug:'cv-personal', name:'CV personal', stack:['Photoshop','Illustrator','Adobe XD'], categories:[],
    es:{
      title:'CV personal // dos versiones visuales',
      description:'Proyecto de diseño de un CV personal realizado con Photoshop, Illustrator y Adobe XD. El archivo conserva composiciones completas en versiones clara y oscura.',
      type:'Proyecto personal', role:'Diseño gráfico y presentación personal', client:'Proyecto personal', status:'Proyecto personal',
      credit:'Diseño: Alejandro Delgado. Exportaciones históricas del proyecto CV personal; créditos de recursos por completar.',
      sections:[
        ['Diseñar mi propia presentación','Este proyecto reúne una exploración visual de mi CV personal, realizada con Photoshop, Illustrator y Adobe XD. El foco de esta ficha está en el diseño de esa presentación y en las composiciones que quedaron conservadas en el archivo.'],
        ['Dos versiones para comparar','La documentación incluye dos diseños completos, uno claro y otro oscuro. Mostrarlos juntos permite comparar cómo se presenta el contenido en cada versión y recorrer las composiciones en su extensión original.\n\nSe trata de versiones históricas del proyecto. Mi experiencia y los datos profesionales actuales se consultan en la sección RESUME de este portfolio.'],
        ['Conservar el diseño completo','Las exportaciones originales son imágenes largas. La galería ofrece una vista previa del inicio de cada una y permite abrirlas completas en otra pestaña para leerlas sin abandonar el artículo. Se conserva así la composición original, sin dividirla en capturas independientes.'],
      ],
      galleryTitle:'Versiones clara y oscura',
      images:[['cv-personal-dark','Composición completa de la versión oscura del proyecto de CV personal.','CV personal · versión oscura.'],['cv-personal-light','Composición completa de la versión clara del proyecto de CV personal.','CV personal · versión clara.']],
      pending:['Confirmar fecha, contexto y si formó parte de una entrega académica.', 'Describir la idea visual y qué tareas se resolvieron con cada herramienta.', 'Precisar colaboración, recursos de terceros y alcance del trabajo en Adobe XD; no se da por implementado un sitio web.'],
    },
    en:{
      title:'Personal CV // two visual versions',
      description:'A personal CV design project created with Photoshop, Illustrator and Adobe XD. The archive preserves complete compositions in light and dark versions.',
      type:'Personal project', role:'Graphic design and personal presentation', client:'Personal project', status:'Personal project',
      credit:'Design: Alejandro Delgado. Historical exports of the personal CV project; asset credits to be completed.',
      sections:[
        ['Designing my own presentation','This project brings together a visual exploration of my personal CV, created with Photoshop, Illustrator and Adobe XD. This article focuses on the design of that presentation and the compositions preserved in the archive.'],
        ['Two versions to compare','The documentation includes two complete designs, one light and one dark. Showing them together allows readers to compare how content is presented in each version and explore the full original compositions.\n\nThese are historical versions of the project. Current experience and professional information are available in the RESUME section of this portfolio.'],
        ['Preserving the complete design','The original exports are long images. The gallery previews the beginning of each composition and lets readers open the complete image in another tab without leaving the article. This preserves the original layout without dividing it into separate screenshots.'],
      ],
      galleryTitle:'Light and dark versions',
      images:[['cv-personal-dark','Complete composition of the dark version of the personal CV project.','Personal CV · dark version.'],['cv-personal-light','Complete composition of the light version of the personal CV project.','Personal CV · light version.']],
      pending:['Confirm date, context and whether this was an academic assignment.', 'Describe the visual concept and the tasks completed with each tool.', 'Clarify collaboration, third-party assets and the scope of the Adobe XD work; no implemented website is assumed.'],
    },
  },
];

for (const project of projects) {
  const locales = {};
  for (const language of ['es','en']) {
    const copy = project[language];
    const images = copy.images.map(([file,alt,caption]) => ({src:media(file), alt, caption, credit:copy.credit, href:media(file), linkLabel:language === 'es' ? 'Abrir imagen completa' : 'Open full image'}));
    locales[language] = {
      title:copy.title, description:copy.description, type:copy.type, role:copy.role,
      client:copy.client, timeline:language === 'es' ? 'Fecha por confirmar' : 'Date to be confirmed', status:copy.status,
      imageAlt:images[0].alt, imageCaption:images[0].caption, imageCredit:copy.credit,
      contentBlocks:[
        ...copy.sections.map(([title,text]) => section(title,text)),
        {_template:'gallery',title:copy.galleryTitle,layout:'previews',images},
        {_template:'section',title:language === 'es' ? 'Notas para completar el artículo' : 'Notes to complete the article',text:language === 'es' ? 'Pendientes editoriales para ampliar y revisar esta ficha.' : 'Editorial details to expand and review this draft.',collapsed:true,bullets:copy.pending},
      ],
    };
  }
  const document = {
    title:project.name,publicationStatus:'draft',contentFormat:'bilingual',language:'es',
    image:media(project.es.images[0][0]),stack:project.stack,categories:project.categories,
    showInPortfolio:true,showInResume:false,locales,
  };
  await writeFile(`src/content/projects/${project.slug}.mdx`, matter.stringify('',document), {encoding:'utf8',flag:'wx'});
  console.log(`Created bilingual draft: ${project.slug}`);
}
