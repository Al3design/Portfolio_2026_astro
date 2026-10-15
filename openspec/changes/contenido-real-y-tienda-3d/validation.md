# Validacion del inicio editorial y prototipo de tienda

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
