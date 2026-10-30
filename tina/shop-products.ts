import type { Collection, TinaField } from 'tinacms';
import { shopEditorialCategories, shopEditorialDetailKeys, shopEditorialDetailLabels, type ShopProductDraft } from '../src/lib/shop-editorial';
import { bambuFilamentColours, normalizeShopHex } from '../src/lib/shop-colours';

function localizedTextFields(): TinaField[] {
  return [
    { type: 'string', name: 'es', label: 'Español', ui: { component: 'textarea' } },
    { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' } },
  ];
}

function productLocaleFields(): TinaField[] {
  return [
    { type: 'string', name: 'title', label: 'Nombre visible de la pieza' },
    { type: 'string', name: 'description', label: 'Descripción / uso', ui: { component: 'textarea' } },
  ];
}

export const shopProductCollection: Collection = {
  name: 'shopProduct',
  label: 'Store 3D · borradores de piezas',
  path: 'src/editorial/shop-products',
  format: 'json',
  ui: {
    defaultItem: (): ShopProductDraft => ({
      title: 'Nueva pieza · por completar',
      status: 'draft',
      productionMode: 'pending',
      details: {},
      locales: { es: {}, en: {} },
      photos: [],
      palette: [],
    }),
  },
  fields: [
    {
      type: 'string', name: 'title', label: 'Nombre interno', isTitle: true, required: true,
      description: 'Nombre de la pieza en el editor. Después de guardar, recargá la revisión para ver los cambios.',
    },
    {
      type: 'string', name: 'status', label: 'Estado editorial', required: true,
      options: [{ value: 'draft', label: 'Borrador' }, { value: 'review', label: 'Para revisar' }],
      description: 'Usá borrador mientras preparás la ficha y para revisar cuando esté lista para repasar.',
    },
    { type: 'string', name: 'category', label: 'Categoría', options: shopEditorialCategories.map(option => ({ ...option })) },
    {
      type: 'object', name: 'locales', label: 'Nombre y descripción ES/EN', fields: [
        { type: 'object', name: 'es', label: 'Español', fields: productLocaleFields() },
        { type: 'object', name: 'en', label: 'English', fields: productLocaleFields() },
      ],
    },
    {
      type: 'object', name: 'palette', label: 'Colores de la pieza', list: true,
      description: 'Elegí una referencia PLA o PETG de Bambu Lab o escribí un hexadecimal. No define stock ni cambia el material de la ficha. Los tonos existentes son aproximados hasta que identifiques el filamento usado.',
      ui: { itemProps: item => ({ label: item?.es || item?.en || bambuFilamentColours.find(colour => colour.code === item?.preset)?.es || 'Color por completar' }) },
      fields: [
        { type: 'string', name: 'preset', label: 'Referencia Bambu Lab · PLA / PETG',
          options: bambuFilamentColours.map(colour => ({ value: colour.code, label: `${colour.material} · ${colour.es} · ${colour.code} · ${colour.tones.join(' / ')}` })),
          description: 'Familia + color + código del fabricante. Para usar los tonos y nombres del catálogo, dejá vacíos los campos manuales de abajo. Multicolor/translúcidos son referencias visuales; no confirma disponibilidad.' },
        { type: 'string', name: 'hex', label: 'Hexadecimal personalizado (#RRGGBB)',
          description: 'Opcional si elegiste un preset. Tiene prioridad sobre el preset. Por ejemplo: #00BB31.',
          ui: { validate: value => value && !normalizeShopHex(value) ? 'Usá # seguido de seis caracteres hexadecimales, por ejemplo #00BB31.' : undefined } },
        { type: 'string', name: 'es', label: 'Nombre visible ES (opcional con preset)' },
        { type: 'string', name: 'en', label: 'Visible name EN (optional with preset)' },
      ],
    },
    {
      type: 'object', name: 'details', label: 'Datos de la pieza y entrega',
      description: 'Completar solo datos comprobados de la pieza real. Dejar vacío lo desconocido; no deducirlo de un render.',
      fields: shopEditorialDetailKeys.map((key): TinaField => ({
        type: 'object', name: key, label: shopEditorialDetailLabels.es[key], fields: localizedTextFields(),
        description: key === 'deliveryTime'
          ? 'Condición actual: según stock y a confirmar. Es entrega o retiro, no duración de impresión. No prometer una fecha sin confirmarla.'
          : key === 'price' ? 'El precio se informa por consulta. No cargues un importe.'
          : key === 'included' ? 'Solo incluye la impresión 3D. El resto de los elementos fotografiados es decorativo y no se incluye.'
          : key === 'dimensions' ? 'Opcional. Podés dejarlo vacío.' : undefined,
      })),
    },
    {
      type: 'string', name: 'productionMode', label: 'Modalidad de producción', required: true,
      options: [
        { value: 'pending', label: 'Por definir' },
        { value: 'stock', label: 'Pieza ya producida' },
        { value: 'made-to-order', label: 'Producción bajo pedido' },
        { value: 'mixed', label: 'Stock y pedidos combinados' },
      ],
      description: 'Describe una modalidad para revisar; no reserva stock ni promete disponibilidad.',
    },
    {
      type: 'string', name: 'productionNotes', label: 'Notas internas de capacidad y producción',
      description: 'Organización interna. La duración de impresión no se muestra al cliente; el plazo de entrega se define aparte.', ui: { component: 'textarea' },
    },
    {
      type: 'object', name: 'photos', label: 'Fotos y renders para revisar', list: true,
      description: 'Identificar foto de impresión real o render. El gestor de medios usa public/assets: subir allí no garantiza privacidad del archivo.',
      ui: {
        itemProps: item => ({
          label: item?.altEs || item?.altEn || item?.sourcePath?.split('/').pop() || 'Foto por completar',
        }),
      },
      fields: [
        { type: 'image', name: 'image', label: 'Imagen' },
        {
          type: 'string', name: 'sourcePath', label: 'Original local / referencia interna',
          description: 'Ruta relativa al repositorio fuera de public. Es una referencia editorial; no se usa como URL ni genera una vista previa.',
        },
        { type: 'string', name: 'kind', label: 'Tipo de imagen', options: [{ value: 'photo', label: 'Foto de impresión real' }, { value: 'render', label: 'Render identificado' }] },
        { type: 'string', name: 'altEs', label: 'Descripción accesible ES' },
        { type: 'string', name: 'altEn', label: 'Descripción accesible EN' },
        { type: 'string', name: 'captionEs', label: 'Epígrafe ES' },
        { type: 'string', name: 'captionEn', label: 'Epígrafe EN' },
      ],
    },
  ],
};
