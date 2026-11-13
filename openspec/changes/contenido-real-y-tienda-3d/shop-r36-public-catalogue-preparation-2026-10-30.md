# R36 — Condiciones confirmadas y catálogo público preparado

## Decisiones del titular

Alejandro indica: precio a consultar siempre; entrega según stock y a confirmar; solo incluye la impresión y el resto es decorativo. Autoriza avanzar con la preparación del catálogo en /tienda, propuesta en el turno anterior. No solicita desplegar y esta tanda no publica.

Las ocho fichas incorporan details.price, details.deliveryTime y details.included ES/EN. Se amplía la lista de campos compartida con Tina para editarlos; no se tocan archivos generados. Flor/maceta dejan de preguntar qué incluye y explicitan impresión frente a accesorios. Se mantienen nombres, fotos, paletas, cuidados, permisos declarados y stock/pedido mixto.

## Integración preparada

- src/data/shop-release.ts: selección explícita de las ocho piezas actuales. Un nuevo JSON o cambio de estado en Tina no publica ni agrega otra pieza automáticamente.
- src/lib/shop-catalogue.ts: lectura para generación estática y proyección de título/descripción ES/EN, categoría, paleta, detalles e imágenes. No devuelve productionNotes, rightsNotes, rightsSource, estado editorial ni sourcePath. Valida presencia de textos, fotos seleccionadas y alt para evitar generar silenciosamente una ficha incompleta. Solo carga imágenes de la selección por imports diferidos; el glob usa una lista literal de las 29 fotos seleccionadas, sin comodín que pueda incorporar archivos de borradores futuros al grafo de assets. Agregar/cambiar una foto pública requiere actualizar esa selección, además de la ficha.
- src/layouts/ShopCatalogue.astro: grilla mínima, fotos cuadradas, categoría, cuadrados de color, precio a consultar y enlace a ficha. Detalles, cuidados y condiciones se ven al abrir la pieza. Encabezado/pie/tema compartidos; navegación A medida apunta a consulta manual, sin enviar mensajes ni crear presupuesto.
- src/layouts/ShopPage.astro: preparado para usar catálogo real por defecto en /tienda y /en/shop-3d. Conserva ?catalog=real como revisión editorial exclusiva de desarrollo. Fuentes de los seis conceptos se conservan, pero dejan de ser el contenido por defecto.
- Rutas estáticas: /tienda/[slug]/ y /en/shop-3d/[slug]/ para las ocho piezas; cambio de idioma preserva la pieza. Generación con getStaticPaths.
- Imágenes mediante astro:assets/Image, WebP, anchos adaptables, dimensiones, alt en galería y carga diferida salvo primeras imágenes. Sin copia masiva de originales al directorio public ni dependencia de /revision/tienda/media en las páginas públicas.
- Precio, entrega e inclusión siempre explícitos en la ficha pública. Los valores públicos responden a la decisión global del titular; no hay precio numérico, carrito, procesamiento de pagos ni promesa de entrega. Se mantiene noindex pendiente de la decisión SEO/publicación; no se modifica Search Console.
- WhatsApp conserva el número 541160513261 aportado y mensaje para revisión/envío manual. No se abre WhatsApp ni se envían mensajes.

## Revisión y pruebas preparadas

Guías Astro consultadas: https://docs.astro.build/en/guides/images/ y https://docs.astro.build/en/guides/routing/ . Guía modern-web-guidance de accesibilidad consultada para enlaces nativos, nombres accesibles, imágenes decorativas en enlaces y foco; ejemplos de ejecución de controles no aplicados por la política del proyecto.

Adaptadas shop.e2e.ts y shop-review.e2e.ts al contrato nuevo: navegación ES/EN/tema, ocho fichas y 29 fotos, enlaces/media públicos sin rutas de revisión, ausencia de notas internas en HTML, condiciones y WhatsApp sin apertura externa. Se conservan las pruebas de revisión local, controles de medios privados, paletas y responsive. Las expectativas anteriores de cinco campos/pending se actualizan a siete con cuidados y condiciones confirmadas.

Auditado por lectura el flujo selección → proyección → plantilla → rutas y los puntos de llamada. **Sin ejecución de pruebas, build, tipos, lint, HTTP de producto ni navegador/capturas.** La lectura no acredita compilación, optimización efectiva, privacidad del artefacto o navegación. No se reinició servidor ni se creó branch/worktree, staging, commit o despliegue. Cambios locales ajenos preservados.

## Pendientes concretos antes de publicar

1. Verificación final acotada del catálogo: build/Tina, rutas estáticas de ambos idiomas, fotos optimizadas sin roturas y navegación/tema/mobile/teclado/WhatsApp sin envío.
2. Inspeccionar artefacto: ningún JSON editorial, nota interna, original ajeno a selección ni ruta de revisión publicada. La proyección leída no sustituye esa evidencia.
3. Revisar con Alejandro el resultado visual y las condiciones; obtener autorización de publicación selectiva. Verificar destino Vercel y publicar únicamente los archivos acordados.
4. SEO/noindex deliberado, autoría pública si corresponde y flujo editorial futuro deben revisarse; no se declara tienda con checkout ni se archiva todo el OpenSpec. Payload/pagos/envíos permanecen diferidos.

La última suite ejecutada continúa siendo R24; R34 acredita únicamente el recorrido de presets previo a esta integración. R36 no reutiliza esas autorizaciones.
