# R12 — Fotos agregadas después del arranque y tema de revisión

Alejandro aportó captura donde el gecko se ve y las portadas nuevas del árbol/flor aparecen rotas. También señaló ausencia de tema claro. La captura prueba el síntoma; no se tomaron nuevas capturas ni se ejecutaron controles en esta tanda.

## Diagnóstico por código

El endpoint y las fichas de R7 enumeraban documentos/fotos con getStaticPaths. Astro instalado conserva staticPaths en routeCache (core/render/route-cache.js, líneas 12–21 y 41–42) y rechaza rutas prerenderizadas no incluidas (core/render/params-and-props.js, alrededor de líneas 30–37). Los JSON se releían al mostrar la colección, pero agregar medios después del inicio no incorporaba necesariamente sus URLs a esa lista cacheada. Esto explica que una portada antigua siguiera visible y las nuevas fallaran, sin afirmar que se inspeccionó su respuesta HTTP en este turno.

La revisión usaba una página independiente sin Navigation y no tenía clase light inicial ni selector. El control R10 no cubría el tema ni la incorporación de medios después del arranque.

## Corrección

- Configuración Astro registra la página y el endpoint solamente con command dev, como rutas dinámicas sin prerender. Los handlers se trasladan a src/editorial/ShopReview.astro y src/editorial/shop-media.ts; dejan de estar bajo src/pages. Sin registro para build/preview y con guarda adicional de MODE development.
- Se elimina getStaticPaths de ambos handlers. La página y la lista de fotos autorizadas se leen por petición. Conservados patrón restringido de sourcePath, 404 para medio ausente/no asociado, no-store y noindex.
- Selector claro/oscuro ES/EN, claro inicial, shop-theme compartido con la tienda e independiente de theme del portfolio. Clase light y color-scheme sincronizados al iniciar, cambiar y recibir cambio desde otra pestaña. Si storage falla, el selector conserva operación en la página.
- Estilos del control con tokens existentes y foco visible. No se cambia la paleta, contenido de fotos ni estado comercial.
- Test acotado ampliado por código para preferencia inicial, cambio, persistencia al recargar y separación de la preferencia del portfolio. No ejecutado en R12; R10 sigue siendo evidencia del estado anterior.

## Límites

Corrección preparada y leída por código/diff. No se repitió servidor manualmente ni se ejecutaron build, e2e, tipos, lint o capturas. Editar astro.config.mjs puede activar la recarga automática del servidor ya existente; eso no constituye control aprobado. No se declara comprobada la reparación en navegador ni el artefacto de producción. Si el servidor existente no recarga configuración, coordinar un único arranque autorizado, sin instancias duplicadas.

Se consultaron las skills Astro y modern-web-guidance y la guía dark-mode-toggle. Se adapta el control al contrato de dos temas y claro inicial ya acordado en este proyecto, reutilizando tokens y shop-theme. Fuente de la API: [Astro injectRoute](https://docs.astro.build/en/reference/integrations-reference/#injectroute-option).

Pendiente control focal de las 26 imágenes actuales, tema claro/oscuro con recarga e incorporación de una referencia nueva con servidor activo. Persistencia desde Tina, permisos y aceptación editorial permanecen abiertos. Sin build, publicación, staging ni commits.
