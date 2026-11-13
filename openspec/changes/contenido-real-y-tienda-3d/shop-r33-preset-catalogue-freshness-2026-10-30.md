# R33 — Catálogo vigente por solicitud en revisión local

Actualización posterior: R34 comprobó guardado/reapertura y fallback en listado/detalle con preset 10501 y hex vacío. Ver shop-r34-preset-persistence-confirmed-2026-10-30.md. Se conserva debajo el estado histórico de esta tanda sin controles.

Alejandro autoriza corregir el fallo R32 mediante «dale, corregilo». Esta tanda modifica código y audita su lectura, sin consumir nuevamente la excepción interactiva R32.

## Diagnóstico y alcance de la corrección

El código actual contiene el preset 10501 como string y su tono #00AE42; el resolver contempla hex vacío y valida correctamente ese formato. La evidencia R32 demuestra persistencia del código en Tina/JSON y omisión en la ficha, pero no demuestra por sí sola la causa interna. R31 amplió el catálogo reutilizando un servidor previo; una referencia importada anterior retenida en el grafo de módulos es una hipótesis compatible con la diferencia entre editor y renderer. No se declara causa raíz confirmada ni resultado de navegador aprobado.

Se elimina esa dependencia del catálogo importado para la vista de revisión:

- shop-review.ts lee src/data/bambu-filaments.json desde disco en cada solicitud de desarrollo, igual que los borradores. No agrega red, caché ni proceso; fuera de desarrollo devuelve una lista vacía, siguiendo el límite existente.
- ShopReview.astro obtiene borradores y referencias en paralelo y pasa la misma lista vigente tanto al listado como al detalle.
- ShopPalette.astro recibe references como propiedad obligatoria; resolveShopPalette exige las referencias explícitas y busca allí el código guardado. No recurre a una instantánea implícita del módulo.
- Tina conserva las opciones del catálogo y su validación. Se preservan prioridad manual, nombres ES/EN, rechazo de hex inválidos, tonos múltiples/alfa y paleta heredada. No se alteran fichas, fotos, presets asignados ni material real.

La lectura por solicitud sigue el recorrido de renderizado existente; no agrega un endpoint de catálogo ni habilita estas rutas en producción. Referencia técnica consultada: https://docs.astro.build/en/guides/on-demand-rendering/ . La búsqueda modern-web-guidance no ofreció una guía pertinente a lectura de JSON del servidor; no se aplicaron recomendaciones de navegador ajenas al cambio.

## Auditoría y pendientes

Revisados por lectura los cuatro archivos y los puntos de llamada: solo ShopPalette usa resolveShopPalette y ambas instancias de ShopPalette reciben las referencias. No se ejecutaron controles, solicitudes HTTP de producto, capturas, suites, build, tipos ni lint. No se inició ni reinició servidor. Sin publicación, staging o commit; cambios ajenos preservados.

Corrección implementada, **eficacia pendiente de comprobación**. Sigue abierto 2.3p: con un control acotado expresamente autorizado, comprobar preset sin hex en listado/detalle y validar el formulario; restaurar la ficha al terminar. No reutilizar R32 ni declarar el OpenSpec cerrado. Si el fallo persiste, la hipótesis de catálogo retenido no será suficiente y habrá que registrar el resultado antes de ampliar el diagnóstico.
