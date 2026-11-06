# Tasks

- [x] Auditar de forma acotada artículo nativo/toolbar/menú de encabezados sin guardar contenido; corregir contraste del estado checked con tokens y cache-version 20261103-1, observado localmente. Ver article-audit-2026-11-03.md.
- [x] Identificar y corregir el aviso al montar el formulario nativo. Ingest Monitor abre limpio, escribir una letra habilita Save y borrarla vuelve a deshabilitarlo.
- [x] Confirmar la apertura de la vista previa de Ingest Monitor en Chrome normal a partir de la captura del usuario. Se ven el formulario, el artículo y Save deshabilitado.
- [x] Abrir el diálogo de enlaces en la vista previa, observar los campos y cancelar. El formulario queda limpio.
- [ ] Confirmar que el cambio ES/EN termina de cargar dentro de Tina en Chrome normal. El enlace apunta a revisión local y la automatización pausó la respuesta del iframe.
- [x] Preparar alcance selectivo de integración con exclusiones y archivos compartidos por hunk, sin staging/commit/push. Builds y publicación al final por pedido del usuario.

- [x] Revisar manifests activos/lock/peers sin ejecutar controles: compatibilidad directa en rango, react-final-form 6.5.9 transitivo fuera de React19. Ver compatibility-2026-11-03.md; no se declara resuelto ni se silencian avisos.
- [x] Integrar por fast-forward los dos commits Cloud ya revisados: HEAD fb5b4a9, sin conflictos ni tocar cambios locales ajenos. Sin commit/push/build nuevo.
- [ ] Resolver o acordar tratamiento del peer transitivo y revisar límites pendientes de editor rico/diálogos antes de aprobar compatibilidad/cierre global.

- [x] Registrar actualización, reindexación y origen exacto habilitado en `docs/HANDOFF-2026-11-03-tina-cloud-admin.md`, enlazado desde README/config/guía; sin ampliar permisos ni repetir controles.
- [x] Completar recorrido Cloud autorizado de nota interna del árbol: marca guardada/reabierta y original restaurado/reabierto, formulario limpio. Commits c0d8fec/fb5b4a9, evidencia cloud-note-restored-2026-11-03.jpg. No acredita upload/selección ni estado de builds automáticos.

- [x] Revisar extensiones oficiales y CSS de la versión instalada, sin modificar dependencias.
- [x] Preparar tokens y reglas acotadas al administrador, conservando semántica y foco.
- [x] Preparar tres pesos Inter locales, licencia y nueve iconos Lucide desde dependencias instaladas, con script explícito (salida 0).
- [x] Instalar el adaptador desde cmsCallback. El usuario autorizó descartar la edición rápida del árbol; se usó Reset, sin guardar contenido.
- [x] Adaptar tokens del dashboard propio e icono del menú.
- [x] Refinar sidebar según el pedido posterior: subtítulos sin uppercase, grises discretos, enlaces consistentes e iconos panel-left de abrir/cerrar; conservar grupos y acciones nativas.
- [x] Observar el refinamiento en Chrome local y comprobar cierre/reapertura del menú; captura `output/tina-admin-theme/sidebar-refined.png`.
- [x] Corregir la columna vacía (botón flotante fuera de flex), adaptar el degradado del header de edición y compactar el aviso local sin ocultarlo; simplificar logos decorativos.
- [x] Actualizar TinaCMS 3.15.1 y CLI 4.0.4 juntos; alinear las copias transitivas mediante override y regenerar tina-lock desde el CLI.
- [x] Observar formulario home limpio y versión 3.15.1 en local; confirmar breadcrumb left=0, degradado eliminado y pill de 23.4 px. Capturas editor-fixed-3.15.1.png/navigation-3.15.1.png.
- [x] Resolver el nombre del cierre en AX de Chrome con texto generado «Cerrar navegación»; conservar handlers. Auditoría con lectores reales sigue fuera de esta comprobación acotada.
- [x] Revisar visualmente formulario y menú lateral en local: tema grafito, Inter e iconos; apertura/cierre del menú y formulario limpio observados.
- [x] Completar revisión visual local del dashboard, fondo hasta el final del scroll, foco de teclado y Shop claro dentro de Tina oscuro. Capturas y límites en reporte.
- [x] Mover visualmente la pill a la navegación abierta, conservando su enlace; fallback al toolbar con navegación cerrada. Corregir colores fijos de estadísticas/estados/hover y crecimiento flex del dashboard.
- [x] Diferenciar menú general (tres líneas) y edición (panel dividido sin flecha), manteniendo sus acciones. Generar el décimo SVG local desde Lucide instalado.
- [x] Corregir Overview fullscreen desde Live Preview, verificar ancho completo y scroll hasta la última fila; adaptar fondo inline de Media Usage y títulos de todas las colecciones.
- [x] Compactar el aviso de búsqueda sin configurar como pill, conservando su texto y enlace.
- [x] Definir escala compartida de iconos de interfaz (18 px, gris común, Lucide 1.75), incluyendo listas/formularios y herramientas de artículos, conservando hit areas y estados.
- [ ] Validación técnica de cierre sobre las dependencias actualizadas y candidato selectivo; Preview/publicación por separado. No heredar controles de versiones anteriores.
- [x] Ejecutar primer control de cierre `npx.cmd astro check`: salida 1, 40 errores / 167 archivos. Registrar grupos y límites; sin repetir ni sustituir por build. Correcciones y cierre continúan pendientes.
- [x] Corregir contratos Tina/defaults, tipos Node/dashboard y serialización de la prueba Shop; control de cierre tras continuación del usuario: salida 1, 3 errores / 167 archivos. Restan ShopShare y dimensiones meta de MainLayout; sin build ni publicación.
- [x] Corregir los tres diagnósticos restantes: detección typeof navigator.share y dimensiones meta serializadas como string. Control del 02/11: `npx.cmd astro check`, salida 0, 167 archivos, 0 errores / 0 warnings / 80 hints. No acredita build ni candidato publicado.
- [x] Preparar candidato explícito desde HEAD + 93 archivos con hashes; build Astro local salida 0 (62 páginas), verificador Shop salida 0 (20 páginas, 2 feeds, 37 fotos, 8 sociales, sin errores). SDK local reutilizado: no acredita build de Tina Cloud ni artefacto publicable.
- [x] Contratos actualizados 6/6 el 03/11; commit selectivo df001b1 y único push a rama activa. Preview g3fiubuc4 en Error por GraphQL local 4.1.0 / índice Cloud 2.4.1 del 30/10. Sin repetir build ni cambiar producción; reindexación y cierre Cloud pendientes.
- [x] Continuación autorizada: reindexar únicamente codex/tienda-catalogo-real (succeeded 03/11 07:40:18 ART) y reconstruir una vez. Preview hcr8tuwvw Ready; Tina/Astro y verificador sin errores. Portada observada; sin cambiar Site URLs ni producción. Persistencia Cloud/peers y demás recorridos conservan pendientes.
- [x] Observar entrada colección → ficha Shop sin recargar en un recorrido limpio; formulario/iframe cargados. El fallo intermitente posterior a HMR no se declara resuelto.
- [x] Documentar límites, mantenimiento y rollback; publicación separada.
