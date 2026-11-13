# Store 3D: preparación editorial de piezas reales

Para altas nuevas y continuidad de una IA, leer primero [GUIA_EDITORIAL_IA.md](GUIA_EDITORIAL_IA.md). Este documento conserva el historial de tandas; sus estados anteriores no reemplazan la guía, el código actual ni la última evidencia de publicación.

## Estado vigente — 02/11/2026

La publicación del catálogo se completó en R55 el 30/10: ocho piezas ES/EN, compartir y RSS en producción. Ver el resumen vigente de `openspec/changes/contenido-real-y-tienda-3d/tasks.md` antes de retomar. El alta completa de una pieza nueva desde Tina y la selección pública sin tocar código siguen pendientes; no repetir la publicación para cerrar esas tareas.

## Historial de estados anteriores

R39 (30/10/2026): Preview protegida Ready en https://portfolio-2026-astro-ehgz79cuc-aledesign-projects.vercel.app/tienda . Build completo y checker aprobados: 18 páginas, 37 URLs de imagen optimizada/variantes de 29 fotos, cero errores. Tras autorización de Preview y posterior «dale gas» a la propuesta de rama, se creó codex/tienda-catalogo-real y se subió commit selectivo 7378103 (68 archivos, sin cambios ajenos); PR #1 en borrador https://github.com/Al3design/Portfolio_2026_astro/pull/1 . Tina Cloud requería indexar manualmente esa nueva rama: se hizo únicamente allí y quedó complete, sin tocar main/secretos/planes. GitHub Vercel success. Colección, árbol ES/EN y móvil remotos inspeccionados; capturas/log en output/shop-r39. Producción al3design.dev sigue Ready en dpl_8FQjuLWLDpTzw8fJAmQvGeXjfpxG; main remoto conserva 4752b25. E2e local R37 no repetidos. Revisión de Alejandro, teclado/lector completo y persistencia Tina Cloud siguen pendientes; no se fusiona ni promueve. Ver shop-r39-preview-and-tina-branch-2026-10-30.md.

R38 (30/10/2026): env run de Vercel confirmó que los dos Secrets de Production no son exportables; build volvió a detenerse en Tina, sin recuperar valores ni omitir controles. Preparado candidato selectivo desde HEAD + 65 archivos de tienda (ocho fichas/29 fotos/28 de soporte), en carpeta temporal sin Git/worktree. Manifiesto con hashes y configuración de Preview/checker; no desplegado. Destino y SSO de Vercel reconsultados. Pendiente autorización de una Preview protegida para compilar dentro de Vercel con sus variables Preview; producción sigue separada. Ver shop-r38-protected-preview-candidate-2026-10-30.md. E2e R37 no repetidos; servidor 91713 conservado.

R37 (30/10/2026): verificación local del catálogo con cobertura acumulada 7/7 escenarios e2e de shop + shop-review. Primer intento falló por cinco campos antiguos cargados; reinicio exclusivo del servidor propio y --last-failed aprobó seis pendientes sin repetir el verde. Servidor actual: sesión 91713, Astro 4322/Tina 4002/9001. Colección completa ES/claro y móvil inspeccionadas, sin fotos rotas. Build `npm.cmd run build` falló antes de Astro por credenciales Tina ausentes localmente; CLI confirmó TINA_CLIENT_ID/TINA_TOKEN como Secret en Vercel Production/Preview, sin leer valores. Build/artefacto siguen pendientes; checker preparado, no ejecutado contra dist viejo. Sin publicación. Ver shop-r37-catalogue-verification-2026-10-30.md y output/shop-r37.

R36 (30/10/2026): Alejandro confirma precio a consultar siempre, entrega según stock y a confirmar, y solo impresión incluida (resto decorativo). Registrado ES/EN en ocho fichas y esquema compartido. Preparadas /tienda y /en/shop-3d con catálogo real por defecto, ocho fichas por idioma, fotos optimizadas con astro:assets y selección explícita en src/data/shop-release.ts. Plantilla pública sin notas/editor/rutas de revisión; revisión local ?catalog=real conservada. Pruebas adaptadas, no ejecutadas. Sin build, publicación ni cambio de noindex. Ver shop-r36-public-catalogue-preparation-2026-10-30.md. Pendiente verificación de compilación, artefacto privado, navegación y revisión visual antes de publicación selectiva.

R35 (30/10/2026): depuradas las ocho descripciones ES/EN y preparados cuidados generales de PLA en details.care, con indicaciones de manipulación según pieza. Agua/drenaje, accesorios incluidos, compatibilidad, precio, disponibilidad concreta y entrega siguen sujetos a consulta/definición. Paletas, fotos, nombres y datos confirmados conservados. Solo contenido de detalle; colección mínima sin cambios. Revisión por lectura, sin controles/build/publicación. Ver shop-r35-descriptions-and-pla-care-2026-10-30.md; cuidados como propuesta editorial, no certificación de cada impresión.

R34 (30/10/2026): control interactivo expresamente autorizado completado. Tina conservó preset 10501 con hex vacío al guardar/reabrir; listado y detalle ES mostraron Verde · #00AE42, rgb(0, 174, 66). El fallo R32 no se reprodujo con R33. #GGGGGG mostró error al salir del campo, sin intentar guardarlo; botón Save seguía habilitado, por lo que no se acredita bloqueo de envío inválido. Primer color restaurado sin preset temporal, igualdad semántica completa con baseline confirmada y vista original inspeccionada. Ver shop-r34-preset-persistence-confirmed-2026-10-30.md y output/shop-r34. Servidor reutilizado; sin suites/build/publicación. Excepción consumida, OpenSpec global abierto.

R33 (30/10/2026): implementada lectura del catálogo Bambu desde disco por solicitud de revisión local y paso explícito de referencias a la paleta en listado/detalle. Evita depender de una importación anterior retenida en el servidor; esa es una hipótesis del fallo R32, no causa raíz confirmada. Código y llamadas revisados por lectura. Sin editar fichas ni ejecutar controles/reiniciar servidor; eficacia y validación interactiva pendientes. Ver shop-r33-preset-catalogue-freshness-2026-10-30.md. No se reutilizó la excepción R32.

R32 (30/10/2026): ejecutada una única excepción interactiva autorizada para el primer color del árbol. Tina guardó/reabrió preset 10501 y hex manual #123ABC; la ficha respetó el override. Al vaciar el hex y guardar, Tina conservó el preset pero la ficha omitió el color: fallback fallido. Se detuvo el control, sin corregir/reintentar; validación inválida y listado pendientes. Datos restaurados al baseline vigente, igualdad semántica completa confirmada y color original visible. Ver shop-r32-colour-persistence-result-2026-10-30.md; capturas en output/shop-r32. Sin suites/build/publicación. Próximo: corregir la resolución del preset en la vista; la excepción R32 está consumida.

R31 (30/10/2026): catálogo ampliado a 209 referencias oficiales en 20 familias: todas las líneas PLA del archivo Bambu Studio, PETG Basic y PETG HF. Incluye PLA Lite/Basic/Matte/Silk/Silk+/Sparkle/Metal/Galaxy/Glow/Marble/Wood/Translucent y otras líneas específicas, sin una familia ficticia «Special». Alejandro identifica 3D Insumos como proveedor habitual; el vendedor usa «PLA Especiales», pero no se importan precios ni stock. Datos activos en src/data/bambu-filaments.json y actualización manual con `node scripts/sync-bambu-filaments.mjs`; el comando Lite previo se conserva como alias. En Tina las opciones incluyen familia/color/código/tonos; siguen funcionando los códigos Lite y overrides manuales anteriores. Multicolor y alfa se conservan como referencia visual, sin reproducir acabados. No se cambia el material de ninguna pieza automáticamente.

R31 inspección: selector Tina con 209 referencias y 20 familias leído desde el DOM; campo manual del árbol y nombres existentes conservados. Captura en output/shop-r31, sin elegir presets ni guardar. Servidor 83583 reutilizado. Guardado/persistencia y cada acabado visual siguen pendientes; sin suite/build/publicación.

R30 (30/10/2026): vuelve la paleta al listado en forma de cuadrados compactos, manteniendo el diseño mínimo R29. En Tina, «Colores de la pieza» permite agregar/reordenar colores, editar nombres ES/EN y hexadecimal #RRGGBB o elegir una referencia de los trece PLA Lite importados del repositorio oficial Bambu Studio. Los nombres/hex manuales tienen prioridad: vaciarlos para tomar los del preset. Las ocho paletas actuales se migraron conservando aproximaciones, sin asignar filamentos Bambu a partir de fotos. Los presets son referencias de pantalla, no stock. Fuente/fecha/commit en src/data/bambu-pla-lite.json; actualización manual opcional con `node scripts/sync-bambu-pla-lite.mjs`, nunca por build ni al navegar. Ver shop-r30-editable-filament-colours-2026-10-30.md.

R30 inspección: colección compacta y formulario del color Verde del árbol capturados y revisados; selector con trece referencias, hexadecimal y nombres existentes visibles. Sin editar/guardar desde Tina; persistencia y errores de validación aún pendientes. Servidor único activo en sesión 83583. Sin build/suite/publicación.

R29 (30/10/2026): por preferencia visual expresa de Alejandro, la colección real reutiliza la grilla de la tienda original, con foto cuadrada, nombre, categoría y «Ver pieza». Se retiran recuadros/padding de tarjeta, texto largo, paletas y permisos repetidos del listado. La ficha completa conserva todos esos datos, colores y WhatsApp. Miniaturas con encuadre cover, galería con originales completos. Inspección visual ES/claro en escritorio y móvil, apertura del árbol y regreso comprobados; capturas en output/shop-r29. Control e2e adaptado, no ejecutado. Se reinició solo el servidor propio al persistir el mapa de clases anterior; sesión actual 18947. Sin build/publicación ni cambios en datos de piezas.

R28 (30/10/2026): iniciada una única instancia de npm run dev tras no encontrar servidor activo. Paleta/consulta del árbol inspeccionadas en escritorio claro y móvil oscuro ES/EN; primeras tres tarjetas ES inspeccionadas. Cinco capturas en output/shop-r28. El esquema generado y formulario Tina muestran el campo de paleta y los seis valores existentes del árbol; no se editaron/guardaron fichas. Enlace de WhatsApp leído/decodificado desde DOM, sin abrir el destino ni enviar: cuenta y entrega no verificadas. Se restauraron tema claro, ES y viewport original. Continúan pendientes alta desde Tina/persistencia del nuevo campo, revisión de Alejandro y exclusión en artefacto; no hubo suite/build/publicación. El servidor queda activo para continuar.

R27 (30/10/2026): Alejandro eligió WhatsApp y proporcionó `541160513261`. Cada ficha local incluye consulta con nombre localizado de la pieza y preguntas sobre colores/combinaciones, stock/pedido, precio y entrega/retiro. El enlace abre WhatsApp en otra pestaña con texto preparado; el visitante debe enviarlo. No reserva ni confirma compra. Destino centralizado en `src/lib/shop-inquiry.ts`, conservado exactamente como fue suministrado. No se verificó la cuenta ni se enviaron mensajes. Implementación leída, sin controles/build/publicación; recorrido externo pendiente.

R26 (30/10/2026): preparadas paletas de colores fotografiados en las ocho fichas y tarjetas, con cuadrados y nombres ES/EN. `photographedColours` es una lista opcional editable en Tina; las opciones y tonos aproximados viven en `src/lib/shop-colours.ts`. No representa stock ni un selector de variantes. Se excluyen colores del control, vidrio y otros accesorios de la escena. Descripciones ES/EN depuradas de nombres provisionales, notas personales y medidas pendientes; límites de uso/compatibilidad conservados. No se cambiaron permisos, fotos ni disponibilidad. La generación/formulario Tina del nuevo campo y la inspección visual siguen pendientes: la vista local rechazó la conexión porque el servidor no estaba activo; no se inició otro ni se ejecutaron controles. Canal y destino para consulta por pieza solicitados a Alejandro, sin inventar un correo o número ni simular envíos.

R18: Alejandro confirmó «son todos PLA». Las ocho fichas tienen material PLA en ES/EN. R19: las medidas son opcionales por ahora y la duración de impresión no es información a mostrar al cliente ni un bloqueo editorial. Lo relevante para el cliente es el plazo de entrega total, aún sin valor confirmado. Quedan pendientes variantes ofrecidas, cuidados, disponibilidad, plazo de entrega y permisos comerciales. Las referencias anteriores a material/medidas/tiempos de impresión pendientes son historial actualizado por estas decisiones.

R20: Alejandro eligió combinar stock y pedidos y ofrecer colores a consultar. Las ocho fichas usan modalidad mixed y textos ES/EN de colores/disponibilidad. Esto define una modalidad general; no afirma que todas estén en stock ni crea cantidades/reservas. Disponibilidad de cada pieza y plazo de entrega se confirman al consultar. Cuidados y permisos siguen pendientes. Portadas candidatas de flor y perro actualizadas con fotos existentes más reconocibles, sin retocar originales.

R21 actualiza los pendientes anteriores: Alejandro confirmó «los permisos están». Las ocho fichas registran rightsStatus licensed, como permiso comercial confirmado por el titular. Se conserva la lectura histórica de licencias y fuentes de R6; no se presenta como una nueva auditoría de documentos que no se adjuntaron. La revisión ya no muestra permiso pendiente para esas fichas.

Vista previa local en la propia tienda: `/tienda?catalog=real` y `/en/shop-3d?catalog=real`. Solo funciona en desarrollo; usa las mismas fichas/galerías/layout que la revisión, con navegación por `piece` y conservación del idioma. Sin ese parámetro se mantienen los seis conceptos. En build/producción el parámetro no habilita lector ni catálogo real. Exclusión implementada por código, pendiente de comprobar en artefacto; no implica publicación.

R22 detectó que la ruta prerenderizada descartaba la consulta y seguía mostrando conceptos. R23 configura las dos páginas de tienda con prerender false únicamente para command dev, mediante astro:route:setup. El build no recibe ese cambio. Reparación preparada por código; el control fallido de R22 no se repitió en R23 y no acredita esta corrección.

R24 comprobó la reparación en una nueva ejecución expresamente autorizada: 4/4 escenarios ES/EN aprobados, vista real dentro de tienda, revisión de ocho piezas/veintinueve fotos, datos actuales, tema persistente y navegación. No hubo build/publicación. Ver shop-r24-preview-e2e-passed-2026-10-29.md para evidencia y límites.

La colección Tina **Store 3D · borradores de piezas** está definida en tina/shop-products.ts y guarda JSON en src/editorial/shop-products. Sus estados son borrador y para revisar; no hay estado publicado ni conexión de estos documentos al listado público. La tienda conserva sus seis conceptos y su noindex. Es preparación editorial, no stock, carrito ni comercio operativo.

Los tipos de datos están en src/lib/shop-editorial.ts. El contrato editorial usa material, dimensions opcional, variants, care, availability y deliveryTime, con etiquetas ES/EN compartidas con Tina. deliveryTime es el plazo total para recibir/retirar, no duración de máquina ni solo tránsito del correo. No se recicla la clave antigua productionTime con otra semántica. En los JSON editables los campos desconocidos se omiten, sin null en campos object. La revisión oculta medidas vacías y muestra «Por confirmar» para los demás campos ausentes. Los null de los conceptos públicos de R2 pertenecen a otro contrato y se conservan; su presentación tampoco muestra tiempo de impresión ni medidas vacías.

## Carga de una pieza

1. Con el servidor Tina + Astro correcto activo, abrir /admin/index.html y elegir **Store 3D · borradores de piezas**. Si aún no aparece por el cambio de esquema, coordinar actualización del servidor existente; no iniciar otro sobre 4002/9001/4322.
2. Crear un documento con nombre de archivo estable, por ejemplo el nombre real de la pieza en minúsculas y guiones. Reemplazar el nombre interno genérico; completar categoría solo cuando corresponda.
3. Registrar nombre y descripción ES. Completar EN cuando exista una traducción revisada; no atribuir variantes al objeto por traducción automática.
4. Completar material, variantes reales, cuidados conocidos, disponibilidad y plazo de entrega cuando estén confirmados. Medidas opcionales por ahora: si se completan, indicar unidad. No cargar duración de impresión como plazo de entrega; la organización de fabricación queda en notas internas. No inventar fechas ni transporte contratado.
5. Registrar autoría/licencia, fuente y condiciones. Una licencia declarada requiere revisión antes de habilitar venta; el estado de la ficha no automatiza esa aprobación.
6. Incorporar solo imágenes que se puedan compartir, distinguiendo foto y render, con alt y crédito. Revisar nombre, rutas y contenido antes de agregar medios.
7. Guardar como borrador; usar **Para revisar con Alejandro** cuando esté lista para su lectura. Este estado no publica la pieza.

## Archivos y medios

Estos documentos no tienen lector/importador en ShopPage ni en ShopContent y no están dentro de las colecciones Astro publicadas. R7 agrega un lector exclusivo de desarrollo para revisión local, separado de la tienda. La validación posterior debe comprobar esta separación, no inferirla de noindex.

## Revisión local de R7

Actualización R11: siete borradores y veintiséis fotos originales, después de recibir una flor blanca (cuatro fotos), maceta acanalada con plato (una), maceta con forma de perro (tres) y tres fotos del árbol en tonos más oscuros. El árbol conserva su ficha y las cinco fotos anteriores; su portada candidata usa una de las nuevas. Los tres borradores nuevos omiten material hasta confirmación. El manifest-batch-02.json conserva la recepción adicional. La evidencia R10 corresponde al estado anterior de cuatro piezas y quince fotos; el test quedó actualizado por código, sin nueva ejecución.

Con el servidor habitual Tina + Astro activo, abrir `/revision/tienda/es/` o `/revision/tienda/en/`. La colección enlaza cada ficha por nombre, conserva el idioma al navegar y permite volver al ancla de la pieza. Las fichas muestran la galería de originales, datos físicos, campos pendientes y notas internas desplegables. Abrir una foto lleva al JPG original servido localmente. No se retocan ni convierten las fotografías.

Usar **Abrir editor Tina**: desde una ficha lleva a su formulario nativo; desde la colección lleva a la lista de borradores Store 3D. R17 prepara esos accesos a partir de las rutas observadas en R16. Las fotos se identifican en Tina por su descripción ES/EN o, si falta, por el nombre del original. Guardar desde el formulario; regresar y recargar la revisión. El lector vuelve a leer los JSON guardados, sin una segunda copia de los textos. R7 no configura edición visual ni guardado desde la vista de revisión. R16 comprobó guardar/editar/reabrir la nota interna del árbol, reflejo local y restauración completa de sus datos mediante el formulario. No acredita creación/eliminación ni todos los subcampos de la colección. R17 está preparado por código y pendiente de control interactivo.

Rutas de ficha: `/revision/tienda/{es|en}/{nombre-del-json-sin-extension}`. Los originales asociados se sirven en `/revision/tienda/media/{intake}/{archivo.jpg}` mediante una lista de referencias internas válidas. Desde R12, astro.config.mjs registra ambas rutas únicamente para el comando dev, con prerender false; los handlers viven fuera de src/pages y mantienen además la guarda MODE development. No usan getStaticPaths: fichas y fotos nuevas se consultan por petición sin depender de la lista cacheada al iniciar. No se copian imágenes a public ni se importan originales como assets de producción. Las páginas llevan noindex/no-store y los medios no-store/noindex. Esta exclusión está preparada por código; debe comprobarse en la verificación final. Un servidor de desarrollo accesible desde otra máquina no es una zona autenticada.

Desde R13 la revisión usa el mismo MainLayout, Navigation y Footer de /tienda, con su control claro/oscuro y preferencia shop-theme. Se retiró la cabecera, pie de documento y selector de tema independientes de R12. Los enlaces ES/EN conservan colección/ficha y Colección vuelve a la revisión local; el logo y A medida llevan a la tienda existente. La revisión mantiene analytics desactivado mediante una opción del layout, sin cambiar el valor por defecto de las páginas públicas.

R13 recibe tres fotos del soporte Creeper para control: nuevo borrador ES/EN, fuente candidata del inventario R6 (1725698), material pendiente y restricciones de licencia conservadas. Total ocho piezas y veintinueve fotos. El manifest-batch-03.json registra la recepción. El resultado R10 no cubre este estado actualizado.

El gestor de medios existente guarda en **public/assets**. Un documento borrador no vuelve privados los archivos de esa carpeta: pueden formar parte de una futura publicación si se incluyen sus medios. No subir allí material confidencial o sin derechos; usar referencias a material propio apto para compartirse.

La recepción del 29/10 incorpora cuatro borradores reales y quince JPG originales en `src/editorial/shop-assets/intake-2026-10-29/`, fuera de public. Cada foto usa `sourcePath` como referencia interna relativa al repositorio; `image` permanece vacío. Esa referencia no es una URL y el campo no genera una previsualización en Tina. El manifest conserva origen, hash SHA-256 y selección candidata. Estos archivos no tienen protección de acceso si se comparte el repositorio.

Alejandro confirmó impresión propia en PLA y modelos de terceros descargados gratuitamente de MakerWorld. Se registra el material en ES/EN. R6 revisó ocho enlaces y sus licencias; tres se asociaron como fuentes candidatas, con autor y condiciones en notas internas. Ninguna licencia gratuita revisada permite vender las impresiones; no hay permiso comercial acreditado. La pieza roja/negra sigue sin fuente identificada. Ver shop-r6-makerworld-licenses-2026-10-29.md en el cambio OpenSpec. Los colores fotografiados no se convierten automáticamente en variantes ofrecidas ni los ejemplares en stock.

No editar tina/__generated__ ni tina-lock.json a mano. Los cambios de esquema requieren generación de Tina en el flujo habitual; guardar un documento no acredita por sí solo que el editor, la persistencia o un futuro frontend estén verificados.

## Pendiente para integrar el catálogo

- Probar creación desde Tina y recorrer subcampos vacíos/ES/EN/fotos bajo control autorizado; guardar/reabrir una nota de una ficha existente ya fue comprobado en R16.
- Completar y aprobar los ocho borradores; verificar enlaces/licencias, variantes ofrecidas, disponibilidad/capacidad y plazo de entrega. Medidas e información de máquina no bloquean esta etapa.
- Comprobar el lector y la revisión local preparados en R7; después decidir qué campos se publican. Las notas internas se muestran solo en la revisión local, no se conectan al frontend público.
- Mantener productos separados de los proyectos del portfolio. Evitar doble edición comercial Tina/Payload si se adopta Payload más adelante.
- No agregar precios, cobros o envíos contratados a esta tanda. Next/Payload y comercio permanecen diferidos según commerce-options-research-2026-10-29.md.

## Evidencia y límites

Preparado por código y lectura de diff. No se afirma editor/CRUD/preview validados ni se crea una pieza ficticia como si fuera real. Controles y regeneración pendientes conforme AGENTS.md; sin build ni publicación de esta tanda.

Fuentes consultadas: [colecciones JSON en Tina](https://tina.io/docs/reference/collections), [objetos y campos](https://tina.io/docs/schema), [colecciones Astro](https://docs.astro.build/en/guides/content-collections/).
# Actualización R40 — 30/10/2026

Portada original restaurada localmente: `/tienda#collection` y `/en/shop-3d#collection` muestran tres novedades con las medidas y tipografías originales. Ver toda la colección abre `/tienda/coleccion/` o `/en/shop-3d/collection/`, con ocho piezas y filtros por categorías. Precio y condiciones confirmadas conservados. Preview R39 y producción todavía no contienen R40. Ver [reporte R40](../openspec/changes/contenido-real-y-tienda-3d/shop-r40-original-storefront-2026-10-30.md): auditoría visual realizada, nuevos E2E preparados sin ejecutar, control móvil pendiente.

# Actualización R41 — 30/10/2026

En móvil, portada y colección completa muestran icono + Filtrar (Filter en inglés), con desplegable de categorías, categoría seleccionada y cierre con selección/Escape. En escritorio sigue la lista visible. Auditoría local ES a 390px, EN a 320px y escritorio a 1440px realizada con IAB, sin desborde observado. Ver [reporte R41](../openspec/changes/contenido-real-y-tienda-3d/shop-r41-mobile-category-disclosure-2026-10-30.md). E2E ampliados sin ejecutar; Preview R39 y producción aún no incluyen R40/R41.

# Actualización R42 — 30/10/2026

Control de consola R40/R41 ejecutado una vez con autorización expresa: 1 aprobado, 1 fallido y 3 sin ejecutar. Falló el matcher del texto móvil: esperaba `Escritorio`, observó `FILTRAR · ESCRITORIO`; filtrado y cierre previos pasaron. Sin corrección/reintento, commit ni actualización de Preview. Ver [reporte R42](../openspec/changes/contenido-real-y-tienda-3d/shop-r42-control-stopped-2026-10-30.md). La Preview R39 aún no contiene R40/R41; no declarar cierre aprobado.

# Actualización R43 — 30/10/2026

Portada original y filtro móvil ya disponibles en [Preview protegida](https://portfolio-2026-astro-hiluainyv-aledesign-projects.vercel.app/tienda#collection), commit e51142a. Cuatro escenarios pendientes aprobaron mediante un único `--last-failed` autorizado; cinco aprobados acumulados con el escenario anterior. Build remoto Tina + Astro aprobado y comprobador de 20 páginas sin errores. Auditoría de filtro remoto a 390px realizada; emulación restaurada. [PR #1](https://github.com/Al3design/Portfolio_2026_astro/pull/1) sigue en borrador. Producción y main sin cambios. Ver [reporte R43](../openspec/changes/contenido-real-y-tienda-3d/shop-r43-preview-updated-2026-10-30.md). Las notas R40–R42 se conservan como historia, no como estado actual.

# Actualización R44 — 30/10/2026

Auditoría de teclado del recorrido público realizada: skip link, foco visible, categorías con Espacio/Enter, ficha y regreso. No equivale a validación con lector de pantalla real. Tina Cloud bloqueaba el origen de Preview; Alejandro autorizó y se agregó únicamente esa URL exacta, confirmada tras recargar. El error de dominio se resolvió, pero el editor aún requiere completar su autenticación. No se guardaron notas. El recorrido guardar/reabrir/restaurar YA ESTÁ AUTORIZADO y queda pendiente del ingreso, sin pedir de nuevo lo mismo. Ver [reporte R44](../openspec/changes/contenido-real-y-tienda-3d/shop-r44-keyboard-and-cloud-origin-2026-10-30.md).

# Actualización R45 — 30/10/2026

Comprobado en Tina Cloud: guardar una marca temporal en la nota interna del árbol, salir/reabrir y restaurar el valor original. El JSON completo quedó semánticamente idéntico al inicial y sin marca; ningún otro dato cambió. Commits Tina a445660 y 156a85d, sincronizados por fast-forward sin afectar los cambios ajenos. La [Preview de la restauración](https://portfolio-2026-astro-3sg38ogd8-aledesign-projects.vercel.app/tienda#collection) quedó READY con build y comprobador de 20 páginas sin errores. El editor usado sigue en el origen hiluainyv autorizado en R44. Ver [reporte R45](../openspec/changes/contenido-real-y-tienda-3d/shop-r45-cloud-persistence-restored-2026-10-30.md). Producción sin cambios; accesibilidad integral y aprobación final siguen pendientes.


# Actualización R46 — 30/10/2026

Pedido actual implementado en fuentes locales: fichas y esquema Tina sin autoría, licencia, condiciones de uso ni enlace al modelo; textos directos y profesionales, sin narrar declaraciones personales. Fotos, paletas y condiciones comerciales conservadas. Regeneración de Tina y actualización selectiva de Preview pendientes; no guardar desde el editor anterior, cuyo esquema aún es el viejo. Sin controles ejecutados, commit ni publicación. Ver shop-r46-direct-copy-and-editor-2026-10-30.md. Las entradas anteriores se conservan como historia.


# Actualización R47 — 30/10/2026

Esquema Tina regenerado y commit selectivo 4d25139 enviado (20 archivos; 490 entradas ajenas preservadas). La única Preview nueva terminó Error: Tina Cloud mantiene el esquema anterior y rechaza FIELD_REMOVED de ShopProductPhotos.credit. No se reintentó ni se omitieron controles. Pendiente actualizar el índice de codex/tienda-catalogo-real en Tina y autorizar una reconstrucción acotada. R46 todavía no está publicado; no guardar desde el admin anterior. Ver shop-r47-preview-schema-block-2026-10-30.md.


# Actualización R48 — 30/10/2026

Índice de codex/tienda-catalogo-real actualizado manualmente y una única reconstrucción completada Ready: https://portfolio-2026-astro-4tn9pljiy-aledesign-projects.vercel.app/tienda . Tina + Astro aprobados, 20 páginas de catálogo y 37 fuentes optimizadas sin errores. R46 visible en Preview; portada, colección y árbol leídos en navegador. Sin suites, cambios de origen Tina ni producción. El admin nuevo necesita habilitar su origen exacto para uso Cloud; no guardar desde el admin antiguo. Ver shop-r48-tina-reindexed-preview-2026-10-30.md.


# Actualización R49 — 30/10/2026

Galerías locales sin franjas: fotos a ancho completo y altura natural. WhatsApp unificado como botón hueco con icono en portada, colección, fichas y revisión ES/EN. Auditoría local de maceta-perro: proporciones 596×335,25 equivalentes a 720×405; botón transparente de 48px con icono. Sin suites, build ni publicación; Preview R48 sigue anterior a este ajuste. Ver shop-r49-gallery-whatsapp-2026-10-30.md.


R49, ajuste posterior: paleta, precio, entrega, inclusión y WhatsApp movidos después de toda la galería en las fichas ES/EN; arriba solo nombre y descripción. Revisión local alineada. Cambios locales, sin publicación ni nuevos controles.


# Actualización R50 — 30/10/2026

Publicado el ajuste R49 y el bloque de consulta bajo la galería en Preview protegida: https://portfolio-2026-astro-o88znjwrj-aledesign-projects.vercel.app/tienda . Commit selectivo eed4e92, cinco archivos, 500 entradas ajenas preservadas. Ready; Tina+Astro y checker 20 páginas/37 fuentes sin errores. Ficha perro remota inspeccionada: imágenes sin franjas y botón hueco con icono después de las fotos. Producción sin cambios. Ver shop-r50-preview-gallery-whatsapp-2026-10-30.md.


R51 (30/10/2026): muestras de paleta con contorno interior de 1px derivado de su propio color (75% tono base + 25% blanco). Aplicado a paleta completa y compacta; hex y dimensiones conservados. Cambio local leído por diff, sin build, suite ni publicación.


R52 (30/10/2026): en ¿Tenés otra idea? de la colección ES/EN, botón WhatsApp movido después de los dos párrafos, con separación superior. Cambio local por pedido, sin nuevos controles/build/publicación.


# Actualización R53/R54 — 30/10/2026

Bordes claros y orden de consulta subidos en e08ca01. Luego compartir piezas y RSS ES/EN publicados selectivamente en ae04fda. Última Preview Ready: https://portfolio-2026-astro-kqs57l8b6-aledesign-projects.vercel.app/tienda . Checker de 20 páginas, 2 feeds, 37 fuentes de galería y 8 fotos sociales, sin errores. Compartir por WhatsApp sin destinatario, compartir nativo según soporte y copiar enlace con fallback; foto propia JPEG 1200×630 en OG/Twitter. RSS en /tienda/rss.xml y /en/shop-3d/rss.xml. Portfolio RSS conservado. Preview protegida: compartir públicamente sigue requiriendo producción. No envío/copiar real ni suscripción externa probados. Sin suites/build locales; 507 entradas ajenas preservadas en R54. Ver shop-r53-r54-sharing-rss-2026-10-30.md.


# Actualización R55 — Producción, 30/10/2026

Catálogo real, compartir y RSS publicados en https://al3design.dev/tienda . PR #1 fusionada con aprobación explícita; merge 2e9b3dd. Último commit selectivo 29e5f63 incluye RSS como icono del topbar de escritorio y en menú móvil, retirando enlaces de texto del cuerpo. Control final 11/11 E2E en una ejecución; Preview y producción Ready con checker 20 páginas/2 feeds/37 fuentes/8 fotos sin errores. Índice main Tina actualizado. HTTP público y fotografía social comprobados sin cookies; feeds ES/EN con ocho piezas y RSS portfolio conservado. Revisión/JSON privados devuelven 404. Producción usa URLs al3design.dev, no Preview. Sin pruebas de envío real ni auditoría integral de lector de pantalla. Rama local conservada y 513 entradas ajenas preservadas en el commit. Ver shop-r55-production-2026-10-30.md.

