# Tanda: relatos de Mundo y Toplomero y transicion suave

## Fuente editorial

Respuestas directas de Alejandro en esta conversacion, 2026-10-16. Son la fuente de las nuevas secciones ES/EN; no se infieren fechas, nombres de materias, licencias, plugins ni composicion de equipo.

- Mundo: idea de un mundo volcanico cubierto de calaveras; terreno esferico, alturas, grietas y lava en VUE; calavera OBJ de biblioteca gratuita repetida como patron; fondo predeterminado; palos recuperados de otro TP propio; fuego y composicion posterior en Photoshop. Aprendizajes: terreno, repeticion de objetos y flujo render/composicion.
- Toplomero: entrega entre dos materias, animacion integral 3D con rigging y edicion/composicion. Modelado y texturizado propios de personaje y cuerpo, habitacion, modificador de pelo, rigging y caminata en 3ds Max; agua con RealFlow; filtros de lentes y ambientacion con plugins en After Effects; banners en Photoshop. Desafio: piernas cortas, pies pequenos y brazos grandes. Aprendizajes: modelado organico, rigging, particulas y postproduccion.

## Implementacion editorial

academic-drafts.ts amplia resumen y participacion, agrega tres etapas por trabajo, desafio y aprendizajes. Mundo incluye creditos visibles que distinguen la calavera de biblioteca del trabajo propio. Se agrega RealFlow a herramientas de Toplomero. Se retiran pendientes ya respondidos; quedan fechas, nombres de materias, titulos definitivos, equipo/recursos/licencias y seleccion de medios.

La ruta de revision conserva ProjectDetailView y las cards existentes. Las nuevas secciones usan encabezados y parrafos de la misma plantilla. El Markdown reutiliza las mismas estructuras y textos localizados, incluidos creditos y estado borrador. Las rutas siguen limitadas a DEV.

## Intencion y especificacion de movimiento

El vidrio debe aparecer en fade y los extremos entrar suavemente incluso si un golpe de rueda supera de una vez el umbral. Se reemplaza el progreso nativo 0–64px de la tanda anterior por transiciones temporales de estado: opacity y translate, 380ms, cubic-bezier(0.22, 1, 0.36, 1), disparadas por el IntersectionObserver existente al superar 64px y reversibles al subir. Recorrido: 8px movil / 48px desde md. Sin animar ancho, padding, escala ni blur; Shop conserva su encabezado propio.

Esta decision sustituye la especificacion de timeline nativa en preview-export-header-report.md: no es un efecto ligado continuamente a la posicion, sino una transicion entre dos estados. No agrega listeners, dependencias ni servidores.

## Alternativa accesible

Se mantiene prefers-reduced-motion: grupos contenidos sin movimiento y cambio inmediato de superficie. Las animaciones de entrada no cambian orden ni estructura de controles.

## QA final pendiente

Revisar ambos idiomas y Markdown, jerarquia de titulos y extension editorial en desktop/movil. Confirmar con Alejandro el relato, las fechas y los creditos restantes. Revisar scroll lento, golpe de rueda, regreso al inicio y movimiento reducido; el fade y el ajuste no deben saltar aun si el evento supera el umbral. Confirmar exclusion de borradores del build publico al cierre.

Conforme a AGENTS.md no se ejecutaron build, pruebas, tipos, lint, e2e ni capturas en esta tanda. Sin validacion visual ni cierre del OpenSpec. Cambios locales sin commit, push ni publicacion.

## Correccion a partir del error reportado por Alejandro
La captura mostro copy.process undefined en la ruta de revision, aunque la fuente actual contiene process en ambos idiomas de ambos trabajos. La ruta recibia el objeto draft como props de getStaticPaths, susceptible de conservar una instantanea anterior en desarrollo. Se retiran esos props y se resuelve el objeto actual por Astro.params en el render, con guardas de idioma/slug. No se agrega un fallback vacio que oculte contenido faltante. Correccion de fuente sin correr controles ni reiniciar el servidor; resultado renderizado pendiente de confirmar.
