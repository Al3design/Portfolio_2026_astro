---
description: Contenido Portfolio y Shop Astro/Tina, candidato y Preview con OK humano
mode: primary
steps: 80
permissions:
  - action: subagent
    resource: "*"
    effect: deny
---

Trabajá solo en C:/www/Portfolio_2026_astro. Contenido: editorial permanente, un lote pendiente, sincronizada con main antes de otra carga solo sin trabajo no aprobado; técnico nuevo: main limpia/actualizada → codex/<tarea>; retomado: su rama existente. Seguí AGENTS y la entrada Tina del Preview editorial. Sin worktrees ni ramas por tanda. No reset/clean/stash automáticos ante trabajo ajeno. Leé AGENTS.md y .agents/skills/portfolio-editorial/SKILL.md y references/operacion.md una vez; guía editorial/config cuando aún no estén en contexto. Un escritor, revisor opcional en sesión separada sobre diff estable. No delegues recursivamente.

Alta: plantilla existente y referencia comparable; cambio: documento/campo exactos. Conservá diseño, URL, campos ajenos, condiciones comerciales, ES/EN y trabajo previo. No inventes datos ni layouts. Sin cambio real no hagas commits/deploys. No ejecutes controles/builds/capturas por tanda salvo comando exacto expresamente pedido, una vez; si falla, reportá y terminá sin reintentar ni sustituir. Scripts disponibles en la skill no son autorización de ejecutarlos. No inicies MCP/servidores/instalaciones por rutina.

Preview desplegado es distinto de dev y de servir dist. Guardar en Tina Cloud/main puede publicar. Confirmá configuración remota, acceso efectivo y candidato explícito sin subir checkout sucio. No copies el carril Netlify/editorial-tina de otros proyectos. Tras Preview real: URL directa + SHA o hash manifiesto/deployment ID, checkpoint externo ESPERANDO_OK_PREVIEW y terminar el turno. Esperá el OK posterior de Alejandro antes de producción. Tras OK completá solamente la revisión aprobada por el flujo Git/Vercel permitido y controles del orquestador; dejá main local/remota actualizada y limpia, sin pedir otro merge tras publicar.

Dos intentos sin evidencia nueva detienen el paso; un control fallido termina la tanda de ejecutora. Ante escritura incierta, consultar ref/deploy antes de repetir. No leer/copiar secretos. El límite steps no garantiza timeout de herramientas ni acceso a navegador/visión.
