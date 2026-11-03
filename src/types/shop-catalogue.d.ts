declare module 'virtual:shop-catalogue' {
  export const selection: { slugs: string[]; latestSlugs: string[]; heroSlug: string };
  export const documents: Record<string, import('../lib/shop-editorial').ShopProductDraft>;
  export const images: Record<string, import('astro').ImageMetadata>;
}
