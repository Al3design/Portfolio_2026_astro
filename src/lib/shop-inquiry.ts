import type { ShopLanguage } from '../data/shop-demo';

// Enquiry number in international format.
export const shopWhatsAppNumber = '541160513261';

export function shopInquiryUrl(pieceTitle: string, language: ShopLanguage): string {
  const message = language === 'es'
    ? `Hola, me interesa «${pieceTitle}». ¿Me contás qué colores hay, si está en stock o se hace por pedido, el precio y cómo sería la entrega o el retiro? Gracias.`
    : `Hi, I am interested in “${pieceTitle}”. What colours are available? Is it in stock or made to order, what is the price, and how does delivery or collection work? Thanks.`;
  const query = new URLSearchParams({ text: message });
  return `https://wa.me/${shopWhatsAppNumber}?${query.toString()}`;
}
