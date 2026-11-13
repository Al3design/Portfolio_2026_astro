// Initial intake snapshot used only by the one-time authoring script.
// Editable bilingual articles now live in src/content/projects/{mundo,toplomero}.mdx.
// Do not regenerate those documents over edits made in Tina.
export type DraftLanguage = 'es' | 'en';
type Copy = {
  title: string; accent: string; subtitle: string; summary: string;
  contribution: string; result: string; alt: string; visualDescription: string;
  process: Array<{ title: string; text: string }>;
  challenge: string; learning: string; credits?: string;
  previewNote: string; pending: string[];
};
export const academicDrafts = [
  {
    slug: 'mundo', tools: ['VUE', 'Photoshop'], duration: 24.8,
    source: 'davinci/multimedia/2018/video/mundo/blp-5.avi',
    es: {
      title: 'Mundo', accent: 'ficticio.', subtitle: 'Exploración de entorno 3D',
      summary: 'La idea de este trabajo académico de Da Vinci fue construir un mundo volcánico cubierto de calaveras. Usé VUE para explorar cómo transformar una esfera en un terreno árido, con montañas, grietas y lava, y cómo distribuir objetos 3D sobre toda su superficie.',
      contribution: 'Construí el entorno en VUE, trabajé el relieve de la esfera y la repetición de las calaveras, y preparé el render para componerlo en Photoshop. La calavera provenía de una biblioteca gratuita; mi trabajo se centró en el mundo, su superficie y la composición.',
      process: [
        { title: 'De una esfera a un terreno volcánico', text: 'Empecé probando las herramientas de VUE para crear superficies montañosas. Sobre una esfera fui ajustando las alturas y las grietas hasta construir un terreno árido. Agregué lava en esas grietas para darle el carácter volcánico que buscaba. El fondo era uno de los predeterminados del programa.' },
        { title: 'Calaveras como patrón', text: 'Importé una calavera en formato OBJ desde una biblioteca gratuita y aprendí a repetirla como patrón sobre la esfera. El desafío era trabajar con objetos 3D distribuidos sobre un terreno con relieve, en lugar de limitarme a una textura plana.' },
        { title: 'Render y composición', text: 'También incorporé unos palos de otro trabajo práctico que había realizado. Después del render en VUE, pasé a Photoshop para componer la imagen y agregarles fuego.' },
      ],
      challenge: 'La principal dificultad fue aprender VUE mientras desarrollaba la escena. Tuve que entender cómo controlar la altura del terreno sobre una esfera y cómo repetir las calaveras por toda su superficie. Esas pruebas fueron dando forma al mundo, desde las primeras montañas hasta las grietas con lava.',
      learning: 'Aprendí a manipular un terreno árido y agrietado, a usar un objeto 3D como patrón sobre una superficie y a llevar un render a una etapa de composición en Photoshop. El trabajo me permitió conectar la construcción del entorno con el tratamiento final de la imagen.',
      credits: 'La calavera es un recurso de una biblioteca gratuita, importado en formato OBJ; no es un modelo propio. El fondo de VUE es predeterminado. Quedan por identificar la biblioteca, el autor y la licencia de la calavera.',
      result: 'La escena presenta un mundo suspendido sobre una superficie gris. El relieve oscuro y las grietas anaranjadas definen su aspecto, mientras una fuente de luz ilumina el fondo.',
      alt: 'Mundo esférico rocoso con grietas anaranjadas luminosas, suspendido sobre una superficie gris.',
      visualDescription: 'Una esfera de relieve rocoso gira sobre su eje, suspendida sobre un suelo gris. Las grietas luminosas y las formas de su superficie cambian de posición durante el giro. La cámara mantiene el encuadre general.',
      previewNote: 'Preview local de 24,8 segundos, sin audio. Versión optimizada a partir del AVI conservado; la selección definitiva está pendiente.',
      pending: ['Año y materia de la entrega; “2018” es la carpeta de origen, no una fecha confirmada.', 'Título definitivo del trabajo.', 'Identificar biblioteca, autor y licencia de la calavera; confirmar si hubo equipo u otros recursos de terceros.', 'Confirmar qué imágenes y versión de video querés mostrar públicamente.'],
    },
    en: {
      title: 'Imagined', accent: 'world.', subtitle: '3D environment exploration',
      summary: 'The idea behind this Da Vinci academic project was to build a volcanic world covered in skulls. I used VUE to explore how to turn a sphere into an arid landscape with mountains, cracks and lava, and how to distribute 3D objects across its surface.',
      contribution: 'I built the environment in VUE, developed the terrain and skull pattern, and prepared the render for compositing in Photoshop. The skull came from a free asset library; my work focused on the world, its surface and the composition.',
      process: [
        { title: 'From a sphere to volcanic terrain', text: 'I began by experimenting with VUE’s terrain tools. Working on a sphere, I adjusted the heights and cracks to create an arid landscape. I added lava in the fissures to give it the volcanic character I was looking for. The background was one of the program’s presets.' },
        { title: 'Skulls as a repeating pattern', text: 'I imported a skull in OBJ format from a free asset library and learned to repeat it across the sphere. The challenge was to distribute actual 3D objects over uneven terrain rather than rely on a flat texture.' },
        { title: 'Rendering and compositing', text: 'I also brought in poles from an earlier assignment of mine. After rendering the scene in VUE, I moved to Photoshop to composite the image and add fire to the poles.' },
      ],
      challenge: 'The main challenge was learning VUE while building the scene. I had to understand how to control terrain height on a sphere and repeat skulls across its surface. Those experiments gradually shaped the world, from the first mountains to the lava-filled cracks.',
      learning: 'I learned to shape arid, cracked terrain, use a 3D object as a repeating surface pattern, and take a render into Photoshop for compositing. The project connected environment building with the final treatment of an image.',
      credits: 'The skull was imported as an OBJ from a free asset library; I did not model it. The VUE background is a preset. The library, author and skull license still need to be identified.',
      result: 'The scene presents a world suspended above a grey surface. Dark terrain and orange fissures define its appearance, while a light source illuminates the background.',
      alt: 'Rocky spherical world with glowing orange fissures, suspended above a grey surface.',
      visualDescription: 'A rocky sphere rotates on its axis, suspended above a grey ground. Its glowing fissures and surface shapes move across the frame as it turns. The camera maintains the overall composition.',
      previewNote: 'Local 24.8-second preview without audio. Optimized from the preserved AVI; the final media selection is pending.',
      pending: ['Assignment year and course; “2018” is the source folder, not a confirmed date.', 'Final project title.', 'Identify the skull library, author and license; confirm any team involvement or other third-party resources.', 'Confirm which images and video version should be shown publicly.'],
    },
  },
  {
    slug: 'toplomero', tools: ['3ds Max', 'RealFlow', 'After Effects', 'Photoshop'], duration: 18,
    source: 'davinci/multimedia/2018/video/manifiesto/motion-4-edited.mp4',
    es: {
      title: 'Toplomero', accent: 'en movimiento.', subtitle: 'Ejercicio de animación 3D',
      summary: 'Toplomero fue un trabajo académico que reunió dos materias de Da Vinci: animación integral de 3D con rigging en 3ds Max y edición de video con composición en After Effects. La propuesta conectaba la creación de un personaje y su entorno con la animación, los efectos de agua y la presentación final.',
      contribution: 'Modelé y texturicé al personaje, construí las piezas de su cuerpo y la habitación, y trabajé el rigging y la animación en 3ds Max. Sumé partículas de agua con RealFlow, hice la postproducción en After Effects y preparé los banners de presentación en Photoshop.',
      process: [
        { title: 'Personaje y escenario', text: 'Empecé en 3ds Max creando al personaje y las piezas que formaban su cuerpo, y trabajando sus texturas. Después construí la habitación. Para el pelaje usé el modificador de pelo de 3ds Max, incorporándolo al desarrollo del personaje.' },
        { title: 'Rigging y caminata', text: 'Armé el rigging y trabajé la animación de la caminata. Las proporciones del personaje fueron una dificultad central: tenía piernas cortas, pies pequeños y brazos grandes. Aprender a mover ese cuerpo fue una parte importante del ejercicio.' },
        { title: 'Agua y postproducción', text: 'Usé partículas en RealFlow para crear el efecto del agua. En After Effects hice la postproducción, con filtros de lente y plugins de ambientación para trabajar los efectos de cámara y el ambiente. Por último, preparé los banners de presentación en Photoshop.' },
      ],
      challenge: 'Lo más difícil fue el rigging y aprender a recrear una caminata con esas proporciones. El cuerpo de piernas cortas y pies pequeños, combinado con brazos grandes, me obligó a prestar especial atención a cómo se articulaba y se movía el personaje.',
      learning: 'El trabajo me permitió aprender modelado de cuerpos orgánicos, armado de rigging y animación de una caminata. También incorporé partículas con RealFlow y postproducción con efectos de cámara y ambiente, recorriendo las etapas desde el personaje 3D hasta la composición de la pieza.',
      result: 'El material conservado alterna la presentación gráfica de Toplomero con una escena del personaje junto a una pared. La preview permite revisar su movimiento y la puesta en escena.',
      alt: 'Personaje azul con casco amarillo frente a una pared, en un fotograma de Toplomero.',
      visualDescription: 'El fragmento alterna una escena de pared con agua, la presentación gráfica del nombre Toplomero y planos de un personaje azul con casco amarillo. El personaje se mueve junto a la pared y acerca la cabeza a una salida de agua.',
      previewNote: 'Fragmento local de los primeros 18 segundos, sin audio. Se omiten el cierre y la banda sonora del archivo de origen; no es la pieza final completa.',
      pending: ['Año, nombres de las dos materias y título definitivo de la entrega.', 'Confirmar si hubo equipo e identificar plugins, recursos de terceros y créditos, si corresponden.', 'Revisar banda sonora, permisos y equivalencia con el video del canal de YouTube.'],
    },
    en: {
      title: 'Toplomero', accent: 'in motion.', subtitle: '3D animation exercise',
      summary: 'Toplomero was an academic project combining two Da Vinci courses: full 3D animation and rigging in 3ds Max, and video editing with compositing in After Effects. It connected character and environment creation with animation, water effects and the final presentation.',
      contribution: 'I modeled and textured the character, built its body parts and the room, and worked on the rigging and animation in 3ds Max. I added water particles with RealFlow, handled postproduction in After Effects and prepared the presentation banners in Photoshop.',
      process: [
        { title: 'Character and setting', text: 'I started in 3ds Max by creating the character and its body parts and working on the textures. I then built the room. For the fur, I used 3ds Max’s hair modifier as part of the character’s development.' },
        { title: 'Rigging and walk cycle', text: 'I built the rig and worked on the walk animation. The character’s proportions were a key challenge: short legs, small feet and large arms. Learning to animate that body was an important part of the assignment.' },
        { title: 'Water and postproduction', text: 'I used particles in RealFlow to create the water effect. In After Effects, I worked on postproduction with lens filters and atmosphere plugins to develop the camera effects and mood. Finally, I prepared the presentation banners in Photoshop.' },
      ],
      challenge: 'Rigging and learning to recreate a walk with those proportions were the hardest parts. Short legs and small feet combined with large arms meant paying particular attention to how the character articulated and moved.',
      learning: 'I learned organic body modeling, rigging and walk animation. I also gained experience with particles in RealFlow and postproduction using camera and atmosphere effects, working through the stages from a 3D character to the composited piece.',
      result: 'The preserved material alternates Toplomero’s graphic introduction with a scene featuring the character beside a wall. The preview offers a view of its movement and staging.',
      alt: 'Blue character wearing a yellow helmet in front of a wall, in a frame from Toplomero.',
      visualDescription: 'The excerpt alternates a wall scene with water, a graphic introduction of the name Toplomero and shots of a blue character wearing a yellow helmet. The character moves beside the wall and brings its head close to a water outlet.',
      previewNote: 'Local excerpt of the first 18 seconds without audio. The source’s ending and soundtrack are omitted; this is not the complete final piece.',
      pending: ['Assignment year, the names of both courses and final title.', 'Confirm any team involvement and identify plugins, third-party resources and credits, where applicable.', 'Review the soundtrack, permissions and correspondence with the YouTube upload.'],
    },
  },
] satisfies Array<{slug: string; tools: string[]; duration: number; source: string; es: Copy; en: Copy}>;

export const reviewLabels = {
  es: { notice: 'BORRADOR · REVISIÓN LOCAL', noticeBody: 'Textos y medios para revisar. Esta ficha no se publica en el portfolio.', language: 'Idioma de la ficha', context: 'Trabajo académico · Da Vinci', contribution: 'Mi participación', result: 'La escena', tools: 'Herramientas', preview: 'Muestra del trabajo', description: 'Descripción visual del video', pending: 'Para cerrar esta ficha', next: 'REVISAR LA OTRA FICHA', back: 'VOLVER AL PORTFOLIO', date: 'Fecha por confirmar', information: 'Ficha del trabajo' },
  en: { notice: 'DRAFT · LOCAL REVIEW', noticeBody: 'Copy and media for review. This page is not published in the portfolio.', language: 'Page language', context: 'Academic work · Da Vinci', contribution: 'My contribution', result: 'The scene', tools: 'Tools', preview: 'Work sample', description: 'Video visual description', pending: 'Before completing this page', next: 'REVIEW THE OTHER PAGE', back: 'BACK TO PORTFOLIO', date: 'Date to be confirmed', information: 'Project information' },
};
