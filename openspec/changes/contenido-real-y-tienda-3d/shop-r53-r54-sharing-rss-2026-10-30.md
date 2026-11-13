# R53/R54 — Ajustes publicados, compartir piezas y RSS

Pedido: subir bordes claros y orden del botón de consulta; continuar con enlaces compartibles como el portfolio y RSS de tienda. Trabajo en rama actual, sin nueva rama/worktree, merge ni promoción de producción.

## R53

Commit `e08ca017f95850db0531e4f38c71b8cb87e7e9f4`, tres archivos: ShopPalette.astro, _shop-review.module.scss y ShopCatalogue.astro. Bordes aclarados y consulta general después de ambos párrafos.

Preview Ready: https://portfolio-2026-astro-g7a4hak1k-aledesign-projects.vercel.app . Un build Git, checker de catálogo sin errores, 37 fuentes optimizadas. Log en output/shop-r53/build-log.txt. Sin build local o suite.

## R54

Commit `ae04fda5461c5331cf01a2e4f8e8c33a9b6f53e6`, diez archivos de implementación y comprobador. Selección/hashes e índice exactos; 507 entradas ajenas de status preservadas. Evidencia output/shop-r54/candidate.json y preservation.json. Documentación amplia y otros trabajos no enviados.

- Compartir cada pieza por WhatsApp sin destinatario preseleccionado, compartir nativo según soporte y copiar enlace con feedback. Si falla el portapapeles, URL seleccionable; cancelación nativa silenciosa. Sin publicación automática a Instagram: copiar/enviar mediante aplicaciones disponibles.
- Metadatos OG/Twitter con foto propia JPEG optimizada 1200×630 y título/descripción ES/EN. Transformación separada de las fotografías de galería. URL y foto absolutas del entorno actual (local, Preview o producción), sin query/hash en enlace de pieza.
- RSS ES /tienda/rss.xml y EN /en/shop-3d/rss.xml: ocho piezas seleccionadas, últimas incorporaciones primero, descripción y foto con URL absoluta, GUID estable por enlace. Sin inventar fecha de publicación ni incluir notas internas. Feed portfolio sin modificaciones. Enlaces visibles y autodiscovery de tienda.
- Comprobador de artefacto ampliado para feeds, cantidad/URLs de piezas, imágenes sociales y privacidad XML. Las comprobaciones existentes de galerías y condiciones se mantienen.

Auditoría local de lectura: ficha perro muestra controles, metadatos propios JPEG/dimensiones y autodiscovery; feed ES visible como XML válido en navegador, ocho ítems. No se activaron WhatsApp, selector nativo, copiado, Instagram ni suscripciones de terceros. URLs de imágenes dev incluyen rutas técnicas propias de Astro; el comprobador de build rechaza esas rutas y localhost en feeds públicos.

Cada push corresponde a un conjunto distinto de archivos: primero el ajuste solicitado, luego la nueva funcionalidad. Un build remoto por SHA, sin repetir controles verdes de un mismo artefacto.

## Límites y pendientes

Las Previews permanecen protegidas: sus enlaces y fotografías no son una publicación pública accesible a los rastreadores de WhatsApp. Para compartir públicamente el catálogo hace falta el lanzamiento autorizado a producción. La presencia de Instagram en el selector nativo depende del dispositivo/aplicaciones. No se acredita envío real ni previsualización dentro de esas aplicaciones.

Siguen pendientes la auditoría integral de accesibilidad, habilitar el origen exacto del admin nuevo cuando se use Tina Cloud, aprobación final y publicación de producción. Carrito, cobros y envíos integrados continúan diferidos. No se envían mensajes ni se cambian secretos/protecciones.

Fuentes consultadas: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share y https://docs.astro.build/en/recipes/rss/ . Skill Astro y modern-web-guidance aplicadas, sin interpretar sus ejemplos como autorización de suites/build locales.

## Resultado remoto R54

Preview Ready: https://portfolio-2026-astro-kqs57l8b6-aledesign-projects.vercel.app . Deployment dpl_HpydWQc9hRYMiUtKxNZX62V4LPfm, build 1m08s. Tina + Astro aprobados (62 páginas y endpoints XML); checker: pages=20, feeds=2, optimizedPhotoSources=37, socialPhotoSources=8, errors=[]. Log en output/shop-r54/build-log.txt.

Ficha perro inspeccionada en la Preview: controles visibles, enlace compartido y og:url usan el origen correcto de esta Preview; og:image apunta al JPEG optimizado del mismo origen y autodiscovery a /tienda/rss.xml. Captura share-controls-preview.png inspeccionada. Se usó Tab desde el botón para desplazar a la zona sin activar compartir/copiar. No envío real ni lectura/escritura del portapapeles. El correcto guardado de una suscripción en un lector RSS y las previsualizaciones dentro de apps no se probaron. No se repitieron E2E ni builds locales. Main remoto sigue en 4752b2562cf105731eb409f96c05a497f7b0f803.

