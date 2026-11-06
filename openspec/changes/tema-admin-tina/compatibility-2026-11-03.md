# Revisión de compatibilidad e integración — 03/11/2026

## Alcance y método

Lectura de manifests instalados, enlaces activos, lock, logs de build existentes y diffs Git. No se ejecutaron instalaciones, scripts de comprobación, tipos, lint, pruebas, navegador o builds en esta tanda. No se extrapola una declaración de peer a una prueba de ejecución.

| Componente instalado | Contrato declarado | Lectura |
| --- | --- | --- |
| tinacms 3.15.1 | React/React DOM >=16.14.0 | Admite 19.2.6 según su manifest. |
| @tinacms/cli 4.0.4 | React/React DOM >=18.3.1 <20; Node 22.x o 24.x | React 19.2.6 y entorno Node 24 revisado están en rango. |
| @astrojs/react 5.0.5 | React 17/18/19 y tipos correspondientes; Node >=22.12 | Versiones instaladas dentro del rango. |
| Astro 6.3.5 | Node >=22.12 | Entorno Node 24 usado en evidencia previa dentro del rango. |
| React DOM 19.2.6 | React ^19.2.6 | Coincide con React instalado. |
| slate-react 0.124.2 | React/DOM >=18.2; slate >=0.121; slate-dom >=0.119.1 | Instalados React/DOM 19.2.6, slate/slate-dom 0.124.1 dentro del rango. |
| react-use 17.6.1, transitivo de Tina | React/DOM * | Sin restricción declarada incompatible con 19. |
| react-dropzone 14.2.3, transitivo de Tina | React >=16.8 o 18.0.0 | Rango admite 19; no demuestra selector automatizado. La carga manual local sí fue observada. |
| react-final-form 6.5.9, transitivo de Tina | React ^16.8 o ^17 o ^18; final-form ^4.20.4 | **React 19 queda fuera del peer declarado.** final-form 4.20.10 está en rango. Los formularios observados funcionaron, pero no acredita todo el editor rico/diálogos. |

Fuentes: `package.json`, `pnpm-lock.yaml`, manifests bajo `node_modules/tinacms`, `@tinacms/cli`, `@astrojs/react`, `astro`, `react`, `react-dom`, `slate-react`; transitivas leídas desde el node_modules vecino del enlace **activo** de Tina. El override `tinacms: 3.15.1` y lock resuelven esa versión. Hay directorios antiguos 3.15.0 en el almacén local de pnpm; su mera presencia no acredita que estén activos. No se borraron cachés o enlaces.

## Riesgos y decisión acotada

No se modificó react-final-form ni se forzó una versión mayor con override: hacerlo cambia un contrato transitivo de Tina y requeriría un cambio y comprobación propios. Tampoco se rebajó React, se silenciaron peers o se relajaron cloud checks/lint. La revisión identifica un desajuste real, no una avería observada. La compatibilidad global no se marca aprobada mientras falte decidir/tratar ese riesgo y revisar las superficies pendientes.

`pnpm-workspace.yaml` conserva los placeholders preexistentes de allowBuilds y strictDepBuilds=false; no se presentan como configuración nueva ni se corrigen para ocultar avisos. `package.json` aún declara Node >=22 aunque AGENTS exige >=24 y CLI limita a 22.x/24.x: el entorno probado de esta entrega es Node 24, no cualquier versión futura admitida por el rango raíz. Alinear el rango y la política de instalación requiere un cambio separado, sin instalaciones oportunistas.

Log Cloud existente: build Ready, advertencia de import X sin usar en ClientResume y deprecación del instalador better-sqlite3. No se eliminó código ajeno para silenciarlas. Las evidencias de tipos/build/CRUD se mantienen con su alcance original.

## Integración de los guardados Cloud

Antes: HEAD df001b1, índice vacío; remoto conocido fb5b4a9. Diffs de c0d8fec/fb5b4a9 revisados: nota temporal/restauración, resultado final únicamente newline final retirado de arbol-decorativo.json. Ese archivo no tenía cambios locales.

Se ejecutó `git merge --ff-only origin/codex/tienda-catalogo-real`: fast-forward a **fb5b4a9** sin conflictos, sin cambio de rama, stash, reset, nuevo commit o push. Las modificaciones locales anteriores de skills, AGENTS, CLAUDE, guías y otros OpenSpec permanecieron. No se contactó Cloud, no publicación ni build. El remoto usado fue la referencia ya obtenida; no se afirma una lectura de cambios remotos posteriores al último fetch.

## Estado para continuar

- Tipos, contratos, build/artefacto Preview, nota Cloud y recorrido local asistido de foto/selección ya tienen evidencia; no repetirlos por esta revisión.
- Documentación nueva/modificada sigue local; no está incorporada en un commit o Preview nuevo. Para integrar usar una lista explícita y revisar hunks de archivos compartidos; excluir skills, daemon.pid, CLAUDE, prompt Sass, TESTING_MCP y el cambio histórico contenido-real-y-tienda-3d salvo autorización específica de su alcance.
- Antes de archivar/publicar: resolver o acordar tratamiento del peer react-final-form/React19 y límites de editor rico/diálogos. Live Preview Shop Cloud, filechooser automatizado y comercio siguen fuera de lo acreditado.
