---
name: portfolio-editorial
description: Altas y cambios de contenido del portfolio Astro/Tina y Shop 3D, con candidato aislado, Preview y OK humano antes de producción.
---

# Portfolio editorial

Trabajar en `C:/www/Portfolio_2026_astro`, un escritor. Contenido: rama permanente `editorial`, un lote pendiente por vez; sincronizar desde main solo sin contenido no aprobado. Trabajo técnico nuevo: `codex/<tarea>` desde main limpia/actualizada; retomado: su rama existente. Seguir AGENTS. Sin worktrees ni ramas por tanda. Leer AGENTS.md, `openspec/config.yaml`, [guía editorial](../../../docs/GUIA_EDITORIAL_IA.md) y [operación](references/operacion.md) una vez por encargo. Si ya están en contexto, no recargarlos. Verificar presencia de `.codegraph/` según AGENTS; no inicializar ni reindexar automáticamente.

Extraer material y destino del pedido. Preguntar solo lo imprescindible, sin placeholders ni formulario obligatorio. Alta: plantilla bilingüe/Shop y una referencia comparable. Cambio: documento y campo/recurso exactos; preservar URL, identidad, idiomas y campos ajenos. No cambiar diseño, componentes, CSS, contratos, condiciones comerciales ni indexación para cargar contenido. Una función nueva requiere alcance técnico separado.

Aplicar el contrato visual de AGENTS: sitio `src/styles/abstracts/` / `--clr-brand-*`; admin `--al3-admin-*` / `--tina-*`, aislado de sitio/iframe. Conservar maqueta, variantes, jerarquía, anchos, espacios, tipografías, temas y responsive. Si el contenido no encaja, informar; no resolverlo con estilos/HTML/clases nuevos. Hosting documentado Vercel, build en `vercel.json`; Tina conserva colecciones y contratos separados, no el circuito Netlify de otro proyecto.

Preparar → revisar diff → controles expresamente autorizados una vez → candidato → Preview → **ESPERANDO_OK_PREVIEW y terminar el turno**. Entregar URL directa, revisión y límites. El pedido inicial de publicar no reemplaza el OK posterior de Alejandro. Tras ese OK continuar solo con la revisión aprobada y el circuito confirmado; un cambio material exige nuevo Preview. Completar integración permitida y dejar main local/remota actualizada y limpia. No empujar `main` antes del OK ni copiar nombres/circuito de ramas de OdontoPau.

Los comandos de [operación](references/operacion.md) son catálogo, no autorización. Ejecutora sin suites/build/capturas por tanda; si un control falla, registrar y entregar sin reintentar ni sustituir. El orquestador conserva el cierre de AGENTS. No habilitar MCP, iniciar servidores duplicados o instalar dependencias por rutina.

Publicar por la integración Git de Vercel: push real → Preview; tras OK, main → Production. No añadir Redeploy manual a un push exitoso. Reservarlo para recuperación diagnosticada/autorizada; si pide 2FA, handoff a Alejandro, sin pedir códigos en chat ni eludir el desafío. Consultar [recuperación, sección 4](references/bloqueos-y-avisos.md) solo si ocurre; no garantizar que nunca pedirá identidad.

Ante un error/aviso conocido, consultar solo su fila en [bloqueos y avisos](references/bloqueos-y-avisos.md): credenciales locales Tina, índice remoto, conector Vercel, 2FA, refs de navegador, pnpm/hints/CRLF o estado Git. No repetir el relevamiento general ni convertir esa guía en permiso de ejecución. MFA requiere handoff y comprobación del deploy resultante; no se elude con otro canal.

Usar [prompts](references/prompts.md) para alta/cambio/OK y [perfiles Windows](references/perfiles-windows.md) solo para configurar las apps. Revisor opcional, lectura de material estable/diff/evidencia, sin shell, escritura, publicación ni delegación; no es requisito para sustituir una imagen confirmada. No prometer revisión visual si la herramienta no está disponible.

## Altas Shop: orden y muestras de color

Shop: cada referencia nueva seleccionada explícitamente en products entra al principio; después manda el orden manual guardado en Tina (arrastrar, flechas o Pos., Save/Reset). Editar ficha/fotos o repetir una carga no mueve referencias existentes. No ordenar al renderizar por nombre, fechas de archivos ni invertir por CSS; no descubrir/publicar borradores automáticamente. Hero y latest se eligen aparte y no cambian por una alta.

Completar palette de cada alta con las muestras del PLA mostrado y etiquetas ES/EN antes de entregar Preview; palette: [] oculta los cuadrados. Usar HEX manual aproximado cuando no hay código de filamento confirmado, sin atribuir marca/preset por foto. Excluir decoración, fondo e iluminación; consultar colores ambiguos y registrar pendientes explícitos. El HEX de producto no modifica tokens del diseño.

## Rama editorial permanente

Contenido (artículos, páginas, piezas Shop e imágenes): reutilizar la rama permanente `editorial`, ya indexada en Tina; no crear una rama por alta. Cambios técnicos: `codex/<tarea>` desde main limpia/actualizada. Un solo lote editorial pendiente por vez. Antes de otra carga, fetch y comprobar referencias/cambios Cloud; actualizar editorial desde origin/main por fast-forward solo si no hay trabajo pendiente. Divergencia o contenido no aprobado: coordinar, sin reset/clean/stash ni force-push. Preview y OK posterior siguen obligatorios; después integrar exactamente el lote aprobado a main, sincronizar editorial y conservar ambas ramas, sin borrar/recrear editorial ni indexarla por rutina.

Para editar en Tina usar el administrador del Preview permanente de editorial: https://portfolio-2026-astro-git-editorial-aledesign-projects.vercel.app/admin/. tina/config.ts deriva branch de VERCEL_GIT_COMMIT_REF; /admin de producción apunta a main y no es la entrada de cargas. No cambiar branch globalmente a editorial en config ni en variables de Production: los builds deben seguir leyendo su propia rama. Si el Preview está protegido, autenticar la sesión; no desactivar protección. Validar el origen exacto en Site URLs y que el cliente Tina use editorial antes de guardar.

Portada Shop: latest vacio activa las tres primeras referencias del catalogo products, en su orden guardado (altas nuevas primero por defecto). Una lista latest explicita prioriza esas piezas manualmente; vaciarla en Tina restaura el modo automatico. Hero sigue independiente. Al revisar altas/orden comprobar inicio y coleccion en ES/EN, incluidos los tres elementos visibles y el orden tras filtrar, no solo /tienda/coleccion/.
