# Handoff — Search Console, pantalla offline y 404

Fecha: 29/10/2026, America/Buenos_Aires.
Proyecto: `C:\www\Portfolio_2026_astro`.
Pedido de Alejandro: continuar en otro chat limpio con un detalle de lo hecho y de lo pendiente. Aclaración posterior: incluir expresamente la continuidad de la página web de Store 3D como próximo frente de trabajo; no limitar el handoff a offline/404/Search Console.

## 1. Estado para retomar

- Branch activa: `main`. Verificada el 29/10.
- HEAD local y `origin/main` remoto: `4752b2562cf105731eb409f96c05a497f7b0f803`. Coinciden; consulta remota realizada el 29/10.
- No hay archivos en staging al preparar este handoff.
- Los cambios de producto de esta conversación ya están commiteados y pusheados.
- La publicación de ese HEAD quedó READY en Vercel el 28/10. No se volvió a consultar el estado de Vercel ni Search Console el 29/10: distinguir evidencia del día anterior de estado actual.
- El checkout NO está limpio. Hay muchas modificaciones y archivos sin seguimiento de trabajo anterior; no forman una tanda autorizada para publicar.
- `.codegraph/` existe, comprobado el 29/10. No se inicializó ni reindexó.
- Este handoff es local; no se hizo commit/push del documento.

## 2. Qué pidió y autorizó Alejandro

1. Buscar en Gmail un aviso reciente de Google Search Console sobre páginas sin indexar.
2. Analizar la exportación de Search Console y resolver los problemas reales; confirmar si existía una pantalla sin conexión.
3. Crear la pantalla offline usando los tokens y estética actuales.
4. Al mostrar la 404 genérica de Astro en localhost, crear una 404 propia.
5. Corregir la etiqueta superior de la 404, que quedaba detrás del topbar fijo.
6. «Dale, subilo»: publicar selectivamente lo anterior.
7. Tras un fallo Sass del build remoto, «dale gas»: autorizar la corrección focal y un nuevo intento de publicación. Ese nuevo intento terminó READY.

No se pidió rediseñar otras páginas, retirar exclusiones intencionales, publicar borradores ni cambiar reglas de agentes. La palabra «breadcrumbs» en la captura de esta conversación se refería a la etiqueta `# ERROR 404 / PÁGINA NO ENCONTRADA`; se corrigió esa pantalla, no se auditó todo el sistema de breadcrumbs del portfolio.

## 3. Search Console: investigación terminada y seguimiento pendiente

### Aviso y exportación

- Gmail al principio devolvió UNAUTHORIZED; Alejandro reconectó la cuenta y después se pudo leer. No asumir que vuelve a estar desconectada sin probar una acción pertinente.
- Correo de `sc-noreply@google.com`, 26/10/2026, asunto «Nuevos motivos que impiden la indexación de páginas en el sitio al3design.dev».
- Mensaje Gmail ID `1a177f3f9cc08a88`.
- Correo: https://mail.google.com/mail/u/?authuser=apdelgado%40gmail.com#all/1a177f3f9cc08a88
- Exportación entregada por Alejandro: `C:\Users\apdel\Downloads\al3design.dev-Coverage-2026-10-28.xlsx`.
- El Excel solo trae resumen y gráfico, no las URLs individuales. Último dato del gráfico: 22/10, 29 indexadas y 9 sin indexar.
- Se accedió a la sesión autenticada de Search Console en Chrome para leer las nueve URLs y consultar el estado individual de los artículos.

### Resultado por URL, evidencia del 28/10

| Grupo del resumen | URLs | Resultado y decisión |
| --- | --- | --- |
| 404, 2 URLs | `http://al3design.dev/`, `http://www.al3design.dev/` | El último rastreo mostrado era del 11/10. Hoy de aquella revisión ya redirigían con 308 a HTTPS y terminaban en `https://al3design.dev/`, 200. No se cambiaron redirects. |
| Canónica adecuada, 3 URLs | `https://al3design.dev/projects/mate`, `https://al3design.dev/projects/en/odontopau`, `https://al3design.dev/about` | Respondían 200 con canonical a su misma ruta con slash final, coincidente con el sitemap. Exclusión de la variante sin slash coherente. No se retiró canonical ni se pidió indexar duplicados. |
| noindex, 1 URL | `https://al3design.dev/tienda` | Intencional: tienda conceptual sin ventas. `ShopPage.astro` declara noIndex, excluida del sitemap. Se conserva. |
| Rastreada sin indexar, artículo EN | `https://al3design.dev/projects/en/around-ingest-monitor/` | La inspección individual ya decía «La URL está en Google» y «La página está indexada». Sin noindex, 200, canonical propio. No se volvió a solicitar indexación. |
| Rastreada sin indexar, artículo EN | `https://al3design.dev/projects/en/bdm-consultores/` | Mismo resultado: ya indexada según inspección individual; no se repitió solicitud. |
| Rastreada sin indexar, RSS | `https://al3design.dev/rss.xml` | 200 application/xml. Recurso de sindicación; no necesita forzarse como página en resultados. No se bloqueó ni se añadió noindex. |

Se pulsó «Validar corrección» SOLO para la categoría de los dos antiguos 404. Google confirmó «Resultado de la validación: Iniciada», fecha 28/10/26. Falta comprobar si esa validación terminó; no se prometió que los nueve avisos desaparezcan. El resumen estaba retrasado respecto de la inspección individual.

Evidencia local:

- `C:\www\Portfolio_2026_astro\output\search-console-indexation-2026-10-28.md`.
- `C:\www\Portfolio_2026_astro\output\search-console-404-validation-2026-10-28.png`.

Advertencia de lectura: la sección «Pantalla sin conexión» de ese reporte describe el estado ANTERIOR a implementarla. Quedó superada por los commits de abajo. No usarla para concluir hoy que la pantalla falta.

## 4. Implementación publicada

Commit `35a0bf5`: `feat: add branded offline fallback and custom 404 page`.

Archivos del lote (solo estos seis):

| Archivo | Función |
| --- | --- |
| `src/pages/offline.astro` | Documento offline independiente, español, noindex, estilos y fuentes incrustados, botón Reintentar, enlace Inicio y aviso accesible al volver la conectividad. |
| `src/pages/404.astro` | 404 propia con MainLayout, topbar/footer reales, título «Nada por acá.», noindex, enlaces a Inicio y Archive. |
| `src/styles/pages/offline.scss` | Estilos compartidos por ambas pantallas, tokens y mixins actuales. Incluye el modificador específico para reservar espacio al topbar de la 404. |
| `src/styles/pages/offline-document.scss` | Incluye reset/globals y estilos compartidos para generar el CSS autónomo del documento offline. |
| `public/service-worker.js` | Precarga el documento offline e intercepta únicamente navegaciones públicas cuando falla la red. |
| `src/layouts/MainLayout.astro` | Registra el worker después de load, con soporte detectado y solo si `import.meta.env.PROD`. |

### Estética y comportamiento

- Se reutilizan Inter, Roboto Mono, tokens de tamaños, tipografía, colores y temas claro/oscuro, y mixins de título/controles.
- Acentos verde para título/CTA, naranja para clave, cian para icono. Panel con superficie baja y ghost edge cian al 15%. Sin paleta nueva.
- La pantalla offline NO usa MainLayout: no depende de React, Tina, analytics ni descargas adicionales para poder mostrarse sin red.
- Las fuentes ya instaladas se leen durante el build mediante `createRequire(...).resolve` + `readFileSync` y se incrustan como data URLs. El SCSS se importa con `?inline`.
- La 404 sí usa MainLayout y los estilos compartidos, sin incrustar una segunda copia de globals.
- El problema del topbar se corrigió con `offline__main--with-topbar`: padding superior calculado con `layout(nav-height)` + el offset real de la barra (`size(4)` móvil, `size(6)` desde md) + `size(12)` de separación. La pantalla offline independiente no lleva ese modificador.
- La 404 verdadera conserva HTTP 404. No se redirige todo a Inicio ni se usa el fallback offline para ocultar errores HTTP.

### Worker y límites concretos

- Caché propia: `al3design-offline-v1`; documento precargado: `/offline/`.
- En instalación guarda el documento con `cache: 'reload'` y activa el worker solo después de la precarga correcta.
- Al activar, elimina solo versiones anteriores con su prefijo y toma control con `clients.claim()`.
- Solo intercepta `request.mode === 'navigate'`, método GET, mismo origen, fuera de `/admin` y `/revision`.
- Intenta siempre la red. Las respuestas HTTP 404/500 se devuelven como tales; solo el rechazo de fetch dispara el fallback.
- La respuesta offline lleva HTTP 503, Content-Type HTML, Cache-Control no-store y X-Robots-Tag noindex/nofollow; además el documento tiene meta noindex.
- No cachea páginas del portfolio para servir versiones viejas. No se agregó manifest ni instalación PWA.
- Requiere una visita anterior con conexión para instalar el worker y guardar el documento. No puede cubrir una primera visita totalmente sin red.
- En `npm run dev` el worker no se registra. Abrir `/offline/` localmente permite ver el diseño, pero no prueba el ciclo real del worker.
- Reintentar conserva la URL que falló mediante reload. Si se abrió directamente `/offline/`, vuelve a `/`.
- El evento online solo actualiza el mensaje; no fuerza recargas automáticas ni hace polling.
- Al modificar la pantalla offline, sus tokens o fuentes, cambiar la versión del worker para renovar la copia precargada. No limpiar otras cachés ni desregistrar workers por rutina.

## 5. Fallo de build, corrección y despliegue exitoso

Primer despliegue automático de `35a0bf5`:

- ID `dpl_JBjJEGg8Nt2481929dMepzJAh25d`.
- URL https://portfolio-2026-astro-k34fewnsv-aledesign-projects.vercel.app
- ERROR, 1m9s. Tina terminó; Astro/Sass falló por variable `$font-sans` indefinida en offline.scss importado con @use desde offline-document.scss.
- Causa: Vite additionalData inyecta abstracts en el archivo raíz, pero Sass @use tiene scope propio; no hereda esas variables en los módulos anidados.
- No atribuir el fallo a Windows, Vercel o Tina; era una omisión del stylesheet agregado.
- Se informó y se esperó la autorización «dale gas» antes de corregir/republicar.

Corrección: commit `4752b25`, `fix: import Sass tokens in offline styles module`.
Solo agrega `@use '../abstracts' as *;` al inicio de offline.scss. No fue una relajación de controles ni una sustitución de tokens.

Despliegue automático exitoso del 28/10:

- ID `dpl_8FQjuLWLDpTzw8fJAmQvGeXjfpxG`.
- URL https://portfolio-2026-astro-90vfvh2y7-aledesign-projects.vercel.app
- Target production, READY, build remoto 1m31s.
- Aliases confirmados: `al3design.dev` y `www.al3design.dev`.
- No volver a publicar el lote sin necesidad: ya está en producción.

Comprobación HTTP posterior del 28/10:

| Ruta | Evidencia |
| --- | --- |
| `/offline/` | 200, título propio, noindex y fuentes incrustadas. |
| `/asdas` | 404 real con contenido personalizado, noindex y clase de separación de topbar. |
| `/service-worker.js` | 200, application/javascript, código propio del worker. |
| `/` | 200 sin noindex. |

No se ejecutaron suites locales. Un primer comando de lectura HTTP tuvo un error de quoting de PowerShell antes de ejecutar Python; se corrigió la invocación y se completó la lectura. No fue otro build ni un fallo del sitio.

Reporte: `C:\www\Portfolio_2026_astro\output\offline-release-2026-10-28.md`.
Ese documento es cronológico: sus párrafos iniciales sobre publicación pendiente están superados por «Corrección y publicación autorizadas» al final.

## 6. Pendientes reales, por prioridad

### A. Retomar y continuar la página web de Store 3D

Este es un frente de continuidad solicitado expresamente por Alejandro. El diseño conceptual existente es un punto de partida; la web de la tienda no se considera terminada por haber publicado las pantallas offline/404. Tampoco se debe confundir Store 3D con el proyecto histórico de portfolio «Tienda Geekies», que sigue como borrador.

#### Estado comprobado por lectura del código el 29/10

- Rutas de la tienda: `/tienda` (ES) y `/en/shop-3d` (EN). La vista conceptual ya estaba publicada antes de esta conversación; /tienda se leyó en producción el 28/10. No se publicó un catálogo real en este lote.
- `src/pages/tienda.astro` y `src/pages/en/shop-3d.astro` usan `src/layouts/ShopPage.astro`.
- `ShopPage.astro` usa MainLayout con `section="shop"`, idioma y noIndex; prepara la imagen conceptual y monta `ShopContent`.
- UI: `src/components/ShopContent.tsx`; estilos: `src/styles/pages/_shop.module.scss`; textos, rutas y seis conceptos: `src/data/shop-demo.ts`; renders: `src/assets/shop/concept-renders.png`.
- La UI ya incluye hero, colección, filtros por categoría, fichas en diálogo y propuesta de trabajo a medida. No rehacer desde cero sin una razón acordada.
- Seis conceptos actuales: Jarrón Sur, Módulo Mesa, Soporte Uno, Maceta Prisma, Nudo y Clip. Son ejemplos visuales, no stock o productos aprobados para vender.
- Identidad acordada: tokens compartidos Inter/Roboto Mono y paleta semántica; ancho útil máximo 1280px y gutters compartidos 20/32/48px; encabezado abierto propio de tienda, navegación contextual y footer compartido. No agregar la grilla animada del portfolio a la tienda.
- La tienda usa tema claro por defecto y preferencia `shop-theme` independiente de `theme` del portfolio, compartida entre sus idiomas.
- Precios, dimensiones, materiales y entrega figuran como pendientes/por definir. La consulta a medida no envía mensajes ni cotiza. No hay checkout, pago ni reserva operativos.
- Mantener avisos de demostración y noindex mientras siga conceptual. No sumar Product/Offer, reseñas, stock o precios inventados para aparentar comercio activo.

#### Continuación inmediata de la web

1. Leer la implementación anterior y las secciones 2–4 de `openspec/changes/contenido-real-y-tienda-3d/tasks.md`, junto con design.md y validation.md.
2. Retomar con Alejandro el próximo lote de la web: mejorar/completar navegación, colección y ficha sobre el diseño existente, y definir las primeras piezas reales cuando disponga de ellas. No tratar la elección de backend o pasarela como requisito para cualquier avance visual/editorial.
3. Para pasar del concepto a catálogo real, confirmar país/cobertura, piezas iniciales y derechos/licencias comerciales, fotos propias, materiales, medidas, variantes, capacidad y tiempos de producción. Solicitar solo los datos que hagan falta para el lote elegido; no inventarlos.
4. Aprobar la arquitectura de listado/fichas y diferenciar producto físico, servicio a medida y portfolio. Implementar una fuente editorial de productos y un CTA de consulta/pedido asistido honesto si ese es el alcance elegido.
5. Validar el catálogo responsive/accesible y su operación editorial con la política de verificación del repo. La evidencia histórica de prototipo no acredita los futuros cambios ni un catálogo comercial.

Pendientes explícitos del OpenSpec: 2.1 datos reales/licencias/materiales/fotos/variantes/capacidad; 2.2 navegación/fichas; 2.3 colección de productos, listado/ficha/consulta; 2.4 revisión responsive/accesibilidad/editorial. Las tareas 2.0–2.0c del prototipo, integración, marca y encabezados figuran completadas. Se leyeron, no se volvieron a ejecutar sus controles.

#### Decisión comercial y backend posterior, todavía abierta

- Comparar catálogo con pedido asistido, Astro con backend Payload separado y una aplicación Next/Payload integrada. La migración completa del portfolio no es un requisito por defecto ni está aprobada.
- Existía una revisión del starter `https://github.com/alejandropd-1/payload-website-starter`: el reporte del 15/10 lo describía como website template, no como tienda ecommerce terminada. No se releyó ese repo ni se verificaron sus versiones hoy. No asumir que lo relatado sigue actualizado.
- Si se considera Payload, acordar una fuente de verdad por tipo de contenido. Evitar editar el mismo catálogo simultáneamente en Tina/MDX y Payload. Resolver ruta/subdominio, costos, mantenimiento, persistencia de medios, correo, backups/restauración y observabilidad antes de migrar.
- Pagos y envíos siguen pendientes. Las menciones históricas a Stripe, Mercado Pago, OCA, Correo Argentino, Andreani o Enviopack son candidatos/investigación anterior, no proveedores seleccionados ni integraciones existentes. Revalidar documentación, condiciones y costos actuales cuando se elija ese frente.
- Checkout solo después de aprobar proveedor, moneda, cobertura por CP, producción/stock, logística y políticas. Requiere total en servidor, cotización con vencimiento, webhooks autenticados/idempotentes, estados de pedido y reserva/liberación de stock, notificaciones y pruebas sandbox. No activar cobros reales por continuar el diseño web.

Documentos para retomar Store 3D:

- `C:\www\Portfolio_2026_astro\openspec\changes\contenido-real-y-tienda-3d\tasks.md`, secciones 2–5.
- `C:\www\Portfolio_2026_astro\openspec\changes\contenido-real-y-tienda-3d\design.md`, fases de catálogo/arquitectura/checkout.
- `C:\www\Portfolio_2026_astro\openspec\changes\contenido-real-y-tienda-3d\validation.md`: contiene publicación expresa del diseño conceptual el 15/10 y evidencias históricas.
- `C:\www\Portfolio_2026_astro\openspec\changes\contenido-real-y-tienda-3d\commerce-readiness-review.md`: revisión del 15/10, útil como contexto; sus hallazgos SEO/teclado y datos de proveedores pueden haber quedado superados por trabajos posteriores. No copiar todos sus pendientes como si fueran actuales.
- `C:\www\Portfolio_2026_astro\docs\prototypes\tienda-3d`: boceto/referencia visual original.

### B. Comprobar el ciclo offline real en un navegador

Pendiente técnico del lote publicado. El build READY y el HTTP 200 del script NO prueban instalación, caché ni ejecución del worker. No debe desplazar la continuidad de Store 3D si Alejandro quiere avanzar primero con esa web.

Cuando corresponda a una verificación final autorizada, con un control acotado y sin reactivar el MCP global e2e:

1. Visitar producción con red, esperar la instalación y comprobar worker activo y caché propia.
2. Simular offline SOLO en el contexto/pestaña de prueba; no desconectar el equipo o sesiones de trabajo de Alejandro.
3. Navegar a un artículo: debe aparecer la pantalla offline manteniendo su URL.
4. Confirmar que título, fuentes, estilos y botones no requieren red para dibujarse.
5. Restaurar red y pulsar Reintentar; debe cargar el artículo original.
6. En navegación online, confirmar que una ruta inventada mantiene HTTP 404 y usa la pantalla 404; que CMS/revisión no se sustituyen por el fallback.
7. Restaurar toda condición de prueba temporal al terminar. No limpiar datos de navegación ajenos.

No se debe reportar esto como aprobado hasta ejecutarlo. Tampoco hace falta convertirlo en otra corrida completa del proyecto.

### C. Confirmación visual responsive del ajuste del topbar

- Alejandro vio la 404 antes del ajuste y reportó la superposición de la etiqueta. Se corrigió, se publicó y se confirmó el CSS/contenido servido.
- NO hay confirmación visual posterior en producción de que la etiqueta quede bien en móvil y escritorio.
- Revisar 404 y offline en ambos temas y anchos pertinentes, incluyendo foco de teclado y ausencia de overflow.
- No afirmar que todos los breadcrumbs del sitio fueron auditados o corregidos: ese trabajo global no se hizo ni se pidió en este lote.

### D. Revisar el resultado de validación de Search Console

- La validación de los dos antiguos 404 se inició el 28/10; falta consultar su estado final.
- Leer el estado existente; no reenviar validaciones, sitemap o solicitudes de indexación si no hay motivo.
- Si el resumen aún muestra artículos sin indexar, contrastar con inspección individual antes de cambiar código.
- Mantener las canónicas y el noindex intencional de la tienda. El objetivo no es dejar el contador de exclusiones artificialmente en cero.

### E. Documentación/OpenSpec y otros trabajos

- No se archivó ni cerró `contenido-real-y-tienda-3d` por publicar estas pantallas.
- No se auditaron sus restantes tasks, design o validation. No interpretar el status sucio como una lista validada de pendientes de este chat.
- Si Alejandro quiere continuar ese cambio amplio, leer sus documentos actuales y confirmar el alcance antes de retomar tareas editoriales, tienda o borradores.
- Los tres borradores `odontopro.mdx`, `useodontopro.mdx` y `tienda-geekies.mdx` permanecen fuera de esta publicación.

## 7. Checkout: preservar trabajo ajeno y local

El 29/10 siguen modificados: AGENTS.md, CLAUDE.md, docs/TESTING_MCP.md, openspec/config.yaml, PROMPT_MIGRACION_TAILWIND_A_SASS.md, cinco skills/checklist locales, `.codegraph/daemon.pid` y design/tasks/validation de `contenido-real-y-tienda-3d`.

También hay muchos untracked: reportes editoriales en el OpenSpec, scripts de preparación, imágenes y evidencias en output, capturas/playwright previas, `src/editorial/`, `src/pages/revision/`, tests e2e y los tres proyectos borrador. No fueron publicados ni eliminados por esta conversación.

No hacer `git add .`, limpiar untracked, resetear, descartar políticas, publicar drafts o incluir todo por conveniencia. Antes de cualquier nuevo commit, revisar HEAD, staging y diff; seleccionar únicamente el alcance autorizado.

## 8. Reglas y herramientas para el próximo chat

- Leer el AGENTS.md actual y respetar el flujo local: no crear branches ni worktrees, trabajar en la activa; pedir al usuario si hace falta cambiar de branch.
- Política del 16/10: ejecutora sin builds/tests/tipos/lint/e2e/capturas por tanda, salvo comando explícito una vez. Si ese control falla, registrar y entregar sin bucles ni sustitutos. Orquestador audita por diff; verificación final acotada al cierre. No reactivar e2e MCP global sin consultar.
- Antes de escribir/ejecutar e2e leer `docs/TESTING_MCP.md` y `node_modules/e2e/skills/e2e/SKILL.md`; leer no autoriza correrlos.
- No iniciar otro Tina en puertos ocupados. Dev correcto: `npm run dev` (Tina 4002/9001 + Astro 4322), no Astro solo. No se comprobó hoy si esos procesos siguen activos.
- CodeGraph: .codegraph existe. Search/callers/callees/impact/node pueden usarse en main; explore pesado se delega solo si hace falta y conforme a las instrucciones aplicables. No reindexar sin autorización.
- Skills ya usadas: Astro, HTML, frontend-design, SEO, modern-web-guidance, spreadsheets, computer-use, Vercel deployments-cicd y vercel-cli. Leer las que correspondan al siguiente alcance; no ejecutar sus checklists automáticamente contra la política del repo.
- El conector Vercel MCP en esta sesión solo mostró odonto-pro; devolvió 404 para Portfolio aunque el proyecto existe. La CLI autenticada funcionó. No crear otro proyecto ni cambiar conexiones para resolver ese desajuste.
- Target correcto: equipo `aledesign-projects`, proyecto `portfolio-2026-astro`, ID `prj_OZL34bgW5q9IcOglVLpPOX748Qrt`, repo `Al3design/Portfolio_2026_astro`, producción main. Verificar destino actual antes de mutaciones.
- CLI de lectura usada: `npx.cmd vercel --scope aledesign-projects project inspect portfolio-2026-astro`; `list portfolio-2026-astro`; `inspect <deployment-hostname> --wait --timeout 120s`; `inspect <deployment-hostname> --logs`.
- No había `.vercel/project.json` local en esta conversación; la lectura por nombre y scope funcionó sin enlazar. No iniciar un deploy de todo el checkout sucio por CLI: la publicación se hizo con push selectivo y el build automático Git.
- No imprimir secretos, leer valores de env por rutina ni pedir tokens en el chat. No se añadieron dependencias al proyecto para este lote.

## 9. Primer paso sugerido en el chat limpio

Leer este handoff y el AGENTS.md; confirmar branch/HEAD/diff actuales sin alterar trabajo ajeno. Informar que offline/404 ya están publicadas y retomar la página web de Store 3D desde la sección 6.A: diseño conceptual existente, siguiente lote de UI/catálogo y datos reales que falten. Mantener separados la continuación web, la elección de backend y la activación de comercio. Conservar como pendientes técnicos el control acotado offline, la revisión visual del topbar y el resultado existente de Search Console. No repetir build o publicación para empezar la conversación.

## 10. Actualización posterior del 29/10: controles y prioridad elegida

Esta sección actualiza los pendientes anteriores sin borrar su historial.

- Ciclo offline real comprobado en contexto aislado con producción: worker activo y documento precargado; navegación sin red conserva URL y sirve fallback 503; recuperación con Reintentar; /admin/ y /revision/ excluidos. Sin fallo de producto encontrado.
- Ajuste topbar 404 comprobado: sin superposición ni overflow a 320/390/1440 px en claro/oscuro; capturas de móvil/escritorio inspeccionadas. Los dos controles ya no son pendientes. Evidencia y límites: output/offline-404-search-console-review-2026-10-29.md.
- Search Console consultado en sesión autenticada: validación iniciada el 28/10, 2 pendientes y 0 errores; resumen aún actualizado al 22/10. No se reenviaron solicitudes. Sigue pendiente del procesamiento de Google.
- Investigación y decisiones sobre comercio en openspec/changes/contenido-real-y-tienda-3d/commerce-options-research-2026-10-29.md: Next + Payload es la preferencia futura; núcleo/plugin ecommerce MIT; v4.0.0-beta.5 y estable v3.92.1 verificadas hoy. Revalidar versiones al retomarlo.
- Condiciones de Alejandro: evitar suscripciones de plataforma y plugins pagos; excluir Mercado Libre/Mercado Pago. Desea crédito, débito y transferencia. Payway/Getnet son candidatos por evaluar, sin contratar; OCA, Correo Argentino y otros operadores independientes siguen admisibles. Infraestructura, aranceles y posibles abonos aún requieren evaluación; no prometer costo operativo cero.
- Última decisión expresa: continuar primero Store 3D con Astro + React + TinaCMS y diseño existente; navegación, colección y fichas ES/EN. Diferir migración, carrito comercial, pagos y envíos. No convertir su elección futura de Next/Payload en una orden de instalar o migrar ahora. Mantener conceptos/noindex hasta contar con catálogo real.
- No se hicieron builds ni publicaciones nuevos en esta continuación; los cambios de esta conversación son reportes, evidencia y notas de continuidad. No marcar el OpenSpec como cerrado ni publicar cambios locales ajenos.
