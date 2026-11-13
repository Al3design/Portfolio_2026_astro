# R37 — Verificación del catálogo: e2e aprobado, build pendiente

Alejandro solicita continuar tras terminar la implementación R36. Se inicia la verificación final acotada del catálogo preparado; no se declara cierre del OpenSpec global ni autorización de despliegue.

## Compilación

Una ejecución de `npm.cmd run build`, sesión 54506: exit 1 en tinacms build, antes de astro build. Error: `Client not configured properly. Missing clientId, token.` No se repitió el build ni se omitió la etapa Tina. Solo existe .env.example en el checkout; no se añadieron secretos locales ni se cambió configuración para evitar el error.

Consulta de Vercel con las guías env-vars/vercel-cli: get_project confirma proyecto portfolio-2026-astro, id prj_OZL34bgW5q9IcOglVLpPOX748Qrt, cuenta team_dKWDK276nYqP8e6q7EZvqWf3 y dominio al3design.dev. El endpoint de listado de variables del conector devolvió 404 aun con el proyecto confirmado. Fallback de solo metadatos:

`npx.cmd vercel env ls production --project portfolio-2026-astro --scope aledesign-projects --non-interactive`

CLI 65.8.0, exit 0: TINA_CLIENT_ID y TINA_TOKEN existen como Hidden / Secret para Production y Preview. No acredita disponibilidad en Development ni permite afirmar que falten en Vercel. No se recuperaron valores, escribieron .env, cambiaron variables ni crearon despliegues. La consulta usó CLI vía npx porque no había binario global; no añadió dependencia al proyecto.

**Build y artefacto pendientes:** deberá usarse un entorno autorizado donde se inyecten esos secretos. No es un error de catálogo diagnosticado ni un build aprobado. No usar dist anterior como evidencia de R36.

## e2e y resolución acotada

Primera ejecución:

`npx.cmd e2e run tests/e2e/shop.e2e.ts tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1`

Run 01a18d66-9c4b-7fd9-ac42-9a2d915ee0b3: 1 passed, 1 failed, 5 skipped. La revisión ES esperaba siete campos, pero el servidor todavía devolvía los cinco anteriores. Se leyó reporte/screen y se contrastó la definición actual de ocho claves (siete visibles al omitir medidas vacías). No se aflojó la expectativa.

Se detuvo por Ctrl+C **únicamente el servidor propio** de sesión 83583. Se inició una instancia de `npm.cmd run dev`, sesión 91713: Tina 4002/9001, Astro 6.3.5 listo en 4322. Se dejó esa instancia activa. No se tocaron procesos ajenos ni se inició otro MCP.

Reanudación focal:

`npx.cmd e2e run tests/e2e/shop.e2e.ts tests/e2e/shop-review.e2e.ts --last-failed --reporter list,markdown --max-failures 1`

Run 01a18d69-c110-7c24-a2e9-72eaa83966e3: **6/6 passed**, 89.95 s, sin repetir el escenario ya aprobado. Cobertura acumulada: **7/7 escenarios** de los dos archivos. El reinicio resolvió la diferencia entre módulos cargados y fuente sin modificar el producto o pruebas para reducir controles.

Cobertura: colección real/revisión local ES/EN, ocho fichas y 29 fotos, condiciones confirmadas, paleta, medios de revisión restringidos, enlaces públicos independientes de /revision y /admin, ausencia de notas internas en HTML, tema/cambio de idioma y límites de ancho 320/1440 en fichas. WhatsApp se inspecciona sin abrir destino ni enviar mensaje. No es evidencia del artefacto de producción ni una auditoría completa de teclado/lector de pantalla.

Reportes preservados en output/shop-r37/first-e2e-report.json, first-e2e-summary.md, final-e2e-report.json y final-e2e-summary.md. La última corrida tiene seis casos porque el séptimo quedó aprobado en la primera.

## Revisión visual

Capturas inspeccionadas desde el navegador del orquestador:

- catalogue-desktop.jpg y catalogue-full.png: colección ES/claro completa, ocho imágenes, paletas compactas, precio/acción, encabezado y pie compartidos, sin tarjetas con texto extenso ni imágenes rotas.
- catalogue-mobile-ready.jpg: estado estable a 390×844, dos columnas, textos y paletas legibles. DOM: innerWidth 390, scrollWidth 380. catalogue-mobile.jpg es una captura transitoria anterior a completarse el ajuste del viewport; no usarla como evidencia aceptada.
- piece-mobile.jpg: árbol con paleta, precio, entrega, inclusión y enlace manual de consulta; captura anterior a completar hidratación del encabezado. Luego se esperó Toggle theme visible y se confirmó navegación completa por DOM. No es captura de navegación hidratada.

Viewport temporal restaurado; ficha dejada disponible en el navegador. No hubo edición de datos durante esta revisión.

## Artefacto y próximos pasos

Preparado scripts/verify-shop-catalogue-artifact.mjs: inspecciona las dieciocho páginas estáticas esperadas, condiciones, assets WebP presentes y ausencia de rutas/datos editoriales. **No ejecutado**, porque este build no generó artefacto nuevo. Su lectura no acredita privacidad del build.

Pendientes para liberar: completar el build con configuración Tina disponible en entorno autorizado, ejecutar inspección de artefacto nuevo y resolver cualquier fallo; aprobación/publicación selectiva y evidencia de producción. Se conserva noindex; no se archivó OpenSpec, creó branch/worktree, hizo staging/commit o publicó. Cambios locales ajenos preservados.
