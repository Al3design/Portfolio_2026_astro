import type { ReactNode } from 'react';
import ShopPaletteView from './ShopPaletteView';
import ShopWhatsAppButton from './ShopWhatsAppButton';
import { shopEditorialDetailKeys, shopEditorialDetailLabels, type ShopProductDraft, type ShopEditorialDetailKey } from '@/lib/shop-editorial';
import type { resolveShopPalette } from '@/lib/shop-colours';
import { shopInquiryUrl } from '@/lib/shop-inquiry';
import type { ShopLanguage } from '@/data/shop-demo';
import styles from '@/styles/pages/_shop-review.module.scss';

export interface ShopProductViewData {
  title: string;
  description: string;
  category?: ShopProductDraft['category'];
  palette: ReturnType<typeof resolveShopPalette>;
  details: ShopProductDraft['details'];
  photos: { src: string; alt: string; caption?: string; imageField?: string; altField?: string }[];
}
export interface ShopProductAnnotations {
  title?: string; description?: string; category?: string; palette?: string;
  details?: Partial<Record<ShopEditorialDetailKey, string>>;
}

// One piece template for static public pages and the local Tina live island.
// Astro supplies optimized gallery markup publicly; the editor supplies live
// image URLs without requesting a rebuild on every unsaved keystroke.
export default function ShopProductView({ product, language, backHref, iconPath, gallery, children, annotations = {}, preview = false }: {
  product: ShopProductViewData; language: ShopLanguage; backHref: string; iconPath: string;
  gallery?: ReactNode; children?: ReactNode; annotations?: ShopProductAnnotations; preview?: boolean;
}) {
  const en = language === 'en';
  const categories = { home: en ? 'Home & decor' : 'Hogar y deco', desk: en ? 'Desk' : 'Escritorio', organization: en ? 'Organization' : 'Organización', design: en ? 'Design objects' : 'Objetos de diseño' };
  return <>
    <a className={styles.action} href={backHref}>← {en ? 'Back to all pieces' : 'Volver a todas las piezas'}</a>
    <header className={styles.intro}>
      {preview && <p className={styles.meta}>{en ? 'Draft · Live Preview' : 'Borrador · Live Preview'}</p>}
      {product.category && <p className={styles.meta} data-tina-field={annotations.category}>{categories[product.category]}</p>}
      <h1 data-tina-field={annotations.title}>{product.title}</h1>
      <p data-tina-field={annotations.description}>{product.description}</p>
    </header>
    <section aria-labelledby="piece-photos">
      <h2 id="piece-photos">{en ? 'Photos of the print' : 'Fotos de la impresión'}</h2>
      <div className={styles.gallery}>{gallery ?? product.photos.map((photo, index) => <figure key={`${photo.src}-${index}`}>
        <img src={photo.src} alt={photo.alt} data-tina-field={photo.imageField} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
        <figcaption data-tina-field={photo.altField}>{photo.caption || photo.alt}</figcaption>
      </figure>)}</div>
      {preview && !product.photos.length && <p>{en ? 'Add a photo to preview it here.' : 'Agregá una foto para verla acá.'}</p>}
    </section>
    <div className={styles.intro}>
      <ShopPaletteView palette={product.palette} language={language} field={annotations.palette} />
      <p><strong>{en ? 'Price on enquiry' : 'Precio a consultar'}</strong> · {en ? 'Subject to stock; to be confirmed.' : 'Según stock y a confirmar.'}</p>
      <p>{en ? 'Only the 3D print is included. Other items in the photos are decorative and are not included.' : 'Solo incluye la impresión 3D. Los demás elementos de las fotos son decorativos y no están incluidos.'}</p>
      <div className={styles.inquiry}>
        <ShopWhatsAppButton href={shopInquiryUrl(product.title, language)} describedBy="inquiry-note" iconPath={iconPath}>
          {en ? 'Enquire about this piece on WhatsApp' : 'Consultar esta pieza por WhatsApp'} ↗
        </ShopWhatsAppButton>
        <p id="inquiry-note">{en ? 'Review the prepared message before sending. Your enquiry does not reserve stock or confirm a purchase.' : 'Revisá el mensaje preparado antes de enviarlo. La consulta no reserva stock ni confirma una compra.'}</p>
      </div>
    </div>
    <section className={styles.fields} aria-labelledby="piece-details">
      <h2 id="piece-details">{en ? 'About this piece' : 'Sobre esta pieza'}</h2>
      <dl>{shopEditorialDetailKeys.filter(key => !['price', 'deliveryTime', 'included'].includes(key) && (key !== 'dimensions' || product.details?.dimensions?.[language])).map(key => <div key={key}>
        <dt>{shopEditorialDetailLabels[language][key]}</dt>
        <dd data-tina-field={annotations.details?.[key]}>{product.details?.[key]?.[language] || (en ? 'To confirm' : 'Por confirmar')}</dd>
      </div>)}</dl>
    </section>
    {children}
  </>;
}
