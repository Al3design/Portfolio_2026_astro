import {writeFile} from 'node:fs/promises';
import matter from 'gray-matter';

const copy = {
  es: {
    title:'Galleta // y valle de chocolate',
    description:'Un trabajo académico de Da Vinci que empezó con una galleta, un vaso y chocolate simulado en RealFlow. Después lo continué de forma individual: construí un valle en una isla flotante y un recorrido de chocolate desde la cima de una montaña hasta llenar un pote.',
    type:'Trabajo académico · Da Vinci', role:'Modelado 3D y simulación de chocolate', client:'Da Vinci', timeline:'Fecha por confirmar', status:'Trabajo académico',
    sections:[
      ['Dos etapas de un mismo trabajo','El proyecto comenzó como una entrega de Da Vinci centrada en una galleta, un vaso y el chocolate. Más adelante retomé la propuesta por mi cuenta y amplié el escenario hasta convertirlo en un valle sobre una isla flotante.\n\nSon dos etapas distintas del mismo trabajo. En la primera hubo una colaboración para las imágenes de presentación; en la continuación individual desarrollé el entorno 3D y la idea del recorrido del chocolate por el paisaje.'],
      ['La galleta y el vaso','La galleta y el vaso se realizaron en 3ds Max. Esos objetos fueron el punto de partida de la entrega y de la relación entre una forma sólida y el chocolate líquido.\n\nLas imágenes de póster de esa primera etapa fueron realizadas por un compañero en Photoshop. Su participación forma parte de los créditos del trabajo y se distingue de mi producción 3D.'],
      ['El chocolate como fluido','Para la parte del chocolate utilicé RealFlow. La propuesta conectaba el modelado de los objetos en 3ds Max con una etapa de simulación de fluido, en lugar de resolver el chocolate únicamente como una superficie estática.'],
      ['La continuación: una isla flotante','En otra ocasión continué solo la entrega y construí todo un valle en 3D, con la idea de una isla flotante. La escala del trabajo cambió: la galleta y el recipiente dejaron de ser los únicos protagonistas y pasaron a formar parte de un paisaje.\n\nEn la cima de una montaña había una galleta rota de la que caía chocolate líquido. El chocolate descendía por la montaña, recorría un río de chocolate y llegaba hasta llenar el pote. Ese recorrido unía los elementos del escenario en una misma propuesta.'],
      ['Mi participación y la colaboración','Mi trabajo reunió el desarrollo en 3ds Max y la parte del chocolate en RealFlow. La ampliación del valle fue una continuación individual. Los pósters hechos en Photoshop para la primera entrega corresponden a un compañero y no se presentan como imágenes creadas por mí.'],
    ],
    notes:'Título de esta ficha descriptivo y provisional. Fuente de archivo: davinci/multimedia/2017/3D/chokie-v2; la carpeta no confirma el año de entrega. El tutorial de RealFlow de esa carpeta es una referencia, no un entregable propio. No se incorporan imágenes de póster hasta identificar cuáles realizó el compañero.',
    pending:['Confirmar año, materia y título definitivo.', 'Identificar al compañero y cuáles pósters realizó; distinguirlos de los renders de la continuación individual.', 'Seleccionar imágenes del valle y del recorrido del chocolate; no elegir resultados solo por el nombre de archivo.', 'Ampliar cómo resolví la simulación, una dificultad concreta y lo que aprendí.', 'Confirmar recursos externos y la existencia de una exportación propia de video; el tutorial no se publica como trabajo.'],
  },
  en: {
    title:'A cookie // and a chocolate valley',
    description:'A Da Vinci academic project that began with a cookie, a cup and chocolate simulated in RealFlow. I later continued it independently, building a valley on a floating island with chocolate flowing from a mountaintop until it filled a container.',
    type:'Academic work · Da Vinci', role:'3D modeling and chocolate simulation', client:'Da Vinci', timeline:'Date to be confirmed', status:'Academic work',
    sections:[
      ['Two stages of one project','The project began as a Da Vinci assignment focused on a cookie, a cup and chocolate. I later returned to the idea independently and expanded the setting into a valley on a floating island.\n\nThese are two distinct stages of the same project. The first included a collaboration on presentation images; in the independent continuation I developed the 3D environment and the idea of chocolate flowing through the landscape.'],
      ['The cookie and the cup','The cookie and cup were made in 3ds Max. These objects were the starting point for the assignment and the relationship between a solid form and liquid chocolate.\n\nA classmate created the first stage’s poster images in Photoshop. That contribution is credited separately from my 3D work.'],
      ['Chocolate as a fluid','I used RealFlow for the chocolate. The project connected object modeling in 3ds Max with fluid simulation, rather than treating the chocolate only as a static surface.'],
      ['The continuation: a floating island','I later continued the assignment on my own and built an entire valley in 3D, conceived as a floating island. The scale changed: the cookie and container were no longer the only subjects, becoming part of a landscape.\n\nA broken cookie at the top of a mountain released liquid chocolate. It flowed down the mountain, continued along a chocolate river and eventually filled the container. That route connected the environment’s elements within one concept.'],
      ['My contribution and the collaboration','My work brought together development in 3ds Max and chocolate simulation in RealFlow. The expanded valley was an independent continuation. The Photoshop posters for the initial assignment were made by a classmate and are not presented as images I created.'],
    ],
    notes:'This article’s descriptive title is provisional. Archive source: davinci/multimedia/2017/3D/chokie-v2; the folder does not confirm the assignment year. The RealFlow tutorial in that folder is a reference, not my deliverable. Poster images are not included until the classmate’s work has been identified.',
    pending:['Confirm the year, course and final title.', 'Identify the classmate and their posters; distinguish them from renders of the independent continuation.', 'Select images of the valley and chocolate route rather than choosing results from filenames alone.', 'Describe the simulation, a concrete challenge and what I learned.', 'Confirm external assets and whether an original video export exists; the tutorial is not published as my work.'],
  },
};
const locales = {};
for (const [language, item] of Object.entries(copy)) {
  const {sections,notes,pending,...fields} = item;
  locales[language] = {...fields,contentBlocks:[...sections.map(([title,text])=>({_template:'section',title,text})),
    {_template:'section',title:language === 'es' ? 'Notas para completar el artículo' : 'Notes for completing the article',text:notes,bullets:pending,collapsed:true}]};
}
const data = {title:'Chokie · Valle de chocolate',publicationStatus:'draft',contentFormat:'bilingual',language:'es',
  stack:['3ds Max','RealFlow'],categories:['3d','academic'],showInPortfolio:true,showInResume:false,locales};
await writeFile(new URL('../src/content/projects/chokie.mdx',import.meta.url),matter.stringify('',data),{flag:'wx'});
console.log('Created a bilingual chocolate valley draft with two stages and separate classmate credits.');
