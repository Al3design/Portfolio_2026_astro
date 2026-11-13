# R8 — Control acotado preparado, no ejecutado

Continuación pedida por Alejandro después de R7. No se inició servidor ni navegador: no había listeners en 4002/9001/4322 al consultar procesos. Rama main conservada; .codegraph existe.

La política vigente de AGENTS.md exige comando de control expreso fuera del cierre completo. El pedido «dale, seguí» permite continuar la preparación, pero no nombra ese comando. Se prepara un control concreto antes de solicitar su autorización; no se ejecuta la suite completa ni se repite build.

## Comando propuesto

Con un único servidor habitual `npm run dev` listo:

```powershell
npx.cmd e2e run tests/e2e/shop-review.e2e.ts --reporter list,markdown --max-failures 1
```

Usa e2e.config.ts existente: un worker, cero reintentos, sin modelo ni API key, sin MCP global. Dos escenarios ES/EN: cuatro fichas, quince fotos por idioma, campos físicos, idiomas, regreso al ancla, geometría 320/1440, medios válidos, rechazo de medios no asociados y separación de enlaces/medios frente al catálogo conceptual. Lectura del archivo preparada; no equivale a colección, ejecución ni aprobación del control.

## Tina: comprobación interactiva posterior

El test preparado no afirma verificar persistencia del editor. Ese recorrido requiere observar el formulario generado, elegir el documento real y comprobar sus controles antes de automatizarlos. No se inventan selectores de una interfaz todavía no observada.

Recorrido previsto: abrir editor desde la revisión, elegir colección y documento, conservar una copia del JSON inicial fuera de la colección, editar un texto confirmado, guardar por el formulario, reabrir y comprobar JSON y revisión recargada. Restaurar el texto original usando el editor y comprobar el resultado. Si aparece conflicto con edición ajena, detener la escritura; no sobrescribir el documento por filesystem para fingir éxito del editor. Guardar evidencia del cambio y de su restitución. La restauración debe ser del campo cambiado, preservando otros cambios del documento.

Pendientes: autorización del comando, servidor/generación Tina, ejecución y lectura del resultado, comprobación real de persistencia, capturas del orquestador cuando aporten evidencia, y exclusión en artefacto al cierre. No se afirma prueba pasada, editor operativo ni producción validada. Sin build, publicación, staging, commits ni cambios ajenos.

## Intento autorizado posterior — servidor bloqueado

Alejandro autorizó iniciar npm run dev y ejecutar una vez el control propuesto. Los puertos 4002/9001/4322 no tenían listeners antes del inicio. Se ejecutó npm run dev una sola vez; el proceso terminó con código 1 durante la indexación inicial de Tina:

```text
Unable to seed src/editorial/shop-products/arbol-decorativo.json
Unable to start dev server, please fix your Tina config / resolve any errors above and try again
```

No se ejecutó el comando e2e: el servidor requerido no quedó disponible. No hubo reinicio, sustitución del control, build ni publicación. El error observado no identifica por sí solo el campo o causa del fallo; no se declara incompatibilidad de null confirmada ni una reparación realizada. Corresponde diagnosticar el documento/esquema antes de un nuevo intento expresamente autorizado. La persistencia Tina y las fichas permanecen sin validar.

El arranque dejó tina/tina-lock.json modificado según git status. No se editó manualmente ni se revirtió: revisar ese cambio generado junto con el esquema antes de cualquier staging. Los cambios previos de tina/config.ts y los borradores se conservaron.
