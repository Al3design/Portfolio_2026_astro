// Authoring only: create a source-backed draft; never overwrite Tina edits.
import { writeFile } from 'node:fs/promises';
import matter from 'gray-matter';

const section = (title, text, extras = {}) => ({_template: 'section', title, text, ...extras});
const es = {
  title: 'Ingest // Monitor',
  description: 'Diseño de una interfaz para monitorear ingestas de material audiovisual en un sistema MAM, reconocer alertas y ayudar a los operadores a identificar qué requiere atención.',
  type: 'Fixed-term contract', role: 'UX Research y UI Design', client: 'Around MD',
  timeline: 'Fecha del proyecto por confirmar', status: 'Trabajo profesional',
  contentBlocks: [
    section('El contexto', 'Ingest Monitor aborda el seguimiento de señales que ingresan a un sistema de gestión de activos multimedia, o MAM. En ese entorno, una interrupción de señal o un error de ingesta necesita hacerse visible para que el operador pueda identificarlo y decidir cómo actuar.\n\nLa presentación del proyecto parte de esa necesidad: reunir las vistas, los estados y la información de origen del material en una interfaz de monitoreo.'),
    {_template: 'cards', title: 'Mi participación y el problema de diseño', cards: [
      {title: 'UX Research y UI Design', text: 'Mi participación documentada se centra en investigación UX y diseño de interfaz. El caso reúne desafíos, cambios y ajustes de la experiencia, junto con ejemplos de decisiones llevadas a la interfaz.', tags: ['UX', 'UI']},
      {title: 'Información para operar', text: 'La propuesta trabaja con miniaturas, unidad de origen, títulos, tiempos y estados de cada ingesta. La dificultad de diseño está en presentar esa información dentro de una vista múltiple sin perder la identificación de cada señal.', tags: ['MAM', 'Monitoreo']},
    ]},
    section('Una grilla para distintas cantidades de señales', 'La presentación explora tres distribuciones: 24, 15 y 8 vistas. Esos números describen variantes de layout, no resultados de rendimiento. También distingue entre ampliar una vista y cambiar la distribución del conjunto.\n\nEl trabajo sobre la grilla considera la relación de aspecto de las vistas y su adaptación a distintos tamaños de monitor. La parte técnica documenta el uso de CSS Grid para esa composición responsive.'),
    section('Distinguir estados y niveles de atención', 'El caso diferencia alertas de advertencias y estados de las unidades de grabación. Los ejemplos incluyen pérdida de señal, cuadros negros, espera y mantenimiento. La propuesta combina mensajes y estados visuales para que la información no dependa únicamente de reconocer un color.\n\nEntre los cambios documentados aparecen un indicador de grabación, la identificación de la unidad de origen y el paso de una referencia de PIN a un estado de bloqueo. También se muestran variantes de selección, arrastre y bloqueo de las vistas.'),
    section('Del diseño a los ajustes de interfaz', 'La revisión incluye la organización de espacios de trabajo y layouts, además de una altura mínima para las vistas, planteada para evitar saltos de tamaño durante la carga. Son decisiones sobre la estabilidad y la lectura del conjunto, especialmente cuando conviven varias señales.\n\nLa presentación también incluye ejemplos de componentes React y convenciones BEM. El detalle de mi responsabilidad sobre la implementación completa queda por precisar; esos ejemplos no implican que haya desarrollado por mi cuenta todo el producto.'),
    section('Revisión y feedback', 'El material describe la obtención de feedback en reuniones o mediante videos entregados por stakeholders, y el trabajo con un entorno semejante al de los usuarios. Esa revisión sirve como contexto para los cambios de interfaz presentados en el caso.\n\nQueda por completar con mi relato de las sesiones: quiénes participaron, qué observaciones recibimos y cómo se priorizaron las decisiones.'),
    section('Lo que documenta este caso', 'La presentación reúne el objetivo de monitoreo, las variantes de grilla, los estados de ingesta y una serie de ajustes UX/UI y ejemplos técnicos. Este artículo organiza ese material como un caso de diseño. Las métricas de impacto, el alcance de la implementación y su uso en producción todavía necesitan confirmación antes de incorporarse al relato.'),
    section('Notas para completar el caso', 'Borrador redactado a partir de la presentación Case-study-AD.pdf. No se copiaron teléfonos, enlaces antiguos ni capturas de clientes a este documento.', {collapsed: true, bullets: [
      'Confirmar año del proyecto y título definitivo del caso.',
      'Precisar mi participación en frontend, equipo y responsabilidades de otras personas.',
      'Ampliar cómo fueron las sesiones de feedback con operadores y stakeholders.',
      'Autorizar qué capturas y marcas se pueden mostrar, y qué información hay que ocultar.',
      'Confirmar entregables finales y resultados, sin inventar métricas.',
    ]}),
  ],
};
const en = {
  title: 'Ingest // Monitor',
  description: 'Interface design for monitoring audiovisual ingests in a MAM system, recognizing alerts and helping operators identify what needs attention.',
  type: 'Fixed-term contract', role: 'UX Research and UI Design', client: 'Around MD',
  timeline: 'Project date to be confirmed', status: 'Professional work',
  contentBlocks: [
    section('The context', 'Ingest Monitor addresses the monitoring of signals entering a media asset management system, or MAM. In this environment, signal interruptions and ingest errors need to become visible so that operators can identify them and decide how to respond.\n\nThe project presentation starts from that need: bringing views, states and source information together in a monitoring interface.'),
    {_template: 'cards', title: 'My role and the design problem', cards: [
      {title: 'UX Research and UI Design', text: 'My documented role focuses on UX research and interface design. The case brings together challenges, changes and experience improvements, alongside examples of interface decisions.', tags: ['UX', 'UI']},
      {title: 'Information for operators', text: 'The proposal works with thumbnails, source units, titles, time information and the state of each ingest. The design challenge is to present that information in a multiview layout while keeping each signal identifiable.', tags: ['MAM', 'Monitoring']},
    ]},
    section('A grid for different signal counts', 'The presentation explores three arrangements: 24, 15 and 8 views. These numbers describe layout variants, not performance results. It also distinguishes zooming into a view from changing the arrangement of the entire set.\n\nThe grid work considers view aspect ratios and adaptation to different monitor sizes. The technical section documents the use of CSS Grid for that responsive composition.'),
    section('Distinguishing states and levels of attention', 'The case distinguishes alerts from warnings and recording-unit states. Examples include signal loss, black frames, waiting and maintenance. The proposal combines messages and visual states so that information does not rely solely on recognizing a color.\n\nDocumented changes include a recording indicator, source-unit identification and the move from a PIN reference to a lock state. Selected, drag-and-drop and locked view states are also shown.'),
    section('From design to interface adjustments', 'The review includes workspace and layout organization, as well as a minimum view height intended to prevent size jumps during loading. These decisions address the stability and readability of the overall interface, particularly when multiple signals appear together.\n\nThe presentation also includes React component examples and BEM conventions. My precise responsibility for the complete implementation still needs clarification; those examples do not mean that I built the entire product alone.'),
    section('Review and feedback', 'The material describes gathering feedback in meetings or through videos delivered by stakeholders, and working in an environment resembling the users’ setting. That review provides context for the interface changes presented in the case.\n\nThis section still needs my account of the sessions: who participated, what feedback we received and how decisions were prioritized.'),
    section('What this case documents', 'The presentation brings together the monitoring objective, grid variants, ingest states, UX/UI adjustments and technical examples. This article organizes that material as a design case study. Impact metrics, implementation scope and production use still need confirmation before being added to the narrative.'),
    section('Notes for completing the case', 'Draft based on the Case-study-AD.pdf presentation. No phone numbers, obsolete links or client screenshots were copied into this document.', {collapsed: true, bullets: [
      'Confirm the project year and final case-study title.',
      'Clarify my frontend contribution, team and other people’s responsibilities.',
      'Expand the account of feedback sessions with operators and stakeholders.',
      'Approve screenshots and brands for public use, including any information to obscure.',
      'Confirm final deliverables and outcomes without inventing metrics.',
    ]}),
  ],
};
const document = {
  title: 'Around MD · Ingest Monitor', publicationStatus: 'draft', contentFormat: 'bilingual', language: 'es', experienceSlug: 'around',
  stack: ['UX Research', 'UI Design', 'CSS Grid', 'React', 'BEM'],
  categories: ['ui-ux', 'web-dev'], showInPortfolio: true, showInResume: false,
  locales: {es, en},
};
await writeFile(new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url), matter.stringify('', document), {flag: 'wx'});
console.log('Created around-ingest-monitor.mdx: bilingual draft; original Around unchanged.');
