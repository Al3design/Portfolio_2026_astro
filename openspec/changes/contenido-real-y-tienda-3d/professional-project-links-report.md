# Enlaces de proyectos profesionales

2026-10-19. Alejandro facilitó GitHub de GitCron y el sitio de Paula, y pidió recuperar la dirección de UseOdontoPro.

- GitCron: https://github.com/Al3design/gitcron — página pública accesible en la consulta web.
- OdontoPau: https://paulagualtieri.com/ — página accesible en la consulta web.
- UseOdontoPro: https://use-odonto-pro.vercel.app/ — preview registrada en README.md y fallback de site en astro.config.mjs del repositorio. Las capturas incorporadas eran archivos locales, no obtenidas de una sesión web actual. La herramienta web devolvió error al abrir esta preview y useodontopro.com; no se afirma caída del servicio ni disponibilidad comprobada. Se usa la preview documentada y se identifica como tal.

Se agregaron bloques section con href/linkLabel opcionales a las fichas ES/EN, después de la introducción. Tina permite editar ambos campos; el renderer presenta enlaces de texto descriptivos con apertura en pestaña nueva, rel noopener noreferrer y aviso accesible. La exportación Markdown conserva los enlaces. Se reutiliza la validación de URLs HTTPS/rutas locales y se aplica también a section; no se aflojan guardas.

No se sustituyen enlaces para abrir imágenes completas, ni se duplican miniaturas para simular botones. No se agregan estilos, dependencias ni tipos generados manuales. Los campos nuevos mantienen nullability opcional consistente con los campos del mismo nombre en otros templates, para evitar el conflicto GraphQL anterior.

add-professional-project-links.mjs ejecutado una vez, exit 0; backups de los tres MDX en .e2e/content-intake. Lectura de fuentes web/config y guía de enlaces; sin build, tipos, lint, tests/e2e, aplicaciones ni capturas nuevas conforme AGENTS.md. Regeneración por el circuito normal de Tina; apertura/guardado y exportación en runtime pendientes de verificación final. Sin commit/push/publicación.
