import {writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const projects={
  rioko:{name:'Rioko',stack:[],categories:['ui-ux','academic'],cover:'rioko-budget.webp',
    es:{title:'Rioko // experiencia de viaje',role:'Diseño de experiencia de usuario',
      description:'Entrega de UX de Da Vinci para una agencia de viajes creada desde cero. La propuesta organiza la búsqueda alrededor de las preferencias del viajero y explora filtros por presupuesto, tiempo y tipo de experiencia.',
      sections:[
        ['Una agencia creada desde cero','Rioko fue una entrega de Da Vinci cuyo foco principal era crear la experiencia de usuario de una agencia de viajes desde cero. El trabajo partía de una propuesta nueva, en lugar de adaptar la interfaz de una agencia existente.'],
        ['Distintas formas de empezar a buscar','El prototipo conservado propone elegir cómo va a ser el viaje. Junto a una búsqueda tradicional por destino, duración y cantidad de personas, aparecen entradas por presupuesto, tiempo y experiencia.\n\nEsa organización permite explorar el viaje desde distintos puntos de partida: tener un destino en mente o empezar por una preferencia que ayude a acotar opciones. Es una propuesta de navegación, no un motor de reservas publicado.'],
        ['Del presupuesto a los resultados','La documentación muestra un flujo por precio: ingresar un importe o elegir una categoría de presupuesto y después revisar resultados con distintas alternativas de alojamiento. Los filtros de camping, casas rodantes, hostel y espacio compartido forman parte de ese material.\n\nEstos ejemplos permiten explicar la relación entre una preferencia inicial y las opciones que muestra la interfaz. Los importes y destinos dentro del prototipo son contenido de la entrega académica, no ofertas vigentes.'],
        ['Navegación y continuidad','El material incluye propuestas para encabezado, pie y navegación contextual. Esas piezas acompañan el flujo de búsqueda y conectan las distintas partes de la experiencia. La ficha se centra en las decisiones que pueden observarse en el prototipo; no atribuye resultados de investigación ni mejoras medidas que todavía no están documentadas.'],
      ],
      galleryTitle:'Navegación, presupuesto y resultados', galleryAfter:2,
      gallery:[['rioko-navigation.webp','Lámina de navegación y búsqueda de Rioko, con entradas por preferencias de viaje.','Navegación y búsqueda · presentación, página 3.'],['rioko-budget.webp','Propuesta de búsqueda por presupuesto con ingreso de importe y categorías de gasto.','Búsqueda por presupuesto · presentación, página 5.'],['rioko-results.webp','Propuesta de resultados de viaje con filtros de alojamiento y opciones de presupuesto.','Resultados y filtros · presentación, página 6.']],
      credit:'Diseño UX de la propuesta: Alejandro Delgado. Material de la entrega académica Rioko; imágenes y contenidos de ejemplo requieren créditos finales.',
      pending:['Confirmar materia, año y herramientas de diseño; no se infiere una fecha por el pie o los nombres de archivo.', 'Precisar participación de otras personas y qué metodología de UX se aplicó.', 'Ampliar decisiones, dificultades y aprendizajes con ejemplos propios.', 'Revisar selección y créditos de imágenes. El video de prueba con una usuaria no se incorpora sin revisar privacidad y autorización.']},
    en:{title:'Rioko // the travel experience',role:'User experience design',
      description:'A Da Vinci UX assignment for a travel agency created from scratch. The proposal organizes search around traveler preferences and explores filters based on budget, time and experience.',
      sections:[
        ['An agency created from scratch','Rioko was a Da Vinci assignment focused on creating the user experience of a travel agency from scratch. It began with a new concept rather than adapting an existing agency’s interface.'],
        ['Different starting points for search','The preserved prototype invites travelers to choose how their trip will take shape. Alongside a traditional search by destination, duration and number of people, it provides starting points based on budget, time and experience.\n\nThis structure explores different ways to begin: having a destination in mind or starting with a preference that narrows the options. It is a navigation proposal, not a published booking engine.'],
        ['From budget to results','The documentation shows a price-based flow: entering an amount or selecting a budget category, then reviewing results with different accommodation options. Camping, camper vans, hostels and shared-space filters appear in that material.\n\nThese examples connect an initial preference to the options shown by the interface. Prices and destinations inside the prototype are academic sample content, not current offers.'],
        ['Navigation and continuity','The material includes header, footer and contextual navigation proposals. These elements support the search flow and connect different parts of the experience. This article focuses on decisions visible in the prototype; it does not claim research outcomes or measured improvements that have not been documented.'],
      ],galleryTitle:'Navigation, budget and results',galleryAfter:2,
      gallery:[['rioko-navigation.webp','Rioko navigation and search slide with starting points based on travel preferences.','Navigation and search · presentation, page 3.'],['rioko-budget.webp','Budget search proposal with an amount field and spending categories.','Budget search · presentation, page 5.'],['rioko-results.webp','Travel results proposal with accommodation and budget filters.','Results and filters · presentation, page 6.']],
      credit:'UX proposal: Alejandro Delgado. Material from the Rioko academic assignment; sample images and content still require final credits.',
      pending:['Confirm the course, year and design tools; footer dates and filenames do not establish the assignment date.', 'Clarify other contributors and the UX methods used.', 'Expand decisions, challenges and learning with specific examples.', 'Review image selection and credits. The user-testing video is excluded until privacy and permission have been reviewed.']}},
  paris:{name:'París Tour',stack:['Photoshop','HTML','CSS'],categories:['ui-ux','web-dev','academic'],cover:'paris-home.webp',
    es:{title:'París // del boceto a la web',role:'Diseño en Photoshop y desarrollo web',
      description:'Sitio académico de turismo para Da Vinci, diseñado primero en Photoshop y luego llevado a la web. Exploré un encabezado tipo croquis y una diagonal recortada en la home, con el contenido adaptado a esa composición.',
      sections:[
        ['Diseñar antes de maquetar','París fue una entrega de Da Vinci sobre un sitio web de turismo. La idea era trabajar primero el diseño en Photoshop y después pasarlo a web. Ese orden me permitía definir una composición visual antes de resolverla en HTML y CSS.'],
        ['Un encabezado como croquis','En el encabezado me interesó jugar con un diseño de tipo croquis. Esa referencia al boceto acompañaba el tema turístico del sitio y era una decisión visual que quería trasladar desde la propuesta gráfica a la página.'],
        ['La diagonal de la home','En la home trabajé una diagonal cortada, como parte de un boceto. El contenido tenía que encajar en esa forma, por lo que la composición no partía únicamente de bloques rectangulares convencionales.\n\nEl desafío de diseño estaba en hacer convivir esa intención gráfica con los textos y las imágenes de la página. La diagonal era parte de la estructura de la propuesta, no un detalle añadido al final.'],
        ['Imágenes y recorrido del sitio','La galería de imágenes la preparé en Photoshop. Las piezas conservadas incluyen diseños de la home, puntos de interés y entradas, junto a páginas HTML de contacto y agradecimiento.\n\nEl conjunto permite mostrar el paso de una propuesta gráfica a un sitio con distintas secciones de información turística. Se presenta como entrega académica, sin ofrecer entradas, reservas o servicios turísticos reales.'],
      ],galleryTitle:'Diseños originales para la web',galleryAfter:2,
      gallery:[['paris-home.webp','Diseño de la home del sitio turístico París preparado para la entrega.','Home · diseño conservado en Photoshop.'],['paris-poi.webp','Diseño de la página de puntos de interés del sitio París.','Puntos de interés · propuesta gráfica.'],['paris-tickets.webp','Diseño de la página de entradas del sitio París.','Entradas · propuesta académica.']],
      credit:'Diseño y composiciones en Photoshop: Alejandro Delgado. Procedencia y créditos de fotografías de base pendientes de completar.',
      pending:['Confirmar materia, año y título definitivo.', 'Precisar si hubo equipo y los detalles de la implementación web.', 'Ampliar cómo se resolvió la diagonal en distintos tamaños y qué aprendí al llevar el diseño a HTML/CSS.', 'Confirmar si el folleto del Arco del Triunfo era parte del mismo proyecto o una entrega separada; no se mezcla todavía.', 'Revisar créditos de fotografías y selección de los diseños completos.']},
    en:{title:'Paris // from sketch to web',role:'Photoshop design and web development',
      description:'A Da Vinci tourism website assignment designed in Photoshop before being implemented for the web. I explored a sketch-like header and a cut diagonal on the homepage, fitting the content into that composition.',
      sections:[
        ['Design before markup','Paris was a Da Vinci tourism website assignment. The idea was to work on the design in Photoshop first and then bring it to the web. This sequence let me establish a visual composition before implementing it in HTML and CSS.'],
        ['A sketch-like header','For the header I wanted to explore a sketch-like design. That reference to drawing accompanied the tourism theme and was a visual decision I wanted to carry from the graphic proposal into the page.'],
        ['The homepage diagonal','On the homepage I worked with a cut diagonal, as part of a sketch. The content had to fit into that shape, so the composition did not rely solely on conventional rectangular blocks.\n\nThe design challenge was to bring that graphic intention together with the page’s text and images. The diagonal was part of the proposal’s structure rather than a detail added at the end.'],
        ['Images and the site journey','I prepared the image gallery in Photoshop. The preserved material includes homepage, points-of-interest and ticket page designs, alongside contact and thank-you HTML pages.\n\nTogether they show the transition from a graphic proposal to a website with several tourism information sections. This is an academic assignment, not an offer of tickets, bookings or tourism services.'],
      ],galleryTitle:'Original website designs',galleryAfter:2,
      gallery:[['paris-home.webp','Homepage design prepared for the Paris tourism website assignment.','Homepage · preserved Photoshop design.'],['paris-poi.webp','Points-of-interest page design for the Paris website.','Points of interest · graphic proposal.'],['paris-tickets.webp','Ticket page design for the Paris website.','Tickets · academic proposal.']],
      credit:'Design and Photoshop compositions: Alejandro Delgado. Source photography credits still need completion.',
      pending:['Confirm the course, year and final title.', 'Clarify teamwork and web implementation details.', 'Describe how the diagonal was handled at different sizes and what I learned while translating the design into HTML/CSS.', 'Confirm whether the Arc de Triomphe brochure belonged to this project or a separate assignment; it is not merged yet.', 'Review photography credits and full-design image selection.']}},
  'tienda-geekies':{name:'Tienda Geekies',stack:['HTML','CSS','Bootstrap'],categories:['web-dev','academic'],cover:'geekies-catalog.webp',
    es:{title:'Tienda Geekies // catálogo web',role:'Maquetación web académica',
      description:'Entrega web de Da Vinci con un catálogo de figuras y una maqueta de compra. Se conserva como candidata provisional del portfolio para revisar su aporte y decidir más adelante si incluirla en la selección final.',
      sections:[
        ['Una entrega de maquetación web','Tienda Geekies fue una entrega de Da Vinci basada en una tienda de figuras y productos de cultura geek. La ficha recoge ese ejercicio web como parte de mi formación; su inclusión en la selección final del portfolio todavía está en revisión.'],
        ['Catálogo y presentación de productos','El HTML conservado organiza una presentación inicial, una sección sobre la tienda y un catálogo. Incluye piezas dedicadas a figuras como Kratos, Superman y Miles Morales, y una vista de detalle de producto.\n\nEsos recursos sirven para describir la organización del ejercicio. Las figuras y sus imágenes no se presentan como modelos 3D ni productos creados por mí.'],
        ['La maqueta de compra','La entrega muestra un formulario de método de pago y un resumen de compra. Son componentes de una maqueta académica: no hay evidencia de una integración operativa de pagos o de pedidos reales, por lo que no se describe como una tienda en funcionamiento.'],
        ['Base técnica','El código fuente usa HTML, una hoja CSS propia y Bootstrap. El artículo conserva esa base técnica sin convertir la antigüedad del ejercicio en un año de entrega supuesto ni atribuirle resultados comerciales.'],
      ],galleryTitle:'Material del catálogo',galleryAfter:1,
      gallery:[['geekies-catalog.webp','Imagen de productos utilizada en el catálogo académico de Tienda Geekies.','Recurso del catálogo de la entrega; no es una captura de toda la interfaz.']],
      credit:'Maquetación de la entrega: Alejandro Delgado. Figuras e imágenes de producto de terceros; autores y licencias pendientes de identificar.',
      pending:['Decidir si este ejercicio queda en la selección final del portfolio.', 'Confirmar materia, año, consigna y participación concreta, incluido si hubo equipo.', 'Revisar el diseño y seleccionar imágenes de la interfaz completa si se conserva.', 'Identificar créditos de recursos e imágenes de productos; no confundir este ejercicio con la tienda de impresiones 3D actual.']},
    en:{title:'Tienda Geekies // web catalog',role:'Academic web layout',
      description:'A Da Vinci web assignment featuring a figure catalog and a purchase mockup. It remains a provisional portfolio candidate while its contribution and final inclusion are reviewed.',
      sections:[
        ['A web layout assignment','Tienda Geekies was a Da Vinci assignment based on a shop for figures and geek-culture products. This article records the web exercise as part of my training; its inclusion in the final portfolio selection is still under review.'],
        ['Catalog and product presentation','The preserved HTML organizes an opening presentation, an about section and a catalog. It includes figures such as Kratos, Superman and Miles Morales, along with a product-detail view.\n\nThese assets help describe the exercise’s organization. The figures and their images are not presented as 3D models or products I created.'],
        ['The purchase mockup','The assignment shows a payment-method form and a purchase summary. These are parts of an academic mockup: there is no evidence of an operational payment integration or real orders, so it is not described as a functioning store.'],
        ['Technical foundation','The source uses HTML, a custom CSS file and Bootstrap. This article preserves that technical context without inferring an assignment year or claiming commercial results.'],
      ],galleryTitle:'Catalog material',galleryAfter:1,
      gallery:[['geekies-catalog.webp','Product image used in the Tienda Geekies academic catalog.','An asset from the assignment’s catalog, not a screenshot of the entire interface.']],
      credit:'Assignment layout: Alejandro Delgado. Third-party figures and product images; authors and licenses still to be identified.',
      pending:['Decide whether this exercise belongs in the final portfolio selection.', 'Confirm the course, year, brief and specific contribution, including any teamwork.', 'Review the design and select complete interface images if the project is retained.', 'Identify product image and asset credits; keep this exercise distinct from the current 3D-print shop.']}},
};
for (const [slug,item] of Object.entries(projects)) {
  const locales={};
  for (const language of ['es','en']) {
    const es=language==='es';
    const copy=item[language];
    const images=copy.gallery.map(([filename,alt,caption])=>({src:`/revision/media/${filename}`,alt,caption,credit:copy.credit,
      href:`/revision/media/${filename}`,linkLabel:es?'Abrir imagen completa':'Open full image'}));
    const blocks=copy.sections.map(([title,text])=>({_template:'section',title,text}));
    blocks.splice(copy.galleryAfter+1,0,{_template:'gallery',title:copy.galleryTitle,images});
    blocks.push({_template:'section',title:es?'Notas para completar el artículo':'Notes for completing the article',collapsed:true,
      text:es?'Borrador basado en las aclaraciones de Alejandro y en el material de la entrega. Fechas, créditos y selección final pendientes; las imágenes se sirven solo en revisión local.':'Draft based on Alejandro’s clarifications and assignment material. Dates, credits and final selection remain pending; images are served only for local review.',bullets:copy.pending});
    const cover=images.find(image=>image.src.endsWith(item.cover))??images[0];
    locales[language]={title:copy.title,description:copy.description,type:es?'Trabajo académico · Da Vinci':'Academic work · Da Vinci',role:copy.role,client:'Da Vinci',timeline:es?'Fecha por confirmar':'Date to be confirmed',status:es?'Trabajo académico':'Academic work',imageAlt:cover.alt,imageCaption:cover.caption,imageCredit:copy.credit,contentBlocks:blocks};
  }
  const data={title:item.name,publicationStatus:'draft',contentFormat:'bilingual',language:'es',image:`/revision/media/${item.cover}`,stack:item.stack,categories:item.categories,showInPortfolio:true,showInResume:false,locales};
  await writeFile(new URL(`../src/content/projects/${slug}.mdx`,import.meta.url),matter.stringify('',data),{flag:'wx'});
  console.log(`Created ${slug}: bilingual academic draft with original-source review images.`);
}
