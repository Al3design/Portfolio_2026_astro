# Recorrido de producción autorizado — 2026-10-21

## Alcance y autorización

Alejandro autorizó una excepción acotada a AGENTS.md: recorrer una vez inicio,
Archive y Resume, comprobar controles/exportaciones y abrir TinaCMS sin guardar.
Se usó Chrome existente mediante CUA; sin suites, builds, servidores nuevos ni
publicación. No se tocó ningún borrador.

## Comprobado en la interfaz

- Archive abrió con 18 trabajos, 5 por página, 4 páginas y opciones
  5/10/15/All(18).
- Al elegir 10, mostró 1–10 de 18 y 2 páginas. Siguiente mostró 11–18 y
  deshabilitó Next.
- Categoría Systems: un trabajo (GitCron), página 1, selector All(1), sin
  paginador. Año 2023 aprox. combinado: cero resultados, selector No entries
  deshabilitado. Limpiar restableció los filtros.
- Inicio: 18 trabajos, 3 por página. Siguiente actualizó URL a ?page=2 y
  resumen a 4–6 de 18. Filtro Web Dev volvió a página 1, URL sin page, 5
  coincidencias. Vista List mantuvo los 3 trabajos visibles del filtro.
- Se restituyó All Output y Cards tras el recorrido, sin alterar contenido.
- Resume mostró seis experiencias y la formación corregida, incluyendo PM/IT
  2023–Apr2026 y Moodle Apr2026–Present. Filtro Moodle dejó esa experiencia.
  Se limpió el filtro al terminar.
- TinaCMS /admin abrió, cargó colección Pages y Archive. Formulario con título,
  subtítulo actualizado y cuerpo actual; preview del sitio. No se editaron
  valores ni se pulsaron Save/Reset.

## Hallazgos y límites

- Home aún publica timezone EST. Coincide con src/content/pages/home.mdx;
  pendiente confirmación del autor antes de sustituir el valor.
- COPY PAGE se activó una vez; no se observó confirmación Copied. No se certifica
  escritura al portapapeles. Lectura del código confirma que el fallo de
  clipboard se captura y retorna success:false, sin mostrar aviso en el menú.
- View Markdown abrió una pestaña blob. La política del navegador impidió
  inspeccionarla; no se intentó eludir esa restricción. Solo apertura confirmada,
  no contenido validado.
- ATS CV se activó con Moodle filtrado. No se encontró una descarga nueva en
  Downloads para el nombre esperado o sus variantes. La copia hallada era del
  08/05/2026 y contiene datos históricos: no es evidencia de la descarga actual
  ni se usa para juzgar el contenido generado ahora.
- Sin prueba del diálogo de impresión Custom CV, archivo Markdown descargado,
  vista móvil/zoom, recorrido completo de teclado, consola/hidratación, o
  persistencia de cambios Tina. No se deducen de AX ni del build anterior.
- Idiomas de páginas generales: selector ES aparece deshabilitado con
  Translation pending; bilingüismo de artículos no equivale a páginas generales
  traducidas. No se modificó esta organización.

## Próximo lote propuesto

1. Dar feedback visible a fallos de COPY PAGE, conservando el contenido y el
   mecanismo de exportación existente.
2. Confirmar timezone de Home con Alejandro.
3. Mantener pendientes las comprobaciones no ejecutadas, sin declarar cierre
   completo de producción o del editor.

Cambios de esta tanda: reporte local únicamente, sin commit/push/despliegue.
