// Authoring update: enrich only named sections, preserving other Tina edits.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import matter from 'gray-matter';

const file = new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url);
const raw = await readFile(file, 'utf8');
const parsed = matter(raw);
if (parsed.data.publicationStatus !== 'draft') throw new Error('Only update the Around draft.');
const source = 'https://around.net/products/ingest/';
const changes = {
  es: {
    productTitle: 'El contexto del producto',
    productText: 'Around presenta Ingest Monitor como una herramienta para supervisar ingestas de un MAM desde una sala de control virtual. Su página pública destaca la visualización en vivo, las advertencias configurables y la compatibilidad con VIZ ONE. Ese es el contexto del producto en el que se sitúa este caso de diseño.',
    blocks: {
      'Revisión y feedback': 'La revisión presentada plantea obtener feedback en reuniones y a través de videos entregados por stakeholders, además de trabajar con un entorno semejante al de los usuarios. Es una forma de contrastar la propuesta con situaciones de operación y orientar los cambios de interfaz.\n\nDentro del caso, esa revisión se organiza en desafíos, cambios y ajustes: desde la lectura de estados hasta la distribución de las vistas y la estabilidad del layout.',
      'Lo que documenta este caso': 'El caso reúne una propuesta de monitoreo con vistas múltiples, estados de ingesta y decisiones de interacción. La presentación permite seguir cómo se relacionan la información que necesita el operador, la jerarquía visual y los ajustes de layout.\n\nLos entregables mostrados incluyen variantes de interfaz y ejemplos técnicos. El foco de este relato está en esas decisiones y en el proceso de diseño, sin atribuirles resultados de negocio que todavía no están documentados.',
    },
    sourceNote: `Contexto del producto consultado en la página oficial: ${source}. Las capacidades del producto no se atribuyen automáticamente a mi implementación individual.`,
  },
  en: {
    productTitle: 'Product context',
    productText: 'Around presents Ingest Monitor as a tool for supervising MAM ingests from a virtual control room. Its public page highlights live monitoring, configurable warnings and VIZ ONE compatibility. This is the product context for the design case study.',
    blocks: {
      'Review and feedback': 'The presented review proposes gathering feedback in meetings and through videos delivered by stakeholders, as well as working in an environment resembling the users’ setting. This provides a way to compare the proposal with operational situations and guide interface changes.\n\nThe case organizes that review around challenges, changes and adjustments: from understanding states to arranging views and keeping the layout stable.',
      'What this case documents': 'The case brings together a monitoring proposal with multiple views, ingest states and interaction decisions. The presentation traces the relationship between the information operators need, visual hierarchy and layout adjustments.\n\nThe deliverables shown include interface variants and technical examples. This narrative focuses on those decisions and the design process, without claiming business outcomes that have not yet been documented.',
    },
    sourceNote: `Product context consulted on the official page: ${source}. Product capabilities are not automatically attributed to my individual implementation.`,
  },
};
for (const [language, change] of Object.entries(changes)) {
  const blocks = parsed.data.locales[language].contentBlocks;
  if (!blocks.some(block => block.title === change.productTitle)) blocks.splice(1, 0, {_template: 'section', title: change.productTitle, text: change.productText});
  for (const [title, text] of Object.entries(change.blocks)) {
    const block = blocks.find(item => item.title === title);
    if (!block) throw new Error(`Missing source section: ${language}.${title}`);
    block.text = text;
  }
  const notes = blocks.find(block => block.collapsed);
  if (!notes) throw new Error(`Missing editorial notes for ${language}`);
  if (!notes.text.includes(source)) notes.text += `\n\n${change.sourceNote}`;
}
const backup = new URL(`../.e2e/content-intake/around-before-product-${Date.now()}.mdx`, import.meta.url);
await mkdir(new URL('../.e2e/content-intake/', import.meta.url), {recursive: true});
await writeFile(backup, raw, {flag: 'wx'});
await writeFile(file, matter.stringify(parsed.content, parsed.data));
console.log('Updated official product context in the bilingual Around draft.');
