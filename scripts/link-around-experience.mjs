// Authoring update requested by Alejandro: employment context and stable relation.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import matter from 'gray-matter';

const paths = {
  article: new URL('../src/content/projects/around-ingest-monitor.mdx', import.meta.url),
  employment: new URL('../src/content/projects/around.mdx', import.meta.url),
};
const originals = {};
const documents = {};
for (const [key, path] of Object.entries(paths)) {
  originals[key] = await readFile(path, 'utf8');
  documents[key] = matter(originals[key]);
}
const article = documents.article.data;
if (article.publicationStatus !== 'draft') throw new Error('Expected Around article to remain a draft.');
article.title = 'Around MD · Ingest Monitor';
article.experienceSlug = 'around';
article.showInResume = false;
const context = {
  es: {
    status: 'Trabajo profesional',
    description: 'Trabajo de UX Research y UI Design realizado durante mi etapa laboral en Around MD: una interfaz para monitorear ingestas audiovisuales en un sistema MAM y reconocer alertas y estados de operación.',
    prefix: 'Trabajé en Ingest Monitor durante mi etapa laboral en Around MD, bajo una contratación a plazo fijo. Mi participación se centró en UX Research y UI Design. Este artículo presenta un proyecto de esa experiencia profesional, que también figura en RESUME.',
  },
  en: {
    status: 'Professional work',
    description: 'UX Research and UI Design work carried out during my employment at Around MD: an interface for monitoring audiovisual ingests in a MAM system and recognizing operational alerts and states.',
    prefix: 'I worked on Ingest Monitor during my employment at Around MD under a fixed-term contract. My role focused on UX Research and UI Design. This article presents a project from that professional experience, which is also listed in RESUME.',
  },
};
for (const [language, copy] of Object.entries(context)) {
  const locale = article.locales[language];
  locale.type = 'Fixed-term contract';
  locale.client = 'Around MD';
  locale.status = copy.status;
  locale.description = copy.description;
  const first = locale.contentBlocks.find(block => block._template === 'section');
  if (!first) throw new Error(`Missing context in ${language}`);
  if (!first.text.includes(copy.prefix)) first.text = `${copy.prefix}\n\n${first.text}`;
}
// Company wording follows Alejandro's latest correction; dates and role retained.
documents.employment.data.client = 'Around MD';
const backup = new URL(`../.e2e/content-intake/around-employment-${Date.now()}/`, import.meta.url);
await mkdir(backup, {recursive: true});
for (const [key, path] of Object.entries(paths)) {
  await writeFile(new URL(`${key}.mdx`, backup), originals[key], {flag: 'wx'});
  await writeFile(path, matter.stringify(documents[key].content, documents[key].data));
}
console.log('Linked Ingest Monitor to the existing Around employment; article remains a draft.');
