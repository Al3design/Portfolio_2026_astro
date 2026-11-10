import type { Collection, TinaField } from 'tinacms';
import { isNavigationHref, validNavigationMenu } from '../src/lib/site-navigation';

const menu = (name: string, label: string): TinaField => ({
  type: 'object', name, label, list: true,
  description: 'Arrastrá para ordenar. Textos y enlaces ES/EN. La clave identifica el destino: conservá collection para la colección de Shop. No crea páginas; guardar en Cloud puede publicar mediante el despliegue.',
  ui: {
    itemProps: item => ({ label: item?.labelEs || 'Enlace' }),
    validate: (value: unknown) => validNavigationMenu(value) ? undefined : 'Completá al menos un enlace, claves únicas y textos/URLs ES/EN válidos.',
  },
  fields: [
    { type: 'string', name: 'key', label: 'Clave estable', required: true },
    { type: 'string', name: 'labelEs', label: 'Texto ES', required: true },
    { type: 'string', name: 'labelEn', label: 'Texto EN', required: true },
    ...(['Es', 'En'] as const).map(locale => ({ type: 'string' as const, name: `href${locale}`, label: `Enlace ${locale.toUpperCase()}`, required: true,
      ui: { validate: (value: unknown) => isNavigationHref(value) ? undefined : 'Usá /ruta, #seccion o una URL https:// válida.' } })),
  ],
});

export const globalSettingsCollection: Collection = {
  name: 'global', label: 'Global Settings', path: 'src/content/global', format: 'mdx',
  ui: { allowedActions: { create: false, delete: false } },
  templates: [
    { name: 'footer', label: 'Footer compartido', fields: [
      { type: 'string', name: 'copyright', label: 'Copyright Text' },
      { type: 'object', name: 'links', label: 'Footer Links', list: true, ui: { itemProps: item => ({ label: item?.name || 'Link' }) }, fields: [
        { type: 'string', name: 'name', label: 'Text', required: true },
        { type: 'string', name: 'url', label: 'URL', required: true },
        { type: 'string', name: 'icon', label: 'Lucide Icon', options: ['github', 'linkedin', 'instagram', 'twitter', 'facebook', 'youtube', 'tiktok', 'behance', 'dribbble', 'whatsapp', 'telegram', 'discord', 'bluesky', 'pinterest'] },
      ] },
    ] },
    { name: 'navigation', label: 'Menús de ambos sitios', fields: [menu('portfolioMenu', 'Menú del portfolio'), menu('shopMenu', 'Menú de Shop 3D')] },
  ],
};
