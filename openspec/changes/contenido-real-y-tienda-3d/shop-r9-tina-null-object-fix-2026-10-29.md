# R9 — Corrección de objetos null en los borradores Tina

Alejandro pidió continuar el diagnóstico después del fallo de arranque de R8. Se leyó el documento, el esquema y el código de las dependencias instaladas. No se ejecutó un nuevo arranque ni otro control.

## Defecto identificado por lectura

Los cuatro borradores contenían cinco campos object con valor null dentro de details. El esquema define esos campos con subcampos es/en. El defaultItem de la colección también creaba los seis campos como null.

En la dependencia instalada @tinacms/graphql 2.4.1, dist/index.js:

- loadAndParseWithAliases, alrededor de líneas 3792–3800, termina aplicando replaceNameOverrides al documento.
- replaceNameOverrides, líneas 3424–3436, recorre los objetos hacia _replaceNameOverrides.
- _replaceNameOverrides, líneas 3442–3450, usa Object.keys(obj) sin guarda para null y vuelve a llamar replaceNameOverrides para los campos object.
- El catch del proceso de indexación, alrededor de línea 7905, envuelve la excepción en el mensaje genérico Unable to seed.

Por ese camino, un objeto null no puede indexarse con esta implementación. Es un defecto concreto del formato que preparó Codex. El arranque anterior no mostró la excepción interna; esta lectura explica un fallo alcanzable, pero no demuestra que sea el único bloqueo ni reemplaza un nuevo arranque exitoso.

## Cambio acotado

- Omitidos dimensions, variants, care, availability y productionTime de los cuatro JSON; PLA confirmado, fotografías, licencias y demás texto conservados.
- defaultItem ahora crea details vacío, sin valores físicos inventados.
- ShopProductDraft admite objetos parciales opcionales, sin null en detalles editoriales. No cambia el contrato conceptual de shop-demo ni sus null.
- La revisión existente usa encadenamiento opcional y fallback: un campo omitido conserva «Por confirmar»/«To confirm».
- Actualizada docs/SHOP_EDITORIAL.md para distinguir contratos y evitar reintroducir null desde otra IA o una carga manual.

No se modificaron dependencias, reglas de validación, archivos generados ni tina-lock.json a mano. El lock generado por el intento fallido anterior sigue pendiente de regeneración y revisión, sin revertirlo ni staged.

## Estado y siguiente control

Corrección preparada y leída; no se inició servidor, build, pruebas, tipos, lint, e2e ni capturas en R9. Persistencia, funcionamiento de la revisión y exclusión del artefacto continúan sin validar.

Para el siguiente intento expresamente autorizado: npm run dev una vez, y solo si queda listo, el comando e2e acotado documentado en R8. Sin bucle de reinicios ni suite completa. Si vuelve a fallar, registrar el nuevo resultado antes de decidir otro intento.
