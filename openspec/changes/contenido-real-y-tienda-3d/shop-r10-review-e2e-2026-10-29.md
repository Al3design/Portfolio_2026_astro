# R10 — Arranque y control acotado autorizados

Alejandro autorizó otro inicio de npm run dev y, si quedaba disponible, una ejecución del e2e pendiente. Se comprobó ausencia de listeners en 4002/9001/4322 antes del arranque. Se inició npm run dev una sola vez y se reutilizó ese proceso para el control. No se publicó ni se ejecutó build.

## Resultado

Tina completó la indexación local sin repetir el fallo Unable to seed. Astro quedó listo en localhost:4322. Esto aporta evidencia de que la corrección de los objetos null permite iniciar; no acredita por sí solo edición/persistencia desde el formulario.

Se ejecutó una sola vez:

```powershell
npx.cmd e2e run tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Salida: código 0; un archivo, dos tests aprobados (ES y EN), duración total 25,20 s. Run 01a18998-98cd-77ab-8828-48d8aa55eeda. Sin reintentos ni controles alternativos, sin modelos ni API keys. Evidencia original en .e2e/summary.md y .e2e/report.json; esos reportes son efímeros y pueden reemplazarse por una ejecución posterior.

## Alcance comprobado

Cuatro fichas desde la colección en cada idioma, quince fotos originales por idioma con respuesta JPEG correcta, alt presente y headers no-store/noindex. Seis campos físicos por pieza: PLA y cinco valores pendientes. Idioma preservado por ficha y regreso al ancla de la colección. Geometría de imágenes/listas/detalles en 320 y 1440 px. Notas cerradas al abrir; noindex de la colección y ausencia de script GTM. Manifest JSON y foto no asociada rechazados con 404. Catálogo conceptual sin enlaces a estas rutas ni imágenes de revisión.

La prueba comprueba geometría y respuestas, no una inspección visual de capturas ni navegación exhaustiva con teclado. No demuestra ausencia de originales/rutas en un artefacto de producción: no hubo build en esta tanda.

## Pendientes y estado del proceso

- Guardar, reabrir y editar un borrador desde el formulario real de Tina; comprobar persistencia y reflejo en revisión.
- Revisión visual/editorial de Alejandro y comprobación del artefacto al cierre.
- Licencias comerciales, medidas, variantes ofrecidas, capacidad y disponibilidad.

El servidor iniciado para esta tarea se dejó activo al terminar el control para continuar la revisión local; ningún proceso ajeno fue detenido. Tina regeneró sus archivos por el flujo habitual; tina-lock.json debe revisarse antes de staging, sin editarse a mano. Sin commits, staging ni publicación.
