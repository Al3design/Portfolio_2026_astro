# R7 — Colección y fichas locales de piezas reales

Pedido de Alejandro: avanzar igualmente después de la revisión de licencias. Alcance: revisión editorial local, sin habilitar venta ni publicar modelos de terceros.

## Implementación

- Lector de JSON guardados en src/lib/shop-review.ts. Relee desde disco por petición; no duplica contenido comercial en otro catálogo. No carga documentos fuera del modo development.
- Colección `/revision/tienda/es/` y `/revision/tienda/en/`, con una ficha por documento, selección candidata de portada y regreso al ancla de la pieza. Diez rutas previstas para los cuatro documentos actuales.
- Fichas con fotografías originales, alt/epígrafes por idioma, seis campos físicos con fallback localizado, permiso comercial pendiente y notas internas desplegables. Los enlaces de idioma conservan la ficha.
- Medios locales servidos solo si aparecen como sourcePath válido de un borrador. Sintaxis limitada a carpeta intake con fecha y JPG sin segmentos de navegación. Endpoint con comprobación de modo, allowlist de referencias, no-store/noindex y 404 para archivo ausente. No se expone el manifest ni el inventario de licencias como medio.
- Estilos con tokens existentes, Inter/Roboto Mono, superficies diferenciadas, grid adaptable, imágenes completas sin recorte, espacio reservado, carga diferida, foco visible y enlace para saltar al contenido. Sin nueva dependencia ni JavaScript de interfaz.
- Enlace al editor Tina existente e instrucciones para guardar y recargar. Se conserva el formulario nativo; no se incorpora router visual sin integración de edición. Campo sourcePath sigue siendo referencia textual en Tina, con fotos visibles en la revisión.

La vista es un documento local independiente: no usa analytics ni registra service worker. No se conectó ShopContent, ShopPage, navegación pública, sitemap o RSS a los borradores. Se utiliza MODE y no NODE_ENV, porque el comando local de Tina puede configurar NODE_ENV=development durante un build.

## Evidencia y límites

Implementación leída por archivos/diff y contrastada con el patrón editorial existente. No se inició servidor ni se ejecutaron build, pruebas, tipos, lint, e2e, generación de Tina o capturas en R7, conforme a la política de AGENTS.md. Las rutas, Sass, persistencia de Tina y exclusión efectiva en el artefacto no se declaran validadas. Sin staging, commit, publicación ni cambios a archivos ajenos.

Consultadas skills Astro, HTML y modern-web-guidance; la búsqueda recuperó la guía responsive-design. Se consultó documentación oficial de Astro. La advertencia de skill actualizada no motivó cambios al archivo de skill local.

## Control pendiente del orquestador

1. Con un único servidor habitual, abrir colección/fichas ES/EN y comprobar galería, alt, traducciones, fallback, foco, regreso y anchos móvil/escritorio.
2. Abrir Tina y comprobar edición/guardado/reapertura de un borrador, reflejo tras recarga y conservación de sourcePath. No crear una pieza ficticia publicada para probar.
3. Al cierre autorizado, confirmar ausencia de rutas de revisión y JPG originales en el artefacto de producción. Noindex no sustituye esa exclusión.
4. Mantener pendientes licencias comerciales, medidas, capacidad y aceptación de Alejandro. Checkout, Next/Payload y transporte siguen diferidos.

Fuentes: [Astro routing](https://docs.astro.build/en/guides/routing/), [Astro endpoints](https://docs.astro.build/en/guides/endpoints/).
