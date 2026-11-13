import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import matter from 'gray-matter';

// Editorial preparation only: never writes to content/, public/, Git or TinaCloud.
// Candidates remain drafts. Approval and the final release control are separate steps.
const batches = [
  ['professional', ['around-ingest-monitor']],
  ['community-3d', ['botf', 'supremacy', 'casa']],
  ['academic-3d', ['discovery', 'tren', 'pitufos', 'chokie']],
  ['academic-web', ['rioko', 'paris', 'tienda-geekies']],
  ['graphic-design', ['mate', 'cv-personal']],
  ['academic-animation', ['rocket', 'mundo', 'toplomero']],
];
const batchArgument = process.argv.find(argument => argument.startsWith('--batches='));
const selectedBatches = batchArgument ? batchArgument.slice('--batches='.length).split(',') : batches.map(([name]) => name);
const slugArgument = process.argv.find(argument => argument.startsWith('--slugs='));
const selectedSlugs = slugArgument ? slugArgument.slice('--slugs='.length).split(',') : null;
if (selectedBatches.some(name => !batches.some(([batch]) => batch === name))) {
  throw new Error('Unknown editorial batch. Use the names declared in this script.');
}
if (selectedSlugs?.some(slug => !batches.some(([batch, slugs]) => selectedBatches.includes(batch) && slugs.includes(slug)))) {
  throw new Error('Unknown article or article outside the selected batches.');
}
const stamp = new Date().toISOString();
const directory = path.join('.e2e', 'article-releases', `pending-${stamp.replace(/[:.]/g, '-')}`);
const sha256 = value => createHash('sha256').update(value).digest('hex');
const manifest = {
  preparedAt: stamp,
  publicationAuthorized: false,
  liveSourcesChanged: false,
  excluded: [
    { slug: 'odontopro', reason: 'Author hold: legal review of database backup terms.' },
    { slug: 'useodontopro', reason: 'Author hold: legal review of database backup terms.' },
  ],
  articles: [],
  media: [],
};
fs.mkdirSync(directory, { recursive: true });

for (const [batch, slugs] of batches) {
  if (!selectedBatches.includes(batch)) continue;
  for (const slug of slugs) {
    if (selectedSlugs && !selectedSlugs.includes(slug)) continue;
    const source = `src/content/projects/${slug}.mdx`;
    const original = fs.readFileSync(source);
    const document = matter(original.toString('utf8'));
    // Read current Tina content, never replay the old intake scripts over newer edits.
    if (document.data.publicationStatus !== 'draft') {
      throw new Error(`${slug}: expected a draft; do not prepare a published article as a new release.`);
    }
    const notes = {};
    for (const [language, locale] of Object.entries(document.data.locales ?? {})) {
      const blocks = locale.contentBlocks ?? [];
      notes[language] = blocks.filter(block => block.collapsed === true);
      locale.contentBlocks = blocks.filter(block => block.collapsed !== true);
    }
    const media = new Map();
    function prepare(value) {
      const reviewPrefix = '/revision/media/';
      const publicPrefix = `/assets/projects/${slug}/`;
      if (typeof value === 'string' && (value.startsWith(reviewPrefix) || value.startsWith(publicPrefix))) {
        const review = value.startsWith(reviewPrefix);
        const filename = value.slice(review ? reviewPrefix.length : publicPrefix.length);
        if (path.basename(filename) !== filename || !filename) throw new Error(`${slug}: unexpected media path.`);
        const input = review ? `src/editorial/assets/${filename}` : `public${value}`;
        const target = `public/assets/projects/${slug}/${filename}`;
        const url = `/assets/projects/${slug}/${filename}`;
        if (!media.has(value)) {
          const bytes = fs.readFileSync(input);
          const candidate = path.join(directory, target);
          fs.mkdirSync(path.dirname(candidate), { recursive: true });
          fs.writeFileSync(candidate, bytes, { flag: 'wx' });
          media.set(value, { source: input, destination: target, url, bytes: bytes.length, sha256: sha256(bytes) });
        }
        return url;
      }
      if (Array.isArray(value)) return value.map(prepare);
      if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, prepare(nested)]));
      }
      return value;
    }
    const metadata = prepare(document.data);
    // No publication date or project year is inferred from folder names or screenshots.
    metadata.publicationStatus = 'draft';
    const target = path.join(directory, source);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, matter.stringify(document.content, metadata, { lineWidth: 80 }), { flag: 'wx' });
    const backup = path.join(directory, 'originals', `${slug}.mdx`);
    fs.mkdirSync(path.dirname(backup), { recursive: true });
    fs.writeFileSync(backup, original, { flag: 'wx' });
    manifest.articles.push({
      slug, batch, source, sourceSha256: sha256(original), candidate: target,
      publicationStatus: 'draft',
      selectionProvisional: slug === 'tienda-geekies',
      editorialNotes: notes,
      mediaCount: media.size,
      publicPathsAfterApproval: [`/projects/${slug}`, `/projects/en/${slug}`],
    });
    manifest.media.push(...media.values());
  }
}
fs.writeFileSync(path.join(directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ directory, candidates: manifest.articles.length, media: manifest.media.length, excluded: manifest.excluded.map(item => item.slug), published: false }));
