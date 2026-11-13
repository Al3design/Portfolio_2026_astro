# Imágenes para compartir — preparación local 2026-10-23

## Alcance
Alejandro autorizó continuar con las imágenes del banner general, París y CV personal después de la auditoría de proporciones. Preparar composiciones horizontales; no publicar artículos draft ni cambiar sus portadas visibles.

## Entrega
- public/social/portfolio-v1.png: 1200 × 630, 66.816 bytes.
- public/social/paris-v1.png: 1200 × 630, 287.143 bytes.
- public/social/cv-personal-v1.png: 1200 × 630, 321.411 bytes.
- scripts/generate-social-cards.mjs: composición determinista con Sharp existente, logo y capturas locales; sin IA que reinterprete el trabajo original, sin nuevas dependencias.
- Paleta leída de los valores existentes de src/styles/base/_globals.scss. Inter y Roboto Mono del proyecto; sin nuevos tokens.
- Los archivos WOFF se reconstruyen como SFNT en output/social-cards/fonts para el rasterizador. Archivos temporales de producción gráfica, no fuentes nuevas para la web.
- Manifest de dimensiones, peso y procedencia en output/social-cards/manifest.json.

## Conexión de metadatos
- src/lib/social-images.ts asigna una tarjeta solo a las tres fuentes originales identificadas por la auditoría; conserva otras imágenes sin reemplazo.
- MainLayout.astro usa el mismo resultado para Open Graph y Twitter, alt por idioma, y ancho/alto/tipo solo para las tarjetas conocidas.
- Alcance visible: cuatro páginas principales y París/CV personal en ES/EN. El logo y capturas son los originales; se selecciona el comienzo de las capturas largas para la composición. Se conserva su proporción, sin regenerar elementos de la interfaz.
- Tina, esquemas, campos de portada y contenido de los artículos no cambiaron. Una imagen diferente elegida en Tina conserva su comportamiento previo.
- URLs nuevas versionadas para no reutilizar la dirección del banner antiguo. No garantiza refresco inmediato de cachés externas ni ausencia de recortes en cualquier cliente.

## Revisión y estado
- Imágenes finales inspeccionadas como artefactos. Primer render tuvo error de marcado de color y luego fuentes WOFF interpretadas incorrectamente; corregido el generador antes de las exportaciones finales.
- Diff del layout y función leídos. No build, tests, lint, e2e ni comprobación de vista compartida externa.
- Sin commit, push ni publicación de este lote. Los tres borradores, políticas y cambios GTM permanecen fuera.
- Pendiente revisión de Alejandro y publicación acotada de seis archivos: tres PNG, generador, social-images.ts y MainLayout.astro.

Referencia: https://ogp.me/ (propiedades estructuradas og:image:width, height, type y alt).

## Publicación solicitada
- Alejandro pidió continuar después de ver las tarjetas preparadas. Se publica únicamente el lote de seis archivos indicado.
- Commit selectivo `4c79b5b` en main y push a origin correctos.
- Compilación de producción mediante despliegue automático de Vercel; sin repetir build local, tests o e2e.
- Despliegue detectado: https://portfolio-2026-astro-mhy185hye-aledesign-projects.vercel.app, inicialmente Building.
- Los tres borradores, informes, políticas y pendientes de GTM no se incluyeron.
- Vercel confirmó producción READY: dpl_4jJBFq1yDU7Sh8keoGb9oGfha9Fy, compilación remota 1m15s; alias al3design.dev y www.al3design.dev asignados.
- Lectura HTTP final de las ocho rutas afectadas: todas 200, og:image y twitter:image coinciden con tarjeta correspondiente; ancho 1200 y alto 630 declarados.
- Los tres PNG públicos responden 200 image/png, con pesos idénticos a las exportaciones locales (66.816, 287.143 y 321.411 bytes).
- No se afirma actualización de cachés o vista previa dentro de WhatsApp/LinkedIn a partir de estos controles HTTP.

## Inspector externo de LinkedIn — 23/10/2026
- Continuación autorizada por Alejandro para revisar vistas previas. Inspector público de LinkedIn usado sin crear publicaciones ni enviar mensajes.
- Inspeccionadas https://al3design.dev/, https://al3design.dev/projects/paris/ y https://al3design.dev/projects/cv-personal/.
- Las tres muestran Last scraped «a few seconds ago», canonical idéntica a la URL solicitada y 206 Success en la traza del inspector.
- Capturas inspeccionadas visualmente: tarjeta horizontal nueva, título correspondiente y dominio al3design.dev. Sin recorte visible del contenido de las composiciones.
- Títulos: «Al3Design | Alejandro Delgado - Multimedia Designer», «París del boceto a la web | Al3Design» y «CV personal dos versiones visuales | Al3Design».
- Descripciones y autor reconocidos. «No publication date found» no impidió generar las tarjetas; no se inventaron fechas de publicación.
- Evidencia: output/linkedin-preview-home-2026-10-23.png, output/linkedin-preview-paris-2026-10-23.png, output/linkedin-preview-cv-personal-2026-10-23.png.
- WhatsApp no comprobado dentro de la aplicación. No se afirma refresco de su caché a partir de LinkedIn. Sin cambios de código, compilaciones ni nuevas publicaciones del sitio.

## WhatsApp Web — comprobación posterior
- Usuario vinculó la sesión y autorizó explícitamente «mandame mensaje a mi mismo».
- Se enviaron al chat identificado por WhatsApp como «Tú» los tres enlaces: portada, París y CV personal. Se envió además la portada con `?share=20261023` para comparar una URL nueva con la caché de la raíz. Cuatro mensajes en total; editor final vacío.
- París y CV personal generaron título, descripción e imagen cargada (miniatura 1024 × 537). La raíz sin parámetro mostró tarjeta básica sin imagen; la misma portada con parámetro generó título, descripción e imagen nueva correctamente. Esto es compatible con una entrada antigua de caché para la URL raíz; no se forzó ni se acredita su invalidación global.
- Captura recortada al mensaje propio, sin otros chats: output/whatsapp-preview-home-2026-10-23.png. Comprobante visual muestra tarjeta y doble marca de entrega.
- Sin cambios al sitio, canonical, Tina, artículos o configuración de Analytics. El parámetro se usó únicamente para diagnóstico de la vista previa, no como cambio de URL oficial.
