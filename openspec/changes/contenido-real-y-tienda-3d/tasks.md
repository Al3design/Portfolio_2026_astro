# Tasks

## Estado vigente y próximos pasos — 2026-11-02

Este resumen prevalece sobre las casillas y los estados históricos que siguen debajo. Conservamos el historial para no perder límites de evidencia; una casilla antigua sin marcar no es una orden de repetir un control o una publicación ya completada.

### Completado para el catálogo publicado

- [x] Colección de ocho piezas reales y fichas ES/EN, fotos, paletas editables, filtros, consulta por WhatsApp, compartir y RSS. Publicación autorizada R55: PR #1 fusionada en `2e9b3dd`, producción en `https://al3design.dev/tienda`. Evidencia registrada el 30/10, no una nueva consulta del despliegue hoy. Ver [reporte R55](shop-r55-production-2026-10-30.md).
- [x] Regeneración de esquema e índice Tina, Preview y publicación de los ajustes R46–R50 resueltos por R47/R48/R50/R55. Los pendientes antiguos 2.4o, 2.4p y 2.4r están superados en ese alcance. No volver a abrir orígenes de Preview caducados por 2.4q: el origen de producción ya estaba autorizado en R55.
- [x] Verificación final R55: 11/11 escenarios E2E, build remoto y checker sin errores; HTTP público de fichas, imagen social y feeds. No repetir por ordenar documentación.
- [x] Guía editorial para cualquier IA y borradores reutilizables: [guía](../../../docs/GUIA_EDITORIAL_IA.md), [artículo](../../../docs/templates/articulo-bilingue.mdx) y [pieza](../../../docs/templates/pieza-shop.json). Contratos, imágenes, Tina, plantillas, metadatos, RSS y límites de publicación documentados.

### Pendientes activos, sin ampliar la publicación

- [x] EDIT-1 Recorrido local de alta comprobado el 02/11: crear/guardar/reabrir ficha temporal con original existente, edición de título en Live Preview sin guardar, exclusión del catálogo de ocho piezas y retiro del temporal. Ver [reporte](../alta-piezas-shop-desde-tina/report-2026-11-02.md). No equivale a upload nuevo, aprobación de todos los campos/idiomas, Cloud o publicación.
- [ ] EDIT-2 Facilitar el alta pública de piezas: implementación local preparada en [alta-piezas-shop-desde-tina](../alta-piezas-shop-desde-tina/tasks.md), con selección/novedades/portada en Tina e imports derivados. Conserva las ocho piezas y no publica automáticamente borradores. Falta regenerar esquema y comprobar contratos, build/artefacto y recorrido de alta antes de considerarlo resuelto. La publicación R55 mantiene el flujo anterior hasta desplegar este cambio.
- [ ] DIF-1 Comprobar previsualización de enlaces dentro de WhatsApp/Instagram, disponibilidad del selector nativo en dispositivos y suscripción en un lector RSS real. El HTTP y los escenarios R55 no acreditan estos recorridos externos. No enviar mensajes ni publicar en redes sin instrucción expresa.
- [ ] A11Y-1 Completar auditoría integral con lector de pantalla, contraste y zoom; conservar como evidencia parcial el recorrido de teclado y responsive ya realizado.
- [ ] SEO-1 Consultar el resultado existente de Search Console. Último registro del 29/10: validación iniciada el 28/10, dos pendientes y cero errores, esperando procesamiento. No reenviar solicitudes por rutina. Offline real y topbar 404 ya comprobados el 29/10; no son pendientes.
- [ ] PORT-1 Continuar los artículos y revisar coherencia del contenido público/exportado según sus aprobaciones individuales. OdontoPro, UseOdontoPro y Tienda Geekies conservan sus restricciones de borrador; este cierre de catálogo no las cambia.

### Diferido por decisión de producto

Next + Payload, carrito, cobros y envíos (secciones 3–4) requieren decisión posterior y no bloquean la consulta asistida actual. También siguen diferidos la carga de originales editables y su almacenamiento. No archivar el OpenSpec general por haber publicado el catálogo.

## Historial de tandas y aceptación parcial

## Estado consolidado — 2026-10-21

Este resumen actualiza la situación editorial. Las notas de las tandas de abajo
se conservan como historial; sus referencias a borradores no describen por sí
solas el estado actual. Publicado no significa validado en todos los recorridos.

- [x] Publicados: GitCron, OdontoPau, Ingest Monitor, BOTF, Supremacy, Casa,
  Discovery, Tren, Pitufos, Chokie, Rocket, Mundo, Toplomero, Rioko, París,
  Mate, CV personal y BDM Consultores, con contenido ES/EN.
- [x] Resume publicado con formación corregida, habilidades sin porcentajes
  inventados y seis experiencias; PM/IT 2023–abril 2026 y Moodle abril 2026–actualidad.
- [x] BDM publicado por autorización expresa: commit `44f9d5a`, Vercel Ready,
  seis imágenes públicas, sin enlace a GitHub y galerías de previews uniformes.
- [x] Revisada por código la fuente compartida de Experience Map, ATS y Markdown;
  no equivale a descarga ni validación interactiva de esos archivos.
- [x] Limpieza local de imágenes Picsum y relatos heredados en Around, Freelance,
  INTI Web e INTI Marketing; se conserva solo el contenido laboral confirmado.
- [x] Limpieza laboral del 21/10 y mejoras Archive/controles publicadas por
  aprobación expresa: c4a336b, Vercel Ready. Build local autorizado una vez pasó;
  las validaciones interactivas siguen pendientes.
- [ ] Validación final de producción: portada/galerías, enlaces, paginación,
  filtros, mobile, teclado, descargas y exclusión de borradores.
- [ ] Validación editorial real desde TinaCMS: edición, persistencia y reflejo
  en la página y las exportaciones.
- [ ] OdontoPro y UseOdontoPro: mantener draft hasta revisión legal del autor.
- [ ] Tienda Geekies: mantener draft provisional por decisión del autor.
- [ ] Tienda física: catálogo real, permisos/licencias, operación y decisión
  comercial pendientes; checkout condicionado a esa decisión.

Ver `portfolio-consistency-review-2026-10-21.md` para alcance y limitaciones.

## Archive — alcance acordado el 2026-10-21

- [x] Relevar implementación actual y reemplazar localmente la presentación
  genérica de sistemas obsoletos por un índice de trabajos publicados.
- [x] Corregidos localmente el año ficticio y los filtros de Archive; categorías
  compartidas con Tina, contador de resultados, estado vacío y limpiar filtros.
  Sin controles ejecutados ni publicación todavía.
- [x] Adaptada localmente la distribución de Archive a móvil y reutilizados los
  estilos compartidos de controles; pendiente comprobación en navegador.
- [x] Paginación compartida Home/Archive y controles compactos estandarizados
  con COPY PAGE; sin tokens nuevos. Ver shared-pagination-2026-10-21.md.
- [ ] A futuro: permitir a Alejandro cargar originales editables PSD, AI,
  escenas 3D y otros formatos, asociados al trabajo correspondiente.
- [ ] Antes de implementar originales: acordar almacenamiento, tamaños,
  versiones, acceso y publicación individual. Subir un original no equivale
  automáticamente a hacerlo descargable ni a ceder su licencia.
- [ ] Implementación de originales fuera de la tanda actual: sin formulario,
  backend, cambios del esquema Tina ni archivos editables subidos por ahora.

Ver `archive-editable-originals-future-2026-10-21.md`.

## 1. Discovery and real content

- [x] 1.1 Confirmar coexistencia portfolio + tienda y relevar el stack y ejemplos de contenido pendiente.
- [x] 1.2 Investigar limites oficiales actuales de Payload e incorporarlos al diseno.
- [x] 1.3 Completar inventario publico y matriz fuente/estado/reemplazo/aprobacion, incluidos fallbacks y exportaciones.
- [ ] 1.4 Recabar CV/bio, proyectos, rol, fechas, contacto, idioma y zona horaria reales.
- [x] 1.4a Inventariar por metadatos las carpetas aportadas y los titulos/enlaces publicos de YouTube; registrar cola y cursor en intake-plan.md, sin leer completos los TXT extensos.
- [ ] 1.4b Revisar visualmente trabajos academicos y profesionales por tandas de hasta tres candidatos, con roles, fechas y derechos por confirmar.
- [ ] 1.4c Cruzar videos con trabajos locales y verificar contenido, autoria, contexto y alternativas accesibles antes de publicar fichas.
- [ ] 1.5 Preparar borradores por pagina; obtener aprobacion y reemplazar solo datos verificados.
- [x] 1.5a Preparar fichas locales ES/EN de Mundo y Toplomero con medios optimizados, contexto confirmado y pendientes editoriales separados; excluir rutas y medios del build publico.
- [x] 1.5b Adaptar las fichas de revision a la plantilla compartida de Freelance/Around, con las mismas cards MDX y notas editoriales plegadas al final.
- [x] 1.5c Mover ES/EN al topbar compartido, enlazar versiones disponibles de la misma pagina y reemplazar el SVG blanco actualizado; controles diferidos al cierre conforme a la politica vigente.
- [x] 1.5d Recuperar LIVE PREVIEW y exportacion Markdown en fichas locales; alinear extremos del encabezado al cuerpo al inicio y recogerlos al contenerse. Implementacion en preview-export-header-report.md; controles pendientes al cierre.
- [x] 1.5e Ampliar Mundo y Toplomero ES/EN con proceso, desafios y aprendizajes confirmados por Alejandro; actualizar exportacion y suavizar fade/ajuste del topbar con transiciones temporales. Ver articles-process-motion-report.md; revision editorial y controles finales pendientes.
- [x] 1.5f Implementar bloques editables Tina, portadas con alt/epigrafe/credito, categorias 3D/animacion/academico, documentos ES/EN vinculados y cuatro borradores migrados al circuito compartido. Ver tina-article-blocks-report.md y docs/ARTICLES_TINA.md; editor y guardas pendientes de verificacion final.
- [x] 1.5g Consolidar los cuatro borradores en dos documentos bilingues con datos compartidos, locales ES/EN, rutas por idioma y compatibilidad de enlaces anteriores. Ver bilingual-document-report.md; sustituye la organizacion de 1.5f sin declarar resuelto el error de apertura pendiente ni ejecutada la verificacion final.
- [x] 1.5h Preparar Ingest Monitor/Around como borrador bilingue editable desde la presentacion y el contexto del producto oficial, sin reemplazar la ficha publica ni inventar resultados/fechas. Ver around-case-draft-report.md; aprobacion y medios pendientes.
- [x] 1.5i Clasificar Ingest Monitor como trabajo profesional Fixed-term contract en Around MD y asociarlo en ambos sentidos con la experiencia around de RESUME, sin duplicar empleo ni publicar borradores. Ver around-employment-link-report.md; interaccion y exclusiones pendientes de verificacion final.
- [ ] 1.6 Validar que contenido publico y exportado coinciden y no contienen dummy no identificado.
- [x] 1.5j Preparar Discovery, Tren y Pitufos como borradores bilingues Tina con contexto academico y contribuciones confirmadas por Alejandro; separar modelos propios/de terceros y notas editoriales. Ver intake-batch-03.md; medios, fechas, aprobacion y controles siguen pendientes.
- [x] 1.5k Incorporar portadas, galerias y muestras silenciosas de Discovery, Tren y Pitufos y enlaces existentes del canal para Discovery/Pitufos, dentro del circuito bilingue Tina. Ver academic-2017-media-report.md; seleccion visual, versiones, derechos y accesibilidad final pendientes.
- [x] 1.5l Recuperar respuesta de la grilla al puntero reutilizando el foco verde y transform, sin React/WebGL ni capas nuevas; detener seguimiento al asentarse y respetar preferencias/visibilidad, sin grilla en Shop. Ver grid-pointer-follow-report.md; validacion visual y perfil de rendimiento pendientes al cierre.
- [x] 1.5m Agregar superficie de cards a LIST y reorganizar breadcrumbs compartidos en filas alineadas en mobile, con exportacion adaptable y semantica nav/lista. Ver list-surfaces-mobile-breadcrumbs-report.md; revision visual/responsive/teclado pendiente.
- [x] 1.5n Preparar borrador bilingue de Chokie con etapas/colaboracion confirmadas, ampliar Toplomero con cinco imagenes de proceso y enlazar Mundo/Toplomero a los videos del canal. Ver intake-batch-04.md; seleccion visual, imagenes/creditos Chokie y controles pendientes.
- [x] 1.5o Preparar Rioko, Paris y Tienda Geekies como borradores bilingues Tina con contexto y decisiones confirmados y siete imagenes de fuentes originales. Geekies provisional; folleto separado y video de usuaria excluido. Ver intake-batch-05.md; validacion/editorial/medios pendiente.
- [x] 1.5p Recuperar la mesa GALERIA del PSD de Paris y agregar distribucion opcional de columnas independientes en Tina para capturas largas, conservando proporciones y epigrafes. Ver paris-gallery-layout-report.md; revision visual y controles pendientes.

- [x] 1.5q Preparar Mate y CV personal como dos documentos bilingues Tina con seis derivados de originales, herramientas confirmadas y galerias de previews. CV historico separado de RESUME; sin atribuir encargo de marca ni contexto academico no confirmado. Ver intake-batch-06.md; revision editorial/visual y controles pendientes.

- [x] 1.5r Preparar BOTF, SUPREMACY y Casa como borradores bilingues Tina con ocho derivados de originales y aportes confirmados. Separar modding colaborativo, modelado inconcluso desde dibujo ajeno y pruebas personales de vivienda. Ver intake-batch-07.md; seleccion visual/creditos/editor y controles pendientes.

- [x] 1.5s Ampliar BOTF a 21 imagenes en diez grupos y SUPREMACY con cuatro pruebas 3D separadas de dos dibujos de referencia, corrigiendo creditos y portada. Usar galerias columns existentes en Tina ES/EN. Ver community-3d-expanded-galleries-report.md; presentacion/editor y aceptacion pendientes.

- [x] 1.5t Alinear BOTF en parejas por titulo con grid existente, incorporar vistas texturizadas de Miranda/Kelvin/Vesta, portada collage identificada y referencia Sketchfab mediante campos Tina existentes. Ver botf-pairs-cover-reference-report.md; revision de sitio/editor y aceptacion pendientes.

- [x] 1.5u Preparar cuatro borradores bilingues de GitCron, OdontoPro, UseOdontoPro y OdontoPau con participacion integral y asistencia IA confirmadas; distinguir proyecto personal/clientes y app/portal/sitio profesional. Ver intake-batch-08.md. Medios, relato ampliado, fechas/estado, aprobacion y controles pendientes.

- [x] 1.5v Seleccionar siete capturas existentes e incorporarlas como portadas/galerias bilingues de GitCron, UseOdontoPro y OdontoPau, bajo excepcion explicita para inspeccion editorial de diez candidatas. Separar material historico de estado productivo y excluir radiografias. Ver professional-media-incorporation-report.md; OdontoPro sin imagen propia, aceptacion/editor/controles pendientes.

- [x] 1.5w Agregar enlaces de GitHub GitCron, sitio Paula y preview documentada UseOdontoPro en secciones Tina ES/EN con href/linkLabel opcionales; mantener links de imagen completa y exportacion Markdown. Ver professional-project-links-report.md; preview no comprobada online y controles finales pendientes.

- [x] 1.5x Ampliar los cuatro proyectos profesionales con bloques cards y relato ES/EN de estructura y diseno, conservando portadas, links y herramientas. Ver professional-product-narrative-report.md; motivacion/desafios por confirmar, medio propio OdontoPro y controles pendientes.

- [x] 1.5y Incorporar motivacion/evolucion confirmadas de GitCron, objetivos de visibilidad de OdontoPau y alcance clinico-administrativo de OdontoPro, conservando UseOdontoPro como portal. Agregar portada/galeria de OdontoPro con dos capturas sinteticas seleccionadas de siete autorizadas. Ver professional-confirmed-context-and-odontopro-media-report.md; desafios/aprendizajes, aceptacion y controles pendientes.

- [x] 1.5z Cubrir la grilla ambiental y del puntero detras del cuerpo de lectura y epigrafes de articulos con superficie estatica del tema, manteniendo la decoracion exterior y sin JS adicional. Ver article-reading-surface-report.md; revision visual/rendimiento y controles finales pendientes.

- [x] 1.5aa Suavizar superficie de lectura y reutilizar granulado monocromatico; activar variante propia hexagonal por zonas con puntero, conservando modo cuadrado y preferencias de movimiento/suspension. Ver hexagonal-background-reading-grain-report.md; no es el componente Pro y faltan revision visual/rendimiento/controles finales.

- [x] 1.5ab Observar interaccion de Hexagonal Vault por pedido expreso; agregar estela hexagonal acotada y nucleo mas luminoso, manteniendo helper cuadrado, y enmascarar base/grano de lectura a transparencia real. Ver hexagonal-afterglow-transparent-reading-report.md; apariencia/rendimiento local y controles finales pendientes.

## 2. Physical catalog

### Prioridad acordada el 29/10/2026

Continuar la web Store 3D con Astro + React + TinaCMS y el diseño existente: navegación, colección y fichas ES/EN. Mantener conceptos identificados, noindex y datos pendientes hasta recibir piezas reales. No condicionar este avance a migrar CMS, implementar carrito comercial o contratar servicios.

Alejandro prefiere explorar Next + Payload para el comercio futuro, pero decide diferir su integración junto con cobros y envíos. Evitar suscripciones de plataforma y plugins pagos; excluir Mercado Libre/Mercado Pago. Crédito, débito y transferencia son los medios deseados; Payway/Getnet siguen como candidatos sin selección. OCA, Correo Argentino y los otros operadores independientes siguen admisibles. Restricciones, licencias, versiones y hallazgos completos en commerce-options-research-2026-10-29.md. Las tareas 3–4 siguen abiertas y diferidas; ninguna prueba de sandbox ni arquitectura comercial quedó aprobada.

- [x] 2.0 Preparar prototipo local bilingue con categorias, textos y renders de demostracion identificados para revisar el diseño antes del catalogo real.
- [x] 2.0a Integrar vista local ES/EN con tokens comunes, ancho util del boceto aplicado tambien al portfolio, encabezado abierto para tienda, menu contextual, mismo footer, tema claro inicial y sin grilla animada.
- [x] 2.0b Incorporar isologo 2026 original y variantes en encabezados/footer, respetando tema e impresion; generar SVG/PNG/ICO y apple-touch-icon y verificar tamaños y navegacion responsive.
- [x] 2.0c Encabezado del portfolio abierto al inicio, superficie flotante al desplazar y retorno al inicio sin saltos; conservar encabezado propio de tienda y verificar foco movil/teclado.
- [ ] 2.1 Confirmar pais, primeras piezas, licencias, materiales, fotos reales, variantes y capacidad de produccion.
- [x] 2.1a R5: recibidas quince fotos y preparados cuatro borradores reales ES/EN. Alejandro confirma impresión propia en PLA y modelos gratuitos de terceros de MakerWorld. Originales copiados sin cambios fuera de public; licencias individuales, medidas, variantes ofrecidas y capacidad pendientes. Ver shop-r5-photo-intake-2026-10-29.md.
- [x] 2.1b R6: revisados ocho enlaces MakerWorld y sus licencias expandidas; ninguna descarga gratuita habilita venta. Tres fuentes candidatas asociadas a borradores, cinco candidatos sin fotos y pieza roja/negra sin fuente identificada. Permisos comerciales sin acreditar; borradores conservados. Ver shop-r6-makerworld-licenses-2026-10-29.md.
- [x] 2.1c R11: recibidas once fotos adicionales; tres borradores nuevos (flor blanca, maceta acanalada y maceta perro) y árbol existente con tonos oscuros sin duplicarlo. Total siete piezas/veintiséis fotos, fuentes candidatas R6 para dos nuevas fichas; material de esta tanda pendiente. Test actualizado, sin ejecución adicional. Ver shop-r11-more-prints-2026-10-29.md.
- [x] 2.1d R13: recibidas tres fotos del soporte Creeper y preparado borrador ES/EN con fuente candidata R6 y restricciones conservadas. Total ocho piezas/veintinueve fotos. Ver shop-r13-shared-layout-and-controller-2026-10-29.md.
- [x] 2.1e R18: Alejandro confirma PLA para todas las piezas; completado material ES/EN en las cuatro restantes y actualizadas notas internas. Ocho fichas con PLA, veintinueve fotos conservadas; otros datos y permisos pendientes. Ver shop-r18-pla-confirmed-2026-10-29.md.
- [x] 2.1f R19: medidas opcionales y duración de impresión fuera de la información al cliente por decisión de Alejandro. Campo editorial deliveryTime separado, entrega sin valor inventado; fichas omiten medidas vacías y tiempo de máquina. OpenSpec actualizado, controles pendientes. Ver shop-r19-delivery-scope-2026-10-29.md.
- [x] 2.1g R20: modalidad mixta stock/pedidos y colores a consultar confirmados por Alejandro; aplicados ES/EN a ocho borradores sin cantidades ficticias ni promesas de entrega. Tipo/opción Tina mixed preparados, portadas de flor/perro reordenadas. Ver shop-r20-stock-orders-colours-2026-10-29.md.
- [x] 2.1h R21: Alejandro confirma permisos disponibles; ocho fichas registradas con licencia comercial declarada y fuentes históricas conservadas. No equivale a examen de documentos no adjuntos ni publicación. Ver shop-r21-permissions-and-store-preview-2026-10-29.md.
- [ ] 2.2 Aprobar arquitectura de navegacion y fichas, diferenciando portfolio/servicio/producto fisico.
- [x] 2.2a Implementar localmente R1 de coleccion/fichas conceptuales ES/EN: resumen/limpieza de filtros, informacion pendiente, regreso a la coleccion y propuesta a medida. Leido por diff, sin controles ni publicacion; aceptacion pendiente. Ver shop-ui-batches-2026-10-29.md.
- [ ] 2.3 Implementar coleccion de productos, listado, ficha y consulta honesta sin checkout ficticio.
- [x] 2.3a R2: datos de ficha tipados por concepto con null y fallback ES/EN, implementados por Codex por pedido «seguila vos». Leidos por diff; sin controles ni publicacion. Ver shop-r2-local-report.md. Mandato local conservado como historial, no ejecutar por duplicado; aceptacion 2.4 pendiente.
- [x] 2.3b R4: definir coleccion Tina JSON de borradores de piezas reales, tipos, campos ES/EN/fisicos/fotos/licencias y guia de carga. Sin documentos reales/ficticios persistidos ni conexion a la tienda publica. Implementado y leido por diff; generacion/formulario/CRUD pendientes. Ver shop-r4-editorial-preparation-2026-10-29.md.
- [ ] 2.3c Comprobar creacion, guardado, reapertura y edicion de un borrador identificado de Store 3D; comprobar persistencia y separacion del listado publico antes de integrar piezas reales. R5 recibió material y creó JSON directamente; no acredita CRUD desde Tina.
- [x] 2.3c1 R16: guardar/editar/reabrir una ficha existente desde Tina y comprobar reflejo local; nota temporal restaurada por formulario, JSON semánticamente idéntico al baseline. Excepción interactiva autorizada expresamente por Alejandro. Creación/eliminación y revisión exhaustiva de subcampos no probadas; 2.3c sigue abierta. Ver shop-r16-tina-persistence-2026-10-29.md.
- [x] 2.3d R7: implementar colección y fichas locales ES/EN desde JSON, galería de originales fuera de public y acceso al editor nativo. Lector y rutas limitados a development por código; lectura realizada, navegador/CRUD/exclusión en artefacto pendientes. Ver shop-r7-local-review-2026-10-29.md.
- [x] 2.3e R9: omitir objetos físicos desconocidos en los cuatro borradores y defaultItem, tras identificar recorrido Object.keys(null) en el indexador Tina instalado. Contrato editorial corregido; sin nuevo arranque ni controles, no acredita editor operativo. Ver shop-r9-tina-null-object-fix-2026-10-29.md.
- [x] 2.3f R12: corregir por código las rutas cacheadas de fotos/fichas de revisión mediante handlers dinámicos registrados solo en dev; agregar claro/oscuro con shop-theme. Síntoma aportado por Alejandro; reparación sin control ejecutado todavía. Ver shop-r12-media-and-theme-2026-10-29.md.
- [x] 2.3g R13: reutilizar MainLayout/Navigation/Footer de /tienda en revisión local y retirar documento/cabecera/selector propios; enlaces de idioma y colección locales. Leído por código, sin control ejecutado. Ver shop-r13-shared-layout-and-controller-2026-10-29.md.
- [x] 2.3h R17: preparar acceso directo de ficha a su formulario Tina y de colección a su lista; etiquetas de fotos basadas en alt/nombre del original. Sin cambios en datos ni control interactivo de esta mejora. Ver shop-r17-editor-access-2026-10-29.md.
- [x] 2.3i R21: preparar vista previa de catálogo real en /tienda?catalog=real y equivalente EN, solo en desarrollo y reutilizando revisión/layout/datos. Navegación por ficha/idioma, conceptos conservados sin parámetro; controles pendientes. Ver shop-r21-permissions-and-store-preview-2026-10-29.md.
- [x] 2.3j R22–R24: corregida selección de vista real en /tienda?catalog=real mediante R23 y validada por control R24: 4/4 escenarios ES/EN aprobados. Se conserva el fallo R22 como historial; ocho piezas reales visibles sin cambiar expectativa. Ver shop-r24-preview-e2e-passed-2026-10-29.md.
- [x] 2.3j1 R23: corregir por código el descarte de query de rutas prerenderizadas; /tienda y /en/shop-3d dinámicas solo en dev mediante astro:route:setup. Sin repetir control, 2.3j sigue pendiente de validación. Ver shop-r23-preview-query-fix-2026-10-29.md.
- [x] 2.4b R8: preparar control e2e acotado de revisión ES/EN y recorrido de persistencia Tina, sin ejecutarlos. Comando propuesto y límites en shop-r8-control-preparation-2026-10-29.md; no acredita 2.3c ni aceptación del catálogo.
- [x] 2.4c R10: arranque autorizado después de R9 y una ejecución del control acotado: 2/2 escenarios ES/EN aprobados; cuatro fichas, medios, datos pendientes, idiomas/regreso y geometría 320/1440. No acredita persistencia del formulario Tina, inspección visual ni exclusión en artefacto. Ver shop-r10-review-e2e-2026-10-29.md.
- [x] 2.4d R15: servidor original identificado y reutilizado; una ejecución autorizada del control actualizado, 2/2 ES/EN aprobados sobre ocho fichas y veintinueve fotos, tema persistente, Navigation/Footer compartidos, idiomas/regreso y geometría 320/1440. Sin reinicio ni build. Tina CRUD, inspección visual, alta en caliente y exclusión del artefacto siguen pendientes. Ver shop-r15-existing-server-e2e-2026-10-29.md.
- [x] 2.4e R24: una ejecución autorizada tras R23, 4/4 escenarios aprobados: vista real en tienda, revisión ocho piezas/veintinueve fotos ES/EN, datos R18–R21, tema y navegación. No acredita revisión visual, creación Tina ni exclusión del artefacto. Ver shop-r24-preview-e2e-passed-2026-10-29.md.
- [ ] 2.4 Validar catalogo responsive/accesible y operacion editorial; revision de Alejandro.
- [x] 2.3p R32–R34: corregir fallback del preset persistido con hex vacío. R33 pasa referencias del catálogo vigente por solicitud. R34 autorizado: guardar/reabrir 10501 y representar #00AE42 en listado/detalle ES comprobados; mensaje de hex inválido observado sin guardarlo (no acredita bloqueo de envío). Datos originales restaurados con igualdad semántica completa. Ver shop-r34-preset-persistence-confirmed-2026-10-30.md. Excepciones R32/R34 consumidas; OpenSpec global abierto, sin suites/build/publicación.
- [x] 2.3o R31: ampliar presets a 209 referencias/20 familias PLA y PETG Basic/HF del catálogo oficial, conservar códigos Lite, múltiples tonos y alfa; proveedor habitual 3D Insumos registrado sin sincronizar stock/precios. Importación realizada, esquema preparado; sin suite/build/publicación. Ver shop-r31-expanded-filament-catalogue-2026-10-30.md.
- [x] 2.3n R30: preparar cuadrados compactos en colección y paleta editable por hex/nombres en Tina, con trece presets PLA Lite del JSON oficial Bambu Studio y fuente/commit registrados. Ocho paletas migradas sin inventar códigos de filamento usados. Importación ejecutada, captura de colección inspeccionada; suite/guardado de nuevos campos pendientes. Ver shop-r30-editable-filament-colours-2026-10-30.md.
- [x] 2.3m R29: colección simplificada según captura de Alejandro, reutilizando grilla original sin recuadros ni textos extensos; descripción/paletas/consulta permanecen en ficha. Capturas ES/claro escritorio/móvil y apertura/regreso del árbol inspeccionados. Control existente adaptado, no ejecutado. Ver shop-r29-minimal-collection-2026-10-30.md.
- [x] 2.4g R28: revisión visual acotada de paleta/consulta del árbol ES escritorio claro y ES/EN móvil oscuro, primeras tres tarjetas ES y lectura del nuevo campo Tina con valores existentes. Cinco capturas inspeccionadas; único npm run dev iniciado, sin suites/build/publicación ni mensajes. Alta/persistencia del nuevo campo y destino externo pendientes. Ver shop-r28-browser-review-2026-10-30.md.
- [x] 2.3l R27: preparar consulta por ficha ES/EN a WhatsApp indicado por Alejandro, mensaje localizado con pieza/colores/disponibilidad/precio/entrega, aviso de apertura y envío manual. Sin reservas ni compra simulada; destino y recorrido externo no verificados. Ver shop-r27-whatsapp-inquiry-2026-10-30.md.
- [x] 2.3k R26: preparar paleta informativa de colores fotografiados en tarjetas/fichas ES/EN, registro compartido, selección editorial Tina y textos depurados en ocho piezas. Sin stock ficticio ni controles ejecutados; inspección visual y nuevo campo Tina pendientes. Ver shop-r26-colour-palettes-2026-10-30.md.
- [x] 2.4f R25: inspeccionadas capturas de colección y ficha ES/claro con encabezado/pie compartidos; corregido aviso conceptual heredado mediante texto opcional localizado y confirmado visualmente en colección. Captura móvil falló por timeout y sigue pendiente; sin repetir suite/build/publicación. Ver shop-r25-visual-review-2026-10-29.md.
- [x] 2.4a Revision local acotada de R1+R2: doce combinaciones ES/EN-tema-ancho, filtros, cierre/foco, null localizado, seis fichas por idioma y capturas inspeccionadas. Caso inicial de preferencia nula aclarado mediante control focal, sin fallo de producto pendiente en este alcance. No valida catalogo real, editor Tina ni publicacion. Ver shop-r1-r2-browser-review-2026-10-29.md.

- [x] 2.3q R35: depurar descripciones ES/EN y preparar cuidados generales PLA en las ocho fichas, con manipulación por pieza. Sin cambios en paletas/fotos/nombres ni precios/entrega inventados. Revisado por lectura; revisión editorial de Alejandro y operación real pendientes. Ver shop-r35-descriptions-and-pla-care-2026-10-30.md. Sin controles/build/publicación.

- [x] 2.3r R36: registrar condiciones confirmadas ES/EN en ocho fichas (precio a consultar siempre, entrega según stock/a confirmar y solo impresión incluida) y preparar catálogo público de consulta: selección explícita de ocho piezas/29 fotos, grilla mínima, dieciséis fichas estáticas ES/EN, proyección sin notas internas y WhatsApp manual. Pruebas adaptadas; revisión por lectura, sin ejecución ni publicación. Ver shop-r36-public-catalogue-preparation-2026-10-30.md.
- [ ] 2.4h R36–R39: completar auditoría de teclado/lector de pantalla y aprobación de Alejandro antes de producción; persistencia de una nota interna existente mediante Tina Cloud comprobada y restaurada en R45; no acredita todos los campos o creación de fichas. Build y artefacto ya aprobados en Preview R39, tras indexar únicamente la rama de revisión. PR #1 draft, sin merge/promoción. Ver shop-r39-preview-and-tina-branch-2026-10-30.md.
- [x] 2.4i R37: cobertura acumulada e2e 7/7 en shop + shop-review (un caso pasó inicialmente, seis pendientes pasaron tras reiniciar solo el servidor propio y --last-failed). Colección ES/claro completa y móvil inspeccionadas; ocho piezas/29 fotos, condiciones, paletas, idiomas/tema y ausencia de notas en HTML local. No acredita build/artefacto/producción ni auditoría completa de teclado. Servidor actual 91713. Sin publicación.
- [x] 2.4j R39: Preview protegida Ready del commit selectivo 7378103; Tina + Astro y checker (18 páginas, 37 URLs de variantes, errors:[]) aprobados. Colección/árbol ES-EN/móvil remotos inspeccionados; Vercel success en PR #1 draft. Main/producción intactos, sin desactivar validaciones ni repetir e2e local. Evidencia output/shop-r39; ver shop-r39-preview-and-tina-branch-2026-10-30.md.

## 3. Commerce architecture decision

R36 prepara catálogo de consulta con Astro; pagos, carrito, envíos y decisión Payload continúan diferidos, sin bloquear el catálogo de consulta.

- [ ] 3.1 Comparar pedido asistido, Astro + Payload separado y Next/Payload integrado con costo y mantenimiento.
- [ ] 3.2 Probar en sandbox el proveedor de pagos elegible y el mecanismo de envio por CP.
- [ ] 3.3 Fijar presupuesto, versiones y fuente de verdad; aprobar ADR antes de migrar CMS o implementar checkout.

## 4. Future checkout (conditional on approved decision)

- [ ] 4.1 Definir contratos de carrito, precio/moneda, disponibilidad, produccion, cotizacion y pedido.
- [ ] 4.2 Implementar total calculado en servidor y seleccion de entrega antes de confirmar pago.
- [ ] 4.3 Implementar pagos/webhooks idempotentes, reserva/liberacion y estados de pedido.
- [ ] 4.4 Implementar seguimiento, notificaciones, acceso a pedidos, backups y restauracion.
- [ ] 4.5 Validar sin cobertura, cotizacion vencida, fallos de API/pago, duplicados y concurrencia.
- [ ] 4.6 Confirmar politicas comerciales, cobertura, operacion, costos y textos aplicables con Alejandro.

## 5. Release

- [ ] 5.0 Al completar todas las tareas de implementacion y aceptacion del cambio, el orquestador ejecuta la verificacion final antes de archivar o fusionar y resuelve los fallos. Politica de Alejandro del 2026-10-16: tandas auditadas por diff sin verificaciones; pruebas/build/tipos/lint/e2e se reservan para este cierre salvo comando expreso, una vez, en el prompt. Capturas solo a cargo del orquestador. Ver AGENTS.md y docs/TESTING_MCP.md.
- [ ] 5.1 Obtener aprobacion de contenido y del flujo completo antes de cada publicacion; no declarar tienda operativa hasta probarla.
- [ ] 5.2 Publicar solo con autorizacion, verificar produccion y archivar al completar el alcance acordado.

- [x] Primera preparación editorial de publicación (2026-10-19): relevar 19 drafts, depurar GitCron/OdontoPau ES/EN, incorporar inicio en 2026 y alcance de marca/3D confirmado para OdontoPau, separar notas internas y preparar mapa de cuatro medios. Metadatos de portada/canonical/idiomas conectados a la plantilla compartida. Ver article-publication-preparation-2026-10-19.md. Publicación, aprobación de selección y controles finales pendientes; ambos siguen draft.
- [x] 2.3s R40: recuperar portada original con tres novedades, acceso a colección completa y filtros compartidos ES/EN; conservar anchos, espacios y tipografía originales. Auditoría visual local documentada en `shop-r40-original-storefront-2026-10-30.md`.
- [x] 2.4k R40/R43: control acotado completado y Preview selectiva actualizada en e51142a. Cinco escenarios aprobados acumulados, build Tina + Astro y comprobador de 20 páginas sin errores. Ver `shop-r43-preview-updated-2026-10-30.md`; no cierra aprobación de producción.

- [x] 2.3t R41: desplegable móvil de categorías con botón icono + Filtrar, categoría seleccionada, cierre/foco y equivalencia ES/EN; escritorio conserva filtros visibles. Auditoría visual 320/390/1440 documentada en `shop-r41-mobile-category-disclosure-2026-10-30.md`. E2E preparado; no ejecutado.

- [x] 2.4l R42/R43: corregido matcher de mayúsculas sin cambiar producto; cuatro escenarios pendientes aprobaron en un único `--last-failed` autorizado, sin repetir el escenario verde. R42 conserva el fallo inicial; estado actual en `shop-r43-preview-updated-2026-10-30.md`.

- [x] 2.4m R44: auditar recorrido principal con teclado y resolver origen exacto autorizado de Preview en Tina Cloud. Ver `shop-r44-keyboard-and-cloud-origin-2026-10-30.md`; no acredita lector de pantalla real ni cierre integral de accesibilidad.
- [x] 2.4n R44/R45: completado ingreso y recorrido autorizado de nota interna en Tina Cloud: guardar/reabrir/restaurar, comprobación del formulario y JSON completo semánticamente idéntico al baseline. Dos commits Tina (a445660 y 156a85d), sincronización local por fast-forward preservando 476 entradas ajenas; sin merge o promoción de producción. Ver `shop-r45-cloud-persistence-restored-2026-10-30.md`.


- [x] 2.3u R46: retirar metadatos y campos de autoría/licencia/modelo de las fichas y del esquema fuente; textos ES/EN directos y profesionales, sin narración personal. Revisión por fuentes/diff, sin controles. Ver shop-r46-direct-copy-and-editor-2026-10-30.md.
- [ ] 2.4o R46: regenerar esquema Tina mediante el flujo habitual y actualizar selectivamente la Preview; comprobar formularios y fichas con el nuevo esquema antes de guardar desde Cloud. No reutilizar evidencia de R45 como validación de R46.


- [x] 2.3v R47: regeneración Tina y push selectivo 4d25139 completados; colecciones ajenas idénticas, 490 entradas restantes preservadas. Una Preview Git falló por esquema Cloud anterior. Ver shop-r47-preview-schema-block-2026-10-30.md.
- [ ] 2.4p R47: actualizar índice Tina de codex/tienda-catalogo-real y, con autorización nueva posterior al fallo, reconstruir una vez la Preview. No declarar R46 publicado hasta Ready; no omitir comparación de esquemas.


- [x] 2.4p R48: índice Tina de la rama actualizado; única reconstrucción posterior autorizada Ready. Tina + Astro y checker 20 páginas/37 fuentes sin errores, auditoría remota de portada/colección/árbol. Ver shop-r48-tina-reindexed-preview-2026-10-30.md.
- [ ] 2.4q Habilitar origen exacto del admin nuevo cuando se vaya a utilizar Tina Cloud; no guardar con esquema anterior. Sin ampliar permisos u orígenes durante R48.


- [x] 2.3w R49: quitar franjas de galerías conservando proporción natural y aplicar botones hollow de WhatsApp con icono compartido; auditoría local de ficha perro documentada. Sin build ni publicación.
- [ ] 2.4r R49: incluir los cinco archivos del ajuste en la próxima actualización selectiva de Preview; no atribuirlo a la Preview R48.


- [x] 2.4r R50: cinco archivos R49 publicados selectivamente en eed4e92; Preview Ready, checker 20 páginas/37 fuentes sin errores y auditoría remota de galería/consulta. No publicación en producción. Ver shop-r50-preview-gallery-whatsapp-2026-10-30.md.


- [x] 2.3x R53/R54: compartir por enlace/WhatsApp/nativo y copiar con fallback; metadatos propios de pieza y RSS ES/EN con selección explícita, sin fechas inventadas. Commit ae04fda, Preview Ready; checker 20 páginas/2 feeds/37 fuentes/8 fotos sociales sin errores. Ver shop-r53-r54-sharing-rss-2026-10-30.md.
- [ ] 2.4s Comprobar en contexto de lanzamiento la previsualización pública dentro de WhatsApp, disponibilidad del selector nativo en dispositivos y suscripción en lector RSS. No enviar mensajes ni afirmar publicaciones en Instagram desde la Preview protegida.


- [x] 2.3y/5.1-R55: aprobación explícita de publicación; RSS localizado como icono en topbar de escritorio y menú móvil. Control final de catálogo 11/11 E2E, commit selectivo 29e5f63, PR #1 fusionada en 2e9b3dd, producción Ready y HTTP público/feed/foto social comprobados. Ver shop-r55-production-2026-10-30.md. No equivale a cierre global de OpenSpec ni de comercio futuro.
- [ ] Seguimiento no bloqueante R55: comprobación dentro de apps de mensajería y lector RSS real, auditoría integral con lector de pantalla y otros frentes del OpenSpec. No repetir controles aprobados sin cambios o una duda concreta.

