import { shopEditorialDetailKeys } from './shop-editorial';
import type { ShopProductDraft } from './shop-editorial';
import { shopCatalogueSlugs } from '../data/shop-release';
import type { ShopLanguage } from '../data/shop-demo';

import { documents, images } from 'virtual:shop-catalogue';
import { shopPhotoSource } from './shop-media-paths.mjs';

export const shopPieceUrl = (slug: string, language: ShopLanguage) =>
  `${language === 'es' ? '/tienda' : '/en/shop-3d'}/${encodeURIComponent(slug)}/`;

export const shopCollectionUrl = (language: ShopLanguage) =>
  language === 'es' ? '/tienda/coleccion/' : '/en/shop-3d/collection/';

// Build/server projection only. Never pass editorial documents to a client
// island: internal notes and local file paths are not public data.
export async function shopCatalogue() {
  return Promise.all(shopCatalogueSlugs.map(async slug => {
    const draft = documents[slug];
    if (!draft) throw new Error(`Missing selected shop document: ${slug}`);
    const es = draft.locales?.es;
    const en = draft.locales?.en;
    if (!es?.title?.trim() || !en?.title?.trim() || !es.description?.trim() || !en.description?.trim()) {
      throw new Error(`Missing bilingual shop copy: ${slug}`);
    }
    const photos = await Promise.all((draft.photos ?? []).map(async photo => {
      const image = images[shopPhotoSource(photo)];
      if (photo.kind !== 'photo' || !image || !photo.altEs?.trim() || !photo.altEn?.trim()) throw new Error(`Missing shop image or alt: ${slug}`);
      return { image, alt: { es: photo.altEs, en: photo.altEn } };
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
