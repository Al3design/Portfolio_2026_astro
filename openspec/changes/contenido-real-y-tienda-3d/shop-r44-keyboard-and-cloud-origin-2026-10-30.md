# R44 — Auditoría de teclado y acceso a Tina Cloud

## Realizado

Auditoría del orquestador sobre la Preview R43, sin suites, builds, instalaciones, cambios de código o publicaciones:

- Tab inicial alcanza Saltar al contenido, visible a y=8 con altura 48px; Enter mueve foco a main#main-content.
- Tab desde main alcanza Explorar piezas. Enter y Tab llevan a Todas las piezas en la colección. Foco visible: outline de 2px, botón de 44px de alto y dentro del viewport.
- Categorías operadas con Tab, Espacio y Enter: Escritorio deja una pieza y actualiza el status; volver a Todas las piezas restaura tres.
- Tab a la primera ficha y Enter abren soporte Creeper; salto al main, Tab y Enter sobre Volver a todas las piezas regresan a `/tienda/coleccion/#soporte-control-creeper`.
- Árbol accesible observado con un h1, secciones h2 y piezas h3 en portada; idioma es, contador status, categorías aria-pressed, paletas con nombres y cero imágenes sin atributo alt. Las fotos decorativas de enlaces usan alt vacío y los enlaces tienen nombre de pieza; las fotos de detalle sí tienen descripción.
- No se declara auditoría integral WCAG ni prueba con un lector de pantalla real. Restan lector de pantalla, contraste integral en ambos temas, zoom y demás criterios antes de considerar cerrado 2.4h.

Skill aplicada: `.agents/skills/accessibility/SKILL.md`; su checklist no se tomó como autorización para ejecutar nuevas suites.

## Bloqueo detectado y autorización recibida

El editor remoto `/admin/` abrió autenticación Tina, que indicó que la Preview no estaba en Site URLs. Se inspeccionó el proyecto Portfolio2026astro, ID `91f5f6de-a230-4383-b71b-96f34d232c34`. La lista persistida tenía cinco orígenes; la rama codex/tienda-catalogo-real figuraba complete. No se cambiaron tokens, repositorio, colaboradores, plan o indexación.

Alejandro autorizó expresamente agregar SOLO el origen exacto `https://portfolio-2026-astro-hiluainyv-aledesign-projects.vercel.app` y un único recorrido para guardar/reabrir/restaurar una nota interna del árbol en la rama de revisión, con posible generación de dos commits/builds automáticos de Preview. Main y producción quedan fuera.

Se pulsó Add una sola vez. En esta UI la entrada se guarda inmediatamente: Save Configuration permaneció deshabilitado. Recarga y espera de la entrada confirmaron la persistencia del sexto origen, conservando los cinco anteriores y sin comodines. Captura: `output/shop-r44/tina-origin-confirmed.png`. No se pulsó Save Configuration.

El error de dominio desapareció en el siguiente inicio de sesión. El dashboard Tina Cloud tiene sesión, pero la autenticación del editor sigue mostrando Authenticate With GitHub / Email / Password. El botón GitHub no avanzó al controlarlo; un clic tuvo timeout de Input.dispatchMouseEvent, se inspeccionó el estado y una activación por teclado mantuvo la pantalla. No se ingresaron credenciales, no se aceptaron permisos OAuth nuevos y no se siguieron repitiendo intentos. La captura del popup agotó Page.captureScreenshot; la captura de configuración sí se guardó.

## Estado al entregar

- La prueba de escritura todavía NO empezó: ninguna nota de árbol modificada, ningún commit editorial o build generado por esa prueba, nada que restaurar todavía.
- Autorización de recorrido con restauración RECIBIDA y pendiente de ejecutar tras completar el acceso. No volver a pedir la misma autorización si el alcance no cambia.
- Rama local y remota de revisión siguen en e51142a; main revalidado en 4752b25 antes del recorrido. Índice sin staging. No se alteró producción ni protección Vercel.
- Ventanas del editor y su autenticación dejadas como handoff para que Alejandro complete ingreso. Luego verificar visualmente la rama antes de tocar la nota.

## Siguiente acción exacta

Con la sesión del editor abierta, confirmar `codex/tienda-catalogo-real`; abrir Árbol decorativo; copiar el valor original de Notas internas de capacidad y producción desde el propio formulario y conservar baseline del JSON. Agregar una marca temporal identificable, guardar una vez, salir/reabrir, comprobar persistencia, restaurar el texto original y guardar una vez. Verificar diff remoto limitado y restauración semántica del JSON completo. No ejecutar suites o builds manuales ni promover producción. Si Tina genera commits, integrar únicamente los cambios autorizados preservando el checkout local sucio.
