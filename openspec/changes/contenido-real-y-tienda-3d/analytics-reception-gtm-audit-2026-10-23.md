# Recepción GA4 y revisión GTM — 2026-10-23

## Alcance
Alejandro pidió continuar la comprobación de recepción en Analytics y revisión de los tres cambios pendientes de GTM. Sin publicación ni cambios de configuración.

## Recepción comprobada
- Propiedad GA4 467104755, cuenta 336384849. Informe Resumen en tiempo real.
- Navegador abrió https://al3design.dev/ y realizó una recarga controlada.
- Se observaron dos solicitudes page_view a analytics.google.com/g/collect, ambas para G-JGHRGD2X1R y la portada; cada una correspondía a una carga distinta y recibió HTTP 204.
- Informe Tiempo real pasó de vacío a mostrar la portada con 2 vistas y el evento page_view con 2 ocurrencias.
- No se observaron page_view duplicados en esas dos cargas. Esto no acredita todos los controles, navegación de la web ni todas las sesiones.
- No guardar URLs completas de medición, cookies o identificadores de visitantes; esta evidencia está resumida.
- Captura: output/analytics-realtime-2026-10-23.png.

## Tres cambios pendientes, workspace 3
1. Etiqueta 4 conserva G-JGHRGD2X1R y Initialization - All Pages; cambia de tipo Etiqueta de Google a Google Analytics, con configuración de destino optimizada y referencia a ignorar instancias duplicadas de configuración. Comparación contra versión 2 leída; sin aplicar.
2. Detección automática de eventos: activadas vistas por cambios de historial, desplazamientos, clics de salida, formularios, vídeos y descargas.
3. Datos proporcionados por usuarios: activado; detección automática activada; correos activados; teléfono y nombre/dirección desactivados; selectores manuales desactivados. Pantalla explica que productos receptores exigen términos correspondientes. No se aceptaron términos ni se publicaron estos ajustes.

La detección automática de correos no es necesaria para el objetivo declarado de medir navegación del portfolio. Recomendación: excluirla de cualquier publicación futura. No se alteró el borrador del usuario.
Captura del ajuste pendiente: output/gtm-user-data-draft-2026-10-23.png.

## Hallazgo adicional
La UI de Analytics muestra una vinculación de Search Console para al3design.dev, flujo Aledesign-Flux 9934126437, fecha 23/10/2026. Esta auditoría no la creó.

## Estado
Lectura UI y observación de red del navegador, sin modificar código, políticas, artículos ni permisos. Sin builds ni suites; GTM sigue con tres cambios pendientes sin publicar. Network.enable usado temporalmente para observar y Network.disable al terminar.

## Continuación autorizada: limpieza y publicación
- Ante el pedido de continuar la limpieza, se desmarcaron correo electrónico, detección automática y la opción general de datos proporcionados por usuarios; guardado confirmado en UI.
- Se revisaron los otros dos cambios: mismo destino G-JGHRGD2X1R y activador Initialization - All Pages; eventos automáticos conservados sin agregar ajustes.
- Publicada la versión 3: «Analytics al3design.dev sin datos proporcionados por usuarios», el 23/10/2026 a las 12:34 según GTM.
- UI confirmó «La versión 3 se ha publicado» y estado «Publicada, Más reciente». La comparación publicada muestra el aviso de que la función desactivada no enviará datos a productos/cuentas. La etiqueta genérica anterior sigue pausada.
- Captura: output/gtm-cleanup-published-2026-10-23.png.
- No se aceptaron términos, ampliaron permisos ni modificaron código o borradores. No se repitió la prueba de recepción tras publicar; la evidencia de dos vistas anterior corresponde a la versión 2.
