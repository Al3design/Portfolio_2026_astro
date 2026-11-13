# Bloqueos y avisos: respuesta corta

Consultar solo el caso que coincida con el síntoma. Esta guía recoge incidentes observados el 13/11/2026; no presume que sigan ocurriendo ni autoriza comandos, reindexaciones o deploys adicionales. Sigue vigente AGENTS: la ejecutora registra un control fallido y entrega; el orquestador resuelve el cierre de forma acotada. Un error nuevo necesita su propia evidencia.

## Elegir el caso

| Síntoma | Interpretación / siguiente paso |
| --- | --- |
| Tina: `Missing clientId, token` en build local | Faltan credenciales en esa terminal; no demuestra caída de Cloud ni error de esquema. Ver 1. |
| `ERR_CLOUD_CHECK_FAILED`, GraphQL local/remoto distintos y fecha de índice antigua | Contrastar rama/esquema e índice de **esa rama**; ver 2. No reinstalar ni bajar versiones. |
| Conector Vercel 404 / lista vacía | Puede faltar acceso de esa conexión; no prueba que desapareció el proyecto. Ver 3. |
| `Verify Your Identity` / código rechazado / modal Loading | Acción detenida por autenticación; handoff humano y comprobación posterior. Ver 4. No crear otro deploy para eludirla. |
| `pnpm.onlyBuiltDependencies` ignorado | Aviso de configuración: leer `package.json` y `pnpm-workspace.yaml`. En esta integración el build remoto terminó bien. No migrar dependencias/allowBuilds durante una carga editorial. |
| Astro: `0 errors`, `0 warnings`, hints / Vite import sin uso | Registrar el resumen real; no convertir hints en fallos ni ocultarlos. El cierre observado tuvo 100 hints y un aviso de import `X` sin uso. Si el comando falla o el aviso cambia de impacto, investigar ese caso. |
| Git: LF será reemplazado por CRLF | Aviso de conversión de texto; revisar el diff. No cambiar `core.autocrlf` global ni renormalizar todo el repo para silenciarlo. El hash del candidato sigue siendo estricto: no declarar iguales bytes distintos. |
| `EEXIST` al sellar un manifiesto | Consultar el archivo existente y su origen antes de repetir. El fallo observado fue un fixture con padre TEMP compartido; se corrigió su aislamiento, no se borraron manifiestos ajenos ni se cambió el producto. |
| Browser: ref inexistente/timeout tras modal, navegación o tab cerrada | Leer estado/snapshot nuevo; no repetir la escritura a ciegas. Ver 5. |
| Sentry 429, analytics `ERR_BLOCKED_BY_CLIENT`, preload de CSS | No fueron la causa del build fallido observado. Separar telemetría/UI del error de build; no desactivar extensiones o protecciones por rutina. Un 429 del servicio que sí ejecuta la acción exige respetar Retry-After. |
| `prepare-shop-preview.ps1` / `prepare-tina-shop-candidate.ps1` se detienen como históricos | Es intencional: listas congeladas y supuestos de octubre. Usar la operación y `recorrido.mjs prepare --files`; no quitar el bloqueo ni reutilizar sus listas. |

## 1. Build local sin credenciales Tina

1. Guardar comando, exit y mensaje. Distinguir entorno local del build de Vercel. No volver a ejecutar el mismo comando esperando otro resultado sin cambio real de entorno.
2. No imprimir, copiar desde otra app ni volcar tokens a prompts/Git. No sustituir por Astro solo, credenciales dummy, `skip-cloud-checks` o downgrade.
3. En el cierre autorizado, el build remoto del mismo candidato puede acreditar la compilación usando las variables ya configuradas de Vercel. Confirmar proyecto, SHA, entorno, build completo y verificador de artefacto. Registrar **build local bloqueado / build remoto aprobado**, no “pasó local”.

No instalar CLI o arrancar otro Tina para resolver este mensaje. Si tampoco hay acceso remoto, informar exactamente qué falta; no declarar cierre verificado.

## 2. Esquema remoto viejo o rama sin indexar

1. Leer el log del deployment concreto: rama, diferencia de esquema, versión y último índice. Contrastar con `tina/config.ts`, módulos de colección y `tina/tina-lock.json` del mismo commit. No editar generados ni inventar otro esquema para pasar el control.
2. En Tina Cloud seleccionar **Portfolio2026astro**, repo `Al3design/Portfolio_2026_astro`, **Configuration**. Buscar la rama exacta del encargo; si no aparece, consultar Refresh Branches/unindexed branches y su estado antes de actuar. Para contenido reutilizar editorial ya indexada; no crear otra por artículo. Una rama técnica nueva puede necesitar indexación; no reindexar todas por anticipado.
3. Dentro del alcance autorizado, menú de **esa fila → Reindex**, una vez. Abrir **Event Log** y esperar `indexing branch succeeded` posterior al pedido. La fecha que cambia en la tabla no basta. No tocar main para arreglar un índice de Preview, ni borrar/recrear ramas/proyecto, Site URLs o webhooks.
4. Solo tras éxito, el orquestador puede reintentar el build fallido una vez con el permiso de cierre aplicable, sobre el mismo commit y target Preview. Si falla con otro error, leerlo y detener la repetición; no convertirlo en un loop de reindex/build.

Caso observado: `codex/tienda-catalogo-real` seguía indexada al 03/11; log local/remoto 4.1.0/2.4.1, tipo `ProjectOrderScopesProjectsProject` añadido. Reindex único succeeded el 13/11 a las 09:21:39 ART; el redeploy posterior pasó. Es evidencia histórica, no una regla que fije esas versiones. Indexar no publica el bundle admin ni acredita guardado, upload o Live Preview.

## 3. Conector sin acceso; GitHub y navegador disponibles

Comprobar identificador/equipo de la solicitud una vez. Si el conector sigue sin acceso, no reinstalar MCP/CLI ni transferir tokens. Usar una sesión autorizada que sí tenga acceso: GitHub CLI existente para el status Vercel del **SHA actual**, y navegador autenticado para logs/entorno/Ready/URL. No asumir que OpenCode/DSH comparten las credenciales de Codex o Chrome.

Referencia de lectura, solo en el paso autorizado:

```powershell
gh api repos/Al3design/Portfolio_2026_astro/commits/<SHA>/status --jq '{state:.state,statuses:[.statuses[]|{context,state,description,target_url}]}'
```

Tomar el enlace real de `target_url`; no adivinar IDs/hosts. Abrir el deployment en Vercel y verificar proyecto, source/SHA, entorno y estado. Si hay varios deploys del mismo SHA, distinguir Preview de Production: el status combinado por sí solo no acredita qué está sirviendo el dominio. No leer/exportar cookies ni abrir Tokens de Tina para “arreglar” el conector.

## 4. Verificación 2FA y redeploy

El carril habitual es push de cambios reales a la rama de trabajo → Preview automático por Git → OK posterior de Alejandro → integración/push a main → Production automático. No pulsar Redeploy además de un push exitoso. Redeploy manual queda para recuperar un build fallido tras diagnosticar/corregir su causa dentro del alcance autorizado; seguir su único deployment ID. Si aparece Verify Your Identity/2FA, entregar el control a Alejandro para que ingrese el código en Vercel y esperar; nunca solicitarlo en el chat ni cambiar de canal para eludirlo. No prometer ausencia de futuros desafíos ni atribuir su causa a una política interna no comprobada.

Evidencia del 13/11: los desafíos observados aparecieron durante recuperaciones con Redeploy manual por fallos de índice Tina; el código rechazado generó otro intento de autenticación, no prueba de otro build. El Preview e57f0d1 y Production 57ea1a4 salieron por pushes normales sin solicitar código. Esto distingue lo observado; no demuestra por qué Vercel pidió reverificación ni que cada Redeploy la exija. Si el usuario autoriza un reintento tras un código rechazado, retomar la misma acción y comprobar el estado antes de repetir.

Confirmar en el modal **Preview**, mismo candidato y dominios esperados antes de solicitar el redeploy. Si Vercel presenta **Verify Your Identity**, avisar y hacer handoff inmediatamente para que Alejandro introduzca un código vigente en la página y pulse Verify Code. Esperar a que devuelva el control. No pedirlo en el chat, leer el campo ni capturarlo.

Si informa código rechazado o demora, no atribuirle una causa sin evidencia ni repetir automáticamente. Con su indicación de reintentar, leer el estado, renovar el diálogo de la misma acción si hace falta y volver a entregar el control. No usar commits vacíos, otra API ni un push para eludir el desafío.

Después comprobar que desapareció el desafío y existe **nuevo deployment ID/URL en Building/Queued**; Loading en el modal no prueba que arrancó. Seguir ese único deploy hasta Ready/error. El intento de autenticación fallido no equivale a otro build: contar por IDs, no por clics. Ready de Preview permite presentar la revisión; producción editorial mantiene su OK humano posterior. Esta recuperación no crea una autorización nueva.

## 5. UI asíncrona y estado incierto

Tras abrir un modal/navegar, esperar su estado y obtener snapshot/ref actual antes de actuar. Un ref anterior puede quedar obsoleto; un timeout de click no demuestra que nada se escribió. Antes de repetir, consultar deployment/ref remoto o leer el diálogo actual.

Si la herramienta informa que cerró la página por inactividad, volver al enlace real del deployment registrado y leer su estado antes de otro Redeploy. Para logs, leer la sección Build Logs del mismo deployment; no confundir errores de consola de la web de Vercel con sus líneas de build. No iniciar capturas, grabaciones, servidores o un nuevo diagnóstico general por este aviso.

## Cierre y recuperación Git

Leer estado actual: `git status`, rama/HEAD, fetch y comparación de refs según AGENTS. `branch -vv` usa refs locales cacheadas; “ahead” respecto de la rama remota de trabajo no prueba que esos commits falten en main. El 13/11 main remota ya contenía los 36 commits que faltaban en el remoto de trabajo.

Una prueba guardada en Tina puede crear commit/deploy. Si Alejandro pide descartarla, inspeccionar el diff concreto y revertir solo ese dato preservando historial y ediciones posteriores. No reset/force-push. BDM se resolvió retirando únicamente el year agregado por la prueba.

Al cerrar: main local/remota al mismo SHA, checkout limpio, Production Ready identificado y comprobaciones públicas del alcance. No repetir suites verdes ni otro build/push para narrar éxito. Estado/última escritura/IDs/resultados en reporte o checkpoint; no confundir limpieza con borrar u ocultar fuentes ajenas. `output`, capturas/logs y daemon son artefactos locales según `.gitignore`, no archivos que una IA deba publicar para limpiar Git.

Evidencia de esta recuperación y límites: [reporte de integración](../../../../openspec/changes/rutina-ia-local-portfolio/report-2026-11-13.md). OpenCode/DSH aún requieren acreditar sus propias herramientas y ciclo real; la integración realizada desde Codex no lo sustituye.

## Auditorías Node sobre módulos del frontend

Un `import` directo de shop-colours.ts puede fallar con ERR_IMPORT_ATTRIBUTE_MISSING por el JSON de filamentos: el módulo se consume con el bundler del sitio, no es un script Node autónomo. No modificar imports del producto ni instalar esbuild para forzar una auditoría improvisada (no está disponible como dependencia directa en este checkout). Registrar el límite del harness; usar la evidencia de build/artefacto y revisión del Preview en el cierre ya autorizado. No presentar un harness fallido como fallo visual ni como control aprobado, ni encadenar más intentos. Las pruebas Node existentes de selección/orden sí tienen su contrato propio.

Rama editorial creada/indexada una vez el 13/11 (Event Log succeeded 14:32:09 ART). Un posterior error no autoriza recrearla ni cambiar permisos: comprobar rama/índice/build del caso. Reutilizarla reduce registros iniciales/redeploys de recuperación; no garantiza ausencia de desafíos 2FA.
