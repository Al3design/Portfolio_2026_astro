---
name: portfolio-editorial
description: Altas y cambios de contenido del portfolio Astro/Tina y Shop 3D, con candidato aislado, Preview y OK humano antes de producción.
---

# Portfolio editorial

Trabajar en `C:/www/Portfolio_2026_astro`, un escritor. Encargo nuevo: main limpia/actualizada → rama `codex/<tarea>` según AGENTS; retomado: continuar su rama existente. Sin worktrees ni ramas por tanda. Leer AGENTS.md, `openspec/config.yaml`, [guía editorial](../../../docs/GUIA_EDITORIAL_IA.md) y [operación](references/operacion.md) una vez por encargo. Si ya están en contexto, no recargarlos. Verificar presencia de `.codegraph/` según AGENTS; no inicializar ni reindexar automáticamente.

Extraer material y destino del pedido. Preguntar solo lo imprescindible, sin placeholders ni formulario obligatorio. Alta: plantilla bilingüe/Shop y una referencia comparable. Cambio: documento y campo/recurso exactos; preservar URL, identidad, idiomas y campos ajenos. No cambiar diseño, componentes, CSS, contratos, condiciones comerciales ni indexación para cargar contenido. Una función nueva requiere alcance técnico separado.

Aplicar el contrato visual de AGENTS: sitio `src/styles/abstracts/` / `--clr-brand-*`; admin `--al3-admin-*` / `--tina-*`, aislado de sitio/iframe. Conservar maqueta, variantes, jerarquía, anchos, espacios, tipografías, temas y responsive. Si el contenido no encaja, informar; no resolverlo con estilos/HTML/clases nuevos. Hosting documentado Vercel, build en `vercel.json`; Tina conserva colecciones y contratos separados, no el circuito Netlify de otro proyecto.

Preparar → revisar diff → controles expresamente autorizados una vez → candidato → Preview → **ESPERANDO_OK_PREVIEW y terminar el turno**. Entregar URL directa, revisión y límites. El pedido inicial de publicar no reemplaza el OK posterior de Alejandro. Tras ese OK continuar solo con la revisión aprobada y el circuito confirmado; un cambio material exige nuevo Preview. Completar integración permitida y dejar main local/remota actualizada y limpia. No empujar `main` antes del OK ni copiar nombres/circuito de ramas de OdontoPau.

Los comandos de [operación](references/operacion.md) son catálogo, no autorización. Ejecutora sin suites/build/capturas por tanda; si un control falla, registrar y entregar sin reintentar ni sustituir. El orquestador conserva el cierre de AGENTS. No habilitar MCP, iniciar servidores duplicados o instalar dependencias por rutina.

Usar [prompts](references/prompts.md) para alta/cambio/OK y [perfiles Windows](references/perfiles-windows.md) solo para configurar las apps. Revisor opcional, lectura de material estable/diff/evidencia, sin shell, escritura, publicación ni delegación; no es requisito para sustituir una imagen confirmada. No prometer revisión visual si la herramienta no está disponible.
