import type { Template } from 'tinacms';

// CMS-only schema; renderers import their contract from src/lib instead.
const imageFields: Template['fields'] = [
  { type: 'image', name: 'src', label: 'Imagen', required: true },
  { type: 'string', name: 'alt', label: 'Texto alternativo', required: true, description: 'Describí la información visual; no repitas el epígrafe.' },
  { type: 'string', name: 'caption', label: 'Epígrafe' },
  { type: 'string', name: 'credit', label: 'Autor / fuente / licencia' },
  { type: 'string', name: 'href', label: 'Enlace de la imagen', description: 'Opcional: URL HTTPS o ruta del sitio. Para una miniatura de video, pegar el enlace al video original.' },
  { type: 'string', name: 'linkLabel', label: 'Texto del enlace', description: 'Por ejemplo: Ver video oficial en YouTube.' },
];
export const articleBlockTemplates: Template[] = [
  // Shared field names must have identical GraphQL nullability across templates.
  { name: 'section', label: 'Texto / sección', fields: [
    { type: 'string', name: 'title', label: 'Título de sección', required: true },
    { type: 'string', name: 'text', label: 'Texto', required: true, ui: { component: 'textarea' }, description: 'Separá párrafos con una línea vacía. No requiere HTML.' },
    { type: 'string', name: 'bullets', label: 'Lista de puntos', list: true },
    { type: 'string', name: 'href', label: 'Enlace de referencia', description: 'Opcional: URL HTTPS o ruta del sitio.' },
    { type: 'string', name: 'linkLabel', label: 'Texto del enlace', description: 'Por ejemplo: Ver repositorio en GitHub.' },
    { type: 'boolean', name: 'collapsed', label: 'Mostrar plegado (notas o pendientes)' },
  ] },
  { name: 'image', label: 'Imagen con epígrafe', fields: imageFields },
  { name: 'gallery', label: 'Galería', fields: [
    { type: 'string', name: 'title', label: 'Título de galería', required: true },
    { type: 'string', name: 'layout', label: 'Distribución', options: [{value:'grid',label:'Grilla alineada'},{value:'columns',label:'Columnas independientes (imágenes largas)'},{value:'previews',label:'Vistas previas de igual altura'}], description: 'Grilla es la opción predeterminada. Columnas conserva imágenes enteras, pero puede quedar espacio al pie. Vistas previas muestra un recorte 3:4 sin deformar: la imagen completa se abre en una pestaña nueva.' },
    { type: 'object', name: 'images', label: 'Imágenes', list: true, fields: imageFields, ui: { itemProps: item => ({ label: item?.caption || item?.alt || 'Imagen' }) } },
  ] },
  { name: 'video', label: 'Video con descripción', fields: [
    { type: 'string', name: 'title', label: 'Título', required: true },
    { type: 'string', name: 'src', label: 'URL del archivo MP4 / WebM', required: true, description: 'Archivo directo, no URL de YouTube ni HTML de iframe.' },
    { type: 'image', name: 'poster', label: 'Portada del video' },
    { type: 'string', name: 'caption', label: 'Epígrafe' },
    { type: 'string', name: 'transcript', label: 'Descripción visual / transcripción', required: true, ui: { component: 'textarea' } },
    { type: 'boolean', name: 'hasAudio', label: 'Contiene información sonora', required: true, description: 'Marcá si hay voz o sonidos relevantes. En ese caso, cargar subtítulos VTT antes de publicar.' },
    { type: 'string', name: 'captions', label: 'URL de subtítulos WebVTT', description: 'Necesario cuando hay diálogo o información sonora; revisar antes de publicar.' },
    { type: 'string', name: 'captionLanguage', label: 'Idioma de subtítulos', options: ['es', 'en'] },
    { type: 'string', name: 'credit', label: 'Créditos y derechos de audio/video' },
  ] },
  { name: 'cards', label: 'Cards de contenido', fields: [
    { type: 'string', name: 'title', label: 'Título del grupo', required: true },
    { type: 'object', name: 'cards', label: 'Cards', list: true, fields: [
      { type: 'string', name: 'title', label: 'Título', required: true },
      { type: 'string', name: 'text', label: 'Texto', required: true, ui: { component: 'textarea' } },
      { type: 'string', name: 'tags', label: 'Pills', list: true },
    ], ui: { itemProps: item => ({ label: item?.title || 'Card' }) } },
  ] },
];
