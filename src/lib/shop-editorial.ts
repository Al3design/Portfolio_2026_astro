import type { ShopLanguage, ShopLocalizedText } from '../data/shop-demo';
import type { ShopColourId, ShopPaletteEntry } from './shop-colours';

export const shopEditorialDetailKeys = ['price', 'material', 'dimensions', 'variants', 'care', 'availability', 'deliveryTime', 'included'] as const;
export type ShopEditorialDetailKey = typeof shopEditorialDetailKeys[number];
export const shopEditorialDetailLabels: Record<ShopLanguage, Record<ShopEditorialDetailKey, string>> = {
  es: { price: 'Precio', material: 'Material', dimensions: 'Medidas (opcional)', variants: 'Colores y variantes', care: 'Cuidados', availability: 'Disponibilidad', deliveryTime: 'Entrega', included: 'Qué incluye' },
  en: { price: 'Price', material: 'Material', dimensions: 'Dimensions (optional)', variants: 'Colors and variants', care: 'Care', availability: 'Availability', deliveryTime: 'Delivery', included: 'What is included' },
};

// Editorial preparation only. No value here enables publication or sales.
export const shopEditorialCategories = [
  { value: 'home', label: 'Hogar y deco' },
  { value: 'desk', label: 'Escritorio' },
  { value: 'organization', label: 'Organización' },
  { value: 'design', label: 'Objetos de diseño' },
] as const;

export interface ShopProductDraft {
  title: string;
  status: 'draft' | 'review';
  category?: typeof shopEditorialCategories[number]['value'];
  rightsStatus: 'pending' | 'own' | 'licensed';
  rightsSource?: string;
  rightsNotes?: string;
  productionMode: 'pending' | 'stock' | 'made-to-order' | 'mixed';
  productionNotes?: string;
  photographedColours?: ShopColourId[];
  palette?: ShopPaletteEntry[];
  // Tina indexes object fields recursively: omit unknown fields instead of null.
  details?: Partial<Record<ShopEditorialDetailKey, Partial<ShopLocalizedText>>>;
  locales?: Partial<Record<'es' | 'en', {
    title?: string;
    description?: string;
  }>>;
  photos?: {
    image?: string;
    sourcePath?: string;
    kind?: 'photo' | 'render';
    altEs?: string;
    altEn?: string;
    captionEs?: string;
    captionEn?: string;
    credit?: string;
  }[];
}
