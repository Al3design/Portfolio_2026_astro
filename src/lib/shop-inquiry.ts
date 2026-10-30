import type { ShopLanguage } from '../data/shop-demo';

// Destination supplied by Alejandro. Keep the exact international digits provided.
export const shopWhatsAppNumber = '541160513261';

export function shopInquiryUrl(pieceTitle: string, language: ShopLanguage): string {
  const message = language === 'es'
    ? `Hola, me interesa la pieza «${pieceTitle}». Quisiera consultar colores y combinaciones, disponibilidad en stock o bajo pedido, precio y plazo de entrega o retiro. Gracias.`
    : `Hello, I am interested in the piece “${pieceTitle}”. Could you tell me about colours and combinations, stock or made-to-order availability, price, and delivery or collection timeframe? Thank you.`;
  const query = new URLSearchParams({ text: message });
  return `https://wa.me/${shopWhatsAppNumber}?${query.toString()}`;
}
