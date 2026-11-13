import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Explicit authoring step. Back up edited Tina documents before changing copy.
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const backup = `.e2e/content-intake/editorial-first-release-${stamp}`;
fs.mkdirSync(backup, { recursive: true });
const review = [];
const plan = [];
for (const slug of ['gitcron', 'odontopau']) {
  const file = `src/content/projects/${slug}.mdx`;
  const original = fs.readFileSync(file, 'utf8');
  const document = matter(original);
  fs.writeFileSync(path.join(backup, `${slug}.mdx`), original, { flag: 'wx' });
  const notes = {};
  for (const language of ['es', 'en']) {
    const locale = document.data.locales[language];
    const spanish = language === 'es';
    notes[language] = locale.contentBlocks.filter(block => block.collapsed);
    locale.contentBlocks = locale.contentBlocks.filter(block => !block.collapsed);
    const ai = locale.contentBlocks.find(block => block.title === (spanish ? 'Un proceso con asistencia de IA' : 'A process supported by AI'));
    ai.text = spanish
      ? 'Usé Google Stitch, Claude, Codex, Antigravity y Qwen local como parte del proceso de diseño y desarrollo. La dirección del proyecto, las decisiones de producto y la integración del trabajo fueron mías. Photoshop, Illustrator y Figma también formaron parte de las herramientas utilizadas.'
      : 'I used Google Stitch, Claude, Codex, Antigravity and local Qwen as part of the design and development process. I directed the project, made product decisions and integrated the work. Photoshop, Illustrator and Figma were also part of the toolset.';
    if (slug === 'gitcron') {
      locale.status = spanish ? 'En desarrollo' : 'In development';
      const history = locale.contentBlocks.find(block => block.title === (spanish ? 'Entre la historia visual y las operaciones locales' : 'Between visual history and local operations'));
      if (history) history.text = history.text.split('\n\n')[0] + (spanish
        ? '\n\nLa integración con GitHub conecta ese trabajo local con el repositorio remoto. El historial, los cambios pendientes y la asistencia contextual ocupan espacios diferenciados dentro de la misma aplicación.'
        : '\n\nGitHub integration connects local work with the remote repository. History, pending changes and contextual assistance have distinct spaces within the same application.');
      const interfaceBlock = locale.contentBlocks.find(block => block.title === (spanish ? 'Una interfaz entre el escritorio y Git' : 'An interface between the desktop and Git'));
      interfaceBlock.text = interfaceBlock.text.split('\n\n')[0] + (spanish
        ? '\n\nLa separación entre historial, cambios locales y asistencia contextual organiza tres momentos del trabajo: entender lo que ya ocurrió, preparar el próximo cambio y consultar el contexto sin salir de la aplicación.'
        : '\n\nSeparating history, local changes and contextual assistance organizes three moments of the workflow: understanding what already happened, preparing the next change and consulting the context within the application.');
      locale.contentBlocks.find(block => block.title === (spanish ? 'Sobre estas imágenes' : 'About these images')).text = spanish
        ? 'Las capturas muestran una versión de GitCron con un repositorio de prueba. Permiten recorrer el historial, el panel de asistencia contextual y su menú de acciones dentro del mismo espacio de trabajo.'
        : 'The screenshots show a version of GitCron using a test repository. They illustrate history, the contextual assistance panel and its action menu within the same workspace.';
      locale.imageCredit = spanish
        ? 'Diseño y desarrollo: Alejandro Delgado, con asistencia de IA. Captura de una versión del proyecto con repositorio de prueba.'
        : 'Design and development: Alejandro Delgado, with AI assistance. Screenshot of a project version using a test repository.';
      for (const block of locale.contentBlocks) if (block.images) for (const image of block.images) image.credit = locale.imageCredit;
    } else {
      const visibility = locale.contentBlocks.find(block => block.title === (spanish ? 'Visibilidad y contenido con continuidad' : 'Visibility and ongoing content'));
      if (visibility) visibility.text = spanish
        ? 'El objetivo del proyecto no terminaba en tener una página de presentación. Mostrar casos y sostener una presencia profesional requiere organizar contenidos que puedan encontrarse, leerse y compartirse.\n\nLa home introduce a la profesional y la navegación abre el recorrido hacia servicios, artículos e instrucciones. Cada contenido puede funcionar como destino concreto al compartir un enlace desde otros canales.'
        : 'The project went beyond an introductory page. Presenting cases and maintaining a professional presence calls for content that people can find, read and share.\n\nThe home page introduces the practitioner, while navigation leads to services, articles and instructions. Each piece of content can serve as a specific destination when sharing a link through other channels.';
      const editorial = locale.contentBlocks.find(block => block.title === (spanish ? 'Diseño y continuidad editorial' : 'Design and editorial continuity'));
      if (editorial) editorial.text = editorial.text.split('\n\n')[0] + (spanish
        ? '\n\nMe ocupé del diseño y desarrollo web y de la organización del contenido. La revisión y aprobación de los materiales clínicos corresponden a Paula Gualtieri.'
        : '\n\nI handled web design and development and content organization. Paula Gualtieri is responsible for reviewing and approving clinical material.');
    }
  }
  review.push({ slug, notes, pending: ['Confirmar fecha de inicio y estado con el autor.', 'Incorporar una decisión o desafío concreto.', 'Aprobar selección final de medios y texto ES/EN.'] });
  const urls = new Set();
  function collect(value) {
    if (typeof value === 'string' && value.startsWith('/revision/media/')) urls.add(value);
    else if (Array.isArray(value)) value.forEach(collect);
    else if (value && typeof value === 'object') Object.values(value).forEach(collect);
  }
  collect(document.data);
  plan.push({ slug, publicationStatus: 'draft', files: [...urls].map(url => ({
    preview: url,
    source: `src/editorial/assets/${url.split('/').pop()}`,
    proposedPublicUrl: `/assets/projects/${slug}/${url.split('/').pop()}`,
  })) });
  fs.writeFileSync(file, matter.stringify(document.content, document.data, { lineWidth: 80 }));
}
const folder = 'openspec/changes/contenido-real-y-tienda-3d';
fs.writeFileSync(`${folder}/first-article-editorial-notes.json`, JSON.stringify(review, null, 2) + '\n');
fs.writeFileSync(`${folder}/first-article-media-plan.json`, JSON.stringify(plan, null, 2) + '\n');
console.log(`Textos ES/EN actualizados; originales guardados en ${backup}. Sin publicación ni copia de medios a public/.`);
