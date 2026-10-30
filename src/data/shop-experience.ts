// Presentation copy for the conceptual shop, not commercial product data.
import type { ShopDetailKey, ShopLanguage } from './shop-demo';

const detailLabels: Record<ShopLanguage, Record<ShopDetailKey, string>> = {
  es: {
    material: 'Material',
    dimensions: 'Medidas',
    variants: 'Colores y variantes',
    care: 'Cuidados',
    availability: 'Disponibilidad',
    productionTime: 'Tiempo de producción',
  },
  en: {
    material: 'Material',
    dimensions: 'Dimensions',
    variants: 'Colors and variants',
    care: 'Care',
    availability: 'Availability',
    productionTime: 'Production time',
  },
};

export const shopExperienceCopy = {
  es: {
    selectedCategory: 'Categoría seleccionada',
    clearFilter: 'Ver todas las piezas',
    backToCollection: 'Volver a la colección',
    detailsTitle: 'Información de la pieza',
    details: detailLabels.es,
    priceLabel: 'Precio',
    deliveryLabel: 'Plazo de entrega',
    customScope: 'Posibilidades para explorar',
    customIdeas: [
      'Una pieza adaptada a un espacio o una necesidad.',
      'Variaciones de forma, tamaño o terminación.',
      'Un objeto nuevo a partir de una idea o referencia.',
    ],
    customPreparation: 'Para conversar sobre una idea: su uso, medidas aproximadas y alguna referencia. Materiales, viabilidad y tiempos se evaluarían en cada caso.',
    customDifference: 'Esta propuesta es distinta de las piezas de la colección. No implica que estos servicios ya estén disponibles.',
  },
  en: {
    selectedCategory: 'Selected category',
    clearFilter: 'View all objects',
    backToCollection: 'Back to collection',
    detailsTitle: 'Object information',
    details: detailLabels.en,
    priceLabel: 'Price',
    deliveryLabel: 'Delivery timeframe',
    customScope: 'Possibilities to explore',
    customIdeas: [
      'An object adapted to a space or a specific need.',
      'Variations in shape, size or finish.',
      'A new object based on an idea or reference.',
    ],
    customPreparation: 'To discuss an idea: its purpose, approximate dimensions and a reference. Materials, feasibility and timing would be assessed individually.',
    customDifference: 'This proposal is separate from the collection objects. It does not mean these services are already available.',
  },
};
