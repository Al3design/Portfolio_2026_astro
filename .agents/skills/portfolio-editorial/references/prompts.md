# Prompts listos para usar

Elegir `portfolio-editor` en OpenCode Desktop o `Portfolio - editor` en DSH y abrir `C:/www/Portfolio_2026_astro`. Pegar el pedido con material; no usar las CLI como interfaz del usuario. Estos prompts no autorizan controles implícitos ni publicación productiva anticipada.

**Cómo completarlos:** reemplazá cada `[campo]` por tu dato y quitá el paréntesis de ejemplo antes de enviar. Los ejemplos usan archivos, campos y textos reales del portfolio; no son cambios pedidos ni autorizaciones. Un valor que ya coincide con la ficha no requiere un commit. Las URLs, SHAs e IDs del Preview son del release del 13/11: para aprobar otro trabajo usá la revisión que la IA te acaba de entregar, no la histórica. No se garantiza que ese Preview antiguo siga disponible.

## Alta

```text
En C:/www/Portfolio_2026_astro usá portfolio-editorial.
Creá o completá [artículo/caso/pieza Shop/página existente] (ej.: artículo del portfolio sobre OdontoPro).
Material: [material o ruta] (ej.: src/content/projects/odontopro.mdx, borrador bilingüe existente con los datos aportados).
Referencia comparable: [documento de referencia, opcional] (ej.: src/content/projects/bdm-consultores.mdx para estructura de caso web; conservar sus componentes, no copiar su contenido).
Destino y visibilidad deseados: [destino y estado] (ej.: completar src/content/projects/odontopro.mdx como draft; destino público previsto /projects/odontopro/ cuando apruebe su Preview).
Si ya existe el borrador, trabajá en ese documento; no lo dupliques ni sobreescribas campos ajenos.
Hosting Vercel. Conservá tokens,
maqueta, componentes, anchos, espacios, tipografías, temas y condiciones vigentes.
Completá ES/EN con hechos aportados, sin inventar fechas, material ni precios.
Para contenido reutilizá editorial permanente, un solo lote pendiente. Antes de otra
carga, sincronizá con main solo si no queda contenido sin aprobar, según AGENTS.
Cambios técnicos van en codex/<tarea>; retomados conservan su rama. Sin worktrees.
Prepará candidato y Preview por el carril Vercel permitido. Parada ESPERANDO_OK_PREVIEW
con URL directa, revisión y pendientes. Esperá mi OK posterior antes de producción.
Controles autorizados para esta tanda: ninguno. El orquestador fija los de cierre.
```

Para Shop, una referencia real comparable es `src/editorial/shop-products/jarron-acanalado.json`; su selección se edita en `src/editorial/shop-catalogue/catalogue.json`. Una nueva pieza necesita su propio slug y material aportado: el ejemplo del jarrón no autoriza duplicarlo ni publicarlo otra vez. `status: draft` en una ficha Shop no implica que esté fuera de la selección pública.

## Cambio focal

```text
En C:/www/Portfolio_2026_astro usá portfolio-editorial.
En [ruta/slug/URL] (ej.: src/editorial/shop-products/jarron-acanalado.json),
cambiá solamente [campo/texto/foto] (ej.: locales.es.description)
por [material o texto definitivo] (ej.: "Un jarrón decorativo de PLA con formas redondeadas y textura acanalada. Consultá por los colores disponibles.", texto actual de esa ficha para mostrar el formato).
Conservá identidad, URL, formato editorial, campos ajenos, orden y diseño.
Reutilizá editorial para este cambio de contenido, sin mezclar otros pendientes.
Respetá tokens y maqueta existentes del sitio y del admin; Preview en Vercel.
No inventaries otras piezas ni modifiques CSS. Si es imagen, revisá el recurso
y sus usos reales (portada/card/social o primera foto Shop), sin prometer cambios
en derivados que no correspondan. Prepará Preview y terminá esperando mi OK.
Controles autorizados para esta tanda: ninguno. El orquestador fija los de cierre.
```

Si el cambio es una foto: `[campo/texto/foto]` (ej.: `photos[0].sourcePath`) y `[material o texto definitivo]` (ej.: `src/editorial/shop-assets/intake-2026-10-29/20261016_165831.jpg`, original existente de la primera foto del jarrón). Para una foto nueva, reemplazá ese ejemplo por el archivo que realmente aportás. En un artículo como BDM, `image` usa la ruta pública `/assets/projects/bdm-consultores/bdm-home-desktop.webp`; no intercambiarla con un `sourcePath` privado de Shop.

Para retirar/republicar: mismo prompt focal, especificando la visibilidad solicitada. Artículo usa `publicationStatus` y `showInPortfolio`; Shop selección y dependencias hero/latest. No borrar documentos/medios ni cambiar slugs como sustituto de retirar.

## Control acotado por ejecutora

```text
Sobre el candidato [manifest/revisión] (ej.: e7ce234e20bc996fc2aad2ae114721cf85f1165c, revisión histórica; reemplazar por la actual),
ejecutá una sola vez este comando de control:
[comando exacto] (ej.: node --test tests/shop-catalogue-selection.test.mjs, si el alcance que autoricé es selección/fotos Shop).
No agregues otros controles. Si falla, registrá resultado y
entregá sin corregir para reintentar ni sustituirlo. Esto no autoriza producción.
```

## OK del Preview

```text
OK al Preview [URL] (ej.: https://portfolio-2026-astro-c51c1n1bq-aledesign-projects.vercel.app),
revisión [SHA o hash de manifiesto + deployment ID] (ej.: e7ce234e20bc996fc2aad2ae114721cf85f1165c + dpl_BgnKHTTuEJNQ6CRdaxX5GyrFkr5g; pareja histórica del mismo Preview).
Publicá exactamente esa revisión por el circuito Git/Vercel permitido.
Comprobá que no cambió el contenido aprobado y los controles de cierre.
Integrá por el flujo permitido y dejá main local/remota actualizada y limpia.
No crees worktrees ni saltes protecciones. Si falta acceso efectivo o hay cambios
ajenos/divergencias, explicá ese bloqueo concreto. Seguí el mismo deploy
y entregá URL pública y evidencia; no pidas otro merge después de publicar.
```

## Revisión opcional

```text
Revisá solo [pieza y material] (ej.: src/content/projects/bdm-consultores.mdx y sus imágenes referenciadas),
diff [diff entregado por el editor] (ej.: salida de git diff -- src/content/projects/bdm-consultores.mdx, ya preparada; no ejecutes shell),
y evidencias [rutas/URL/revisión] (ej.: openspec/changes/rutina-ia-local-portfolio/report-2026-11-13.md y https://al3design.dev/projects/bdm-consultores/; para un cambio nuevo adjuntar también su Preview y revisión actuales).
Solo lectura, sin shell, edición, publicación ni delegación. Informá fidelidad
al material, ES/EN, medios, diseño conservado y problemas concretos con evidencia.
No repitas scripts/suites ni conviertas recomendaciones en un rediseño.
Si falta navegador/visión, distinguí lectura de fuentes de revisión visual real.
```

## Instrucción para altas Shop

Añadir al prompt de alta o cambio que incluya piezas nuevas:

```text
Las altas seleccionadas entran primero en products, la última incorporación arriba.
Conservá el orden relativo anterior y cualquier posición manual ya guardada;
actualizar texto/fotos no mueve una pieza. Hero y latest quedan como están.
Completá palette con cuadrados y nombres ES/EN de los colores del PLA mostrado,
sin incluir decoración ni deducir marcas/códigos de filamento de la foto.
Si un tono es ambiguo, preguntame. Ejemplo confirmado: litofania-messi = Dorado / Gold.
Los HEX manuales son aproximaciones de pantalla, no tokens del sitio.
Prepará Preview de esta revisión y detenete para mi OK posterior.
```

Entrada Tina para todas las cargas: Preview permanente de editorial /admin/, enlazado en README/operación. No abrir producción /admin/ para guardar un borrador. La selección de rama se comprueba antes de cualquier guardado; un enlace de producción no selecciona editorial por sí mismo.

Para altas/orden Shop, revisar inicio (/tienda/ y /en/shop-3d/) además de colección: latest vacío sigue las tres primeras piezas de products; latest explícito prioriza manualmente. Usar modo automático salvo selección editorial solicitada; conservar hero. No dar por corregido el inicio por comprobar solo la colección.
