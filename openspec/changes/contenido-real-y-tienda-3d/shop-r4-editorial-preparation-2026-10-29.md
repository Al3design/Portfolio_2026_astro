# R4 — Preparación editorial para piezas reales

## Scope

Alejandro indicó continuar tras la revisión de R1+R2, sin aportar todavía datos de piezas reales. Se prepara el circuito de borradores para poder recibirlos sin inventar inventario. Stack actual: Astro + React + TinaCMS; Next/Payload y comercio siguen diferidos.

## Implementation

- tina/shop-products.ts: colección JSON shopProduct, «Store 3D · borradores de piezas», con defaultItem en draft. Únicos estados: draft/review; ninguno publica. Nombre interno, categoría, textos ES/EN, seis detalles físicos de R2, modalidad/notas de producción, declaración de autoría/licencia, fotos/renders con alt/epígrafe ES/EN y crédito.
- tina/config.ts: import y registro de la colección; conserva todas las colecciones y personalizaciones existentes.
- src/lib/shop-editorial.ts: tipo del borrador y opciones editoriales de categoría. Sin importar config de Tina en React ni cambiar los tipos de las seis piezas conceptuales.
- src/editorial/shop-products/.gitkeep: carpeta de JSON vacía, sin producto ficticio persistido.
- docs/SHOP_EDITORIAL.md: guía de carga, campos desconocidos, medios y límites de publicación.

Los campos físicos usan las claves R2; el borrador admite información parcial por idioma. El defaultItem no inventa propiedades físicas: valores null, idiomas vacíos y fotos vacías. Para revisar no implica aprobado. Precio, carrito, pago, envío y reserva no se agregan a esta tanda.

## Publication Boundary

La colección no tiene importador en ShopPage/ShopContent ni rutas nuevas. No se añadió a src/content.config.ts. Guardar JSON no cambia la lista pública ni sus seis conceptos/noindex. Notas internas y licencias no se serializan al frontend por esta implementación.

Los archivos de medios son un límite distinto: el gestor global actual usa public/assets. No son privados por pertenecer a un documento borrador. La guía describe esta situación antes de cargar archivos. No se copiaron ni subieron medios.

## Review and Verification Status

Implementado localmente y leído por diff. Sin build, pruebas, tipos, lint, e2e, capturas o publicación de esta tanda, conforme AGENTS.md. No se inició otra instancia Tina/Astro ni se editaron generados/tina-lock.json a mano. En la lectura final no había listeners en 4322/4002/9001; la sesión de desarrollo de la revisión anterior no debe asumirse activa.

No se afirma que el nuevo formulario esté generado o que CRUD/guardado/reapertura estén verificados. La consulta de Context7 sobre Tina falló por conectividad; se usaron documentación oficial de colecciones/campos y los patrones instalados del proyecto. Esto no sustituye la comprobación del editor.

## Next Bounded Control

Cuando corresponda a un control autorizado, usar una sola instancia del dev correcto y probar: colección vacía → crear borrador de prueba identificado → guardar → reabrir → editar ES/EN y campos parciales → comprobar JSON persistido y que la tienda sigue con seis conceptos. No publicar ni convertir una prueba en producto real. Preservar datos ajenos y definir retiro del documento de prueba sin borrar por coincidencia de nombre.

Después, revisión de Alejandro y datos de piezas reales antes de lector, preview o publicación comercial. Los estados de las tareas padre 2.1–2.4 permanecen abiertos.
