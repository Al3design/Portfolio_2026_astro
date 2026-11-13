# R22 — Control autorizado: vista previa aún conceptual

Alejandro autorizó ejecutar una vez el comando preparado sobre el servidor existente, sin build ni publicación:

```powershell
npx.cmd e2e run tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Resultado: código 1; un escenario fallido, tres omitidos por el límite de un fallo. Run 01a189fd-6adf-7091-9057-3cd196918125, duración total 22,02 s. Sin reintentos ni controles alternativos. Evidencia original leída en .e2e/summary.md y failure/screen.txt del artefacto del escenario ES.

## Fallo observado

En /tienda?catalog=real, locator main article esperaba 8 y encontró 9. La carpeta editorial conserva exactamente los ocho JSON previstos: no apareció un noveno producto.

La captura textual de fallo muestra el título Shop 3D | Al3Design Objects — propuesta de diseño, las seis piezas conceptuales y tres artículos de la sección Cómo imaginamos la experiencia. Por tanto los nueve artículos son seis conceptos más tres pasos; la rama de vista previa real no se mostró. El fallo no se resuelve cambiando la expectativa a nueve ni agregando/eliminando un producto.

Se confirma que la integración por query de R21 no funcionó en este recorrido. La causa exacta no se declara verificada por el mensaje del contador. No se modifica implementación/configuración ni test para reintentar dentro de este control, conforme AGENTS.md.

## Pendientes

Diagnosticar la selección de la vista real en la ruta Astro /tienda y corregir su entrada, preservando la tienda conceptual y la exclusión de producción. Después coordinar un nuevo control expresamente autorizado. Los tres escenarios omitidos siguen pendientes; los resultados R15/R16 no validan R17–R21.

Sin reinicio, build, publicación, staging ni commits. Historial R21 conservado como implementación preparada, no aprobada.
