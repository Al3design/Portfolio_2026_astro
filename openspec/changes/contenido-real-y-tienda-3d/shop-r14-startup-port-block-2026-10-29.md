# R14 — Intento autorizado bloqueado por puerto 9001

Alejandro autorizó expresamente ejecutar una vez el control actualizado de shop-review.e2e.ts y reutilizar el servidor, o iniciar un único npm run dev si no estaba activo.

La consulta previa de listeners 4002/9001/4322 no devolvió resultados. Se inició npm run dev una vez. El proceso terminó con código 1 antes de dejar Astro listo:

```text
Error: Tina Dev server is already in use. Datalayer server is busy on port 9001
```

El resultado indica ocupación de 9001 al intentar vincularlo, pese a que la consulta previa no la mostraba. No se identifica propietario ni se supone que sea un proceso de esta tarea. No se detuvieron procesos, no se cambió puerto/configuración y no hubo nuevo arranque ni control alternativo.

El comando e2e autorizado no llegó a ejecutarse. El resultado R10 sigue limitado al estado anterior; no acredita R11–R13, reparación de fotos ni layout/tema compartido.

Siguiente paso: identificar por lectura el propietario/estado de 9001 y si existe un servidor Astro utilizable. Resolver coordinación de procesos antes de autorizar otro intento. No matar servicios ajenos ni iniciar instancias adicionales. Sin build, publicación, staging ni commits.

Actualización R15: se identificó la cadena del servidor original iniciado por esta tarea y Astro escuchando en ::1:4322. Se reutilizó sin iniciar ni detener procesos y se ejecutó una vez el e2e autorizado, antes pendiente: 2/2 escenarios aprobados. Ver shop-r15-existing-server-e2e-2026-10-29.md. R14 conserva el resultado del intento fallido de arranque, no describe un bloqueo actual.
