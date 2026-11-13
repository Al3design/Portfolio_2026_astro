# Validacion del inicio editorial y prototipo de tienda

## Tanda 3 de contenido académico - 2026-10-16

Discovery, Tren y Pitufos: borradores bilingües creados y ampliados con respuestas directas del titular. Autoría/categorías/créditos y pendientes separados, sin medios nuevos ni fechas inferidas. Dos comandos de autoría exit 0; sin controles ni capturas por tanda. Ver intake-batch-03.md. Apertura/guardado y validación editorial/visual pendientes; publicación sigue draft.

Fecha: 2026-10-15. No se reemplazo contenido biografico publico ni se desplegaron cambios. La integracion local de tienda se documenta al final.

- Inventario ampliado en content-inventory.md: diez fuentes MDX, contenido hardcodeado, SEO/RSS y salidas Markdown/ATS/impresion; matriz de estado, reemplazo y aprobacion. Tarea 1.3 completada.
- Relevamiento inicial: español e ingles; Argentina; seleccion GitCron, OdontoPro, UseOdontoPro, OdontoPau y portfolio. En ese momento LinkedIn devolvia 999 y los PDF estaban pendientes; la recepcion posterior queda documentada abajo.
- Autorizacion expresa para categorias, textos e imagenes de demostracion mientras ordena las impresiones. Prototipo separado en docs/prototypes/tienda-3d; no hay producto comercial real creado ni tienda operativa.
- Seis renders conceptuales generados con image_gen integrado, asset y prompt guardados en el proyecto; se muestran mediante recortes CSS, sin filtros de inversion. Inter/Roboto Mono y licencias locales incluidas.
- Comprobacion en Chromium via Chrome MCP: 12 combinaciones (innerWidth 1280/390/320, español/ingles, claro/oscuro). Se verificaron seis fichas y cinco filtros, cambio real de idioma/tema, filtro de hogar a dos piezas, aria-pressed, apertura de ficha, cierre por Escape y foco visible al navegar con Tab. Sin overflow horizontal; imagen local decodificada a 1536x1024. Evidencia y capturas en docs/prototypes/tienda-3d/validation.json y preview-*.png.
- Capturas desktop/mobile revisadas visualmente. JavaScript validado con node --check. El prototipo es HTML/CSS/JS independiente y no cambia el build Astro ni requiere instalar otro CMS.
- Tarea 2.0 completada; 2.2 sigue pendiente porque arquitectura y direccion visual aun requieren aprobacion de Alejandro. 1.4 y 1.5 siguen pendientes hasta recibir y contrastar CV/datos reales y aprobar borradores. No se marca como terminado el catalogo ni checkout.

## Integracion local y fuentes recibidas

- PDF ES/EN y case study leidos y contrastados con LinkedIn autorizado en Chrome. source-review.md registra hashes, evidencias, discrepancias y bio borrador ES/EN. Confirmacion del titular: administrador de Moodle en TED INTI; Da Vinci 2007-2018. Fechas del puesto actual, contacto definitivo y fichas de proyectos nuevos siguen pendientes: 1.4/1.5 no se cierran por recibir documentos.
- Rutas locales /tienda y /en/shop-3d, ambas noindex/nofollow. Seis conceptos identificados, filtros y dialogos, sin precios, cobros o checkout. La ruta se integra para revision visual; no constituye aprobacion de publicacion.
- Ancho util maximo compartido de 1280px, igual al boceto. Margenes 20/32/48px. Portfolio conserva encabezado flotante; tienda usa encabezado abierto, mismo contenido de marca/acciones y mismo footer MDX. Menu contextual por seccion, entrada SHOP 3D desde el portfolio.
- Shop no renderiza bg-energy-grid. Tema claro por defecto y preferencia independiente shop-theme; portfolio conserva theme. Los dos idiomas de tienda comparten su preferencia. Colores, superficies, foco y tipografias provienen de los tokens del repo.
- Asset optimizado por Astro/sharp: aproximadamente 2 MB PNG a 96 KB WebP, conservando colores de los renders.
- Comprobacion de tipos enfocada en componentes modificados aprobada. El chequeo Astro general informa 13 errores en Google Analytics y TinaCMS; no se afirma que ese control general pase.
- La comprobacion responsive se conserva en evidence/shop-shared-matrix.json (20 combinaciones: 1440/1024/768/390/320px, ES/EN, claro/oscuro) y evidence/portfolio-width-matrix.json (cinco anchos). Sin overflow, contenido y encabezado alineados; imagen decodificada, foco y menu movil comprobados. Capturas desktop/mobile revisadas.
- Incidencia local encontrada: un build mientras corria dev dejo el modulo optimizado de Tina con HTTP 504 Outdated Optimize Dep, impidiendo hidratar los filtros. La prueba ahora espera la hidratacion real de ClientHome; para el cierre se ejecutan build y dev de forma secuencial y se reinicia el proceso de este proyecto antes de e2e.
- Cierre tecnico: astro build aprobado (11 paginas); e2e 4/4 aprobados, run 01a140a9-a985-79ae-95f3-3c4b92173d85. OpenSpec validate --strict aprobado. La revision de controles del encabezado mide el centro vertical de idiomas/iconos y exige diferencia maxima de 1px; se corrigio la alineacion con inline-flex, centrado y line-height comun.

El OpenSpec sigue abierto: catalogo real, contenido aprobado, arquitectura comercial y publicacion siguen pendientes.

### Ajuste posterior solicitado por Alejandro

Marca del encabezado Al3Design en ambos sitios, incluida la vista movil y previa a hidratacion. Shop omite RSS/codigo en escritorio y menu movil, y usa el icono circular con mitad rellena del boceto para cambiar tema. El portfolio conserva sus acciones. Tipo comprobado; navegador confirma marca, ausencia de RSS/codigo, icono y cambio real de tema en tienda.

Rebranding extendido por pedido del titular: footer y copyright MDX/fallback, metadatos y titulos, RSS, metadata.json, ruta ilustrativa del CV y prototipo independiente pasan a Al3Design. Se verificaron siete rutas locales y RSS: sin marca anterior en texto publico ni enlaces al sitio viejo. Bluesky al3design.dev devuelve el DID del titular; enlace actualizado. YouTube actualizado a @al3design, confirmado por Alejandro mediante captura de YouTube Studio; sustituye el handle provisional @al3design_1. Correo de ejemplo retirado del MDX, vista, ATS y metadata de exportacion; no se invento una casilla nueva. Chequeo de tipos enfocado aprobado, incluido ClientResume. Documentos fuente e informes historicos conservan referencias originales como evidencia.

## Lote autorizado para publicar

Alejandro solicita expresamente publicar, commitear y pushear el 2026-10-15. Incluye la integracion de diseño de Shop 3D, cambios de ancho/encabezados y rebranding; no convierte los conceptos en productos disponibles ni aprueba biografia, precios o checkout pendientes. Se mantienen noindex y avisos de demostracion. Verificacion final antes del commit: e2e 4/4, run 01a140b2-20e0-75ef-b27a-5d39ef2cd54a; astro build 11 paginas aprobado; tipos enfocados y git diff --check aprobados. Rama main sincronizada con origin/main antes del commit. El OpenSpec conserva pendientes de contenido real y comercio, por lo que no se archiva.

## Tanda posterior: archivo e isologo 2026

Registro editorial y cola en intake-plan.md; 3936 archivos inventariados por metadatos y 13 videos publicos indexados en youtube-inventory.json. No se leyeron completos los TXT largos ni se publicaron trabajos del archivo. Los SVG aportados se copiaron sin alteracion (hashes de las cuatro variantes coinciden con los originales). Color/blanco segun tema, negro en impresion; gris preservado. Favicon ICO real con seis tamaños 16/32/48/64/128/256, SVG/PNG y apple-touch-icon 180.

Verificacion local: 16 combinaciones de 1440/1024/390/320px, portfolio/tienda, claro/oscuro: carga de marca, variante correcta, nombre accesible unico, sin overflow ni solapamiento. Evidencia local en .e2e/brand-intake/verification.json y shop-new-logo.png. Tipos enfocados aprobados; e2e 4/4 run 01a14248-aa55-7b8a-8d4c-80a4aa1c4553; Astro build 11 paginas aprobado con cache de Vite aislada para no invalidar el servidor dev activo. Esta tanda queda preparada localmente; la publicacion anterior no incluye aun estos nuevos assets.

## Encabezado al desplazar y tanda editorial 01 — 2026-10-16

Implementacion y alcance en navigation-scroll-review.md. Portfolio abierto al inicio y vidrio al bajar, conservando geometria y tokens; tienda conserva su encabezado. Corregidos ciclo de foco/Escape/retorno e inert del fondo del menu movil. Enlace para saltar al contenido disponible al foco.

- Tipos enfocados: pnpm exec tsc --project .e2e/tsconfig.shop.json aprobado.
- Astro build con cache aislada: 11 paginas, aprobado. Advertencia previa de import Search sin uso en ClientResume, sin nuevos errores.
- e2e determinista: 7/7 aprobados, run 01a144ab-8ab8-761b-9833-b0d546715017. Incluye tres regresiones nuevas: umbral y retorno sin cambio de caja; Tab/Shift+Tab y Escape en menu movil de portfolio y tienda.
- WebMCP sobre preview del build: 36 estados aprobados (1440/390/320 px, dos temas, portfolio/tienda, arriba/600 px/retorno). Sin overflow; en portfolio opacidad 0/1/0 y medidas estables; en tienda superficie ausente. Reducir movimiento desactiva la transicion. Evidencia local: .e2e/navigation/verification.json y capturas portfolio-top.png / portfolio-scroll.png inspeccionadas visualmente.
- OpenSpec validate --strict y git diff --check aprobados.
- Primera corrida e2e: no pudo conectar porque Astro no habia terminado de iniciar; se reiniciaron exclusivamente los procesos propios de esta sesion y se repitio con el servidor listo. No se oculta como fallo de aplicacion ni como prueba aprobada. El servidor final de desarrollo queda en localhost:4322.

Archivo: tanda inicial de tres carpetas de 2018 en intake-batch-01.md, con previews, metadatos de video, storyboard de 11 paginas y borradores ES/EN. Se detecto que Manifiesto contiene material de Toplomero y un storyboard distinto. Roles, fechas, licencias y equivalencia de videos publicos siguen pendientes; no se publica contenido del archivo ni se marca completa su revision global. Proximo cursor: multimedia/2017.

Todo este lote queda local, sin commit, push ni despliegue nuevo. El OpenSpec de contenido y comercio continua abierto.

### Fondo del menu movil

Corregido el override que dejaba la base del menu al 10 % de opacidad. Ahora usa brand-surface-low opaco, como las cards, conservando sus gradientes y textura SVG ligera. No se reintroduce el PNG pesado ni se depende de backdrop blur para ocultar la pagina de fondo. WebMCP: cuatro combinaciones aprobadas (portfolio/tienda, claro/oscuro, 390x844), base RGB opaca, cobertura de viewport, contenido de fondo inert y sin overflow. Capturas de ambos temas inspeccionadas; evidencia local en .e2e/mobile-surface/verification.json. git diff --check aprobado. Cambio local sin publicar.

## Fichas academicas para revision — Mundo y Toplomero

Se prepararon cuatro rutas locales ES/EN, con MainLayout/tokens/ancho compartidos, copy confirmado separado de pendientes, portada WebP, reproductor nativo a demanda y descripcion visual. Detalle y enlaces en academic-drafts-review.md. No se incorporan a Tina ni a las colecciones publicas; Rocket sigue excluido de esta seleccion.

- e2e focalizado final: 6/6 aprobados (fichas y navegacion), run 01a144f4-5d8e-710f-8490-07071427fc9f. Se comprueban cambio de idioma, lang/noindex, reproduccion real con avance de currentTime, descripcion desplegable, sin overflow movil, allowlist de medios y ausencia de enlaces de revision en home; tambien se revalida el encabezado y el teclado movil.
- WebMCP: 16 estados aprobados, dos fichas × ES/EN × claro/oscuro × 1440/320 px. Un H1, variante de color del tema, portada cargada, controles/preload none, sin autoplay, iframe ni overflow. Capturas de Mundo y Toplomero revisadas en escritorio y movil. Evidencia en .e2e/academic-review/verification.json y PNG de esa carpeta.
- FFprobe: derivados H.264 960x540, solo pista de video. Mundo 24,8 s; Toplomero 17,958 s (recorte solicitado de aproximadamente 18 s). Se inspecciono el ultimo fotograma del recorte de Toplomero para verificar que no incluye la placa final de telefono.
- Build Astro con cache aislada aprobado: 11 paginas. Comprobacion de salida: ninguna ruta /revision, ninguno de los cuatro archivos de muestra y ninguna referencia de borradores en HTML/RSS. Evidencia .e2e/academic-review/build-exclusion.json. Noindex no se usa como sustituto de esta exclusion.
- Tipos focalizados aprobados con .e2e/tsconfig.academic.json: datos, endpoint y ambos archivos de pruebas. astro check global reporto 16 errores: 13 de Analytics/Tina ya conocidos y tres retornos no serializables en el test de navegacion de la tanda anterior. Se corrigieron esos tres retornos y se validaron con tsc focalizado y e2e. No se declara verde el chequeo global ni se modifican los 13 errores ajenos a esta tanda. Log original: .e2e/academic-astro-check.txt.
- La primera comprobacion de Range devolvio 200: Astro trata este endpoint como estatico. Se simplifico a entrega completa de los derivados pequeños, sin publicitar soporte Range. La reproduccion de ambos videos se probo de nuevo. El primer cliente WebMCP tardo en iniciar/navegar; la verificacion final se completo con el binario ya cacheado y timeout de navegacion de 30 s, sin cambiar configuraciones globales.
- OpenSpec validate --strict y git diff --check aprobados. El avance parcial 1.5a se completa; la aprobacion del contenido, fechas, equipo, creditos, medios finales y publicacion siguen pendientes en 1.5/1.6.

Todo permanece local en la rama activa main, sin commit, push ni despliegue. La carpeta fuente de Drive y los originales no se modificaron.

### Correccion de plantilla solicitada por Alejandro

Mundo y Toplomero ahora consumen ProjectDetailView, la misma vista que usa ProjectDetailLayout con useTina para Freelance/Around. Se conservaron _project-detail.module.scss y los MDX publicos. Breadcrumb, titulo //, tarjeta de metadatos, hero panoramico 21:9, grilla de prosa/cards MDX, specs.json y boton de siguiente proyecto corresponden a la plantilla original. Se quitaron la cabecera, grilla y cards alternativas de la primera revision. Los pendientes quedan en un detalle editorial plegado al final; ES/EN ocupa la zona de acciones y puede envolver a otra linea en movil.

- Referencia Around medida antes/despues: mismos titulo, metadatos, clases de header/hero/mainGrid/specs y aspecto 21:9. Comparacion aprobada; evidencia local .e2e/academic-review/template-parity.json. La prueba compara ademas Freelance y ambas fichas nuevas contra la misma estructura.
- Suite completa: 11/11 e2e, run 01a14514-84dd-7c4e-a695-991da8613a13. Tras corregir el corte del selector ES/EN a 320 px, nueva corrida focalizada: 4/4, run 01a14518-5c2b-7b25-906d-50cc1c3fbfe1, incluyendo comprobacion de que ambos enlaces quedan dentro del viewport.
- WebMCP final: 16 estados ES/EN, claro/oscuro y 1440/320 px aprobados; capturas actualizadas e inspeccionadas de Mundo/Toplomero. Sin overflow; reproduccion real y descripcion visual conservadas. Las notas editoriales se comprueban fuera del articulo y plegadas.
- Tipos enfocados de la vista compartida, wrapper Tina, datos, endpoint y pruebas: aprobados. Se conserva el limite del chequeo global ya documentado; no se declara corregido Analytics/Tina.
- Build aprobado: 11 paginas. Verificacion de exclusion de rutas/medios de revision y HTML/RSS publico aprobada de nuevo; git diff --check aprobado. Sin commit, push ni despliegue nuevo.

### Tanda posterior bajo politica de controles diferidos

Isologo blanco actualizado y ES/EN en el topbar: implementados, sin verificacion por tanda. Reporte en logo-language-topbar-report.md. No se ejecutaron suites, build, tipos, lint ni controles de diff; no se iniciaron navegadores/MCP de diagnostico ni se generaron capturas. Los resultados de las secciones anteriores son historicos y no validan esta tanda. Controles pendientes para el cierre del OpenSpec. Sin commit, push ni publicacion.

## Tanda preview/exportacion/encabezado - 2026-10-16
Implementacion registrada en preview-export-header-report.md. Controles diferidos al cierre por AGENTS.md; sin build, tipos, lint, e2e ni capturas en esta tanda. Los resultados anteriores no validan estos cambios. Local sin publicar.

## Tanda relatos y movimiento - 2026-10-16
Ver articles-process-motion-report.md: textos ES/EN ampliados desde respuestas de Alejandro y transicion temporal del topbar. Sustituye la timeline nativa anterior. Sin controles por tanda conforme a AGENTS.md; revision editorial/visual y controles pendientes al cierre. Local sin publicar.

## Tanda bloques Tina - 2026-10-16
Ver tina-article-blocks-report.md. Se implementaron esquema, renderizado, exportacion, idioma/vinculos y filtro de borradores; se crearon cuatro documentos mediante comando de autoria (exit 0). No se ejecutaron controles conforme a AGENTS.md. El esquema/cliente Tina requiere regeneracion al iniciar el servidor dev; no se editaron generados. No se declara CRUD, preview, build ni publicacion validados. Pendientes editoriales y verificacion final abiertos.

## Tanda un documento ES/EN - 2026-10-16
Ver bilingual-document-report.md. Migracion de autoria ejecutada una vez con exit 0; copias originales conservadas, dos documentos bilingues creados y cuatro anteriores retirados. Schema/render/rutas/Markdown adaptados. No se ejecutaron controles ni se reinicio Tina; validacion final pendiente conforme a AGENTS.md. No se declara resuelto el error de apertura anterior. Local sin publicar.

## Correccion router Tina desde capturas - 2026-10-16
Ver tina-routing-fix-report.md. Causa identificada leyendo el fetchCollection y handleNavigate instalados: callback recibe nodo _sys-only y no publicationStatus. Router local y cobertura de revision ajustados sin modificar filtros publicos; formularios nativos disponibles por enlace directo. Pruebas preparadas sin ejecutar; no se declara navegador validado.

## Tanda contenido Around y 2017 - 2026-10-16
Apertura de Tina confirmada por Alejandro. Nuevo borrador Around ES/EN creado y ampliado mediante dos comandos de autoria, ambos exit 0; sin cambios de schema, controles ni capturas. 2017: solo seleccion por metadatos y confirmaciones del titular, sin revision visual. No se declaran completadas validacion editorial, multimedia, guardado ni release.

## Tanda experiencia Around vinculada - 2026-10-16
Aclaracion del titular: trabajo profesional en Around MD bajo Fixed-term contract. Documento actualizado y asociado a around; enlaces bidireccionales, ancla con soporte de hidratacion, campo Tina y Markdown implementados. Script de autoria exit 0. Sin controles por tanda conforme a AGENTS.md; ver around-employment-link-report.md. Publicacion sigue draft.
