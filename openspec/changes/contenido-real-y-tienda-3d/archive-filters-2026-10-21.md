# Archive: filtros reales y fechas — 2026-10-21

- Autorización: «dale gas», sobre corregir el año ficticio y los filtros.
- `ClientArchive.tsx`: filtros combinados por el campo year exacto y por
  categorías existentes de PROJECT_CATEGORIES, compartidas con Tina/Home.
- Opciones derivadas de los proyectos recibidos, ya filtrados por publicación
  en archive.astro. Se conserva el texto de años aproximados y períodos sin
  recortarlos; no se sustituye por la fecha editorial de publicación.
- Entradas sin año muestran Date not specified y tienen opción de filtro propia.
- Contador filtrado/total con anuncio polite; estado sin coincidencias y botón
  de limpiar filtros. Retirados PREV/NEXT permanentemente deshabilitados.
- Estado inicial determinista all/all para SSR e hidratación; sin localStorage,
  efectos, dependencias ni cambios de esquema Tina.
- SCSS: controles y encabezado permiten wrap usando espaciados existentes;
  corregido el sufijo inválido `st` en el letter-spacing del selector.
- Lectura de código y diff; no build, pruebas, tipos, lint, e2e ni capturas por
  tanda según AGENTS.md. Pendiente aceptación interactiva, teclado y móvil.
- Sin commit, push ni publicación. Carga de originales sigue fuera de alcance.

## Continuación: presentación móvil y estilos compartidos

- Disposición móvil de cada entrada en tres filas: fecha/acción, título/estado
  y herramientas. Desde md se mantienen las columnas de escritorio.
- Títulos con espacios normales en lugar de guiones bajos, quiebre de palabras
  largas y balance de texto como mejora progresiva (sin dependencia JS).
- Selectores usan control-surface y ghost-border existentes; tamaños de toque,
  espaciado, colores y breakpoint reutilizan tokens. Cabecera y controles wrap.
- Retiradas clases Tailwind de tags, estilos muertos de paginación y sufijos
  inválidos de letter-spacing. Separación entre filas por superficie/espacio,
  sin bordes de sección añadidos.
- Enlace de acción con nombre accesible que identifica el proyecto; icono
  decorativo oculto a lectores. Hover de fila compartido con focus-within.
- No se tomaron capturas ni se ejecutaron controles del proyecto. Pendiente
  comprobación visual/teclado en navegador; no se afirma responsive validado.
