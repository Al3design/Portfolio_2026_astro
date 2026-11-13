# R46 — Textos directos y simplificación de fichas

Pedido: retirar de la tienda autoría, licencia, condiciones de uso y enlaces al modelo original; usar textos coloquiales y profesionales, sin narrar lo que Alejandro dijo o confirmó.

Implementado localmente sobre `codex/tienda-catalogo-real`, HEAD `156a85d65f657130820ddf7566b58f6b2deba213`:

- Eliminados los campos correspondientes del esquema fuente de Tina, del contrato compartido, de las ocho fichas JSON y de la revisión local. Retirado el inventario local de referencias a modelos; conservados los originales fotográficos y sus manifiestos de archivos.
- Descripciones, cuidados, disponibilidad, introducciones y mensaje de consulta ES/EN simplificados. Notas internas sin referencias a declaraciones personales.
- Conservados precio a consultar, entrega según stock y a confirmar, solo impresión incluida, PLA, paletas, fotografías, categorías y diseño.
- Expectativas existentes de E2E adaptadas sin ejecución. El comprobador del artefacto conserva el control de privacidad mediante las notas internas actuales en lugar de textos históricos eliminados.

Auditoría de fuentes y diff únicamente. Sin build, tipos, lint, pruebas, capturas, commit, push ni publicación. No se editaron archivos generados de Tina: su regeneración y la actualización selectiva de Preview siguen pendientes. El editor de la Preview anterior conserva el esquema anterior; no usarlo para guardar estas fichas hasta actualizarlo.

Los controles anteriores corresponden a los hashes anteriores, no acreditan este cambio. La documentación histórica se conserva como registro; este pedido no elimina créditos de otros proyectos ni licencias de dependencias. Cambios locales ajenos preservados. No hay cambios en producción.
