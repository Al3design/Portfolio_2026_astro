# Revisión local acotada — Store 3D R1+R2

Fecha: 29/10/2026, America/Buenos_Aires. Autorización: Alejandro respondió «dale, segui» a la revisión visual/funcional propuesta para R1+R2. Rol de orquestador: lectura del diff y auditoría local con navegador aislado. Excepción limitada a este recorrido; no es cierre técnico completo del OpenSpec ni habilitación de controles rutinarios por tanda.

## Environment

No había listeners en 4322/4002/9001. Se inició una sola instancia con npm.cmd run dev. Tina arrancó y Astro v6.3.5 quedó en http://localhost:4322, sin servidores duplicados ni procesos ajenos detenidos. La inicialización fue lenta; no se lanzó el control antes de que Astro anunciara ready. Tina no dejó cambios versionados en tina/__generated__.

Se usó Playwright CLI en sesión aislada shop-review-20261029; no se activó MCP global e2e. Servidor local dejado activo para revisión de Alejandro. Sin build, suite general, tipos, lint, commit, push o publicación.

## Evidence

- output/playwright/shop-r1-r2-review-2026-10-29.cjs: recorrido de 12 combinaciones ES/EN × claro/oscuro × 320/390/1440 px; viewport de 900 px de alto.
- output/playwright/shop-r1-r2-review-2026-10-29.log: resultado original y código ejecutado.
- output/playwright/shop-r1-r2-focused-2026-10-29.cjs y .log: tema predeterminado/independiente, cambio real de idioma y seis piezas en ambos idiomas.
- output/playwright/shop-r1-r2-results-2026-10-29.json: resultados estructurados, incluido el primer fallo de expectativa del control y su explicación.
- Ocho capturas shop-detail-{es|en}-{390|1440}-{light|dark}.png, inspeccionadas visualmente.
- shop-home-es-390-light.png, shop-home-es-1440-light.png, shop-detail-es-390-bottom.png y shop-custom-es-390-light.png, inspeccionadas. Las páginas completas contienen el toolbar de Astro dev, ausente en producción; no se interpreta como UI comercial del sitio.

## Results

- Las cinco categorías devolvieron 6/2/1/2/1 piezas. Hogar y deco/Home & decor mostró dos, estado aria-pressed correcto y conteo 02.
- Ficha abierta desde imagen y desde texto; título correcto, ocho filas de información y siete valores pendientes localizados, incluida la fila de precio. Entrega conserva Argentina/a definir.
- Regreso explícito, X y Escape cerraron el diálogo. Foco retornó al botón activador y filtro se mantuvo en las doce combinaciones.
- Limpiar filtro devolvió seis piezas y foco a Todas/All objects.
- Sin overflow horizontal de documento ni diálogo en los doce estados. El diálogo móvil requiere scroll vertical y el botón inferior fue alcanzado y accionado; captura adicional confirma el final de ficha.
- En el recorrido adicional de las seis piezas por idioma, encabezado, fallback y retorno de foco correctos; scrollY antes y después idéntico en cada una de las doce aperturas.
- Propuesta a medida mantiene aviso de consulta/presupuesto no operativos y no tiene inputs, textarea o formulario. Tab permaneció en el diálogo y Escape cerró.
- noindex,nofollow y lang ES/EN correctos. Capturas de colección/ficha mantienen estética, temas y renders sin grilla ambiental de portfolio.
- Cero errores de JavaScript capturados mediante pageerror en la matriz. Los logs incluyen mensajes informativos de React DevTools propios del modo dev.

## Correction and Control Expectation

Al leer el primer snapshot se detectó que R1 había repetido en el cuerpo el aviso conceptual ya presente en el encabezado. Se retiró solo ese párrafo de ShopContent.tsx antes de ejecutar la matriz. La colección conserva el aviso existente y el descargo al final.

La matriz reportó una única expectativa incorrecta: es-320-light tenía shop-theme=null en la primera visita. La interfaz estaba clara, como exige el diseño; no es necesario guardar una preferencia para aplicar el valor por defecto. No se modificó producto para satisfacer esa expectativa. Se ajustó el control para interpretar null como light y se conservó el log original sin reescribirlo.

Sin repetir la matriz, la comprobación focal mostró:

1. Sin shop-theme y con theme=dark del portfolio: tienda clara, shop-theme sigue null.
2. Cambiar tienda a oscuro y navegar por el enlace EN: tienda oscura y shop-theme=dark.
3. Cambiar tienda a claro: shop-theme=light y theme del portfolio permanece dark.

Resultado focal: failures=[]; se resuelve el único caso señalado por el instrumento. No hay fallo de producto pendiente identificado en este alcance.

## Acceptance Boundaries

R1+R2 quedan comprobadas en navegador local dentro del recorrido descrito. No equivalen a aceptación editorial/visual del titular, pruebas en hardware móvil, conformidad WCAG completa, build/publicación, edición/persistencia de Tina ni catálogo real. No hay stock, precios, pagos, envíos o Next/Payload implementados por esta revisión. El OpenSpec permanece abierto.

Siguiente paso: revisión de Alejandro en la vista local y selección de 1–3 piezas reales con fotos, materiales/medidas, variantes, cuidados, derechos y capacidad confirmados. Sin esos datos, no se reemplazan los conceptos por productos comerciales ficticios.
