import type { Collection, TinaField } from 'tinacms';
import { ShopSelectionField } from './dashboard/ShopSelectionField';

// Tina supports an object list containing a single reference field, rather
// than list: true directly on a reference (unsupported by its UI/generator).
const selectionFields = (): TinaField[] => [{
  type: 'reference', name: 'product', label: 'Pieza',
  collections: ['shopProduct'], required: true,
}];

const selectionItem = (item: { product?: unknown } | undefined) => ({
  label: typeof item?.product === 'string'
    ? item.product.split('/').pop()?.replace(/\.json$/, '') || 'Elegí una pieza'
    : 'Elegí una pieza',
});

export const shopCatalogueCollection: Collection = {
  name: 'shopCatalogue',
  label: 'Store 3D · selección pública',
  path: 'src/editorial/shop-catalogue',
  format: 'json',
  match: { include: 'catalogue' },
  ui: { allowedActions: { create: false, delete: false } },
  fields: [
    {
      type: 'object', name: 'products', label: 'Piezas del catálogo, en orden',
      list: true, required: true, fields: selectionFields(),
      ui: { component: ShopSelectionField, itemProps: selectionItem },
      description: 'Solo estas piezas forman el catálogo público. Agregá la ficha cuando tenga textos ES/EN y fotos completos. Guardar en main puede publicar el cambio mediante el despliegue automático.',
    },
    {
      type: 'object', name: 'latest', label: 'Novedades de portada (hasta tres)',
      list: true, fields: selectionFields(),
      description: 'Elegí hasta tres piezas ya incluidas en el catálogo, en el orden que querés mostrarlas.',
      ui: {
        component: ShopSelectionField,
        itemProps: selectionItem,
        validate: value => value && value.length > 3 ? 'Elegí hasta tres novedades.' : undefined,
      },
    },
    {
      type: 'reference', name: 'hero', label: 'Pieza de la imagen principal',
      collections: ['shopProduct'], required: true,
      description: 'Debe estar en el catálogo. Se usa su primera foto.',
    },
  ],
};
