import { useTina, tinaField } from 'tinacms/dist/react';
import type { ShopProductQuery } from '../../tina/__generated__/types';
import ShopProductView, { type ShopProductViewData, type ShopProductAnnotations } from './ShopProductView';
import { resolveShopPalette, type ShopFilamentColour } from '@/lib/shop-colours';
import { shopEditorialDetailKeys, type ShopProductDraft } from '@/lib/shop-editorial';
import { shopPhotoPreviewUrl } from '@/lib/shop-media-paths.mjs';
import type { ShopLanguage } from '@/data/shop-demo';

interface Props {
  query: string;
  variables: { relativePath: string };
  data: ShopProductQuery;
  language: ShopLanguage;
  backHref: string;
  references: ShopFilamentColour[];
  iconPath: string;
}

export default function ShopProductLivePreview({ query, variables, data, language, backHref, references, iconPath }: Props) {
  const { data: current } = useTina({ query, variables, data });
  // Tina decorates these source objects for tinaField. Derive the view from
  // them on every render; do not mirror edits into a second React state.
  const document = current.shopProduct;
  const draft = document as unknown as ShopProductDraft;
  const locale = document.locales?.[language];
  const photos = document.photos?.filter(photo => photo != null) ?? [];
  const product: ShopProductViewData = {
    title: locale?.title?.trim() || document.title || (language === 'es' ? 'Nueva pieza' : 'New piece'),
    description: locale?.description || '',
    category: draft.category,
    palette: resolveShopPalette(draft.palette ?? undefined, draft.photographedColours ?? [], references),
    details: draft.details,
    photos: photos.flatMap(photo => {
      const src = shopPhotoPreviewUrl({ image: photo.image ?? undefined, sourcePath: photo.sourcePath ?? undefined });
      return src ? [{
        src, alt: (language === 'es' ? photo.altEs : photo.altEn) || '',
        imageField: tinaField(photo, photo.image ? 'image' : 'sourcePath'),
        altField: tinaField(photo, language === 'es' ? 'altEs' : 'altEn'),
      }] : [];
    }),
  };
  const annotations: ShopProductAnnotations = {
    title: locale ? tinaField(locale, 'title') : undefined,
    description: locale ? tinaField(locale, 'description') : undefined,
    category: tinaField(document, 'category'),
    palette: tinaField(document, 'palette'),
    details: Object.fromEntries(shopEditorialDetailKeys.map(key => [key,
      document.details?.[key] ? tinaField(document.details[key], language) : undefined,
    ])),
  };
  return <ShopProductView product={product} language={language} backHref={backHref} iconPath={iconPath} annotations={annotations} preview />;
}
