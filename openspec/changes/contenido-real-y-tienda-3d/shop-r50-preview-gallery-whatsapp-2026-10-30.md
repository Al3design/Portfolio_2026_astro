# R50 — Publicación selectiva de galería y consulta en Preview

«Dale, publica» continúa la entrega local R49, explícitamente pendiente de publicación en Preview. Se actualiza esa Preview protegida; no es autorización de merge/promoción de producción.

- Rama actual conservada: `codex/tienda-catalogo-real`.
- Base `4d25139ef1bcba421b5b283e83919a253028c58c`; commit enviado `eed4e92e68f24a1937667e017530f8c669be6970`.
- Cinco archivos exactos: ShopWhatsAppLink.astro, ShopCatalogue.astro, ShopLanding.astro, ShopReview.astro y _shop-review.module.scss. 69 inserciones, 23 eliminaciones.
- Fotos de galería con proporción natural, sin relleno; colores/condiciones/consulta después de toda la galería; botones WhatsApp huecos con icono en portada, colección y fichas ES/EN.
- Índice inicialmente vacío y vacío tras commit. Hashes de selección conservados y 500 entradas ajenas de status idénticas. Manifiesto y comprobación en `output/shop-r50/`.
- Un único push a la rama Preview, sin nuevo build local, suite, cambios de esquema Tina u orígenes. Git activó una sola construcción remota del nuevo SHA.
- Preview: https://portfolio-2026-astro-o88znjwrj-aledesign-projects.vercel.app

El reporte R49 conserva la auditoría local anterior; no acredita por sí solo el nuevo artefacto remoto. Producción y main no se modifican.

## Resultado remoto

Deployment dpl_2kSL9THCfXfSmAq6wwhD4GtMshUx, target Preview, Ready, build 1m11s. Tina + Astro aprobados (62 páginas del sitio), checker de 20 páginas/37 fuentes optimizadas con errors=[]. Log: output/shop-r50/build-log.txt.

Navegador autenticado: ficha maceta-perro publicada con nombre/descripción, galería, paleta/condiciones/WhatsApp y detalles en ese orden. Tres fotos cargadas a 596×335,25, equivalentes a su proporción original 720×405; enlace posterior a la última foto, icono SVG, fondo transparente y contorno inset de 1,5px. Mensaje WhatsApp no abierto/enviado. Captura inspeccionada: output/shop-r50/published-dog.png. Primer intento de lectura DOM usó compareDocumentPosition, no disponible en el adaptador de navegador; lectura adaptada a coordenadas, sin alterar producto ni repetir build o suite.

R49 y reordenamiento disponibles en esta Preview. No merge/promoción de producción; no guardado Tina ni cambios de orígenes. Auditoría acotada, no validación integral de accesibilidad ni nueva suite E2E.

