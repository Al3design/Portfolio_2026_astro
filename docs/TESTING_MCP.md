# e2e y WebMCP

## Uso habitual

1. Preferir `pnpm test:e2e` para controles repetibles. Usa e2e 0.17.0 + @e2e-dev/web 0.12.0, un worker, cero reintentos y ningun modelo/API key.
2. Para inspeccion interactiva, usar el MCP `e2e`: `open_session` con `config: "C:/www/Portfolio_2026_astro/e2e.config.ts"` y `target: "web"`. Usar `locate` y acciones de su catalogo, devolviendo resultados compactos. Cerrar la sesion al terminar.
3. Para acciones estructuradas del sitio, usar el MCP `webmcp`: abrir localhost:4322, descubrir con `list_webmcp_tools` e invocar con `execute_webmcp_tool`. Reservar capturas para revision visual o un fallo que las necesite.

Los tests deterministas no hacen llamadas a modelos. e2e usa Playwright internamente: el ahorro de contexto viene de ejecutar escenarios y leer resumenes, no de eliminar ese motor.

## Servidor de desarrollo

Iniciar el servidor con `npm run dev` si no esta funcionando: Tina 4002/9001 y Astro 4322. `e2e.config.ts` se conecta a ese servidor y no crea ni detiene procesos de la app. Esta separacion evita duplicar Tina o dejar Astro huerfano al cerrar un runner en Windows. Si un servidor existente devuelve 500, reparar o reiniciar ese servidor antes de reintentar: no matar procesos ajenos ni abrir otro Tina sobre puertos ocupados.

## Comandos

```powershell
npm run dev
# En otra terminal, con el servidor listo:
pnpm test:e2e
pnpm test:mcp
pnpm mcp:e2e
```

`test:mcp` comprueba los dos protocolos MCP con un cliente JSON-RPC: abre una sesion e2e contra el dev server activo, encuentra un heading, inicia Chrome aislado con WebMCP, descubre las herramientas nativas del sitio y las ejecuta. Tambien contrasta el filtro con los enlaces realmente renderizados. No usa mocks de WebMCP ni un modelo. Requiere Chrome compatible instalado, Node >=24 y acceso al paquete fijado chrome-devtools-mcp 1.11.0 (cacheado despues de instalarlo).

Reportes locales ignorados por Git: `.e2e/summary.md`, `.e2e/report.json` y `.e2e/mcp-smoke.json`. Leer el resumen antes del JSON completo. No publicar reportes con datos privados ni cargar sesiones personales de Chrome.

## Conexion de Codex en esta maquina

Se agregaron `e2e` y `webmcp` a `C:/Users/apdel/.codex/config.toml`. La copia anterior esta en `config.toml.before-browser-mcp-20261015`, fuera del repo. El servidor e2e reutiliza la instalacion compartida `C:/Users/apdel/.local/share/e2e-mcp/mcp.mjs`; el config absoluto selecciona el proyecto. Las dependencias locales fijadas permiten ejecutar las pruebas sin esa instalacion compartida.

WebMCP usa Chrome DevTools MCP 1.11.0 con `--headless --isolated --categoryExperimentalWebmcp --chromeArg=--enable-features=WebMCP --no-usage-statistics --no-performance-crux`. El config limita el catalogo a navegacion, evaluacion y las dos herramientas WebMCP. No se modificaron las conexiones de otros servidores ni se desinstalo Playwright.

Para cargar nuevas conexiones, volver a abrir Codex o iniciar una sesion que recargue los MCP. Un test directo de protocolo confirma el servidor, pero no inserta herramientas nuevas en una conversacion ya iniciada. El sitio requiere commit/push autorizado para llevar la integracion a produccion.

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
