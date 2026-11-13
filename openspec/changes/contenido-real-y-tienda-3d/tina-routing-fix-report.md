# Correccion de apertura desde la lista de Tina

Fecha: 2026-10-16. Evidencia aportada por Alejandro: lista Projects muestra Mundo/Toplomero, pero el clic abre #/~/projects/{slug}; iframe 404 y sidebar sin formularios.

## Causa identificada en la fuente instalada

En node_modules/tinacms/dist/index.js, TinaAdminAPI.fetchCollection consulta solo __typename y _sys para los documentos del listado. handleNavigate pasa ese nodo a collection.ui.router. El callback del proyecto consultaba document.publicationStatus/contentFormat/locales, que no venian en ese resultado. Por ausencia de estado elegia /projects/{slug}, mientras las rutas publicas excluyen correctamente los borradores. La pagina no ejecutaba useTina porque era un 404, por eso no aparecian campos.

Esto identifica el fallo concreto de las capturas; no es evidencia de que otros fallos anteriores de hooks/schema esten resueltos.

## Correccion

- Helper project-editor-route.ts: con document._sys.relativePath basta para abrir /revision/proyectos/{slug} en localhost/loopback, sin inferir publicacion de campos ausentes.
- La ruta de revision DEV-only ahora admite todos los documentos, incluidos legacy/publicados, para que el router de la lista sea determinista. La pagina compartida distingue borrador y revision local de documento existente. Se conserva noindex y la exclusion de estas rutas del build publico.
- Fuera de loopback, los nodos solo con metadatos y los borradores dejan a Tina usar su formulario nativo; no se inventa una preview publica ausente. Si el callback recibe datos completos de una ficha publica puede resolver su URL.
- El dashboard propio enlaza al formulario nativo con la ruta interna de Tina, en lugar del enlace anterior a collections/projects/{archivo}. No se tocaron documentos ni estados de publicacion.
- Se agregaron pruebas unitarias del payload real _sys-only, fallback fuera de local y documento completo. No se ejecutaron.

## Acceso directo al formulario nativo

- /admin/index.html#/collections/edit/projects/~/mundo
- /admin/index.html#/collections/edit/projects/~/toplomero

Estos enlaces no dependen del router de preview y permiten evitar el iframe 404 mientras se recarga la configuracion del editor.

## Verificacion pendiente

No se corrieron controles/build/tipos/lint/tests/e2e ni capturas conforme a AGENTS.md. Se leyeron fuentes del proyecto y de la version instalada de Tina. No se inicio/reinicio servidor ni MCP. Pendiente al cierre: clic desde lista abre la revision correcta, formularios registrados por useTina, edicion/guardado ES/EN, compatibilidad legacy y ausencia de borradores en el build publico. No se afirma resultado de navegador confirmado.

Sin commit, push ni publicacion. No se aflojaron filtros de publicacion para crear las paginas que faltaban.

## Confirmacion de Alejandro
Tras los enlaces/correccion del router respondio funciona y autorizo continuar. Se registra apertura del editor confirmada por el usuario; no se interpreta como prueba de guardado, CRUD de todos los bloques, build ni publicacion.
