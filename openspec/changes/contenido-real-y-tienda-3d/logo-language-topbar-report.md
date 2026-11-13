# Tanda: isologo blanco actualizado e idiomas en topbar

Fecha: 2026-10-16. Pedido directo de Alejandro: reemplazar el archivo blanco aportado y mover las opciones EN/ES a la derecha del encabezado.

## Cambios realizados

- Copiado el SVG de G:/Mi unidad/CV/isologo/2026/SVG/isologo-A3D-white.svg a public/brand/isologo-A3D-white.svg mediante Copy-Item -LiteralPath. El comando termino con codigo 0. No se redibujaron ni editaron sus paths. BrandMark ajusta los atributos de la variante blanca al nuevo viewBox; el componente compartido abastece encabezados y footer.
- Navigation muestra ES/EN antes del selector de tema, con los estilos del sistema. El mismo grupo esta disponible dentro del menu movil mientras el topbar de fondo queda inert.
- MainLayout acepta languageLinks; las fichas de revision suministran las rutas ES/EN del mismo slug. Shop 3D conserva sus rutas bilingues existentes. En las paginas del portfolio que aun no tienen traduccion, la opcion faltante se indica deshabilitada como traduccion pendiente: no se inventan rutas ni se cambia el atributo lang sin traducir contenido.
- Retirados selector y estilos de idiomas del breadcrumb, y el slot toolbarNode que ya no se utiliza en ProjectDetailView.
- Ajustado el espacio del topbar del portfolio para alojar los idiomas en movil con las medidas existentes y los mismos tokens. Este ajuste es implementacion, no evidencia de validacion visual.
- Actualizada la prueba e2e existente para buscar el enlace accesible Switch to English y el grupo de idiomas dentro del topbar; exige dos enlaces dentro del viewport de 320 px. No se eliminaron criterios de aceptacion ni se ejecuto la prueba.

## Politica de controles aplicada

Esta tanda no cierra el OpenSpec. Conforme a AGENTS.md vigente, no se ejecutaron build, pruebas, tipos, lint, e2e, comprobaciones de diff ni comandos de control del proyecto. No se iniciaron MCP/navegadores de diagnostico, no se tomaron ni inspeccionaron capturas y no se reactivo e2e global. La consulta de documentacion web no fue una verificacion del producto.

No se informa esta tanda como validada. Quedan para el cierre a cargo del orquestador: revisar el logo blanco renderizado, alineacion de ES/EN/tema, anchos moviles y escritorio, menus con teclado, navegacion entre versiones disponibles y ausencia de rutas ficticias. Los resultados anteriores corresponden a tandas previas y no cubren estos cambios nuevos.

Estado de entrega: cambios locales, sin commit, push ni publicacion. El OpenSpec de contenido y tienda sigue abierto.
