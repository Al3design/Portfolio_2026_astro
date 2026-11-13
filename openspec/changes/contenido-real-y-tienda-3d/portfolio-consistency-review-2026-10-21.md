# Revisión de coherencia — 2026-10-21

## Trabajo realizado

Autorización: «dale gas», continuando la propuesta de cerrar la revisión de
portfolio/Resume y ordenar pendientes. Revisión por lectura de fuentes y diff,
sin build, pruebas, lint, tipos ni capturas por tanda (AGENTS.md).

- Se retiraron portadas aleatorias Picsum de cuatro fichas laborales: Around,
  Freelance, INTI Web e INTI Marketing, y sus imágenes de detalle.
- Se retiró el retrato heredado de Freelance: la ficha no forma parte del
  portfolio público y no requiere una portada suplente.
- Sus cuerpos antiguos se reemplazaron por descripción y responsabilidades
  de los metadatos ya revisados. Se evitan atribuciones ampliadas de backend
  Java, PowerBI/Power Query, resultados y otros relatos de plantilla que no
  coinciden con la presentación laboral actual. Los metadatos laborales,
  fechas, herramientas, slugs y visibilidad se conservan.
- PM/IT se conserva íntegro: Alejandro pidió expresamente recuperar su relato
  y responsabilidades en una intervención anterior.
- Checklist con estado editorial actual, separando publicaciones, limpieza
  local y comprobaciones pendientes.

## Coherencia observada en código

- `resume.astro` obtiene las experiencias de la colección y del frontmatter
  canónico, filtra visibilidad y ordena las seis entradas.
- `ClientResume.tsx` deriva Experience Map y ATS de esas experiencias. ATS
  exporta la selección filtrada; Markdown se arma con todas las experiencias.
  Esta diferencia debe revisarse como comportamiento de producto, no como
  evidencia de fechas distintas.
- Formación y habilidades se toman de los campos Tina de Resume; los porcentajes
  ficticios y el Bachelor de California ya no están presentes.
- Rutas de artículos públicos excluyen draft y showInPortfolio false; las
  fichas laborales no se convierten en artículos por esta limpieza.
- BDM tiene portada pública y dos galerías `previews` en ES/EN. La publicación
  anterior confirmó Vercel Ready; no se ejecutó QA de producción en esta tanda.
- Tina reactivo actualiza los campos de la página Resume mediante useTina;
  jobs y el Markdown llegan como props generadas por Astro. Una edición de
  empleos requiere regenerar la página y no se certifica sincronización en vivo
  de esos props solo por usar Tina. Pendiente comprobar el circuito real.

## Pendiente

- Aprobación/publicación de estos cuatro documentos laborales, que siguen como
  cambios locales. No se hizo commit ni push en esta tanda.
- Verificación final autorizada de UI móvil, paginación/filtros, teclado,
  descargas y editor Tina. No se iniciaron navegadores o MCP de diagnóstico.
- OdontoPro, UseOdontoPro y Tienda Geekies siguen draft.
- Catálogo real y operación de tienda 3D pendientes.

Backups locales previos a la limpieza:
`.e2e/content-intake/employment-cleanup-20261021/`.
