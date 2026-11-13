# LIST con superficie y breadcrumbs mobile apilados

2026-10-16. Pedido de Alejandro a partir de la home: textos de LIST flotan sobre la grilla y breadcrumbs mobile se parten/desalinean.

## LIST

Ajuste posterior solicitado por Alejandro: se elimina la base opaca y se reutiliza glass sin override de background-color, con la misma transparencia, degradados y secuencia primaria/45°, secundaria/135° y terciaria/225° de CARDS. La secuencia se aplica a los li, ya que cada enlace es el único hijo de su fila. El borde fantasma y el espaciado de LIST se conservan. Sin controles ni capturas en esta corrección.

Cada enlace de proyecto reutiliza el material glass de las cards y añade un fondo opaco con el token semántico existente brand-surface-low debajo de los degradados. Así la grilla no cruza el texto. Padding responsive, radio existente, separación entre filas y borde fantasma terciario al 15%; sin blur/backdrop-filter ni recursos nuevos. El separador lineal anterior se retira. Se corrige la grilla interna de dos columnas a una, ya que solo contiene el bloque de contenido. Texto largo puede ajustar ancho; estados hover y foco comparten acento.

## Breadcrumbs

Componente compartido con nav/ol/li, icono y separadores decorativos, aria-current solo en el último segmento. Se distinguen clases de lista y de item para evitar las listas flex anidadas anteriores. Mobile: un segmento por fila, slash en columna propia y etiquetas alineadas, con wrapping de títulos largos sin desbordar. Se conserva fs(100), equivalente al mínimo 12px del sistema, para no reducir la legibilidad con tipografía de 10px. Desde sm (40em) vuelve a disposición horizontal.

Filas de breadcrumbs de home, about, archive, resume y detalle admiten wrapping y gap. Si el menú Copy Page no entra junto a la ruta, pasa a la fila siguiente en vez de comprimirla; alineación superior en mobile y centrada en escritorio. Mantiene todos los destinos y contexto visual terminal ~ / root.

## Estado

Revisión de fuente/diff solamente; sin build, tipos, lint, tests, e2e, capturas ni servidor nuevo según AGENTS.md. Pendientes al cierre: ambos temas, LIST con filtros y textos largos, navegación por teclado y foco, 320/390px y zoom de texto 200%, breadcrumb con menú de exportación y escritorio. No se declara validación visual ni cumplimiento completo por inspección de fuente. Sin commit/push/publicación.
