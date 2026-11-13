# Vínculos de experiencia: tipografía y jerarquía

2026-10-16. Corrección solicitada a partir de las capturas de Alejandro.

- Resume: el enlace a Ingest Monitor usa cleanTitle en vez del formato de encabezados; evita el salto explícito y los spans con tipografía secundaria. Texto corrido Inter con tokens de tamaño e interlineado y ajuste de palabras. La etiqueta Draft conserva su estilo mono mediante selector directo, sin afectar al título.
- Tarjeta Estado: vínculo dentro de la lista de metadatos como fila VER EXPERIENCIA (clave naranja) / EN RESUME (valor y flecha), equivalente en EN; sin subrayado. Conserva foco visible global y área mínima de interacción.
- No se traslada a Ficha técnica: esa sección conserva herramientas/código. La relación laboral sigue siendo un único campo compartido experienceSlug, con ayuda explícita en Tina y marcador de edición visual.
- El destino se calcula desde el documento actualizado por useTina, no desde una prop estática de Astro. Vaciar la relación retira el vínculo; Resume recalcula la relación inversa al recargarse/generarse. No se cambia publicación ni contenido profesional.

Revisión de fuente/diff únicamente. Sin build, tipos, lint, tests, e2e, capturas ni reinicio de servidores conforme a AGENTS.md. Verificación visual y guardado Tina pendientes del cierre; sin commit, push ni publicación.

Corrección posterior al error Sass reportado por Alejandro: semantic-font(sans) pertenecía al mapa equivocado; el mapa $semantic-fonts ofrece body, heading y mono. Se reemplazó por semantic-font(body), conservando Inter mediante el token existente. No se agregaron alias ni se modificaron los mapas para ocultar el error. Sin ejecutar controles; recarga visual pendiente.
