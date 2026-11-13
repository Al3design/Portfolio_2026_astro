# Archive y originales editables — etapa futura

## Pedido del autor

Alejandro quiere que Archive permita subir los archivos originales editables
de sus trabajos, por ejemplo PSD, AI y archivos de escenas 3D. Aclara que es
para el futuro. No se implementa carga ni se publica material fuente ahora.

## Estado actual observado por lectura

- Archive toma los proyectos publicados con visibilidad de portfolio y enlaza
  sus fichas; excluye borradores.
- Los campos título/subtítulo de la página ya están conectados a TinaCMS.
- Se corrigió únicamente el contenido local de `archive.mdx`: subtítulo
  heredado y texto sin terminar. No se anuncian descargas disponibles.
- Los selectores de año/categoría solo contienen una opción y no tienen
  handlers. La paginación está deshabilitada.
- El año de una entrada sin dato se reemplaza por 2024 en el componente.
  Pendiente corregir sin inventar fecha y sin usar la fecha de publicación
  como si fuera la fecha del trabajo.

## Dirección futura a definir antes de implementar

- Vincular cada original con su proyecto en lugar de duplicar la ficha.
- Metadatos propuestos: nombre, formato/extensión real, aplicación/versión,
  tamaño, versión del recurso, autoría/créditos y condiciones de uso.
- Distinguir carga privada, revisión y autorización de descarga pública.
  El usuario no ha decidido aún si habrá descargas públicas, privadas o venta.
- Considerar dependencias del archivo: texturas, fuentes, vínculos y plugins.
  No prometer editabilidad completa sin indicar esos requisitos.
- Elegir almacenamiento y límites antes de conectar cargas a Tina; no asumir
  que Git o el campo de medios existente sea adecuado para originales grandes.
- Definir permisos de material de clientes y recursos de terceros por archivo.
  Tener el editable no implica permiso automático para distribuir sus recursos.
- Conservar separación de originales digitales, portfolio y tienda física.

## Entrega actual

Cambios locales de contenido/documentación, sin código de subida ni esquema
nuevo. Sin build, pruebas, capturas, commit, push o despliegue en esta tanda.
La limpieza de cuatro fichas laborales de la tanda anterior sigue local.
