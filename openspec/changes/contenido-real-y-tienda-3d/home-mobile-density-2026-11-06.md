# Home: separación del topbar y prioridad de contenido móvil

Ampliación del cierre: filtros laterales sin desborde en anchos intermedios. Tracks de la grilla principal y de botones usan `minmax(0, 1fr)`; sidebar/grupo/botones permiten contraerse y etiquetas envuelven dentro de cada celda, sin recortar foco. Alejandro identificó los tres guardados remotos de Ingest Monitor/BDM como pruebas propias y autorizó reemplazarlos; se restauran las versiones previas de `fb5b4a9` para la publicación.

Solicitud de Alejandro del 06/11: el título Compiled Visions queda demasiado pegado al topbar. En móvil, ocultar misión y el bloque status/location/timezone para llegar antes al artículo.

Se añadió una clase del módulo home al contenedor existente. Su padding inicial usa la altura del topbar fijo más espacio del sistema: `layout(nav-height) + size(12)` bajo md y `+ size(20)` desde md. Se retiró el padding superior redundante del breadcrumb. El título conserva margen inferior desde md; en móvil se reduce el espacio del hero. Misión y metadatos usan `display: none` bajo md (48em), reaparecen en escritorio. No se eliminaron campos, traducciones, esquema Tina ni controles de navegación/filtros/exportación.

Fuentes: `src/components/ClientHome.tsx`, `src/styles/pages/_home.module.scss`, altura compartida en `src/styles/abstracts/_tokens.scss`, posición del topbar en `src/styles/components/_navigation.module.scss`. Se consultaron las skills modern-web-guidance (guía css) y Dart Sass; se conservaron tokens y módulo existentes. Regla durable en config y guía editorial; entrada en changelog.

Revisión por lectura de fuentes. Sin nuevas pruebas, capturas, tipos, build ni publicación para este ajuste. Los controles de orden realizados antes (6/6, Astro sin errores y persistencia local restaurada) no acreditan este cambio visual. Pendiente observar home móvil/escritorio, temas y home dentro de Tina en el cierre visual. Mantener visibles los pendientes de integración selectiva, publicación de Tina/tema, transición ES/EN manual y controles Cloud de alta/selección de Shop.
