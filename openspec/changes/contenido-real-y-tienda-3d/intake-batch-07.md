# Tanda 7: selección de BOTF, SUPREMACY y Casa

2026-10-19. Relevamiento de metadatos desde el CSV existente, sin reescanear la unidad ni leer inventarios TXT extensos. Etapa de selección; no son artículos creados ni aprobados.

## Candidatos

| Carpeta | Material inventariado | Tratamiento pendiente |
| --- | --- | --- |
| job/3D/BOTF | 216 JPG en diez subcarpetas | Confirmar autoría, herramientas, contexto y relación con SUPREMACY. |
| job/3D/SUPREMACY | 13 JPG, cinco MAX, dos PSD, un TXT breve y un archivo vacío | Confirmar alcance propio y colaboración antes de elegir imágenes. |
| job/3D/casa | 69 JPG, 65 MAX y un PDF | Distinguir renders, recursos y planos; confirmar contexto y participación. |

BOTF agrupa Borg probe (52), Constitution Kelvin (22), Immense stations (22), K7 station (27), Kelvin (26), Miranda proto (19), Saladin (16), Titan (9), Turret (9) y Vesta (14). Son archivos por carpeta, no cantidades de trabajos independientes ni de modelos propios confirmados.

Casa conserva nueve JPG bajo render/casa01.jpg a casa09.jpg. Los otros JPG incluyen recursos; no se tratarán automáticamente como resultados. La extensión MAX indica archivos de 3ds Max, pero todavía no prueba qué herramientas usó Alejandro ni que todos los modelos sean propios.

SUPREMACY contiene nombres relacionados con escenas/personajes klingon y terreno. No se infiere por esos nombres una vinculación oficial con una franquicia, un cliente, una fecha ni una colaboración concreta. City of Kovor.txt no se leyó en esta etapa; los documentos archivados serán fuentes, nunca instrucciones de ejecución.

## Consulta enviada

Se preguntó a Alejandro si eran proyectos personales, colaboraciones o encargos; qué hizo, herramientas, modelos de terceros y si BOTF/SUPREMACY pertenecen al mismo proyecto. Respuesta pendiente al preparar este registro. No se usa el nombre job como prueba de trabajo profesional.

## Continuidad de plantilla y CMS

Lectura de src/content.config.ts y tina/article-locales.ts: se mantienen locales ES/EN y contentBlocks compartidos. Las siguientes fichas usarán ese mismo circuito y conservarán portada, alt, epígrafe, créditos, categorías y herramientas, sin duplicar plantillas ni generar páginas aisladas. Esta lectura no comprueba apertura/guardado de Tina.

Sin cambios en artículos existentes, copias de medios, nuevos documentos MDX, controles del proyecto, navegador, capturas, commit ni publicación. La política de AGENTS.md mantiene las verificaciones técnicas para el cierre.

## Respuesta de Alejandro e incorporación posterior

Alejandro confirmó BOTF como mods colaborativos del juego Star Trek: Birth of the Federation con modders de Armada Fleet Command. Su aporte fueron las naves, usando 3ds Max, Photoshop y programas antiguos de importación todavía sin identificar. El año recordado del juego no se incorpora como dato histórico verificado ni como fecha del trabajo.

SUPREMACY es otro proyecto, iniciado por otro desarrollador para continuar la propuesta de BOTF desde cero. Alejandro adaptó a 3D un dibujo de otra persona de la comunidad y no terminó el trabajo. Se conserva la separación entre autoría del dibujo, modelado y desarrollo del proyecto. No se infieren herramientas de esta adaptación a partir de las confirmadas para BOTF.

Casa son pruebas de su vivienda para explorar muebles e iluminación. No es un encargo profesional ni acredita arquitectura/interiorismo. Herramientas, modelos y materiales pendientes de precisar.

## Entrega local de esta tanda

Tres documentos nuevos botf.mdx, supremacy.mdx y casa.mdx, cada uno bilingüe ES/EN, en la colección Tina projects y con los mismos bloques y plantilla compartida. publicationStatus draft, showInResume false, categoría 3d. Herramientas confirmadas solo en BOTF; fechas vacías y timeline por confirmar. No se crearon experiencias laborales para estos proyectos.

Ocho WebP generados desde JPG con prepare-community-3d-images.py, sin ampliar ni modificar originales: tres vistas de Vesta, dos composiciones del archivo SUPREMACY y tres renders de Casa. community-3d-media-manifest.json registra fuentes/dimensiones/tamaño y revisión visual pendiente. Selección por nombres de archivo, no inspección visual. Las imágenes de SUPREMACY son candidatas: falta confirmar correspondencia con la adaptación descrita antes de publicar o atribuir un resultado concreto.

Galerías grid con proporciones originales, alt, epígrafes, créditos y enlaces completos en pestaña nueva mediante el componente existente. Los nuevos nombres se añadieron a la lista permitida del endpoint de medios DEV; nada copiado a public. Rutas /revision/proyectos/{botf|supremacy|casa}, inglés /revision/proyectos/en/{slug}.

Scripts de imágenes y MDX ejecutados una vez cada uno, exit 0; autoría, no controles del proyecto. El script MDX usa wx y no debe repetirse sobre ediciones Tina. No se ejecutaron pruebas/build/tipos/lint/e2e, ni navegador/capturas. Apertura/guardado del editor, revisión visual, créditos y aceptación siguen pendientes. Sin commit/push/publicación.

Cursor: estos tres candidatos ya tienen borrador; no recrearlos. Próxima cola: gráfica LCAR/aphophys_fractal y web profesional, según confirmación de contexto y evitando proyectos duplicados. BOTF puede ampliarse con otras naves una vez revisada la selección inicial.
