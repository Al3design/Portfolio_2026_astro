# Context

Tina 3.8.1 tiene variables `--tina-*`, pero sus utilidades Tailwind también fijan colores literales. El portfolio/Shop están en un iframe con documento y tema independientes. El dashboard propio usa tokens inline claros y un icono emoji.

# Decisions

1. Adaptador de tema por CSS, sin sustituir el shell, interceptar acciones o editar node_modules/admin generado. La API cmsCallback es el punto de instalación previsto.
2. CSS acotado por ruta `/admin` y atributo en `body.tina-tailwind`. Negro/grafito, texto claro, acento gris lavanda discreto y acciones principales claras. El iframe conserva `color-scheme: normal` y sus colores propios.
3. Fuentes Inter locales y SVG de Lucide desde dependencias existentes. Iconos decorativos en enlaces de colecciones con URL estable, manteniendo nombres accesibles. El dashboard usará su Icon oficial, no mutación de React/DOM.
4. Mantener validaciones, errores, local mode, controles de rama, foco y funciones. No usar filter/invert global, ni ocultar medios o controles para obtener apariencia oscura.
5. No recargar ni reemplazar un formulario con indicador de cambios sin guardar. Preparar archivos e integración y esperar la decisión del usuario antes de activar el adaptador en esa sesión.

# Integration Local

`tina/config.ts` importa `installAdminTheme` y lo llama al inicio de cmsCallback. El dashboard usa variables con fallback y LayoutDashboard de Lucide como Icon. La conexión se realizó después de que el usuario autorizara descartar su edición rápida del árbol mediante Reset, sin guardarla.

El formulario y el menú se observaron con el tema aplicado. La revisión visual del dashboard, foco por teclado y autonomía del iframe queda pendiente: la sesión local se cerró antes de completar ese recorrido. No es evidencia de publicación ni de auditoría completa.

# Validation and Rollback

Auditoría visual del orquestador sobre formulario y menú, conservando contenido; comprobar colores de estados/foco y autonomía de iframe. No corresponde ejecutar suites por una tanda estética. No inferir cobertura de todos los diálogos/editor rico desde una captura.

Retirar la llamada del callback devuelve el tema original al cargar de nuevo admin. No cambia datos, esquema, publicación o secretos. Al actualizar Tina, revisar los selectores de compatibilidad.
