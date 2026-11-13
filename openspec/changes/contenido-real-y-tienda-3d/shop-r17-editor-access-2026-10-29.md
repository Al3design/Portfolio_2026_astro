# R17 — Acceso directo a la edición y nombres de fotos

Continuación solicitada por Alejandro después de comprobar persistencia en R16. Mejora de uso habitual sin nueva verificación ni cambios en los datos de productos.

- Desde una ficha, Abrir editor Tina apunta al formulario nativo de ese mismo documento; desde la colección apunta a la lista shopProduct. No abre la página de inicio/edición de home como el enlace genérico anterior.
- Rutas basadas en la navegación observada en R16: /admin/index.html#/collections/edit/shopProduct/arbol-decorativo y /admin/index.html#/collections/shopProduct/~. El slug del documento se codifica al construir el enlace.
- ui.itemProps de fotos usa altEs, altEn o nombre del archivo como etiqueta, con fallback Foto por completar. Las ocho fotos del árbol dejan de depender de la etiqueta genérica Item para distinguirse cuando el esquema se recargue.

Archivos editados: ShopReview.astro, tina/shop-products.ts y guía editorial. No se cambian originales, orden de fotos, licencias, contenido o estado de publicación. Se reutiliza el patrón itemProps de las colecciones/bloques existentes.

Lectura de archivos realizada; no se ejecutó build, pruebas, e2e, generación manual, capturas ni reinicio. La recuperación de la URL guardada en la sesión de R16 no abrió ni operó una página nueva. No se extiende la excepción interactiva de R16: estos cambios quedan preparados por código, sin afirmar su aceptación en navegador.

Pendientes: creación desde Tina y campos anidados, revisión visual/editorial, confirmar material de últimas cuatro piezas, medidas/capacidad/disponibilidad y permisos comerciales. Sin staging, commits ni publicación.
