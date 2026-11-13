# Tanda: preview, exportacion y encabezado

Fecha: 2026-10-16. Pedido: recuperar LIVE PREVIEW con punto, menu de copia en fichas nuevas y movimiento del contenido del topbar al contenerse.

## Intencion

Mantener la plantilla de proyectos compartida. El encabezado comienza con marca y acciones alineadas al ancho del cuerpo; al desplazar entran en los margenes interiores del contenedor, junto con la aparicion del vidrio.

## Especificacion de movimiento

- Portfolio: recorrido horizontal de 8px en movil y 48px desde md, reutilizando size(2)/size(12). La navegacion central no se escala ni se desplaza.
- Con scroll timelines completas: translate de los grupos y opacity de la superficie siguen el progreso de 0 a 64px de scroll, en ambos sentidos; curva lineal por posicion.
- Fallback: IntersectionObserver existente cambia el estado al superar 64px; transicion de translate y opacity de 200ms ease-out. Sin nuevos listeners continuos ni dependencias.
- Shop conserva su encabezado abierto propio.

## Implementacion

- Retirado el slot que sustituia LIVE PREVIEW por Fotograma de revision. Se reutiliza el badge compartido con punto decorativo y pulso existente de 2 segundos.
- ProjectDetailView acepta exportMenuNode. Las fichas Astro insertan MarkdownExportMenu existente como isla client:load, a la derecha del breadcrumb. No se hidrata toda la ficha para habilitar la copia.
- El Markdown se arma a partir del mismo texto localizado: contexto, participacion, herramientas, escena, descripcion de video y pendientes. Incluye estado borrador y published: false; no modifica las exclusiones de produccion.
- La fila de breadcrumbs permite wrap y gap para que el menu pueda pasar a otra linea cuando falte espacio.
- El topbar usa translate de hijos directos y opacity, con @supports para timelines y sin animar padding, ancho, blur ni escala tipografica.

## Alternativa accesible

Con prefers-reduced-motion los grupos permanecen contenidos sin desplazamiento; el fondo cambia sin transicion. El punto de LIVE PREVIEW queda fijo. Se conserva la estructura existente de controles y foco.

## Criterios para QA final del orquestador

- Revisar Mundo y Toplomero, ES/EN: LIVE PREVIEW, punto, copia, visualizacion y descarga Markdown coincidentes con el idioma y estado borrador.
- Revisar alineacion inicial contra el cuerpo y ajuste al scrollear/subir, en escritorio y movil; timeline nativa, fallback, movimiento reducido y menus con teclado.
- Revisar wrap de breadcrumb/exportacion en anchos estrechos; Shop mantiene su encabezado y las rutas de revision siguen fuera del artefacto publico.

No se ejecutaron controles, build, pruebas, tipos, lint, e2e ni capturas de diagnostico en esta tanda, conforme a AGENTS.md. Se leyeron fuentes y diff. No se declara validacion visual ni cierre del OpenSpec. Cambios locales sin commit, push ni publicacion.
