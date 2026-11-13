# Revision movil y teclado — 2026-10-21

Alcance autorizado por Alejandro: inicio, Archive, Resume y About; corregir hallazgos locales. Sin publicacion, build, suites ni cambios en los tres borradores.

## Observado en produccion

- Chrome, viewport temporal 390 x 844; restaurado al terminar.
- Inicio: menu abre con Enter, recibe foco en cerrar y Escape devuelve foco al disparador. Filtro Systems deja un proyecto y devuelve foco al resumen de filtros.
- Archive: seleccionar diez por pagina y activar Siguiente con Enter muestra 11–18 de 18; Siguiente queda deshabilitado y el resumen recibe foco visible.
- Resume: filtro Moodle reduce la seleccion exportable a una experiencia; limpiar restaura exportacion completa. Menu de exportacion abre con Enter y cierra con Escape conservando foco en su disparador. No se repitieron descargas, ya confirmadas por Alejandro.
- About: titulo seguido del cuerpo en una columna; contenido ajustado al viewport.
- En las cuatro paginas el ancho de documento observado fue 380 px con viewport de 390 px, sin desbordamiento horizontal. La sospecha inicial de recorte del encabezado no se reprodujo en la captura estable.

## Correccion local

`src/components/ClientResume.tsx`:

- Asociar el buscador al texto visible Refine your search mediante aria-labelledby.
- Informar la seleccion de cada filtro con aria-pressed y declarar type=button.
- Sin nuevos estilos, tokens, contenido editorial ni esquema Tina.

Revisado el diff. En localhost el arbol accesible muestra el nombre del buscador y Moodle pasa de estado 0 a 1 al activarlo con Enter; exportacion indica una experiencia coincidente.

Revision acotada de recorridos, no certificacion WCAG ni prueba en dispositivo tactil real. Build y publicacion no ejecutados para este ajuste; requieren autorizacion de alcance. OdontoPro, UseOdontoPro y Tienda Geekies permanecen pendientes.

## Publicacion autorizada

Alejandro autorizo: "publica nomas". Commit `d4e8c27`, unicamente ClientResume.tsx, pusheado a main. Sin build local adicional. El push no registro despliegue automatico durante la espera; se creo produccion mediante API autenticada de Vercel con gitSource fijado al SHA completo `d4e8c2787c7b3ee298dc2c7837200d6b17a00797`, sin subir el checkout local.

Despliegue `dpl_65DXXun7JBHg3NYRvb6MbAEn1GQo`: Ready, build remoto de 1m14s, aliases al3design.dev y www.al3design.dev confirmados por vercel inspect. Los borradores y cambios locales ajenos quedaron fuera.
