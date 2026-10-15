# Design

## Context

Auditoria 2026-10-15: no se encontro `invert()` en los estilos. `.light` sobrescribe `--clr-brand-*`, pero `$color-text-default`/`$color-background-default` dependen de `--neutral-*` emitidos desde `$dark`. La grilla usa multiply en claro con la intensidad del oscuro, glass incluye capas de color 0.30/0.14/0.16, grano 0.17 y sombras negras 0.5. El H1 ya fue corregido antes de este cambio para usar on-surface.

## Goals / Non-Goals

Comodidad visual sin reducir legibilidad: bajar saturacion, contraste decorativo y sombra; mantener contraste suficiente en informacion y acciones. No intentar cumplir AA aclarando todo el texto ni prometer que un ratio garantiza comodidad a todas las personas.

## Decisions

1. Paleta candidata clara, sujeta a verificacion en navegador: superficie `#E7E5DF`, container-low `#DEDCD5`, container-high `#D4D2CB`, texto `#454B47`, secundario `#535A54`, verde `#435E40`, naranja `#735136`, cyan `#375B60`, error `#913F3F`. El verde sigue identificando acciones, naranja claves y cyan iconos. Texto sobre boton primario usa un blanco roto.
2. Los aliases body/texto/interaccion apuntan a los tokens brand semanticos. Los RGB siguen siendo la unica fuente para variantes transparentes. No renombrar la API de colores existente.
3. Tokens independientes para opacidades glass, grano, grilla y sombra. Valores oscuros permanecen identicos; claro reduce efectos decorativos. Conservar mascaras fijas y animaciones transform para no introducir costo de pintura por frame.
4. No tocar fotografias ni renders mediante filtros de color. No introducir lineas de seccion. Ghost-border decorativo no tiene que alcanzar 3:1 si no es la unica forma de identificar un control; foco e iconos funcionales si lo requieren.
5. Matriz AA: texto normal >=4.5:1; texto grande >=3:1 (18pt regular o 14pt negrita); iconos/indicadores funcionales y foco >=3:1 con su entorno. Medir sin redondear para decidir aprobado. Matriz de tokens opacos es solo primer control; verificar tambien transparencias, hover y fondos renderizados.

## Risks / Trade-offs

Menos efecto decorativo puede restar protagonismo al fondo; es intencional en claro. Cambiar aliases compartidos puede revelar estilos heredados. Los controles de terceros de Tina no pertenecen al tema publico: verificar que el sitio embebido en /admin sigue funcionando, sin recolorear el panel de Tina.

## Validation

Comparar home, about, resume, archive y un proyecto en claro/oscuro, desktop/mobile; cards/list, filtros, menu, hover y teclado; confirmar persistencia al recargar y reduced-motion. Guardar evidencia de contraste y capturas. Compilar Sass y ejecutar build apropiado; si una comprobacion no termina o falla, documentar la limitacion sin marcarla aprobada.

## Rollout

Aplicar localmente sobre la rama activa (AGENTS.md prevalece sobre el flujo generico de ramas). Revisar con Alejandro, publicar solo con autorizacion. Archivar cuando implementacion y validaciones esten completas.

## Sources

- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
