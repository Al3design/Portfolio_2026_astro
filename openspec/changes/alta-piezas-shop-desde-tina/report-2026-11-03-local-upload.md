# Control local de upload y selección — 03/11/2026

## Resultado posterior: carga asistida y selección local completadas

El usuario subió manualmente `20261013_190853.jpg` desde el gestor y aportó captura. Se observó el medio en `http://localhost:4322/assets/shop/qa-upload-20261103/20261013_190853.jpg` (214651 bytes). Esto acredita una carga **asistida por el usuario**, no el filechooser automatizado. No se pidió repetir permisos ni subir otra foto.

Con el mismo servidor y sin otro npm run dev, se creó desde Add File la ficha `qa-shop-upload-20261103`: draft, categoría home, título/descripción ES/EN, foto elegida con Insert desde Media Manager, kind=photo y alt ES/EN. Save informó Document created. Se reabrió desde la colección y cargó la revisión local con formulario limpio. El JSON persistido contiene `/assets/shop/qa-upload-20261103/20261013_190853.jpg`, sin sourcePath. Antes de seleccionarla, la colección pública local conservaba ocho piezas y excluía el borrador.

Desde Store 3D · selección pública se agregó la referencia como novena pieza, se reemplazó la primera novedad por la ficha temporal (manteniendo tres novedades) y se eligió como hero. Save informó Document updated y formulario limpio. La colección local mostró nueve piezas y enlace al temporal. El detalle español abrió con foto decodificada (complete=true, naturalWidth=720) y URL derivada Astro `/_image` desde `.astro/shop-media/1294c0663e6621aae6d3bd82463d0a8e2679491b391b8893ab47f0954281ee8f.jpg`. Portada mostró Control local de carga / Impresión real, 03 PIEZAS y enlace a la ficha temporal como novedad. No se enviaron mensajes WhatsApp.

### Restauración

También desde Tina se restituyeron hero=jarron-acanalado, primera novedad=soporte-control-creeper y se quitó la novena fila; Save terminó limpio. El diff final de selección solo mostraba la eliminación del newline final por el serializador. Se restauraron los bytes originales exclusivamente tras reconstruir una variante desde HEAD cuyo SHA256 coincide con el baseline `793524FEAB1619ECD9A5BDDCEA547B4D2CFB7F8E27CA2A47298AB91C21C163DD`. No se sobrescribió contenido aproximado.

Después se retiraron por rutas literales únicamente el JSON temporal, la foto subida para este control y sus carpetas vacías. No se usó borrado recursivo ni se borró el original del intake. `src/editorial/shop-products/.gitkeep`, ya presente antes del recorrido, se conservó. El catálogo local volvió a 08 PIEZAS sin el temporal; selección con hash inicial exacto y sin diff. Cachés derivadas ignoradas de Astro pueden permanecer: no son medios seleccionados/publicados ni acreditan build.

Evidencias: `output/tina-admin-theme/local-upload-detail-2026-11-03.jpg` (ficha temporal con imagen), `local-selection-restored-2026-11-03.jpg` (ocho piezas restauradas). No suites, build, Cloud, commits/push o producción. Se consumió este recorrido autorizado; no repetirlo por rutina. Alcance: carga manual, asignación/alta/reapertura y selección/hero/novedad local; no upload automatizado resuelto, recorrido público EN completo, RSS/social nuevo compilado ni editor Cloud equivalente.

Pendientes de cierre: revisión de peers y límites del adaptador, sincronización selectiva de documentación/commits Cloud y cierre antes de producción. Las secciones inferiores conservan el historial del bloqueo anterior.

## Continuación tras habilitar archivos en Chrome

El usuario informó haber activado Allow access to file URLs y autorizó completar un nuevo recorrido con restauración. La lectura inicial de listeners no devolvió puertos y se pidió autorización de arranque; al consultar la sesión 16167, seguía viva. Chrome reconectado (ID 4) mostraba además Tina local abierto. Se corrigió la interpretación y **no se ejecutó un segundo npm run dev**.

Se reutilizó la pestaña local del usuario, con home limpio (No unsaved changes) y Media Manager abierto. Se preparó shop/qa-upload-20261103, sin guardar contenido. Upload no produjo filechooser en 10 s. Inspección DOM de solo lectura confirmó input type=file, multiple, enabled y display:none; no demuestra el motivo del fallo. Se probó activación por Enter en el botón visible con espera previa y tuvo el mismo timeout. No se copió imagen por consola ni se simularon eventos/API para dar la carga por aprobada. El ajuste de extensión fue informado por el usuario, no comprobado en su UI: no atribuirle incorrecta configuración.

Estado final de esta continuación: no foto seleccionada/subida, no ficha temporal creada y selección sin editar. Gestor conservado en carpeta temporal virtual para asistencia manual si se necesita; captura output/tina-admin-theme/local-upload-after-permission-2026-11-03.jpg. No más reintentos automáticos en esta tanda. Una carga que efectúe el usuario debe registrarse como asistida, no como filechooser automatizado aprobado. Producción/Cloud intactos; sin build, suite o commits.

## Autorización y preparación

El usuario autorizó una excepción única a AGENTS: iniciar una vez `npm.cmd run dev`, subir foto ya aportada a carpeta temporal, crear/reabrir ficha temporal, seleccionarla como novedad/portada, comprobar y restaurar selección, retirar solo temporales propios. Sin Cloud, commits, build ni publicación. Rama codex/tienda-catalogo-real, HEAD df001b1; cambios locales ajenos preservados.

No había listeners en 4322/4002/9001. Se ejecutó exactamente una vez `npm.cmd run dev` (sesión 16167). Tina 3.15.1 activo con API localhost:4002; Astro 6.3.5 ready en localhost:4322 después de unos 45 s de su arranque. La primera navegación ocurrió antes de ready y recibió ERR_CONNECTION_REFUSED; se recargó solo después del ready, sin segundo proceso ni reinicio. El servidor queda activo para reutilizar. No ejecutar otro dev sobre esos puertos.

## Recorrido observado y bloqueo

En Chrome existente, pestaña nueva propia de localhost:4322/admin, modo local visible. Se abrió shopProduct → Add File y se preparó `qa-shop-upload-20261103`, con nombre/descripción ES/EN, sin guardar. Se agregó una fila de foto y se abrió Media Manager. New Folder preparó shop/qa-upload-20261103; Tina informa que una carpeta sin medios desaparece al salir.

Con filechooser esperado antes del click en Upload, la espera venció a los 10 s. La pantalla conservó el gestor vacío, sin entrada de archivo ni imagen; el inventario de ventanas no mostró diálogo nativo. No se usaron HTTP, escritura de archivos o APIs internas para simular una carga del gestor. La guía de la herramienta indica revisar Allow access to file URLs de la extensión de Chrome para uploads; no se comprobó ese ajuste ni se modificó por automatización, y no se declara causa confirmada.

Fuente prevista: src/editorial/shop-assets/intake-2026-10-29/20260826_110646.jpg, foto ya aportada por el usuario. No llegó a transmitirse al gestor. No se guardó la ficha, no se cambió selección/portada/novedades y no se comprobó render, RSS o imágenes derivadas. No continuar con sustitutos ni declarar aprobado upload/selección por los contratos verdes anteriores.

## Restauración y evidencia

Se cerró únicamente la pestaña propia y se descartó su formulario sin guardar. Archivo qa-shop-upload-20261103.json inexistente, carpeta public/assets/shop/qa-upload-20261103 inexistente y sin archivos nuevos en public/assets/shop. Selección antes/después SHA256: 793524FEAB1619ECD9A5BDDCEA547B4D2CFB7F8E27CA2A47298AB91C21C163DD. No hubo datos persistidos que restaurar; no se eliminaron originales o trabajo ajeno.

Captura output/tina-admin-theme/local-upload-chooser-blocked-2026-11-03.jpg. No pruebas/suites adicionales, no build, commit/push, Cloud o producción. SDK local regenerado por el único dev, sin edición manual.

## Próximo paso

Revisar manualmente el soporte de carga de la extensión y habilitarlo si corresponde. Con acceso a archivos disponible, un nuevo recorrido autorizado retoma alta/upload y selección reversible usando el servidor existente. El permiso de esta tanda no habilita reintentos automáticos tras el fallo. Persistencia de nota Cloud sigue aprobada por su evidencia específica; upload/selección interactivos siguen pendientes.
