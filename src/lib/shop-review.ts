import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { ShopProductDraft } from './shop-editorial';
import type { ShopFilamentColour } from './shop-colours';

const draftDirectory = resolve(process.cwd(), 'src/editorial/shop-products');
const filamentCataloguePath = resolve(process.cwd(), 'src/data/bambu-filaments.json');
const sourcePattern = /^src\/editorial\/shop-assets\/(intake-\d{4}-\d{2}-\d{2})\/([a-zA-Z0-9_-]+\.jpg)$/;

// Keep review presets current just like saved drafts. A long-lived dev module
// must not retain an older imported catalogue after an editorial sync.
export async function shopReviewFilamentColours(): Promise<ShopFilamentColour[]> {
  if (import.meta.env.MODE !== 'development') return [];
  const catalogue = JSON.parse(await readFile(filamentCataloguePath, 'utf8'));
  return catalogue.colours;
}

// Server-side review only. Read saved files on each request, including Tina edits.
export async function shopReviewDrafts(): Promise<{ slug: string; product: ShopProductDraft }[]> {
  if (import.meta.env.MODE !== 'development') return [];
  const files = (await readdir(draftDirectory)).filter(file => /^[a-z0-9-]+\.json$/.test(file)).sort();
  return Promise.all(files.map(async file => ({
    slug: file.replace(/\.json$/, ''),
    product: JSON.parse(await readFile(resolve(draftDirectory, file), 'utf8')) as ShopProductDraft,
  })));
}

export function shopReviewPhoto(sourcePath?: string) {
  const match = sourcePath?.match(sourcePattern);
  return match ? {
    batch: match[1], file: match[2], sourcePath: match[0],
    url: `/revision/tienda/media/${match[1]}/${match[2]}`,
  } : undefined;
}

export async function shopReviewPhotos() {
  const photos = (await shopReviewDrafts()).flatMap(({ product }) =>
    (product.photos ?? []).flatMap(photo => {
      const source = shopReviewPhoto(photo.sourcePath);
      return source ? [source] : [];
    }));
  return [...new Map(photos.map(photo => [photo.sourcePath, photo])).values()];
}
