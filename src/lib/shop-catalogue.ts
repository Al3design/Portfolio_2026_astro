import type { ImageMetadata } from 'astro';
import type { ShopProductDraft } from './shop-editorial';
import { shopEditorialDetailKeys } from './shop-editorial';
import { shopCatalogueSlugs } from '../data/shop-release';
import type { ShopLanguage } from '../data/shop-demo';

const documents = import.meta.glob<string>('../editorial/shop-products/*.json', {
  eager: true, query: '?raw', import: 'default',
});
// Literal, explicit photo selection: an unselected future draft or photograph
// must not enter Vite's asset graph merely because it shares an intake folder.
const images = import.meta.glob<{ default: ImageMetadata }>([
  '../editorial/shop-assets/intake-2026-10-29/20260826_110646.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_190853.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_190904.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_190917.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_190926.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_191125.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_191137.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_191215.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261013_191245.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165831.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165842.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165852.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165902.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165903.jpg',
  '../editorial/shop-assets/intake-2026-10-29/20261016_165908.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-0dd34c4b-7218-41fa-848d-2b8967f36d54.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-3385fd7d-6940-4ef2-972d-4a3748335d49.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-37350483-cb6d-4f3d-adc9-853061b13518.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-4fe453a6-e887-496c-83f3-de06c2145154.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-6b3aec1b-e895-4b81-94cb-60f8e9c1cf4b.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-7580cd8b-65bd-44e9-bef2-df8ea478313b.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-84353a6d-01e6-42e2-b19b-e7a5a9349975.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-8e7e6627-a2e1-4ec0-bea0-6dd3d6cf2409.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-a082e1bc-2689-4869-8019-06ade5d11c6f.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-af378ade-0e85-4dca-9467-b168edde7f97.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-b24d78b3-1df5-4e3c-bde7-8cfee9b20362.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-cb5c8e07-675b-494c-99fb-c1ce72156a8e.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-e6e8ae42-e243-48f9-83da-5d13f95497de.jpg',
  '../editorial/shop-assets/intake-2026-10-29/codex-clipboard-fea55375-15fb-49cc-a4cb-878904c84228.jpg',
]);

export const shopPieceUrl = (slug: string, language: ShopLanguage) =>
  `${language === 'es' ? '/tienda' : '/en/shop-3d'}/${encodeURIComponent(slug)}/`;

// Build/server projection only. Never pass editorial documents to a client
// island: internal notes, source paths and licence history are not public data.
export async function shopCatalogue() {
  return Promise.all(shopCatalogueSlugs.map(async slug => {
    const raw = documents[`../editorial/shop-products/${slug}.json`];
    if (!raw) throw new Error(`Missing selected shop document: ${slug}`);
    const draft = JSON.parse(raw) as ShopProductDraft;
    const es = draft.locales?.es;
    const en = draft.locales?.en;
    if (!es?.title?.trim() || !en?.title?.trim() || !es.description?.trim() || !en.description?.trim()) {
      throw new Error(`Missing bilingual shop copy: ${slug}`);
    }
    const photos = await Promise.all((draft.photos ?? []).map(async photo => {
      if (photo.kind !== 'photo' || !/^src\/editorial\/shop-assets\/intake-\d{4}-\d{2}-\d{2}\/[a-zA-Z0-9_-]+\.jpg$/.test(photo.sourcePath ?? '')) {
        throw new Error(`Invalid selected shop photograph: ${slug}`);
      }
      const load = images[`../${photo.sourcePath!.slice(4)}`];
      if (!load || !photo.altEs?.trim() || !photo.altEn?.trim()) throw new Error(`Missing shop image or alt: ${slug}`);
      return { image: (await load()).default, alt: { es: photo.altEs, en: photo.altEn } };
    }));
    if (!photos.length) throw new Error(`No photographs for selected shop piece: ${slug}`);
    const details = Object.fromEntries(shopEditorialDetailKeys.map(key => [key, {
      es: draft.details?.[key]?.es?.trim(), en: draft.details?.[key]?.en?.trim(),
    }])) as NonNullable<ShopProductDraft['details']>;
    return {
      slug, category: draft.category,
      title: { es: es.title, en: en.title },
      description: { es: es.description, en: en.description },
      palette: draft.palette, photographedColours: draft.photographedColours,
      details, photos,
    };
  }));
}

export type ShopCatalogueProduct = Awaited<ReturnType<typeof shopCatalogue>>[number];
