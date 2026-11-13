# OpenCode Desktop y DeepSeek Harness

Abrir el directorio del portfolio en la app de escritorio. OpenCode descubre `.opencode/agents/portfolio-editor.md` (principal, 80 pasos) y `portfolio-revisor.md` (lectura, 20). Editor no delega; revisor opcional en sesión separada para mantener un solo escritor. No usar la CLI de OpenCode como sustituto de una prueba de la app Windows.

Formato contrastado el 13/11 con [documentación oficial de agentes OpenCode V2](https://opencode.ai/docs/agents/): carpeta plural `agents`, `mode`, `steps` y lista `permissions` por acción/recurso/efecto. La app instalada declara CLI empaquetada 2.3.0 en `resources/opencode-cli.version`; no se usa la CLI del PATH como evidencia de la versión desktop. Esto valida la correspondencia documental, no la carga/permisos efectivos en UI.

DSH: definiciones propias en `../assets/dsh-presets.patch.yml`, IDs `portfolio-editor` y `portfolio-revisor`, basadas en la forma de presets del perfil desktop existente. El editor tiene filesystem/shell y el revisor filesystem de lectura/imagen; ninguno incorpora subagentes, navegador o MCP nuevos. No cambian modelos, proveedores, permisos globales ni presets de otros proyectos. La ausencia de shell/escritura del revisor se complementa con prohibición de usar herramientas heredadas para eludirla. No prometer aislamiento contra herramientas globales sin comprobarlo en la sesión.

Instalación de la definición: respaldar `C:/Users/apdel/.dsh/profiles/desktop/cordis.patch.yml` fuera de Git y anexar el bloque una vez. Si ya existe cualquiera de los IDs, inspeccionar y actualizar solo esos presets; no duplicarlos. Tras recarga de la app, elegir **Portfolio - editor** o **Portfolio - revisor**. No iniciar las dos apps como escritoras sobre la misma tanda.

La adaptación del 13/11 deja el estado real en `openspec/changes/rutina-ia-local-portfolio/report-2026-11-13.md`: archivos/perfiles preparados o instalados no acreditan que el menú los muestre, capacidades visuales ni publicación real. Para un ensayo, usar los prompts y material autorizado; no guardar sobre Cloud/main para probar perfiles. Vercel requiere acceso propio de esa sesión (conector o CLI existente); no transferir tokens ni habilitar MCP indiscriminadamente. Si no hay acceso, conservar candidato y reportar bloqueo.

80/20 son pasos de OpenCode, no segundos. DSH usa instrucciones de corte, sin watchdog certificado. Dos intentos sin evidencia nueva detienen el paso, y la política de controles de AGENTS es más estricta ante fallos de ejecutora. Reiniciar/compactar no renueva permiso ni presupuesto.
