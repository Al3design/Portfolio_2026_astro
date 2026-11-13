# Store 3D: colección y fichas ES/EN

## Scope

Continuación autorizada el 29/10: avanzar sobre Astro + React + TinaCMS y el diseño existente; comercio y Next/Payload diferidos. Se usa este OpenSpec activo, sin crear otro cambio superpuesto. El permiso posterior permite una rama nueva si hace falta; esta tanda permanece en main, sin necesidad de cambiarla, sin commit/push ni worktree.

No son tareas nuevas los filtros por categoría ni el contador: ambos existían. La selección de ficha y filtro ya eran estados separados. Se conserva esa implementación.

## Batches

### R1 — Implementación local realizada por Codex

- Aviso visible de exploración conceptual usando copy existente.
- Contador anuncia también categoría; resumen de filtro con acción para volver a todas las piezas. Limpiar filtro devuelve foco al primer botón de categoría para evitar perderlo cuando desaparece el control de limpieza.
- Ficha conserva diálogo nativo; acciones de imagen/texto anuncian apertura de diálogo y su pieza. Regreso explícito cierra sin modificar filtro; cierre/Escape y retorno de foco dependen del comportamiento nativo, pendientes de observación en navegador.
- Ficha muestra categoría y render identificado. Añade campos de material, medidas, colores/variantes, cuidados, disponibilidad, producción y precio, todos «A confirmar». Retira PLA propuesto para no confundirlo con material confirmado; Argentina/entrega sigue a definir.
- Propuesta a medida explica posibilidades y contexto para una conversación futura, separada del catálogo, sin formulario, envío de mensajes ni presupuesto ficticio.
- Copy nuevo centralizado en src/data/shop-experience.ts; estilos del módulo actual, sin dependencias, fuentes o tokens nuevos. Contención de scroll progresiva en diálogo/backdrop, sin tocar scroll global.

Archivos: src/components/ShopContent.tsx, src/data/shop-experience.ts y src/styles/pages/_shop.module.scss.

Estado: implementado localmente y leído por diff. No construido, probado, inspeccionado en navegador ni publicado en esta tanda. La autorización previa de e2e se aplicó a offline/404; no se transforma en una corrida automática de Store 3D. No se cerraron aceptación 2.2, catálogo real 2.3 ni validación 2.4.

### R2 — Implementada localmente por Codex

Convertir los campos de ficha en una estructura tipada por pieza, sin completar hechos no aportados. Separar identificadores estables de etiquetas ES/EN; datos no confirmados null con fallback localizado. Mantener ids/categorías/nombres/recortes de las seis piezas y carácter conceptual. La UI consume datos y no contiene hechos comerciales hardcodeados. No agregar editor Tina ni regenerar tipos en esta tanda.

Alejandro indicó «seguila vos»: Codex implementó R2 en esta conversación, sin delegación. Tipos y campos por pieza en shop-demo.ts, etiquetas ES/EN por clave estable en shop-experience.ts y consumo en ShopContent.tsx; valores físicos null con fallback localizado. R1 se conserva. Leído por diff, sin controles ni publicación. Reporte: shop-r2-local-report.md. PROMPT-LOCAL-STORE-3D-R2.md queda como historial, no como trabajo pendiente para otra IA. Si se retoma, leer el checkout real y preservar cambios ajenos.

### R3 — Aceptación y datos reales pendientes

Actualización: la revisión acotada de navegador local R1+R2 fue realizada por Codex con autorización de Alejandro; evidencia y límites en shop-r1-r2-browser-review-2026-10-29.md. No se repitieron builds ni se publicó. La aceptación del titular y el catálogo real siguen pendientes.

Revisión de Alejandro y datos de 1–3 impresiones reales antes de implementar catálogo comercial/editorial. Resolver selección de fotos, derechos, variantes, materiales, medidas, cuidados y capacidad. No asumir que recibir un STL habilita venderlo.

### R4 — Preparación editorial implementada, editor pendiente

Con el pedido posterior «continua vos», se definió la colección Tina JSON de borradores de piezas reales sin conectar su contenido al listado público. Tipos, datos parciales ES/EN, autoría/licencia y fotos/renders separados. No hay productos persistidos ni opción de publicar desde esta colección. Guía docs/SHOP_EDITORIAL.md y reporte shop-r4-editorial-preparation-2026-10-29.md. La generación y comprobación CRUD/editorial siguen pendientes; la evidencia de R1+R2 no las valida.

### R5 — Primeras piezas reales recibidas

Quince fotografías agrupadas en cuatro borradores JSON ES/EN: pieza articulada roja/negra, figura articulada verde/roja, jarrón acanalado y árbol decorativo. Alejandro confirma impresión propia en PLA y modelos de terceros descargados gratuitamente de MakerWorld; enlaces y licencias específicas pendientes. Los originales se conservaron fuera de public y se asociaron por sourcePath interno, sin URL pública ni preview del editor. Reporte shop-r5-photo-intake-2026-10-29.md. Este estado actualiza la ausencia de documentos de R4; no acredita CRUD Tina ni reemplaza los seis conceptos públicos.

### R7 — Revisión local de las piezas reales preparada

Colección y fichas ES/EN en /revision/tienda/es/ y /revision/tienda/en/, con lector de JSON guardados, galería de originales, datos pendientes y notas editoriales. Rutas/medios restringidos a modo development siguiendo el patrón existente; acceso al formulario nativo de Tina para guardar y recargar la revisión. No se conectó al catálogo público. Lectura realizada; navegador, CRUD y exclusión en artefacto pendientes. Ver shop-r7-local-review-2026-10-29.md.

## Acceptance Criteria

Controles futuros del orquestador, no ejecutados por esta lista:

1. /tienda y /en/shop-3d: seis conceptos en Todas; conteo correcto de cada categoría y estado activo accesible; limpiar filtro y foco en Todas.
2. Abrir desde imagen y texto; nombre de pieza correcto; X, Escape y regreso explícito cierran; foco retorna al activador; filtro y posición de colección no se pierden.
3. Campos ES/EN legibles y coherentes, null pendiente sin valores inventados; renders identificados. La propuesta a medida no envía ni promete servicio activo.
4. Claro/oscuro, 320/390/1440 px: sin overflow ni controles tapados, diálogo largo accesible por teclado y scroll; cierre y regreso alcanzables.
5. Noindex de tienda, rutas/canonical, tema independiente shop-theme y ausencia de grilla ambiental se conservan. No hay carrito, checkout, pagos o transporte contratados por este lote.
6. Verificación final conforme AGENTS.md, con lectura previa de docs/TESTING_MCP.md y skill e2e antes de escribir/ejecutar pruebas. Una corrección focal no dispara suite completa repetida.

## Evidence and Limits

La evidencia de offline/404 no valida estos cambios. No se inició Tina, navegador ni MCP de diagnóstico, no se ejecutaron build, tipos, lint o e2e. Se consultaron guías de implementación, no controles del producto. modern-web-guidance avisó una versión nueva de su skill; no se modificó el skill local ajeno.

Fuentes: [diálogo nativo](https://developer.chrome.com/docs/modern-web-guidance/guides/ui-components/dialog), [React y sincronización con sistemas externos](https://react.dev/learn/synchronizing-with-effects). Su consulta no equivale a aceptación del código.
