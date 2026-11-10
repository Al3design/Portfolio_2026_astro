# Editor dentro de Portfolio · orden visual

Pedido del usuario: unificar función/estética con Store 3D · selección pública y retirar el editor de Portfolio Overview. Se mantiene rama/checkout activos y cambios locales ajenos; no se toca order.json ni artículos, ni se instalan dependencias o reinicia dev.

Implementado:

- `tina/project-order.ts` registra ProjectVisualOrderField como ui.component del campo scopes. En la colección se muestra el inventario completo automáticamente, con ámbito general/categoría, drag y Subir/Bajar/Primero.
- Se reemplaza el editor autónomo de ProjectVisualOrderEditor.tsx por campo controlado mediante input.value/onChange, con suscripción al estado submitting del formulario. No hay TinaAdminApi ni mutaciones propias. Save/Reset/avisos de cambios y errores de persistencia pertenecen a Tina, igual que Shop. El primer movimiento prepara listas desde el inventario de la sesión; abrir no escribe ni inicializa. Se pueden mover varios ámbitos y guardar juntos.
- La lista respeta datos actuales del formulario, por lo que Reset/guardado no dependen de una segunda copia local del orden. Cursor independiente de búsqueda/página de Overview y preservación de referencias fuera del subconjunto. Escape restaura el orden anterior al drag, incluidas modificaciones pendientes previas.
- Overview deja de importar el editor y elimina botón/estados/bloqueo de guardado/deep-link; conserva consulta y categoría de inventario. Se retira ProjectOrderAccess.tsx creado en esta sesión. No se añade otra pantalla ni cambia la selección Shop.
- admin.css usa filas continuas, retira recuadro exterior del campo y comparte control del selector. Tokens, foco, controles de 44 px y touch-action none solo en el asa conservados. Caché 20261110-3.

Contrato oficial contrastado con https://tina.io/docs/extending-tina/custom-field-components y FieldsBuilder del paquete instalado: el componente recibe input/meta/form (Final Form), input.onChange actualiza el valor y form.subscribe observa submitting. Guía drag-and-drop aplicada con «provide a dedicated drag handle» y alternativas visibles; se conserva Motion React existente, sin reordenar nodos React mediante DOM imperativo.

Límite funcional expreso: se adopta el guardado nativo de Tina, que no hace la relectura personalizada ni comparación de inventario del prototipo autónomo anterior. No es compare-and-swap; coordinar sesiones/recargar ante cambios externos. No extrapolar el control previo del prototipo a este campo.

Documentación vigente en README, GUIA_EDITORIAL_IA, TINA_ADMIN_THEME, plantilla bilingüe, config permanente, spec/design/tasks y changelog. Los reportes anteriores de acceso a Overview son históricos y quedan reemplazados por esta decisión.

Pendiente de comprobación interactiva: abrir sin ensuciar, drag/teclado, cambios de ámbitos pendientes, Save/Reset, guardar/reabrir/restaurar, foco/scroll/mobile y guardado en Cloud con el alcance autorizado. El usuario no pidió build/publicación ni actualización de paquetes en esta corrección. No se ejecutaron esas acciones.

## Cierre de tipos de esta corrección

`npx.cmd astro check` ejecutado una vez: exit 1, 178 archivos, 1 error, 0 warnings, 100 hints. `tina/project-order.ts` rechaza el componente cuyo props exige form: la definición pública Component<string,true> no incluye esa prop, aunque FieldsBuilder y la documentación oficial sí la suministran en runtime.

Corrección por lectura del contrato real: componente exterior recibe unknown y valida input/meta/form y callbacks con guards; solo después monta NativeOrderField tipado. No se usa cast ni se cambia el contrato de datos/handlers para silenciar el error. **No se repitió el control; la corrección sigue pendiente de revalidación.** No declarar cierre aprobado ni publicar.

## Rediseño del ancho desde nueva captura

El usuario mostró el campo en su colección, con lista que terminaba antes del ancho del panel y controles grandes. Fuente vendor instalada: FieldsGroup (index.js ~4214) es flex/wrap/nowrap y FieldWrapper (~974) aplica w-full/px-2. El section personalizado no declaraba ancho ni flex-basis; se corrige esa causa con reglas aisladas, sin cambiar max-width de todos los formularios.

admin.css: campo al 100%, flex-basis 100%, min-inline-size cero, whitespace normal, padding 8px y contenedor nombrado al3-order. Base estrecha con acciones bajo título; desde 28rem del campo, fila asa/miniatura/título/acciones. Sin texto Primero ocupando otra columna: iconos con aria-label y title, superficies discretas y targets 44px. Placeholder FileText cuando no hay foto. Ayuda editorial más breve, sin cambios a guardado/orden. Caché 20261110-4.

Guías consultadas: size-aware-styling («Define the container») y form-factor-adaptation («Use container queries instead of viewport-width media queries», «Label icon-only buttons»). Context7 /websites/tina_io confirma ui.component e input/meta/form; no se alteraron los callbacks nativos. Sin nuevas dependencias, servidor, navegador, guardados, builds o publicación por este rediseño. Fuente de continuidad README/guías/config/changelog actualizada; captura aportada es diagnóstico, no validación posterior.

### Resultado del cierre de tipos del ancho

Una ejecución de `npx.cmd astro check`, exit 0: 178 archivos, 0 errores, 0 warnings, 100 hints. La corrección unknown/guards del componente queda revalidada. No se repitieron contratos ya verdes ni se ejecutó build/servidor/guardado/UI.

### Scroll único, ajuste posterior

Antes de responder llegó nueva captura: el usuario observa la lista ya más ancha y marca scroll anidado. Lo causaba max-height min(65dvh,600px) y overflow-y auto del listado. Override aislado en native-order: max-height none y overflow visible. El bucle de autoscroll ahora busca list.closest('[data-test^="form:"]') y desplaza FormWrapper, fuente vendor index.js ~18472; se retira layoutScroll del Reorder.Group porque ese grupo ya no es desplazable. Caché 20261110-5.

Este ajuste posterior no modifica contratos ni persistencia; revisado por lectura, sin repetir el chequeo de tipos anterior. Pendiente observar único scroll, alcance de última fila, autoscroll de drag, teclado y Save/Reset. No usar el chequeo del ancho como prueba visual de scroll ni de persistencia. Las guías y config registran el único dueño del scroll.
