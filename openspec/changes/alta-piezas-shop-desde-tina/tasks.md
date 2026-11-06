# Tasks

- [x] Upload asistido por usuario + alta/reapertura desde Tina y selección/hero/novedad locales completados el 03/11. Foto derivada cargó; catálogo 8→9→8, selección restaurada a hash original y temporales retirados. Filechooser automatizado sigue sin acreditarse. Ver report-2026-11-03-local-upload.md; no repetir.

- [x] Persistencia Cloud acotada del 03/11: guardar/reabrir nota interna del árbol y restaurar/reabrir original, limpio. Commits c0d8fec/fb5b4a9; sin cambios públicos o selección. No sustituye upload nuevo, alta Cloud ni selección interactiva pendientes.

- [x] Implementar documento y formulario Tina de selección explícita, con migración equivalente por lectura; pendiente comprobarla en ejecución.
- [x] Implementar lectura validada y módulo virtual de imágenes seleccionadas, con caché fuera de public para uploads y recarga dev. Preparado, no verificado en ejecución.
- [x] Conectar selección y fotografías a catálogo, portada, revisión, social y RSS. Preparado, no verificado en ejecución.
- [x] Preparar controles de exclusión de borradores, rutas, referencias e imágenes; adaptar expectativas públicas a la selección aprobada. Pruebas no ejecutadas.
- [x] Control Node autorizado el 02/11: `node --test tests/shop-catalogue-selection.test.mjs`, una ejecución, salida 0, 5/5 aprobados. Actualiza el estado de preparación anterior; no acredita Tina/Astro ni reemplaza el control final pendiente.
- [x] Actualizar guía editorial y registrar límites de uploads públicos y guardados Cloud.
- [x] Corregir la fuente tras el fallo de generación: `products`/`latest` como listas de objetos con campo `product` de referencia individual; JSON, lector, expectativas y guía adaptados. Orden, ocho piezas, novedades y portada conservados por edición de datos. Corrección aún sin control ejecutado.
- [x] Regenerar Tina mediante el flujo habitual autorizado; sin editar lock/generados a mano. Primer intento del 02/11 falló por listas de referencias; después de corregir fuentes y recibir autorización expresa para una nueva ejecución de `npm.cmd run dev`, Tina quedó activo y Astro v6.3.5 informó ready en `http://localhost:4322/`. No acredita navegación, formulario, alta o compilación de imágenes.
- [x] Conectar Live Preview local de piezas mediante router, consulta, useTina y tinaField; compartir plantilla/paleta/botón con las fichas públicas. Pantalla de selección conserva formulario nativo, sin prometer preview de portada/configuración.
- [x] Recorrido local autorizado del 02/11: crear/guardar/reabrir una ficha temporal con una foto original existente, comprobar título sin guardar en iframe, ocho piezas públicas sin el borrador y retirar el temporal. No se modificaron las ocho fichas originales. No acredita upload nuevo, selección pública modificada ni todos los campos/idiomas.
- [ ] Verificación final del alcance: contratos, build/artefacto y recorrido local de crear/guardar/reabrir sin publicar el borrador. Pendiente de ejecución; no reutilizar R55 para este código.
- [x] Preparar candidato selectivo y Preview autorizada; completados según evidencia del 03/11 debajo. Producción separada; no repetir preparación/build por esta casilla histórica.
- [x] Preparar candidato selectivo Tina/Shop el 02/11 y compilar Astro con el SDK local existente: 62 páginas, artefacto Shop 20 páginas / 2 feeds / 37 fotos / 8 sociales, sin errores. No sustituye los contratos pendientes, build Cloud, upload/selección interactiva ni Preview.
- [x] Control final de contratos 03/11, 6/6. Fuentes enviadas en df001b1 a rama activa; una Preview Git detenida por índice Tina Cloud antiguo (GraphQL 2.4.1 frente a 4.1.0 local). Build Cloud y recorridos interactivos continúan pendientes.
- [x] Índice de esa rama actualizado y única reconstrucción posterior Ready (hcr8tuwvw): Tina + Astro 62 páginas y comprobador Shop 20 páginas / 2 feeds / 37 fotos / 8 sociales sin errores. Upload/selección real y persistencia Cloud siguen sin acreditarse.
