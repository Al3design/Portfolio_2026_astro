# R23 — Consulta local conservada en rutas de tienda

Alejandro pidió continuar después del fallo R22. Se diagnosticó por lectura del código y documentación de Astro, sin nuevo control ni reinicio manual.

## Causa

ShopPage seleccionaba la revisión usando Astro.url.searchParams, pero /tienda y /en/shop-3d mantenían el comportamiento prerenderizado. En Astro instalado, dist/core/request.js líneas 19–21, createRequest ejecuta url.search vacío cuando isPrerendered es true. Por lo tanto catalog=real y piece no llegan al componente en ese contexto; el control R22 mostró la rama conceptual.

## Corrección

La integración local recuerda si el comando es dev en astro:config:setup. En astro:route:setup normaliza el path del componente y fija prerender false exclusivamente para src/pages/tienda.astro y src/pages/en/shop-3d.astro durante desarrollo. En build/preview el hook no cambia esas rutas. Se conservan la rama MODE development y las rutas de revisión inyectadas solo para dev.

No se cambia output a server, no se instala adapter ni se habilita consulta dinámica de productos en producción. No se sustituye el catálogo conceptual sin parámetro ni se toca la expectativa de ocho productos: el fallo no era un noveno documento, sino seis conceptos y tres pasos.

## Evidencia y límites

Lectura del diff y del recorrido createRequest. API soportada por Astro: [astro:route:setup](https://docs.astro.build/en/reference/integrations-reference/#astroroutesetup); comportamiento de consultas documentado en [render context](https://v6.docs.astro.build/en/reference/api-reference/).

Sin ejecución e2e, build, tipos, lint, capturas o reinicio manual. Editar configuración puede disparar recarga automática del servidor existente, que no se cuenta como control. No se declara corrección validada en navegador ni exclusión de artefacto comprobada. El control R22 y sus tres escenarios omitidos siguen siendo la evidencia de ejecución más reciente.

Siguiente paso: una ejecución expresamente autorizada del control acotado existente, reutilizando el servidor. Sin bucle ni cambio del test para ocultar el problema. Sin publicación, staging ni commits.
