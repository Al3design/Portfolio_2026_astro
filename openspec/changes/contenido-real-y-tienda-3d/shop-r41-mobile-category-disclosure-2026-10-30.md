# R41 — Filtro desplegable en móvil

Pedido: sustituir las categorías visibles en móvil por un botón con icono y palabra Filtrar, conservando el diseño de escritorio. Alcance compartido entre portada y colección completa, ES/EN.

Implementado en ShopCollection.astro y _shop.module.scss:

- Menos de 48em: botón Filtrar / Filter con icono SVG decorativo y flecha. Categorías plegadas inicialmente; se despliegan en el flujo, sin cubrir las fotos.
- Categoría seleccionada indicada en el botón, aria-pressed y contador existentes conservados. Seleccionar cierra el desplegable y devuelve el foco al botón. Escape también lo cierra.
- A partir de 48em: categorías visibles como antes; botón móvil oculto. Se conserva el breakpoint md del diseño original.
- Botón HTML nativo, aria-expanded y aria-controls; sin nuevas dependencias, cambios en Tina, contenido, esquema ni rutas.

Auditoría visual y DOM del orquestador sobre el servidor existente, usando IAB (el override Chrome de R40 no cambiaba el viewport):

- ES portada, 390px: innerWidth=390 y scrollWidth=380; Filtrar abre las cinco categorías. Seleccionar Escritorio deja un soporte Creeper, cierra y devuelve foco. Escape observado con aria-expanded=false y foco en el botón.
- Escritorio, 1440px: botón display:none; categorías display:flex.
- EN colección completa, 320px: Filter abre categorías; seleccionar Home & decor deja cinco piezas, botón Filter · Home & decor cerrado, innerWidth=320 y scrollWidth=310.
- Override restablecido al finalizar. Captura: output/shop-r41/mobile-filter-open.png. No se abrió WhatsApp ni se modificó contenido editorial.

Se amplió el escenario E2E preparado en R40 para interacción del desplegable a 320px y retorno a filtros visibles a 1440px. No se ejecutaron suites, builds, lint, tipos ni el comprobador de artefacto, conforme AGENTS.md. Estos recorridos visuales no equivalen a aprobación de los nuevos E2E ni del artefacto remoto. No hubo commit, push, redeploy, merge o cambio de producción; Preview R39 continúa en el commit anterior.

Guía consultada: modern-web-guidance search-hidden-content y patrón [Disclosure de WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). Se usa disclosure con botón para mantener una única lista responsiva con categorías visibles en escritorio.

Pendientes: control de consola acotado de R40/R41 y actualización selectiva de Preview cuando corresponda a la autorización del cierre; accesibilidad integral, persistencia Tina Cloud y aprobación para producción siguen abiertos.
