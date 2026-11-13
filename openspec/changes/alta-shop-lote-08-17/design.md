# Context

Fuentes: AGENTS, skill/operación/recuperación editorial, guía, plantilla Shop, lector/selector y contratos existentes. Rama `codex/alta-shop-08-17`, base `4d584ee50b951a555880d6b1274fcb238a861dcc`. El usuario autorizó las fotos y confirmó PLA; no autorizó reemplazos, hero/novedades nuevos ni producción anticipada.

# Decisions

- Se vieron las 28 fotos y las ocho portadas existentes antes de describir/asociar. Copia byte a byte a `src/editorial/shop-assets/intake-2026-11-13`, conservando originales de G. Manifiesto con fuente/destino/SHA/alt/orden; no se copia a public.
- `12-christmas-tree-huge`: mismo diseño de Árbol decorativo, versión más grande confirmada por el usuario. Una foto al final; portada y fotos anteriores intactas. Otro árbol en la imagen sirve de comparación. Actualizar solo details.variants para expresar el tamaño, sin medidas.
- `13-christmas-tree-spin`: diseño en espiral distinto, ficha propia. `08-jarra`: se muestra un recipiente sin asa; título descriptivo Jarrón de base acanalada, distinto del jarrón redondeado existente. El conjunto de florero/base de 14 se describe por sus piezas visibles, sin prometer aptitud térmica o estanqueidad.
- Otros modelos: Llavero Chimuelo, Caja bloque de interrogación, Cubo articulado TNT, Litofanía de Messi, Llavero Veganuel y Llavero Harry Potter. Nombres derivados de material aportado y aspecto observado; no prometer producto oficial, licencia ni servicios no incluidos.
- Conservar condiciones existentes: precio/colores a consultar, entrega según stock y a confirmar, solo impresión 3D. PLA confirmado; dimensiones omitidas, paletas manuales aproximadas ES/EN sin códigos de fabricante inferidos y productionMode pending interno hasta confirmar disponibilidad concreta.
- ES/EN con datos equivalentes y alt propios de cada foto. Las nuevas portadas se eligen entre las fotos del lote; no se modifica la primera imagen de las piezas existentes.

# Verification

Auditoría focal del lote (preservación, SHA/dedupe, manifiesto, selección y lector real), prueba existente de selección/fotos una vez al cierre y build/verificador de artefacto en Vercel Preview. Sin build local que se sabe sin credenciales ni suites admin/e2e por foto. Inspección del Preview en el rol de orquestador, sin cambios de producto para pasar controles. No confundir variante editorial ni status draft de Shop con exclusión del catálogo.
