## ADDED Requirements

### Requirement: Deterministic end-to-end checks

El proyecto SHALL ofrecer pruebas e2e de navegacion, tema y filtros/layout sin requerir llamadas a modelos.

#### Scenario: A developer runs the suite

- **WHEN** ejecuta `pnpm test:e2e`
- **THEN** se verifica comportamiento visible con un solo worker y sin reintentos
- **AND** los resultados se guardan en reportes locales compactos

### Requirement: Optional native browser tools

El sitio SHALL exponer via WebMCP acciones publicas de tema y exploracion de proyectos usando el estado real de la UI y parametros validados.

#### Scenario: An agent filters projects

- **WHEN** invoca `portfolio_browse_projects` con categoria/layout validos en home
- **THEN** cambian los filtros y la vista existentes y se devuelven enlaces de los proyectos coincidentes

#### Scenario: WebMCP is unavailable

- **WHEN** el navegador no expone la API
- **THEN** la web sigue funcionando con controles normales y sin un error de registro

### Requirement: Real connection verification

La integracion SHALL diferenciar registro de configuracion, handshake del servidor, ejecucion real y disponibilidad en la sesion activa.

#### Scenario: MCP smoke verification runs

- **WHEN** se ejecuta `pnpm test:mcp`
- **THEN** se abren los servidores reales, se comprueba e2e y se descubren/ejecutan herramientas WebMCP nativas
- **AND** no se declara que las herramientas aparecieron en la conversacion actual solo por haber editado la configuracion
