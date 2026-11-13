# Borrador profesional: Ingest Monitor / Around

Fecha: 2026-10-16. Alejandro pidio continuar y luego indico usar https://around.net/products/ingest/ para plasmar el contexto y revisar el texto resultante.

## Fuentes y alcance

- Texto previamente extraido de Case-study-AD.pdf, 7078 bytes. Releidas las secciones de objetivo/rol, grillas, estados, feedback y ajustes tecnicos. No se recapturo/renderizo el PDF ni se publicaron sus paginas.
- Pagina oficial de Around consultada el 2026-10-16. La apertura web devolvio inaccessible; una lectura HTTP directa obtuvo el HTML. Copia y texto limpio en .e2e/content-intake/around-ingest-source.html/.txt, solo locales e ignorados. No se ejecutaron scripts de la pagina.
- La pagina presenta monitoreo de ingestas MAM, sala virtual en vivo, advertencias configurables y compatibilidad con VIZ ONE. El copy del articulo separa ese contexto comercial del rol individual, respaldado por la presentacion como UX Research/UI Design. No se copio el testimonio comercial ni se atribuyeron sus resultados a Alejandro.

## Documento creado

src/content/projects/around-ingest-monitor.mdx, un documento ES/EN con bloques y publicationStatus draft. Conserva las rutas y el contenido existente de around.mdx.

Secciones: contexto, contexto del producto, participacion/problema en cards, grillas de 24/15/8 vistas, estados/alertas, ajustes UX/UI e implementacion documentada, revision/feedback, alcance del caso y notas plegadas. Los numeros de vistas son variantes de layout, no metricas de impacto. React/CSS Grid/BEM aparecen como ejemplos tecnicos del material, sin afirmar autoria exclusiva del producto completo.

No se inventaron fechas, cliente distinto, cargos, resultados de negocio ni entrevistas. Los detalles de frontend y sesiones requieren relato del titular. No se incorporaron capturas ni portada ficticia: la autorizacion/seleccion de material y sus posibles datos sensibles siguen pendientes. No se copiaron telefono, direccion comercial ni enlaces antiguos de la presentacion.

Rutas locales: /revision/proyectos/around-ingest-monitor y /revision/proyectos/en/around-ingest-monitor. Editable desde Projects en Tina o formulario nativo. El documento queda fuera de rutas/listados/RSS publicos por el guard de borradores.

## Operaciones de autoria

- node scripts/prepare-around-case-draft.mjs: exit 0, creo solo el documento nuevo con flag wx.
- node scripts/update-around-product-context.mjs: exit 0, actualizo secciones concretas e incorporo la fuente oficial, conservando el resto y una copia previa local.

Son operaciones de escritura de contenido, no controles del proyecto. No se corrio build, pruebas, tipos, lint, e2e ni capturas conforme a AGENTS.md. No se inicio/reinicio servidor ni se cambio el esquema de Tina en esta tanda. No se declara preview ni publicacion verificadas.

## Pendientes editoriales

Alejandro revisa el relato y corrige su alcance; confirmar fechas, detalle del trabajo frontend, equipo y feedback. Autorizar capturas y anonimizar lo que corresponda antes de copiarlas. La pagina publica describe el producto, pero no sustituye esos datos ni una aprobacion del caso.

Sin commit, push, publicacion ni cierre del OpenSpec.
