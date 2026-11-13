# Resume: exportaciones filtradas y publicación

- Pedido expreso: comprobar descarga dinámica al filtrar Resume y subir el cambio.
- Reemplaza la decisión provisional de exportar siempre todas las experiencias.
- ATS usa filteredExperiences. Sin filtros contiene todas; con filtros solo las
  coincidencias. Botón deshabilitado si no hay experiencias coincidentes.
- Markdown y COPY PAGE regeneran contenido con el mismo conjunto filtrado,
  habilidades/formación actuales de Tina y metadatos de selección/cantidad.
  Mantienen proyectos relacionados e identifican sus borradores locales.
- Nombre de TXT/MD agrega selection y filtro normalizado cuando está aplicado;
  sin filtros conserva el nombre completo. Contenido de búsqueda nunca entra
  sin normalizar en el nombre del archivo.
- No se sube un CV estático: la página genera el archivo actual al pedirlo.
- Descargas TXT/MD con enlace temporal en DOM, UTF-8 y object URL revocado
  después de dos segundos. Fallos de copiado con mensaje role=status.
- Inspección UI localhost: botón completo y datos actuales visibles. Se aplicó
  Moodle y se intentó una descarga con Download filtered ATS CV y waitForEvent.
  La herramienta esperó sin entregar evento/path y agotó 30s, reiniciando REPL.
  No apareció archivo selection-moodle en Downloads. No se repitió el intento
  ni se afirma que el archivo final de navegador esté comprobado.
- El TXT aportado por Alejandro en la tanda anterior sí evidenció una descarga
  real con Moodle y formación actuales, pero corresponde al exportador anterior.
- Sin build local adicional, suites, tipos o lint. La publicación usa la
  compilación remota automática de Vercel.
- Commit 186c7e1, main, cinco archivos; push a Al3design/Portfolio_2026_astro.
- Vercel dpl_DskqRA3YcYduYdfFsBaG7J9aS7Kw: Ready, production, build remoto
  1m 17s, aliases al3design.dev y www.al3design.dev. Sin cambios de contenido
  Tina/esquema, no requiere reindexación editorial. Tres drafts intactos.
