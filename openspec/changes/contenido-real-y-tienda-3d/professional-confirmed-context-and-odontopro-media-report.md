# Contexto confirmado y primeras imágenes de OdontoPro

2026-10-19. Alejandro respondió la consulta narrativa y autorizó expresamente revisar las siete capturas existentes de OdontoPro. Después confirmó la separación: OdontoPro es la app; UseOdontoPro, el portal. No se trasladaron módulos clínicos al portal.

## Contexto incorporado en ES/EN

- GitCron: origen en reemplazar el uso cotidiano de CMD por una interfaz amena/intuitiva para Git. Evolución ligada a su metodología: OpenSpec, diagramas de la estructura del proyecto y asistencia IA en las pantallas. No se presenta como software terminado ni se inventa el mayor desafío, todavía sin respuesta específica.
- OdontoPau: pedido de la cliente de visibilidad en búsquedas web, presentación de casos clínicos y presencia en redes para ampliar audiencia. Objetivos, no resultados medidos: no se atribuyen rankings, tráfico, consultas ni automatización de redes no documentados.
- OdontoPro: sistema integral para clínicas, con expediente/historial, recetas, facturación y avisos de calendario por turnos. Es el alcance descrito por Alejandro y aclarado en su respuesta posterior, no prueba de funcionamiento de cada módulo.
- UseOdontoPro conserva la ficha de portal público. Su arquitectura/propósito no se sustituye por el de la app.

Se actualizaron introducciones, descripciones y secciones nuevas de relato; notas pendientes ajustadas para no volver a preguntar la motivación ya confirmada. Se mantienen portadas, galerías, herramientas y enlaces anteriores.

## Selección de las siete capturas autorizadas

Se inspeccionaron ambas vistas de login, dos del directorio y tres de ficha. Los logins contienen un claim de certificación/cumplimiento no acreditado en esta selección; no se incorporan al portfolio. Login de error además muestra credenciales de ensayo y un aviso de fallo. Las tres fichas son similares; se elige una y se evitan duplicados. No se elimina ni oculta la insignia de desarrollo visible en el original.

Elegidas:

1. ficha-patients-browser-20260929-final.png como portada y primer elemento de galería.
2. ficha-patient-page-browser-firefox-auth-E4-20261008-final.png para la ficha/odontograma.

La lectura estática de scripts/verify-ficha-patients-browser.cjs (245-261) y verify-ficha-patient-page-browser.cjs (338-355) confirma los patrones generados de clínica, profesional y paciente: etiquetas FichaClinicaA/FichaDoctorA/FichaPacA más sufijos de randomUUID. Son datos sintéticos del ensayo, no se dedujo eso solo por su apariencia. Los scripts no se ejecutaron, no se consultó una base ni se leyó .env.

Dos derivados WebP completos de 1280 × 720, sin recorte, montaje ni cambios del contenido. Manifiesto odontopro-review-media-manifest.json con procedencia y alcance. Alt/epígrafe/créditos ES/EN identifican ensayo y versión histórica, sin acreditar uso clínico actual. Galería grid y apertura completa en pestaña nueva; se reutilizan componentes/campos existentes.

## Ejecución y límites

prepare-odontopro-review-images.py y enrich-professional-author-context.mjs ejecutados una vez, ambos exit 0. Copias exactas previas de los tres MDX en .e2e/content-intake. No repetir el script sobre ediciones de Tina: podría duplicar la galería de OdontoPro.

Excepción limitada a inspección de siete capturas existentes autorizadas por el usuario. Sin capturas nuevas, navegadores/aplicaciones, pruebas/build/tipos/lint/e2e. No se modifican repositorios fuente ni schema/componentes/generados. Medios DEV-only, artículos draft, sin commit/push/publicación. Verificación final y aprobación editorial pendientes.
