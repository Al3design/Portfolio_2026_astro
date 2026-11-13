# Controles mobile y ficha de proyecto — 2026-10-22

## Solicitud
Mover COPY PAGE junto a los controles de inicio en mobile; ocultar breadcrumbs mobile; colocar COPY PAGE antes de portada en artículos y compactar Estado. Reutilizar tokens y conservar TinaCMS.

## Implementación local
- Breadcrumb compartido oculto debajo de mq(md); escritorio conserva navegación.
- Inicio: exportación compacta junto a filtros y controles de vista. Contenedor admite wrap para anchos reducidos. Exportación de escritorio permanece en cabecera. Ambas presentaciones usan MarkdownExportMenu con los mismos datos; CSS muestra una u otra, sin condicionales window/viewport en render.
- MarkdownExportMenu: variante compact que oculta texto visual mobile, conserva nombre accesible y estado de copia. No cambia generación o descarga Markdown.
- Artículos: una instancia de exportación, después del header y antes de portada en mobile. Grid la posiciona junto a breadcrumbs en escritorio.
- Estado mobile: details/summary nativo, inicialmente cerrado, con etiqueta y estado visibles. Participación, fecha, cliente y enlace a experiencia se conservan en el contenido desplegable. Escritorio conserva ficha completa.
- Ficha y desplegable reciben el mismo JSX derivado de los datos actuales de Tina, conservando data-tina-field. No se modificó tina/config.ts, esquemas, contenidos, consultas, rutas ni exportData.
- Estilos nuevos usan size(), radius(), fs(), fw(), ls(), semantic-font(), semantic-color(), mq(md), control-surface y control-edge existentes; sin nuevos tokens globales.

## Archivos
1. src/components/ClientHome.tsx
2. src/components/MarkdownExportMenu.tsx
3. src/components/ProjectDetailView.tsx
4. src/styles/components/_breadcrumb.module.scss
5. src/styles/components/_markdown-export-menu.module.scss
6. src/styles/pages/_home.module.scss
7. src/styles/pages/_project-detail.module.scss

## Estado y límites
- Diff leído; revisión de estructura JSX, reglas responsive, render inicial determinista y preservación de atributos Tina.
- No se ejecutaron build, pruebas, tipos, lint o e2e ni se arrancaron servidores. Sin revisión visual del resultado; no declarar comprobación funcional de Tina o mobile.
- Sin commit, push ni publicación. Tres borradores pausados y políticas permanecen fuera.
- Pendiente control autorizado y revisión de inicio y artículo a anchos mobile y escritorio, apertura de Estado y opciones de exportación.

## Publicación solicitada
- Alejandro confirmó que revisó el resultado y pidió subirlo todo. Alcance: siete archivos de interfaz indicados arriba, manteniendo los tres borradores y políticas fuera.
- Commit selectivo `6cd43a2` en main; push correcto. No se incluyeron informes ni cambios ajenos.
- Sin build local repetido: el despliegue automático de Vercel ejecuta su compilación de producción.
- Despliegue https://portfolio-2026-astro-n1qdriymj-aledesign-projects.vercel.app detectado en Building; pendiente resultado.
- No se enviaron los tres cambios pendientes de otro workspace de GTM: este lote es únicamente interfaz del portfolio.
- Vercel confirmó dpl_38hkcYipNvBtvpaybgGjKzN2oNUW en producción READY; compilación remota 1m38s.
