import { readFile, realpath } from 'node:fs/promises';
import { resolve, relative, isAbsolute } from 'node:path';
import { shopPhotoSource } from '../../src/lib/shop-media-paths.mjs';

const referencePattern = /^src\/editorial\/shop-products\/([a-z0-9]+(?:-[a-z0-9]+)*)\.json$/;

/** @param {unknown} reference */
function slugFor(reference) {
  const match = typeof reference === 'string' && reference.match(referencePattern);
  if (!match) throw new Error(`Invalid shop product reference: ${String(reference)}`);
  return match[1];
}

/** Tina persists object-list rows as { product: <reference> }.
 * @param {unknown} entry
 */
function selectionSlugFor(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry) || !('product' in entry)) {
    throw new Error('Invalid shop selection row: expected an object with a product reference.');
  }
  return slugFor(entry.product);
}

/** Resolve symlinks as well as ../ before allowing a selected file into Vite.
 * @param {string} base @param {string} file
 */
export async function containedShopFile(base, file) {
  const [directory, candidate] = await Promise.all([realpath(base), realpath(file)]);
  const path = relative(directory, candidate);
  if (!path || path === '..' || path.startsWith('../') || path.startsWith('..\\') || isAbsolute(path)) {
    throw new Error(`Shop file escapes its approved directory: ${file}`);
  }
  return candidate;
}

/** Server/build only. The reader never enumerates draft documents or images.
 * @param {string} root @param {(file: string) => void} [watch]
 */
export async function readShopSelection(root, watch = () => {}) {
  const file = resolve(root, 'src/editorial/shop-catalogue/catalogue.json');
  watch(file);
  const config = JSON.parse(await readFile(file, 'utf8'));
  if (!Array.isArray(config.products) || !config.products.length) throw new Error('Shop catalogue needs at least one selected product.');
  if (config.latest !== undefined && !Array.isArray(config.latest)) throw new Error('Shop latest must be a list.');
  const slugs = config.products.map(selectionSlugFor);
  const latestSlugs = (config.latest ?? []).map(selectionSlugFor);
  const heroSlug = slugFor(config.hero);
  if (new Set(slugs).size !== slugs.length) throw new Error('Duplicate shop product selection.');
  if (latestSlugs.length > 3 || new Set(latestSlugs).size !== latestSlugs.length) throw new Error('Shop latest must contain at most three distinct products.');
  if (![heroSlug, ...latestSlugs].every(slug => slugs.includes(slug))) throw new Error('Shop hero and latest must belong to the selected catalogue.');

  /** @type {Record<string, import('../../src/lib/shop-editorial').ShopProductDraft>} */
  const documents = {};
  /** @type {Map<string, string>} */
  const photoFiles = new Map();
  for (const slug of slugs) {
    const documentPath = resolve(root, `src/editorial/shop-products/${slug}.json`);
    watch(documentPath);
    const resolvedDocument = await containedShopFile(resolve(root, 'src/editorial/shop-products'), documentPath);
    const product = JSON.parse(await readFile(resolvedDocument, 'utf8'));
    if (!product.locales?.es?.title?.trim() || !product.locales?.en?.title?.trim()
      || !product.locales?.es?.description?.trim() || !product.locales?.en?.description?.trim()) {
      throw new Error(`Missing bilingual shop copy: ${slug}`);
    }
    if (!Array.isArray(product.photos) || !product.photos.length) throw new Error(`No photographs for selected shop piece: ${slug}`);
    for (const photo of product.photos) {
      if (photo.kind !== 'photo' || !photo.altEs?.trim() || !photo.altEn?.trim()) throw new Error(`Missing shop photograph type or bilingual alt: ${slug}`);
      const source = shopPhotoSource(photo);
      const publicPhoto = source.startsWith('/');
      const photoPath = resolve(root, publicPhoto ? `public${source}` : source);
      watch(photoPath);
      const base = resolve(root, publicPhoto ? 'public/assets/shop' : 'src/editorial/shop-assets');
      const resolvedPhoto = await containedShopFile(base, photoPath);
      watch(resolvedPhoto);
      photoFiles.set(source, resolvedPhoto);
    }
    documents[slug] = product;
  }
  return { selection: { slugs, latestSlugs, heroSlug }, documents, photoFiles };
}
