# Controles compactos en mobile

Pedido aprobado: Filters desplegable con icono y cantidad activa; Layout con iconos de grilla/lista; conservar presentacion desktop y estilos existentes.

## Implementacion local

- ClientHome: controls mobile bajo md (48em/768px), disclosure nativo details/summary y nombres completos de categorias al abrir. Tras aclaracion del autor, el contador muestra filteredProjects.length: todos los articulos coincidentes antes de paginar, incluido el total al seleccionar All Output y cero si no hay coincidencias. La etiqueta accesible usa el mismo valor. Cierra al elegir filtro o pulsar Escape y devuelve foco al summary. Layout conserva estado compartido, localStorage y paginacion. Los iconos tienen nombres accesibles y aria-pressed para la vista seleccionada; SVG decorativos aria-hidden.
- Desktop conserva SyntaxCard y las etiquetas anteriores desde md. Ambas presentaciones consumen la misma funcion de categorias y handlers; CSS oculta la alternativa fuera del breakpoint.
- SCSS reutiliza el estilo de botones del paginador, control-surface, radius(soft), size, semantic-color y mq(md). Sin tokens, dependencias, esquema ni contenido Tina nuevos. Botones y opciones mobile con objetivo minimo 44px.

## Estado

Correccion tras error de hidratacion aportado por Alejandro: los inicializadores leian localStorage durante el primer render del navegador (LIST/filtro guardado), mientras SSR emitia CARDS/all. Se fijan valores iniciales identicos en ambos y se restauran preferencias validadas en el efecto de montaje existente, junto con la pagina de la URL. Sin suppressHydrationWarning ni eliminacion del SSR. El contador usa el resultado filtrado despues de restaurar las preferencias. Pendiente comprobar recarga con LIST y categoria persistidos.

Alejandro autorizo una excepcion nueva: ejecutar una vez npx.cmd astro build con Tina en 4002 y publicar si pasa. Control ejecutado una vez, exit 0, 40 paginas; aviso previo Search sin usar en Resume. Tras el build, lectura final incorporo condicion explicita storedFilter !== null para estrechar el tipo antes del setter; conserva el comportamiento ya validado contra categorias. No se repitio el control local. Sin pruebas, control de tipos separado, lint, capturas ni navegador de diagnostico. Pendiente comprobacion interactiva mobile/desktop, teclado, apertura/cierre, filtros, persistencia y ausencia de aviso de hidratacion al recargar LIST.

Commit selectivo 3244ac1 en main y push a origin/main, solo ClientHome.tsx y _home.module.scss. Despliegue Vercel dpl_5PCsEw64UU8xBwSQKSPgUi5UwsDY en portfolio-2026-astro / aledesign-projects confirmado Ready para production por inspect --wait. URL https://portfolio-2026-astro-dekvysbie-aledesign-projects.vercel.app; alias ls confirma al3design.dev y www.al3design.dev apuntando a ese despliegue (inspect inicialmente mostro solo aliases vercel.app). Sin borradores ni cambios editoriales o reglas en el commit.
