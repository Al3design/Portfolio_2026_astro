# Decisions

ShopLanding usa shopLandingProducts sobre el catálogo ordenado. Latest vacío devuelve el mismo orden; latest explícito prioriza sus referencias y conserva el resto para que los filtros sigan funcionando. La selección candidata vacía latest, sin alterar hero/products/fotos. ShopSelectionField explica cómo volver al modo automático, sin cambiar schema o generados. El checker considera las tarjetas ocultas después del límite y comprueba las tres visibles por separado.

# Verification

Cierre focal con pruebas de orden/catálogo, chequeo Astro y un build Preview remoto con checker de artefacto ampliado; sin build local sin credenciales ni suites admin/e2e repetidas. Revisar inicio y colección ES/EN. No atribuir guardado Cloud ni revisión móvil a comprobaciones de código/HTTP.
