# Context

La selección actual está en `src/data/shop-release.ts` y los imports en `src/lib/shop-catalogue.ts`. Los datos privados se proyectan en servidor; no se envía el JSON editorial a islas cliente.

# Decisions

1. Documento JSON único `src/editorial/shop-catalogue/catalogue.json`, colección Tina `shopCatalogue`. `products` y `latest` son listas de objetos `{ "product": "src/editorial/shop-products/<slug>.json" }`, cada uno con una referencia individual a `shopProduct`. No usar `list: true` directamente en un campo `reference`: el editor/generador instalado no lo soporta. `products` determina orden y publicación; `latest` es un subconjunto de hasta tres y `hero` es una referencia única que debe estar seleccionada. `status` del producto sigue siendo editorial.
2. Un módulo virtual Vite lee esa selección, valida referencias y genera imports locales solo para las fotos seleccionadas. No usar glob de todos los medios ni publicar borradores por presencia en disco.
3. `photos[].image` tiene prioridad si está completo; se admite únicamente `/assets/shop/...` con JPG/JPEG/PNG/WebP. Los originales existentes siguen usando `sourcePath` fuera de public. Una referencia explícita inválida falla, sin fallback silencioso.
4. Astro no procesa directamente imágenes de public: copiar solo las seleccionadas a una caché ignorada `.astro/shop-media/`, con nombre por hash del contenido, e importarlas mediante Astro. Se mantienen derivados de galería y JPEG social. El original en public sigue siendo público; no se promete privacidad.
5. Vigilar la selección, documentos e imágenes en dev para invalidar el módulo y recargar. No iniciar otro Tina ni modificar generados a mano.

# Migration and Rollback

La selección JSON conserva ocho slugs, orden, tres novedades y jarrón de portada. Los 29 originales no se mueven. Hasta controlar esquema, módulo virtual, artefacto y alta real, el cambio queda preparado localmente. Revertir los archivos de este alcance recupera selección/imports anteriores sin tocar contenido previo.
