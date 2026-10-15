# Design

## Context

e2e 0.17.0 y @e2e-dev/web 0.12.0 ya estaban instalados de forma compartida. Se fijan las mismas versiones en el repo para reproducibilidad. Codex no tenia registradas esas conexiones. Chrome local 155 satisface el requisito de la CLI instalada chrome-devtools-mcp 1.11.0: Chrome 150+ y feature WebMCP.

## Decisions

- e2e MCP reutiliza el launcher compartido y recibe config absoluto por sesion. WebMCP usa Chrome DevTools MCP en perfil aislado/headless, telemetria/CrUX desactivados y catalogo acotado.
- e2e determinista comprueba navegacion, persistencia de tema y filtros/layout con locators y assertions. Sin `agent.*`, sin modelo ni nuevas API keys.
- Se conecta al Tina+Astro iniciado con npm run dev, un worker y cero reintentos. El config no arranca ni detiene la app: evita duplicar Tina y procesos Astro huerfanos en Windows. Un servidor existente debe responder; si devuelve 500, se repara, no se fuerza un segundo Tina.
- `registerWebTools` usa feature detection y limpieza AbortSignal. Los navegadores sin la API conservan la UI. El home sincroniza cambios React antes de devolver proyectos; se validan enums tambien en codigo y se limita la salida a 25 enlaces publicos.
- No se expone eval generico ni operaciones de CMS/tienda. get_state es de solo lectura. Cambiar tema o filtro modifica solamente preferencias del visitante.
- Prueba de integracion por JSON-RPC a los servidores reales, usando catalogo y ejecucion WebMCP nativos de Chrome. No usar polyfills de testing como prueba de soporte real.

## Risks / Trade-offs

WebMCP y e2e siguen evolucionando; versiones fijadas y documentadas. Registrar MCP no actualiza herramientas de una conversacion ya iniciada: requiere recargar conexiones. e2e depende internamente de Playwright; el objetivo es reducir intervencion/contexto, no prometer una reduccion medida de tokens.

## Validation

`pnpm test:e2e`, `pnpm test:mcp`, build y validacion OpenSpec. Confirmar que herramientas opcionales no rompen navegadores sin API y que las tres acciones afectan la UI real. Registrar fallos reales, no sustituir por mocks ni retries. No publicar sin autorizacion; respetar rama activa y cambios preexistentes.
