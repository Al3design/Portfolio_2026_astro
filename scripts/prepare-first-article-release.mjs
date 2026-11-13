import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import matter from 'gray-matter';

// Prepare a reviewable release outside Astro's collections and public/.
// This command does not publish, stage, commit or change the live MDX files.
const workspace = process.cwd();
const stamp = new Date().toISOString();
const directory = path.join('.e2e', 'article-releases', stamp.replace(/[:.]/g, '-'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const plan = JSON.parse(fs.readFileSync('openspec/changes/contenido-real-y-tienda-3d/first-article-media-plan.json', 'utf8'));
const manifest = { preparedAt: stamp, proposedPublicationDate: stamp.slice(0, 10), articles: [], files: [] };
fs.mkdirSync(directory, { recursive: true });
for (const slug of ['gitcron', 'odontopau']) {
  const article = plan.find(item => item.slug === slug);
  const source = `src/content/projects/${slug}.mdx`;
  const bytes = fs.readFileSync(source);
  const document = matter(bytes.toString('utf8'));
  const replacements = new Map(article.files.map(file => [file.preview, file.proposedPublicUrl]));
  function replace(value) {
    if (typeof value === 'string') return replacements.get(value) ?? value;
    if (Array.isArray(value)) return value.map(replace);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, replace(nested)]));
    return value;
  }
  const metadata = replace(document.data);
  metadata.publicationStatus = 'published';
  metadata.date = manifest.proposedPublicationDate;
  const target = path.join(directory, source);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, matter.stringify(document.content, metadata, { lineWidth: 80 }), { flag: 'wx' });
  manifest.articles.push({ slug, source, sourceSha256: hash(bytes), candidate: target, publicPaths: [`/projects/${slug}`, `/projects/en/${slug}`] });
  for (const media of article.files) {
    const mediaBytes = fs.readFileSync(media.source);
    const destination = `public${media.proposedPublicUrl}`;
    const candidate = path.join(directory, destination);
    fs.mkdirSync(path.dirname(candidate), { recursive: true });
    fs.writeFileSync(candidate, mediaBytes, { flag: 'wx' });
    manifest.files.push({ source: media.source, destination, candidate, bytes: mediaBytes.length, sha256: hash(mediaBytes) });
  }
}
fs.writeFileSync(path.join(directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ directory: path.relative(workspace, path.resolve(directory)), articles: manifest.articles.map(item => item.slug), media: manifest.files.length, bytes: manifest.files.reduce((sum, file) => sum + file.bytes, 0), liveSourcesChanged: false }));
