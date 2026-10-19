import type { TinaField } from 'tinacms';
import { articleBlockTemplates } from './article-blocks';

// Fresh field trees per locale; both use the same templates/nullability.
export function articleLocaleFields(): TinaField[] {
  return [
    { type: 'string', name: 'title', label: 'Título (// para acento)', required: true },
    { type: 'string', name: 'description', label: 'Descripción / resumen', ui: { component: 'textarea' } },
    { type: 'string', name: 'type', label: 'Tipo de trabajo' },
    { type: 'string', name: 'role', label: 'Participación' },
    { type: 'string', name: 'client', label: 'Cliente / institución' },
    { type: 'string', name: 'timeline', label: 'Fecha / duración visible' },
    { type: 'string', name: 'status', label: 'Estado del trabajo' },
    { type: 'string', name: 'imageAlt', label: 'Texto alternativo de portada' },
    { type: 'string', name: 'imageCaption', label: 'Epígrafe de portada' },
    { type: 'string', name: 'imageCredit', label: 'Crédito de portada' },
    { type: 'object', name: 'contentBlocks', label: 'Contenido (bloques)', list: true, templates: articleBlockTemplates },
  ];
}
