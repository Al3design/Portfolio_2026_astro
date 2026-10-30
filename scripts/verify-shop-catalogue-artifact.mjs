import { readFile, readdir, access, mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative, extname } from 'node:path';

// Inspect the built output, not source templates or the development server.
const root = resolve('dist');
const slugs = ['arbol-decorativo', 'figura-articulada-verde-roja', 'flor-decorativa-blanca', 'jarron-acanalado', 'maceta-acanalada-con-plato', 'maceta-perro', 'pieza-articulada-roja-negra', 'soporte-control-creeper'];
const errors = [];
const pages = [];
const photos = new Set();
const socialPhotos = new Set();
const feeds = [];
const privateNotes = (await Promise.all(slugs.map(async slug => {
  const draft = JSON.parse(await readFile(resolve('src/editorial/shop-products', `${slug}.json`), 'utf8'));
  return draft.productionNotes?.trim();
}))).filter(Boolean);
for (const [base, price, delivery, included] of [
  ['tienda', 'Precio a consultar', 'Según stock y a confirmar.', 'Solo incluye la impresión 3D.'],
  ['en/shop-3d', 'Price on enquiry', 'Subject to stock; to be confirmed.', 'Only the 3D print is included.'],
]) {
  for (const slug of ['', base === 'tienda' ? 'coleccion' : 'collection', ...slugs]) {
    const page = [base, slug, 'index.html'].filter(Boolean).join('/');
    try {
      const html = await readFile(resolve(root, page), 'utf8');
      pages.push(page);
      if (!html.includes(price) || !html.includes(delivery) || !html.includes(included)) errors.push(`${page}: missing enquiry terms`);
      if (/\b(?:href|src)=["'][^"']*(?:\/revision\/|\/admin\/)/.test(html)) errors.push(`${page}: editorial URL exposed`);
      if (slugs.includes(slug)) {
        if (!html.includes(`/${base}/${slug}/`)) errors.push(`${page}: missing canonical piece URL`);
        const socialImage = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
        if (!socialImage || !new URL(socialImage[1]).pathname.endsWith('.jpg')) errors.push(`${page}: missing JPEG social photograph`);
        else {
          const asset = new URL(socialImage[1]).pathname;
          socialPhotos.add(asset);
          try { await access(resolve(root, `.${asset}`)); }
          catch { errors.push(`${page}: missing social photo ${asset}`); }
        }
        if (!html.includes('shop-share') || !html.includes('https://wa.me/?')) errors.push(`${page}: missing piece sharing controls`);
      }
      const webp = [...html.matchAll(/\bsrc=["'](\/_astro\/[^"']+\.webp(?:\?[^"']*)?)["']/g)];
      if (!webp.length) errors.push(`${page}: missing optimized photos`);
      for (const [, src] of webp) {
        const asset = decodeURIComponent(src.split('?')[0]);
        photos.add(asset);
        try { await access(resolve(root, `.${asset}`)); }
        catch { errors.push(`${page}: missing asset ${asset}`); }
      }
    } catch (error) { errors.push(`${page}: ${error.message}`); }
  }
}
for (const base of ['tienda', 'en/shop-3d']) {
  const file = `${base}/rss.xml`;
  try {
    const xml = await readFile(resolve(root, file), 'utf8');
    feeds.push(file);
    if ((xml.match(/<item>/g) ?? []).length !== slugs.length) errors.push(`${file}: wrong piece count`);
    for (const slug of slugs) {
      if (!xml.includes(`/${base}/${slug}/`)) errors.push(`${file}: missing piece ${slug}`);
    }
    if ((xml.match(/<media:content\b/g) ?? []).length !== slugs.length) errors.push(`${file}: missing piece photographs`);
    if (/localhost|shop-assets|sourcePath|rightsNotes|productionNotes/.test(xml)) errors.push(`${file}: private or development data in feed`);
  } catch (error) { errors.push(`${file}: ${error.message}`); }
}
async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesAt(resolve(directory, entry.name)) : [resolve(directory, entry.name)]))).flat();
}
const files = await filesAt(root);
for (const file of files) {
  const name = relative(root, file).replaceAll('\\', '/');
  if (/(^|\/)(?:revision|shop-products|shop-assets)(\/|$)/.test(name)) errors.push(`${name}: private editorial path in output`);
  if (slugs.some(slug => name.endsWith(`/${slug}.json`) || name === `${slug}.json`)) errors.push(`${name}: editorial JSON in output`);
  if (['.html', '.js', '.json', '.map', '.xml'].includes(extname(file))) {
    const text = await readFile(file, 'utf8');
    if (privateNotes.some(note => text.includes(note))) {
      errors.push(`${name}: internal production note in output`);
    }
  }
}
const result = { pages: pages.length, feeds: feeds.length, optimizedPhotoSources: photos.size, socialPhotoSources: socialPhotos.size, errors };
await mkdir('output/shop-r37', { recursive: true });
await writeFile('output/shop-r37/artifact.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
