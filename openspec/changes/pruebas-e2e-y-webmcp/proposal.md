# Proposal

## Why

Alejandro solicita e2e y WebMCP para verificar el portfolio con menos interacciones manuales y menos contexto repetido. La sesion tenia Playwright MCP pero no e2e ni una conexion capaz de descubrir WebMCP nativo.

## What Changes

- Registrar e2e compartido y Chrome DevTools MCP con WebMCP en Codex, preservando las demas conexiones.
- Configurar e2e por proyecto, pruebas deterministas sin modelo y reportes compactos.
- Exponer estado publico, tema y filtros/layout a traves de WebMCP nativo usando las mismas acciones React.
- Verificar ambos servidores por JSON-RPC, incluidos discovery y ejecucion real en Chrome.
- Documentar uso, limites y recarga de conexiones; conservar la UI normal sin soporte WebMCP.

## Capabilities

### New Capabilities

- `browser-agent-verification`: controles repetibles y herramientas estructuradas de la web publica.

### Modified Capabilities

Ninguna.

## Impact

Dependencias de desarrollo, config/tests/scripts, dos componentes React y helper pequeno opcional. Config MCP global local fuera de Git, con backup. Sin despliegue, cambios de DNS, acceso editorial, cobros ni modificaciones al contenido real/dummy.
