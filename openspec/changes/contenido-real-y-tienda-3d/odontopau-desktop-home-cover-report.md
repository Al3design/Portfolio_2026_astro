# Portada de OdontoPau: home en escritorio

2026-10-19. Alejandro pidió reemplazar la portada móvil del artículo por una imagen de la página principal en tamaño desktop.

No se encontró una captura de home desktop en las ubicaciones revisadas: output/playwright contenía home-mobile y otras páginas; los candidatos consultados de .playwright-cli correspondían a artículos. Se informó que se tomaría una imagen del sitio público para cumplir el pedido de portada.

Se usó la skill Playwright CLI para una sesión temporal propia portfolio-odontopau-cover, abierta en https://paulagualtieri.com/. Una captura de viewport de 1440 × 900, tras cargar las fuentes, con animaciones desactivadas para la imagen. No hubo login, formularios, navegación clínica ni pruebas. La captura muestra encabezado, marca, título y presentación institucional, sin pacientes ni radiografías.

Esta captura nueva se limita al pedido actual de material desktop para la portada; no amplía la autorización anterior de diez capturas ni habilita controles rutinarios por tanda. No se cambió AGENTS.md ni se ejecutaron suites/build/tipos/lint/e2e. No es una verificación técnica de OdontoPau o del portfolio.

WebP de la imagen completa sin recorte ni composición: src/editorial/assets/odontopau-home-desktop.webp. Trazabilidad en odontopau-home-cover-manifest.json. La portada ES/EN apunta al nuevo archivo con alt, epígrafe y crédito; la galería incorpora la home completa y conserva la captura móvil del artículo. El bloque de contexto diferencia la home actual capturada y el material editorial histórico. Rutas de imagen completas en pestaña nueva.

update-odontopau-home-cover.py y update-odontopau-home-cover.mjs ejecutados una vez cada uno, exit 0. Copia exacta del MDX anterior en .e2e/content-intake. Medio servido solo en desarrollo mediante allowlist; nada copiado a public. No se modificó el repositorio de OdontoPau ni contenido clínico. Sin commit/push/publicación; edición/guardado Tina y presentación en el portfolio siguen pendientes al cierre.
