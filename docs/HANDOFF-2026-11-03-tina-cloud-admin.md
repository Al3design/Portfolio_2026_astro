# Retomar Tina Cloud, tema y Shop — 03/11/2026

Último estado del 06/11: orden editorial comprobado en local (6/6 contratos, Astro 0 errores/0 warnings/86 hints, guardado/reapertura/restauración general y UI/UX). `around.mdx` restaurado byte por byte, sin diff. Reporte canónico en `orden-editorial-dashboard/review-2026-11-06.md`. Después Alejandro pidió más aire entre topbar y título de la home y ocultar misión/estado/ubicación/zona horaria en móvil. Ajuste preparado en ClientHome y su módulo SCSS, sin controles adicionales; ver `contenido-real-y-tienda-3d/home-mobile-density-2026-11-06.md`. Integración selectiva, revisión visual de este último ajuste, build y publicación siguen pendientes; producción continúa con la versión anterior.

Continuación del 06/11: la prueba inicial de orden general perdió campos por enviar un payload parcial; `around.mdx` se restauró exactamente. La corrección preparada relee `_values`, transforma la ficha completa y usa `TinaAdminApi.updateDocument`, igual que el editor nativo. Incluye `tina/dashboard/projectOrderValues.ts` y casos de preservación en `tests/project-order-values.test.mjs`. No repetir los controles anteriores como si siguieran autorizados: la nueva corrección necesita comprobación de contratos/tipos y guardado/reapertura/restauración general y por categoría. No hubo nuevas escrituras de contenido, builds o publicación en esta continuación. Ver el estado vigente en el reporte de `orden-editorial-dashboard`; los estados siguientes son históricos cuando difieran.

Actualización del 06/11. Alejandro pidió edición de orden desde el dashboard, también por categoría. El código está preparado en `openspec/changes/orden-editorial-dashboard/`. Incluye esquema/contrato/plantilla, comparador público antes de paginar y formularios por fila. Falta ejecutar los controles y comprobar el guardado con restauración. La consulta de Vercel confirmó que producción sigue en `portfolio-2026-astro-p76skc6cp-aledesign-projects.vercel.app`, Ready del 30/10. El bundle público de admin contiene 3.8.1 y carece del instalador del tema. Los cambios locales continúan pendientes de integración y publicación. Se preservan los artículos y el trabajo ajeno.

Última tanda del 04/11. El aviso al abrir Ingest Monitor quedó corregido y validado en el formulario nativo. Alejandro confirmó con una captura de Chrome normal que Tina muestra el artículo y su panel editable con Save deshabilitado. La corrección de los enlaces ES/EN está preparada y falta comprobar el cambio de idioma dentro de la revisión. También sigue pendiente el diálogo de enlaces. Ver `article-audit-2026-11-03.md` e `integration-scope-2026-11-03.md` en `tema-admin-tina`. Builds y publicación al cierre.

**Integración posterior:** HEAD local avanzó por fast-forward de df001b1 a fb5b4a9, incorporando únicamente los dos commits Cloud revisados. Sin conflictos, stash/reset, commit/push o build; checkout ajeno conservado. Las menciones inferiores a HEAD df001b1 son históricas. Compatibilidad revisada por lectura: Tina/CLI admiten React19, react-final-form 6.5.9 transitivo declara hasta18. Riesgo documentado y sin override/silenciamiento; cierre global pendiente. Ver `openspec/changes/tema-admin-tina/compatibility-2026-11-03.md`.

**Resultado vigente de upload/selección local:** usuario cargó la foto manualmente, luego se completó alta/reapertura de ficha desde Tina, referencia de foto nueva, selección como novena pieza/hero/primera novedad y render con imagen derivada cargada. Restauración desde Tina y bytes originales de selección comprobados; temporales retirados, catálogo nuevamente de ocho piezas. No otro dev/build, Cloud o publicación. El filechooser automatizado sigue bloqueado; no confundir carga asistida con automatizada. Detalle y alcance en report-2026-11-03-local-upload.md de alta-piezas-shop-desde-tina. Los párrafos siguientes sobre bloqueo son históricos, sustituidos para el recorrido asistido por este resultado.

Último control local de upload/selección: detenido antes de guardar por timeout del selector de archivos; no foto subida ni selección modificada, sin temporales persistidos. `npm.cmd run dev` ejecutado una sola vez, servidor activo en 4322/4002/9001; reutilizarlo. Detalle y evidencia en `openspec/changes/alta-piezas-shop-desde-tina/report-2026-11-03-local-upload.md`. Requiere resolver soporte de archivos de la extensión y nuevo control autorizado; no volver a crear servidor por rutina.

## Actualización más reciente: persistencia Cloud comprobada

El acceso normal por Authenticate With GitHub funcionó al retomar. No hubo cambio de credenciales/permisos ni otro origen. Se abrió la colección Shop y el árbol limpio. El log existente `preview-cloud-ready-2026-11-03.txt` confirma que este deployment compiló desde `codex/tienda-catalogo-real`, `df001b1`, y usa la API Tina de esa rama.

Recorrido autorizado completado: leer nota original actual → agregar marca temporal → Save → esperar No unsaved changes → recargar y observar marca persistida → restaurar nota exacta → Save → esperar limpio → recargar y observar nota original, Reset/Save deshabilitados. Solo `productionNotes`, sin selección/fotos/otros campos. Evidencia `output/tina-admin-theme/cloud-note-restored-2026-11-03.jpg`.

Commits Cloud reales: `c0d8fece8afb265abf7360ea69a13eab459133ec` (marca temporal, 08:21:38 ART) y `fb5b4a9a5f9724af8cc089149b64cc3ecb933262` (restauración, 08:22:57 ART). Se inspeccionaron ambos diffs con git después de fetch. Frente a df001b1, el resultado solo quita el salto de línea final del JSON; la nota y los datos originales están restaurados. No restaurar ese formato con otro guardado/commit por rutina.

HEAD local sigue df001b1; `origin/codex/tienda-catalogo-real` quedó fb5b4a9 tras fetch. No merge/pull/reset sobre el checkout sucio. Los guardados pueden disparar builds automáticos de Preview; no se ejecutó ningún build manual ni se comprobó el estado de esos nuevos deployments. Producción no se modificó.

El permiso de este recorrido se consumió. No repetirlo al retomar. El apartado inferior «Control ... sin ejecutar» queda como historial del bloqueo anterior, sustituido por este resultado. Pendientes actuales: upload nuevo/selección desde Tina (alcance separado), peers y cierre documental/selectivo. No acreditar todo el CRUD Cloud por probar una nota.

## Lectura y estado inicial

Leer AGENTS.md, README.md, openspec/config.yaml, docs/GUIA_EDITORIAL_IA.md y docs/TINA_ADMIN_THEME.md. Este registro describe acciones realizadas, no concede permisos nuevos. Antes de actuar, leer rama/HEAD/índice/diff y conservar el trabajo ajeno.

Último estado observado: rama `codex/tienda-catalogo-real`, HEAD `df001b1` (`feat: add explicit shop selection and refresh Tina admin`). No crear ramas/worktrees ni cambiar de rama. Hay documentación y otros cambios locales sin commit; no usar `git add .`, pull/reset ni publicar todo el checkout. Los documentos escritos después de ese commit todavía no están en la Preview.

## Qué se actualizó y dónde

| Capa | Fuente y regla |
| --- | --- |
| Versiones | `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`: TinaCMS 3.15.1, CLI 4.0.4 y override para una copia coherente de Tina. Usar Node 24 del entorno validado; el mínimo declarado en package.json todavía dice >=22, no tomarlo como evidencia de compatibilidad probada. |
| Formularios | `tina/config.ts`, `tina/shop-products.ts`, `tina/shop-catalogue.ts`, módulos de locales/bloques. SDK, tipos y tina-lock se regeneran con el CLI, nunca a mano. |
| Apariencia | `public/admin-theme/admin.css`, tokens `--al3-admin-*` y puente `--tina-*`; instalador `src/lib/admin-theme.ts` desde `cmsCallback`. Solo `/admin`, sin afectar iframe/sitio. Tabla completa y mantenimiento en `docs/TINA_ADMIN_THEME.md`. |
| Datos y plantillas | `docs/GUIA_EDITORIAL_IA.md` y `docs/templates/README.md`: mapa de esquemas, contratos, ES/EN, fotos, colores, renderer, rutas, social y RSS. Guardar borrador Shop no publica; selección independiente en `src/editorial/shop-catalogue/catalogue.json`. |
| Cloud | Site URLs autoriza orígenes del editor; índice corresponde a una rama; credenciales corresponden al proyecto/entorno. Son tres configuraciones distintas, ninguna sustituye al código o al tema. |

No reinstalar Tina por ver un error del índice remoto. No agregar un origen para corregir un problema de estilos. El nuevo Live Preview Shop tiene router local; en Cloud conserva formulario nativo. Habilitar Site URLs no implementa Live Preview remoto.

## Acciones remotas ya realizadas

- Proyecto Tina **Portfolio2026astro**, ID `91f5f6de-a230-4383-b71b-96f34d232c34`, repo `Al3design/Portfolio_2026_astro`.
- El primer build Preview (`g3fiubuc4`) falló: GraphQL local 4.1.0 frente a índice Cloud 2.4.1 del 30/10. No se omitieron cloud checks.
- Reindexación única de `codex/tienda-catalogo-real`: succeeded el 03/11 a las **07:40:18 ART**. No se reindexó main ni se modificaron webhooks.
- Una reconstrucción posterior terminó **Ready**: https://portfolio-2026-astro-hcr8tuwvw-aledesign-projects.vercel.app/tienda . Tina/Astro completos, 62 páginas; comprobador Shop: 20 páginas, 2 feeds, 37 fotos, 8 imágenes sociales, sin errores.
- Con autorización expresa del usuario se agregó **solo** `https://portfolio-2026-astro-hcr8tuwvw-aledesign-projects.vercel.app` a **Site URLs**, mediante Add. La lista posterior mostró el origen junto con todos los anteriores; Save Configuration quedó deshabilitado. No se agregaron comodines ni se quitaron entradas.
- Orígenes anteriores conservados: `http://localhost:3000`, `https://aledesignastro.netlify.app`, `https://aledesign.dev`, `https://al3design.dev`, `https://www.al3design.dev` y Preview `https://portfolio-2026-astro-hiluainyv-aledesign-projects.vercel.app`. Es un registro observado, no orden para reproducirlos o habilitar otros puertos.
- Vercel: proyecto `portfolio-2026-astro`, equipo `aledesign-projects`, producción en main. TINA_CLIENT_ID/TINA_TOKEN presentes como Secret en Preview; no se leyeron/exportaron valores. Protección de despliegues conservada. No merge, promoción o cambio de producción.

## Control de guardado autorizado pero sin ejecutar

El usuario autorizó un único recorrido: guardar, reabrir y restaurar la **nota interna del árbol**, en la rama `codex/tienda-catalogo-real`. Se informó que puede generar dos commits y builds automáticos de Preview. No autoriza cambiar selección, imágenes, campos públicos, main o producción.

Después de habilitar el origen, Log in abrió TinaCloud Sign-in. El botón Authenticate With GitHub era visible/habilitado; el control del navegador falló por timeout al enviar el click, también en el intento semántico posterior. Se detuvo el acceso. **No se modificó ninguna ficha, no existe nota temporal que restaurar y no se generaron commits de contenido.** No declarar persistencia aprobada o fallo de producto por ese problema de automatización.

Próximo paso:

1. Retomar el acceso normal de Tina en esa Preview con sesión disponible; si requiere intervención del usuario, conservar la pantalla y explicar el bloqueo. No extraer tokens, eludir autenticación ni desactivar protección.
2. Confirmar la rama exacta antes de guardar. Leer la nota original actual desde Cloud; no restaurar una versión local vieja. Si hay edición ajena sin guardar, conservarla y coordinar antes de tocar el formulario.
3. Cuando el acceso funcione, ejecutar únicamente el recorrido autorizado, con una marca temporal inequívoca en la nota interna: guardar → reabrir y comprobar → restaurar texto original → guardar/reabrir y comprobar. Mantener constancia de los commits reales y de la restauración. No repetir suites/builds manuales por cada guardado.
4. Si aparecen commits Cloud, inspeccionarlos antes de sincronizar el checkout sucio. No hard reset/pull ciego. Registrar resultado y actualizar tareas de ambos OpenSpec.

No volver a pedir autorización para la misma acción ya concedida; una ampliación de acceso, otro origen, otra rama o un control distinto requiere evaluar su autorización propia. No completar casillas por el mero hecho de que un build esté verde.

## Evidencia existente y trabajo pendiente

Detalle histórico: `openspec/changes/tema-admin-tina/report-2026-11-02.md` y `report-2026-11-03.md`. Evidencias locales en `output/tina-admin-theme/`: `cloud-reindex-2026-11-03.jpg`, `cloud-origin-added-2026-11-03.jpg`, `preview-ready-2026-11-03.jpg`, `preview-cloud-ready-2026-11-03.txt`. No son archivos para cargar al CMS ni contienen una orden de volver a capturarlos.

Ya completados: tipos 0 errores/0 warnings/80 hints, contratos Node 6/6 y build/artefacto Preview indicado. Son evidencia de sus versiones y alcance; no repetirlos al retomar sin un motivo nuevo o control autorizado. CRUD/Live Preview local previo usó una ficha temporal y foto existente; no acredita upload nuevo.

Pendientes: upload nuevo y cambio reversible de selección desde Tina, revisión de peers y límites de interacción/accesibilidad del adaptador. Persistencia de la nota Cloud comprobada arriba; no queda automáticamente autorizado todo el alcance pendiente por ese permiso consumido. Luego preparar cierre documental y candidato selectivo; producción sigue siendo una etapa separada.

Otros frentes: carrito/pagos/envíos permanecen diferidos; Search Console/offline/topbar conservan sus estados históricos y no se volvieron a controlar en esta tanda. No omitirlos de un futuro handoff general ni marcarlos completos por este trabajo.
