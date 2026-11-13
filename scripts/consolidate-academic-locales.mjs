// Authoring migration: read current Tina edits, write two bilingual documents,
// retain an exact backup, then remove only the four superseded draft files.
import { readFile, writeFile, mkdir, unlink, access } from 'node:fs/promises';
import matter from 'gray-matter';

const textFields = ['title', 'description', 'type', 'role', 'client', 'timeline', 'status', 'imageAlt', 'imageCaption', 'imageCredit', 'contentBlocks'];
const sharedFields = ['publicationStatus', 'year', 'date', 'order', 'image', 'imagePortrait', 'stack', 'categories', 'showInPortfolio', 'showInResume', 'points', 'codeSnippet'];
const batch = [];
for (const slug of ['mundo', 'toplomero']) {
  const target = new URL(`../src/content/projects/${slug}.mdx`, import.meta.url);
  try { await access(target); throw new Error(`Refusing to overwrite ${slug}.mdx`); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const originals = {};
  const locales = {};
  const shared = {};
  for (const language of ['es', 'en']) {
    const file = new URL(`../src/content/projects/${slug}-${language}.mdx`, import.meta.url);
    const raw = await readFile(file, 'utf8');
    const parsed = matter(raw);
    if (parsed.data.publicationStatus !== 'draft') throw new Error(`Refusing to migrate non-draft ${slug}-${language}`);
    if (parsed.content.trim()) throw new Error(`Review unexpected legacy body in ${slug}-${language}`);
    originals[language] = { file, raw };
    locales[language] = Object.fromEntries(textFields.filter(key => parsed.data[key] !== undefined).map(key => [key, parsed.data[key]]));
    for (const key of sharedFields) {
      if (language === 'es') shared[key] = parsed.data[key];
      else if (JSON.stringify(shared[key]) !== JSON.stringify(parsed.data[key])) throw new Error(`Shared field differs: ${slug}.${key}`);
    }
  }
  const document = { title: locales.es.title, ...shared, contentFormat: 'bilingual', language: 'es', locales };
  // Clone before YAML serialization to avoid aliases tying independent form values.
  batch.push({ slug, target, originals, output: matter.stringify('', JSON.parse(JSON.stringify(document))) });
}
const backup = new URL(`../.e2e/migrations/bilingual-${Date.now()}/`, import.meta.url);
await mkdir(backup, { recursive: true });
for (const item of batch) {
  for (const [language, original] of Object.entries(item.originals)) {
    await writeFile(new URL(`${item.slug}-${language}.mdx`, backup), original.raw, {flag: 'wx'});
  }
}
// Write every replacement before removing any superseded source.
for (const item of batch) await writeFile(item.target, item.output, {flag: 'wx'});
for (const item of batch) {
  for (const original of Object.values(item.originals)) await unlink(original.file);
  console.log(`Consolidated ${item.slug}: ES/EN in one draft`);
}
console.log(`Exact pre-migration copies: ${backup.pathname}`);
