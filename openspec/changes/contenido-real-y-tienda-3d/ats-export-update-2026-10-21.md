# ATS y feedback de copiado — 2026-10-21

- Pedido: revisar TXT aportado y actualizar formato ATS si hacía falta.
- Fuente recibida: Downloads/Alejandro_Delgado_ATS_CV (1).txt. El archivo
  confirma una exportación actual con Moodle, habilidades y formación nuevas.
  Sustituye la incertidumbre sobre la descarga del recorrido anterior, que
  solo había localizado una copia histórica.
- Causa de una sola experiencia: downloadATS recorría filteredExperiences.
  Ahora usa experiences completo. El filtro sigue afectando la pantalla y la
  impresión Custom CV; no recorta silenciosamente el ATS.
- Nuevo formateador tipado src/lib/ats-cv.ts: nombre/título, ubicación, portfolio,
  experiencia, habilidades y educación/certificaciones. Cargo, institución y
  período en líneas separadas; herramientas y viñetas simples. Sin columnas,
  marcas de título //, email ficticio, nuevas fechas, funciones o titulaciones.
- TXT UTF-8 con CRLF; conserva nombres y acentos, normaliza guiones de período.
  Descarga agrega y retira el enlace del DOM y difiere revocación del object URL.
- Archivo concreto generado desde las seis fuentes laborales actuales usando
  el mismo formateador: output/cv/Alejandro_Delgado_ATS_CV.txt. No reemplaza el
  original aportado ni agrega ese TXT a public.
- La generación del entregable se ejecutó como tarea de autoría, no como suite.
  Sin build, tipos, lint, e2e ni pruebas de descarga de navegador en esta tanda.
- MarkdownExportMenu muestra un mensaje role=status al fallar clipboard y
  orienta a Download .md; limpia el temporizador previo antes de otra acción.
  Estilo con tokens/mixins existentes. No se certifica ejecución en navegador.
- Referencia editorial de formato: Harvard Mignone Center for Career Success,
  https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/ y
  https://careerservices.fas.harvard.edu/resources/hes-create-impactful-resumes-and-cover-letters/.
  No se promete aceptación por todo ATS; se conserva inglés/español tal como
  está confirmado en las fuentes, sin inventar traducciones de títulos.
- Sin commit, push ni publicación. Tres borradores intactos. Zona EST de Home
  pendiente de confirmación del autor; no cambiada.
