# e2e y WebMCP

## Politica de roles — 2026-10-16

Decision de Alejandro tras el incidente de GitCron del 2026-10-16: suites repetidas consumian tiempo y contexto; multiples copias de MCP saturaban RAM y provocaban paginacion en Windows. Capturas duplicadas y prompts contradictorios agravaban los ciclos. No reintroducir verificaciones por tanda.

1. La ejecutora no corre verificacion, build, pruebas, tipos, lint ni e2e; tampoco toma o inspecciona capturas. Si el prompt pide expresamente un comando de control, corre solo ese comando una vez. Ante fallo registra comando, resultado y error y entrega, sin reintentar ni buscar un control alternativo.
2. El orquestador audita cada tanda leyendo diff y reporte, sin ejecutar verificaciones. Las capturas de auditoria las toma e inspecciona el orquestador cuando aportan evidencia visual.
3. Cuando estan terminadas todas las tareas del cambio OpenSpec, el orquestador ejecuta la verificacion final antes de archivar o fusionar y resuelve los fallos. Las correcciones se controlan de forma acotada, sin repetir toda la suite por cada arreglo. No aprobar cierre con fallos pendientes.
4. Mantener pruebas, criterios y protecciones: no esconder errores, desactivar lint, saltear pruebas ni cambiar el producto para pasar un control. Prompts y skills deben respetar reglas y controles; las excepciones se nombran y reportan expresamente, sin autorizar bucles ni desactivar protecciones.
5. e2e se ejecuta por consola en el cierre o por comando explicito del prompt. No usar la herramienta MCP e2e ni iniciar servidores MCP por rutina. WebMCP queda disponible para auditoria del orquestador cuando sea necesario, sin duplicar sesiones.

Los tests deterministas no hacen llamadas a modelos. e2e usa Playwright internamente: el ahorro de contexto viene de ejecutar escenarios y leer resumenes, no de eliminar ese motor.

## Servidor de desarrollo

Cuando la tarea requiera servidor, reutilizar el existente; iniciar con `npm run dev` solo si no esta funcionando: Tina 4002/9001 y Astro 4322. `e2e.config.ts` se conecta a ese servidor y no crea ni detiene procesos de la app. No abrir otro Tina sobre puertos ocupados ni matar procesos ajenos. Si un control explicito falla por el servidor, la ejecutora lo reporta y entrega; el orquestador decide la reparacion en el cierre, sin ciclos automaticos de reinicio/reintento.

## Comandos de referencia (no ejecutar por tanda)

```powershell
# Con el servidor listo, para el cierre a cargo del orquestador
# o si el prompt pide expresamente este comando una vez:
pnpm test:e2e
# Equivale a e2e run --reporter list,markdown y usa e2e.config.ts.
```

`test:e2e` usa e2e 0.17.0 + @e2e-dev/web 0.12.0, un worker, cero reintentos y ningun modelo/API key.

Se conservan `scripts/check-browser-mcp.mjs` y `pnpm test:mcp` para un diagnostico explicito de protocolos en el cierre, cuando corresponda. Ese script inicia procesos MCP locales (e2e y Chrome aislado con WebMCP); no es la suite e2e por consola ni un control obligatorio por tanda. No incluirlo en prompts rutinarios. Requiere Chrome compatible, Node >=24 y chrome-devtools-mcp 1.11.0. El script `mcp:e2e` tambien se conserva, pero no se usa por rutina ni habilita la herramienta global para la ejecutora.

Reportes locales ignorados por Git: `.e2e/summary.md`, `.e2e/report.json` y `.e2e/mcp-smoke.json`. Leer el resumen antes del JSON completo. No publicar reportes con datos privados ni cargar sesiones personales de Chrome.

## Conexion de Codex en esta maquina

Estado informado por Alejandro el 2026-10-16: el servidor global `C:/Users/apdel/.local/share/e2e-mcp/mcp.mjs` quedo desactivado en OpenCode (`~/.config/opencode/opencode.json`, `enabled: false`), DeepSeek Harness (`~/.dsh/profiles/desktop/cordis.patch.yml`, comentado) y Codex (`~/.codex/config.toml`, comentado). No reactivarlo sin consultar a Alejandro. Esta guia no modifica esas configuraciones. Las dependencias locales permiten correr `e2e run` por consola sin esa instalacion compartida.

WebMCP usa Chrome DevTools MCP 1.11.0 con `--headless --isolated --categoryExperimentalWebmcp --chromeArg=--enable-features=WebMCP --no-usage-statistics --no-performance-crux`. El config limita el catalogo a navegacion, evaluacion y las dos herramientas WebMCP. No se modificaron las conexiones de otros servidores ni se desinstalo Playwright.

No recargar conexiones con el fin de reactivar e2e global. Un diagnostico de protocolo no prueba disponibilidad de herramientas en la conversacion activa. El sitio requiere commit/push autorizado para llevar la integracion a produccion.

## Herramientas del sitio

| Nombre | Alcance |
|---|---|
| `portfolio_get_state` | Ruta, titulo, tema y colores renderizados del contenido publico. |
| `portfolio_set_theme` | Cambia claro/oscuro mediante el estado React existente y guarda la preferencia. |
| `portfolio_browse_projects` | Solo home: categoria y layout validados; actualiza la UI existente y devuelve hasta 25 enlaces publicos. |

Feature detection de `document.modelContext` y compatibilidad con previews anteriores en `navigator.modelContext`. Si la API no existe, la UI funciona igual. Registro y limpieza por AbortSignal, sin polyfill ni puente global de ejecucion arbitraria. No se exponen credenciales, acciones de Tina, publicacion ni compras. Los agentes del navegador siguen sujetos a los mismos permisos de la web.

## Referencias

- https://learn.chatgpt.com/docs/extend/mcp?surface=cli
- https://developer.chrome.com/docs/devtools/agents/webmcp-debugging
- `node_modules/e2e/skills/e2e/SKILL.md`
- `node_modules/e2e/docs/reference/mcp.mdx`
