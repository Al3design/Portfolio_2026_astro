# Tanda: circuito editorial Tina y plantilla compartida

Fecha: 2026-10-16. Pedido directo de Alejandro: avanzar con bloques editables, categorias, ES/EN y posterior integracion de Mundo/Toplomero a Tina.

## Cambios

- Schema CMS en tina/article-blocks.ts: object list con templates de texto, imagen, galeria, video y cards. Contrato puro en src/lib/article-blocks.ts, sin importar configuracion en React. Se eligieron bloques de objetos con texto plano por parrafos en lugar de imponer HTML/JSX al editor.
- Campos de portada alt/epigrafe/credito, publicationStatus, language, translationKey, contentFormat y estado real del trabajo. Default de documentos nuevos: borrador/blocks/es. Fecha opcional en borradores, guard de fecha valida al publicar bloques.
- ArticleBlocks usa figure/figcaption, grilla/cards/Tag del sistema, reproductor nativo y transcripcion; soporte VTT. El guard exige VTT si se declara informacion sonora y evita publicar medios de revision local.
- ProjectDetailLayout usa bloques devueltos por useTina y conserva modo MDX en articulos anteriores. Exportacion de bloques desde los mismos datos en memoria. Portada con epigrafe/credito en ProjectDetailView.
- Categorias 3D, Animation, Academic agregadas solo en la fuente compartida categories.ts.
- Dos documentos por proyecto, vinculados mediante translationKey. Idioma HTML y enlaces ES/EN segun documentos disponibles; duplicados por idioma fallan explicitamente. Rutas publicas existentes conservadas. Localizacion de todo el listado/CV/archivo queda fuera de esta tanda.
- Cuatro MDX creados por el comando de autoria `node scripts/prepare-academic-tina-drafts.mjs` (exit 0): mundo-es/en y toplomero-es/en. No se inventaron fechas ni se publico contenido. Script no sobreescribe archivos existentes. Nuevas revisiones en /revision/proyectos/{slug}; enlaces antiguos redirigen a estos documentos. La instantanea academic-drafts.ts deja de ser la fuente editable.
- Helper server project-editorial.ts lee raw frontmatter por la regla de Astro v6 y filtra borradores en home, archivo, CV, RSS y rutas publicas. Rutas de revision DEV-only/noindex. Articulos legacy sin flag conservan comportamiento anterior.
- Guia docs/ARTICLES_TINA.md y pruebas unitarias de discriminantes/exportacion/desconocidos, preparadas sin ejecutar.

## Estado y limites

Tina debe regenerar su cliente/esquema con el servidor de desarrollo; no se editaron generados ni se inicio otro Tina. La inspeccion de las fuentes generadas existentes no encontro los campos nuevos: no se afirma que el editor ya este operativo con este esquema. Reiniciar la misma terminal dev es necesario si su watcher no los tomo. No se realizo esa accion ni se corrio build como sustituto.

No se ejecutaron verificaciones, build, tipos, lint, pruebas ni e2e; no se iniciaron MCP/navegadores ni se tomaron capturas. Se hizo lectura de fuente/diff y el comando de autoria para escribir documentos, que no fue un control. Implementacion pendiente de validacion final segun AGENTS.md.

La preview local no tiene autenticacion propia; depende del servidor local, mientras Tina maneja su editor/autenticacion. No sirve para montar un panel publico de borradores. La publicacion sigue siendo estatica mediante Git/despliegue, sin cambios comerciales ni Payload en esta tanda.

## Pendientes del orquestador al cierre

Regeneracion y compatibilidad schema/queries; CRUD visual y guardado de todos los bloques; discriminantes GraphQL reales; navegacion ES/EN; portada/cards/fotos/epigrafes; preview/Markdown al editar; flujo de teclado/subtitulos; no regresion de Around/Freelance; build y ausencia de borradores/medios en sitio publico y RSS; guardas de publicacion. Confirmar fechas, medios, fuentes y derechos con Alejandro antes de aprobar contenido.

Sin commit, push, publicacion ni cierre del OpenSpec.

## Referencias consultadas

- https://tina.io/docs/reference/types/object
- https://tina.io/docs/reference/types/rich-text
- https://tina.io/docs/contextual-editing/tinafield

## Correccion del esquema por error de arranque reportado
Alejandro reporto GraphQL Document Validation failed: title String frente a String! entre templates. Se unifico title como obligatorio en secciones, galerias, videos y grupos de cards; se completaron titulos de grupo en los cuatro borradores y en el script de autoria, y se alineo la guarda de publicacion. No se editaron frags.gql ni otros generados; no se debilito required ni se ejecutaron controles/reintentos. Arranque pendiente de confirmar con la regeneracion de Tina.

## Correcciones desde el log de arranque de Alejandro
Tina inicio y genero cliente/esquema, segun el log aportado. Astro reporto Expected colon but found const en la ruta de revision: se reemplazaron las flechas tipadas con ternario por funciones declaradas con guarda DEV explicita, tambien en la ruta nueva de documentos. public/admin/index.html existe y contiene la entrada de Tina; middleware solo de desarrollo redirige /admin y /admin/ a ese archivo, sin generar una pagina que colisione con el admin estatico de produccion. El log tambien mostro Invalid hook call al navegar a resume: ClientResume usa hooks dentro de su componente y el lockfile comparte React 19.2.6; se configura ssr.noExternal tinacms para evitar mezclar la importacion React externa de tinacms/dist/react con la instancia optimizada de Astro/Vite. Esta causa del warning es una hipotesis de resolucion de modulos, pendiente de confirmar; no se informa como resuelta en navegador. No se cambiaron versiones ni archivos generados. No se reinicio servidor ni se ejecutaron controles.
