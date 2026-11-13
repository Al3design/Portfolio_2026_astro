# R13 — Reutilización de tienda y soporte para control

Alejandro pidió usar la página de tienda existente, con encabezado/pie y tema, y aportó tres fotos adicionales. Se conserva revisión local sin integración pública de borradores ni venta.

## Tienda compartida

ShopReview.astro ahora usa MainLayout con section shop, exactamente el layout que usa ShopPage.astro para /tienda y /en/shop-3d. Se reutilizan Navigation y Footer, fuentes, inicialización de tema, menú y enlaces de idioma. Se eliminan el documento HTML independiente, cabecera, control de tema, script y estilos duplicados. Un único main y skip link son provistos por MainLayout; los controles editoriales se mantienen como aside.

MainLayout admite analytics (true por defecto) para que solo esta revisión lo desactive. Su configuración pública se conserva. Se agrega shopCollectionHref opcional hasta Navigation para que Colección vuelva al listado local; el logo y A medida conservan destino a la tienda existente. Los enlaces ES/EN conservan la ficha local mediante languageLinks ya existente. No se cambia la ruta pública ni se agrega otra cabecera parecida.

Las galerías y datos reales siguen en la revisión. Las rutas y el endpoint siguen registrados solo en dev por R12, leyendo datos por petición, fuera del registro build/preview. La reutilización del layout no publica los productos ni cambia las licencias.

## Recepción 03

Tres JPG de soporte verde con cara pixelada, fotografiado solo y sosteniendo un control blanco de Xbox. Copias byte a byte conservadas en intake-2026-10-29, con nombres originales, SHA-256 coincidentes y manifest-batch-03.json. Fotos leídas en los adjuntos; sin retoque ni transformación. Nuevo soporte-control-creeper.json ES/EN, categoría escritorio, material y modalidad pendientes, sin dimensiones ni compatibilidad universal inventadas. El control ilustra el uso y no forma parte de una oferta.

Fuente candidata: modelo 1725698 del inventario R6, autor mostrado Panddda. Se conservan notas y fecha de revisión previa de MakerWorld Exclusive License y su restricción comercial; no se atribuye permiso de venta ni se hizo nueva consulta web. Total editorial: ocho piezas y veintinueve fotos.

## Evidencia y límites

Código y archivos leídos. Test acotado actualizado para ocho fichas, nuevo soporte, controles/idiomas de Navigation compartida y presencia del Footer. No se ejecutó control, servidor manual, build, tipos, lint, e2e ni capturas en esta tanda. R10 sigue documentando exclusivamente el estado anterior de cuatro fichas/quince fotos. Pendiente comprobación visual/funcional, guardado/reapertura de Tina, permisos y aceptación. Sin staging, commits ni publicación; preservados cambios ajenos.

Continuación posterior «dale gas»: releído el diff de MainLayout/Navigation/configuración y el test actualizado. No había listeners en 4002/9001/4322 al consultar. Lectura estructurada de tina-lock.json: colecciones actuales shopProduct, projects, pages, global; HEAD tenía projects, pages, global. La colección nueva apunta a src/editorial/shop-products. Esta lectura no acredita igualdad del resto del lock ni autoriza staging completo. Se solicitó autorización expresa del comando acotado antes de iniciar servidor o ejecutarlo; sin control ejecutado en esta continuación.
