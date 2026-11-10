import { useEffect, useRef, useState } from 'react';
import { EditorialOrderList } from './EditorialOrderList';
import { useCMS } from 'tinacms';
import { PROJECT_CATEGORIES } from '../../src/lib/categories';
import { compareProjectOrder } from '../../src/lib/project-order';
import { parseVisualOrder, replaceVisualScope, visualOrderRanks, type VisualOrderDocument } from '../../src/lib/project-visual-order';
import { DASHBOARD_QUERY, type DashboardData, type ProjectNode } from './dashboardQuery';

type Snapshot = { selection: VisualOrderDocument; projects: ProjectNode[] };

async function readSnapshot(cms: ReturnType<typeof useCMS>): Promise<Snapshot> {
  const api = cms.api.tina;
  if (!api) throw new Error('El cliente de Tina todavía no está disponible.');
  const first = await api.request<DashboardData>(DASHBOARD_QUERY, { variables: { after: null } });
  const raw = first.projectOrder._values;
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw) || !('scopes' in raw)) throw new Error('Tina no devolvió el documento de orden completo.');
  const selection = parseVisualOrder({ scopes: raw.scopes ?? [] });
  const projects = first.projectsConnection.edges.map(edge => edge.node);
  let page = first.projectsConnection;
  const seen = new Set<string>();
  while (page.pageInfo.hasNextPage) {
    const after = page.pageInfo.endCursor;
    if (!after || seen.has(after)) throw new Error('No se pudo recorrer todo el inventario.');
    seen.add(after);
    const next = await api.request<DashboardData>(DASHBOARD_QUERY, { variables: { after } });
    page = next.projectsConnection;
    projects.push(...page.edges.map(edge => edge.node));
  }
  return { selection, projects };
}

const reference = (project: ProjectNode) => `src/content/projects/${project._sys.relativePath}`;
const visible = (project: ProjectNode) => project.showInPortfolio !== false && project.publicationStatus !== 'draft';
function orderedProjects(snapshot: Snapshot, category: string) {
  return snapshot.projects.filter(project => visible(project) && (category === 'all' || project.categories?.includes(category)))
    .map(project => ({ ...project, visualOrders: visualOrderRanks(project._sys.relativePath, snapshot.selection) }))
    .sort((a, b) => compareProjectOrder(a, b, category));
}
function migrateLegacy(snapshot: Snapshot): VisualOrderDocument {
  if (snapshot.selection.scopes.length) return snapshot.selection;
  // Capture existing numeric priorities once. Categories without exceptions inherit general order.
  const categories = ['all', ...PROJECT_CATEGORIES.filter(category => snapshot.projects.some(project => project.categoryOrders?.some(item => item.category === category.value))).map(category => category.value)];
  return { scopes: categories.map(category => ({ category, projects: orderedProjects(snapshot, category).map(project => ({ project: reference(project) })) })) };
}

type NativeOrderFieldProps = {
  input: { value: unknown; onChange: (value: VisualOrderDocument['scopes']) => void; onFocus?: () => void; onBlur?: () => void };
  meta: { dirty?: boolean; error?: string; submitError?: string };
  form: { subscribe: (listener: (state: { submitting: boolean }) => void, subscription: { submitting: boolean }) => () => void };
};

const record = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);
function nativeFieldProps(value: unknown): value is NativeOrderFieldProps {
  if (!record(value) || !record(value.input) || !record(value.meta) || !record(value.form)) return false;
  return typeof value.input.onChange === 'function' && typeof value.form.subscribe === 'function'
    && (value.input.onFocus === undefined || typeof value.input.onFocus === 'function')
    && (value.input.onBlur === undefined || typeof value.input.onBlur === 'function')
    && (value.meta.dirty === undefined || typeof value.meta.dirty === 'boolean')
    && (value.meta.error === undefined || typeof value.meta.error === 'string')
    && (value.meta.submitError === undefined || typeof value.meta.submitError === 'string');
}

/** Schema-tools omits runtime form from Component props; validate the actual FieldsBuilder contract. */
export function ProjectVisualOrderField(props: unknown) {
  if (!nativeFieldProps(props)) return <p role="alert">Tina no proporcionó el formulario completo para ordenar artículos.</p>;
  return <NativeOrderField {...props} />;
}

/** Controlled native Tina field: Save, Reset and unsaved-change handling belong to Tina. */
function NativeOrderField({ input, meta, form }: NativeOrderFieldProps) {
  const cms = useCMS();
  const [snapshot, setSnapshot] = useState<Snapshot>();
  const [category, setCategory] = useState('all');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('Cargando artículos…');
  const currentSelection = useRef<VisualOrderDocument>({ scopes: [] });
  const beforeDrag = useRef<VisualOrderDocument | undefined>(undefined);

  useEffect(() => form.subscribe(state => setBusy(state.submitting), { submitting: true }), [form]);
  useEffect(() => {
    let active = true;
    readSnapshot(cms).then(value => { if (active) { setSnapshot(value); setMessage(''); } })
      .catch(error => { if (active) setMessage(error instanceof Error ? error.message : 'No se pudieron cargar los artículos.'); });
    return () => { active = false; };
  }, [cms]);

  let selection: VisualOrderDocument | undefined;
  let validationError = '';
  try { selection = parseVisualOrder({ scopes: input.value === '' ? [] : input.value ?? [] }); }
  catch (error) { validationError = error instanceof Error ? error.message : 'Orden inválido.'; }
  if (!selection) return <p role="alert">{validationError}</p>;
  currentSelection.current = selection;
  const projects = snapshot ? orderedProjects({ ...snapshot, selection }, category) : [];
  const currentOrder = projects.map(reference);

  const changeOrder = (next: string[]) => {
    if (!snapshot || busy || JSON.stringify(next) === JSON.stringify(currentOrder)) return;
    const base = migrateLegacy({ ...snapshot, selection: currentSelection.current });
    const updated = replaceVisualScope(base, category, next, currentOrder);
    currentSelection.current = updated;
    input.onChange(updated.scopes);
  };
  return <section className="al3-admin-visual-order al3-admin-native-order" aria-busy={busy || !snapshot}
    onFocus={() => input.onFocus?.()} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) input.onBlur?.(); }}>
    <h2>Artículos, en orden</h2>
    <p>Arrastrá para ordenar, usá las flechas o elegí una posición. Confirmá con Save o descartá con Reset.</p>
    <label className="al3-admin-order-scope">Ordenar en<select className="al3-admin-control" value={category} disabled={busy || !snapshot}
      onChange={event => { setCategory(event.target.value); setMessage(''); }}>
      <option value="all">Portfolio completo</option>{PROJECT_CATEGORIES.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
    </select></label>
    <p>Podés ordenar varias categorías antes de guardar. Guardar en main puede publicar los cambios.</p>
    <EditorialOrderList key={category} label="Artículos" disabled={busy || !snapshot} dirty={meta.dirty}
      items={projects.map(project => ({ id: reference(project), title: project.title, image: project.image }))} onChange={changeOrder}
      onDragStart={() => { beforeDrag.current = currentSelection.current; }}
      onDragCancel={() => { if (beforeDrag.current) { currentSelection.current = beforeDrag.current; input.onChange(beforeDrag.current.scopes); } }} />
    {snapshot && !projects.length && <p>No hay artículos publicados y visibles en este ámbito.</p>}
    <p role="status" aria-live="polite">{!snapshot ? message : busy ? 'Guardando…' : meta.dirty ? message || 'Hay movimientos pendientes de guardar.' : 'Sin cambios pendientes.'}</p>
    {(meta.error || meta.submitError) && <p role="alert">{meta.error || meta.submitError}</p>}
  </section>;
}
