import { useState, type FormEvent, type RefObject } from 'react';
import { TinaAdminApi, useCMS } from 'tinacms';
import type { ProjectNode } from './dashboardQuery';
import { projectOrderValues } from './projectOrderValues';

const READ_ORDER = `query ProjectOrder($path: String!) {
  projects(relativePath: $path) { title order categories categoryOrders { category order } _values }
}`;

function explicitOrder(project: Pick<ProjectNode, 'order' | 'categoryOrders'>, category: string) {
  return category === 'all' ? project.order : project.categoryOrders?.find(item => item.category === category)?.order;
}

export function ProjectOrderEditor({ project, category, onSaved, disabled, saveLock, onBusy }: {
  project: ProjectNode;
  category: string;
  onSaved: (project: ProjectNode) => void;
  disabled: boolean;
  saveLock: RefObject<boolean>;
  onBusy: (busy: boolean) => void;
}) {
  const cms = useCMS();
  const original = explicitOrder(project, category);
  const [value, setValue] = useState(original == null ? '' : String(original));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const id = `order-${project._sys.filename}-${category}`;

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saveLock.current) return;
    const rank = value.trim() === '' ? null : Number(value);
    if (rank !== null && !Number.isSafeInteger(rank)) {
      setMessage('Ingresá un número entero.');
      return;
    }
    if (cms.forms.all().some(form => form.dirty)) {
      setMessage('Hay una ficha con cambios pendientes. Guardala o descartá esos cambios antes de ordenar.');
      return;
    }
    saveLock.current = true;
    onBusy(true);
    setSaving(true);
    setMessage('Guardando…');
    try {
      const api = cms.api.tina;
      if (!api) throw new Error('El cliente de Tina todavía no está disponible.');
      const fresh = await api.request<{ projects: ProjectNode & { _values: unknown } }>(READ_ORDER, { variables: { path: project._sys.relativePath } });
      if ((explicitOrder(fresh.projects, category) ?? null) !== (original ?? null)) {
        throw new Error('El orden cambió desde que abriste el dashboard. Refrescá antes de guardar.');
      }
      const values = projectOrderValues(fresh.projects._values, category, rank);
      const admin = new TinaAdminApi(cms);
      const collection = admin.schema.getCollection('projects');
      const params = admin.schema.transformPayload(collection.name, values);
      if (!await admin.isAuthenticated()) throw new Error('La sesión de Tina venció. Volvé a iniciar sesión.');
      await admin.updateDocument(collection, project._sys.relativePath, params);
      const saved = await api.request<{ projects: ProjectNode }>(READ_ORDER, { variables: { path: project._sys.relativePath } });
      const expected = category === 'all' ? rank ?? 0 : rank;
      if (saved.projects.title !== fresh.projects.title || (explicitOrder(saved.projects, category) ?? null) !== expected) {
        throw new Error('No se pudo confirmar la ficha guardada. Revisala antes de volver a guardar.');
      }
      onSaved({ ...project, order: saved.projects.order, categoryOrders: saved.projects.categoryOrders });
      setMessage('Orden guardado.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'No se pudo confirmar el guardado. Refrescá antes de reintentar.');
    } finally {
      saveLock.current = false;
      onBusy(false);
      setSaving(false);
    }
  }

  return <form onSubmit={save} aria-label={`Orden de ${project.title}`} aria-busy={saving} className="al3-admin-order-form">
    <label htmlFor={id}>Orden</label>
    <div className="al3-admin-order-actions">
      <input id={id} name="order" type="number" step="1" value={value} disabled={saving || disabled}
        aria-describedby={`${id}-help ${id}-status`} className="al3-admin-control al3-admin-order-input"
        onChange={event => { setValue(event.target.value); setMessage(''); }} />
      <button type="submit" disabled={saving || disabled} className="al3-admin-order-save">Guardar orden</button>
    </div>
    <small id={`${id}-help`}>Vacío {category === 'all' ? '= 0' : '= orden general'}.</small>
    <div id={`${id}-status`} role="status">{message}</div>
  </form>;
}
