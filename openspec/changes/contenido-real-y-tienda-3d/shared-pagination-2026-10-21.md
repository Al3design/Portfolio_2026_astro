# Paginación compartida y controles compactos

- Pedido expreso de Alejandro: paginar Archive con el mismo componente de Home
  y reducir los controles tomando COPY PAGE como referencia, reutilizando tokens.
- Se extrae `Pagination.tsx` del marcado existente de ClientHome. Home y Archive
  consumen el mismo componente con anterior/siguiente, números, extremos y elipsis.
- Estado controlado por cada pantalla; sin duplicar lógica de render, sin estado
  de navegador durante SSR y sin dependencias nuevas.
- Home mantiene 3 proyectos por página, URL, filtros, WebMCP y manejo de foco.
- Archive muestra 6 por página; filtros y limpiar reinician a 1. La página se
  limita al total disponible; rango/total actualizado y foco en resumen al paginar.
- Paginador de Archive arriba a la derecha junto al resumen; wrap para móvil.
- Mixin `compact-control` sin tokens nuevos: size(8) para mínimo 32px y size(2)
  de padding en escritorio; size(12), 48px, con puntero táctil. Reutilizado en
  números/flechas y botones principal/flecha de COPY PAGE. Iconos de 12px.
- control-surface compartido conserva el aumento de opacidad al hover/foco.
- Estilos antiguos de paginación retirados de Home; controles de filtros/layout
  móvil de Home conservan su tamaño existente.
- `_mixins.scss` importa explícitamente sus funciones Sass para que los helpers
  size/semantic-color se resuelvan dentro del módulo, sin depender del llamador.
- Revisión de código: props tipadas, handlers controlados, aria-current,
  aria-controls, nombres accesibles, foco y controles deshabilitados en extremos.
- Sin build, tipos, lint, pruebas, e2e ni capturas por tanda (AGENTS.md). Pendiente
  validación final de compilación, interacción/móvil e hidratación en navegador.
- Sin commit/push/publicación. Los tres artículos draft siguen fuera.

## Ajuste solicitado desde captura de Archive

- Año y categoría se trasladan a la misma fila/grupo del paginador, después
  del resumen de resultados; dejan de ocupar una fila independiente arriba.
- Ambos filtros, selector de cantidad y limpiar usan compact-control y los
  mismos tokens de tipografía/superficie del paginador, con wrap en móvil.
- Archive comienza con 5 por página. Opciones 5/10/15/20 y más múltiplos de
  cinco si crece el archivo, hasta cubrir el total de proyectos recibidos.
- Cambiar cantidad reinicia la página a 1, conserva año/categoría y recalcula
  rango y total. Las opciones son estables respecto del filtro elegido.
- Este ajuste reemplaza la cantidad fija inicial de seis. Sin controles
  ejecutados, commit, push ni publicación.

## Cantidades derivadas y estandarización completa de estos controles

- Corrección posterior del autor: los números eran un ejemplo de incrementos
  de cinco, no un mínimo fijo de opciones. Se reemplaza la generación anterior.
- Opciones calculadas con la cantidad filtrada: múltiplos de cinco estrictamente
  menores al total y una opción All (total). Ejemplos por lectura de la fórmula:
  18 → 5/10/15/All(18); 10 → 5/All(10); 3 → All(3).
- Cero resultados: selector deshabilitado No entries; tamaño interno positivo
  y una página lógica, sin división por cero. Sin ejecutar pruebas.
- Se conserva preferencia de tanda o All al filtrar, ajustando el valor efectivo
  al total; cambios de filtros y cantidad reinician la página a 1.
- compact-control centraliza tamaño, padding base, radio, tipografía, peso,
  color, mayúsculas, tracking y foco. control-edge centraliza el borde visual
  mediante ghost-border-opacity existente. Sin nuevos tokens.
- Paginación, selectores Archive, limpiar y COPY PAGE usan estas mismas reglas;
  COPY PAGE conserva su contenedor dividido y los selectores su flecha nativa.
- Sin build, tipos, lint, pruebas ni navegador. Cambios locales sin publicar.
