# Medios incorporados a fichas profesionales

2026-10-19. Alejandro autorizó explícitamente revisar las diez capturas existentes propuestas en professional-media-selection-report.md. Excepción acotada a selección de contenido editorial; no autoriza nuevas capturas, navegadores, ejecución de aplicaciones ni controles técnicos por tanda. No se modifica AGENTS.md.

## Revisión de las diez candidatas

- GitCron: init-guard-opened-repo muestra una interfaz anterior y casi vacía con un commit de demostración; se descarta por redundancia/antigüedad. Se eligen 01-menu-grafo y 02-grupo-legible, con repositorio de prueba y panel contextual. No se observan tokens, rutas de usuario ni historial privado. Se conserva la distinción entre captura existente y prueba funcional actual.
- UseOdontoPro: cuatro capturas de baseline (home y planes, escritorio y móvil), con diseño editorial y panel ilustrativo. Son material histórico; incluyen métricas y promesas comerciales que no están acreditadas como actuales. Se identifican así en sección, epígrafes/créditos ES/EN, sin trasladarlas al texto como resultados ni asegurar funcionalidades operativas.
- OdontoPau: article-live-desktop y article-reference-desktop muestran radiografías; se excluyen de esta selección para diseño web. La versión móvil muestra encabezado y comienzo del artículo, sin radiografías ni identificadores de paciente visibles, con aviso de borrador explícito. Se conserva ese aviso y se acredita el contenido clínico a la profesional, sin certificar su validez ni publicación.
- OdontoPro no estaba entre estas diez candidatas y sigue sin imagen propia. No se copia la ilustración de dashboard del portal como si fuese una captura de la aplicación real.

## Entrega

Siete WebP de fotograma completo, sin recortar, ampliar, componer ni alterar contenido. Reducción de ancho a un máximo de 1600 px, conservando la altura proporcional completa (incluidas capturas móviles largas). Originales intactos. Fuentes, dimensiones y tamaño en professional-web-media-manifest.json; publicación no aprobada y versión actual no establecida.

GitCron, UseOdontoPro y OdontoPau reciben portada con alt/epígrafe/crédito compartidos por idioma y galerías Tina ES/EN. GitCron usa grid, UseOdontoPro previews para evitar grandes huecos entre capturas largas y OdontoPau grid con una imagen. Se conservan enlaces a la imagen completa en pestaña nueva. No se cambian componentes, CSS, schema ni archivos generados.

Las nuevas rutas se añaden a la lista permitida del endpoint DEV. Todo sigue como draft, sin medios en public ni publicación. Copias exactas de los tres MDX anteriores en .e2e/content-intake; scripts de incorporación puntuales, no repetir sobre ediciones Tina.

## Alcance de la evidencia

prepare-professional-review-images.py y add-professional-review-media.mjs ejecutados una vez, ambos exit 0. Son autoría de medios y contenido, no controles de verificación del proyecto.

La revisión visual autorizada fue de fuentes existentes. No comprueba el estado actual de las otras aplicaciones, su funcionamiento, la apariencia de estas galerías en el portfolio ni el guardado en Tina. Esos controles permanecen para el cierre. No hay build/tipos/lint/tests/e2e, capturas nuevas, commit ni push.

Pendientes: medio propio de OdontoPro, aprobación editorial y selección de versiones, ampliar motivación/desafíos/aprendizajes, confirmar fechas/estado/enlaces. No se marca completo el bloque general de contenido por incorporar estas imágenes.
