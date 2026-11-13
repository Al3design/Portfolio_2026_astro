# Context

Fuentes inspeccionadas: AGENTS, config OpenSpec, guía editorial, package/lock/workspace, Tina config, guard/proyección de artículos, rutas de revisión, lector/plugin de selección Shop, vercel.json, scripts históricos, perfiles locales y handoff de OdontoPau del 13/11. `.codegraph/` existe; no se inicializó/reindexó ni se necesitó deep dive de símbolos.

# Decisions

- Recuperación progresiva por síntoma en `references/bloqueos-y-avisos.md`: distinguir entorno local, índice, conector y MFA; usar evidencia del deployment/branch correcto, no repetir un relevamiento ni eludir autenticación. Avisos informativos no amplían el alcance. Reporte versionado conserva la resolución real y separa éxito Codex de aceptación pendiente en apps.

- Usar contracts y renderer existentes: projects bilingües, piezas Shop y selección separadas; páginas/global/orden tienen documentos propios.
- No trasladar main/editorial-tina ni cierre sin PR. Conservar rama activa; Preview por rama no productiva configurada o copia temporal explícita. Cambio de rama necesita pedido al usuario según AGENTS.
- Copia temporal de HEAD + overlays exactos; manifiesto externo. Estado publicable solo en copia cuando corresponda. Sellado crea revisión nueva; integridad falla ante drift. No simular SHA Git en despliegues de archivos.
- Separar build, HTTP, identidad hosting y revisión visual. No marcador nuevo en runtime ni comparación ingenua de originales Shop con derivados Astro. No runner de suites automáticas por tanda.
- Presets sin subagentes; revisor opcional en sesión separada. Modelos/proveedores/permisos globales conservados. Las instrucciones de corte no son watchdogs.
- Scripts Shop antiguos fallan antes de crear candidatos con listas congeladas; su cuerpo se conserva como historia. Netlify se marca histórico y se retiran ejemplos de bypass Cloud de plantilla activa.

# Risks

Acceso remoto Vercel no acreditado por conector en esta sesión (404). UI Windows, controles heredados del revisor, deploy de archivos y promoción real no se certifican leyendo YAML. No archivar este change como rutina ensayada hasta completar aceptación pendiente.
