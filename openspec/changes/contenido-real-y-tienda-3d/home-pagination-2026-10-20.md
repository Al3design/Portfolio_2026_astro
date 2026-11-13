# Paginacion de proyectos — 2026-10-20

Pedido: limitar la home a tres articulos por pagina, contando el destacado y las dos tarjetas, y conservar compatibilidad con TinaCMS.

## Implementacion local

- `src/components/ClientHome.tsx`: filtra antes de paginar; muestra tres proyectos en CARDS y LIST; reinicia pagina al cambiar filtro; conserva pagina al cambiar layout. Agrega resumen, controles numerados y anterior/siguiente, foco al resumen y URL `?page=N`. WebMCP acepta pagina opcional y devuelve el mismo grupo visible.
- `src/styles/pages/_home.module.scss`: paginador arriba a la derecha junto al resumen, sin superficie contenedora. Botones individuales con radio, superficie, borde tenue y hover de COPY PAGE, reutilizando tokens existentes; objetivos de al menos 44 px y numeros que pueden distribuirse en varias lineas en anchos pequenos.
- `docs/ARTICLES_TINA.md`: documenta comportamiento y alcance del CMS.

## Compatibilidad y limites

Sin cambios de esquema, tipos generados, contenido, imagenes, estado editorial ni orden. `index.astro` conserva el guard de proyectos publicados y la exportacion Markdown completa. La division es cliente: no reduce la transferencia de metadatos del catalogo. No se publican borradores ni se cambia el bloqueo de OdontoPro/UseOdontoPro.

## Evidencia y pendientes

Revisados los cambios mediante lectura de diff y los consumidores de props en `index.astro`. Alejandro autorizo ejecutar una vez `npx.cmd astro build` usando Tina en 4002 y publicar si pasa. Comando ejecutado una vez: exit 0, 32 paginas, sin rutas de los borradores. Aviso previo de import Search sin usar en ClientResume conservado. No se ejecutaron suites, lint, control de tipos separado ni navegador/capturas. Pendientes de comprobacion interactiva: navegacion, filtros, cambio de layout, regreso desde articulo y teclado.

Commit selectivo `d4c61e6` en main, pusheado a origin/main: ClientHome, tres modulos SCSS, mixins y documentacion ARTICLES_TINA (seis archivos). Sin contenido ni medios de borradores ni otros cambios locales. Despliegue Git de Vercel `dpl_CKAoq7zqgeky618sd4hGcBsTaTaE` en portfolio-2026-astro / aledesign-projects confirmado Ready para production por `vercel inspect --wait`, con alias https://al3design.dev y https://www.al3design.dev. Sin afirmar prueba interactiva en produccion.
