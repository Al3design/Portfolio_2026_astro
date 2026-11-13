import { useEffect, useRef, useState } from 'react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useCMS } from 'tinacms';
import { EditorialOrderList } from './EditorialOrderList';
import { prependNewShopReferences } from '../../src/lib/shop-selection-order';

type Selection = { product: string }[];
type Values = { products?: Selection; latest?: Selection; hero?: string };
type Props = {
  input: { value: unknown; onChange: (value: Selection) => void; onFocus?: () => void; onBlur?: () => void };
  field: { name: string; label?: string; description?: string };
  meta: { dirty?: boolean; error?: string; submitError?: string };
  form: { subscribe: (listener: (state: { submitting: boolean; values: Values }) => void, subscription: { submitting: boolean; values: boolean }) => () => void };
};
type Product = { title: string; photos?: ({ image?: string | null } | null)[] | null; _sys: { relativePath: string } };
type Response = { shopProductConnection: { edges: { node: Product }[]; pageInfo: { hasNextPage: boolean; endCursor?: string | null } } };
const QUERY = `query SelectionProducts($after: String) {
  shopProductConnection(first: 100, after: $after) {
    pageInfo { hasNextPage endCursor }
    edges { node { title photos { image } _sys { relativePath } } }
  }
}`;
const path = (product: Product) => `src/editorial/shop-products/${product._sys.relativePath}`;
const record = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);
function propsValid(value: unknown): value is Props {
  return record(value) && record(value.input) && typeof value.input.onChange === 'function'
    && record(value.field) && typeof value.field.name === 'string' && record(value.meta)
    && record(value.form) && typeof value.form.subscribe === 'function';
}
function selectionValid(value: unknown): value is Selection {
  return Array.isArray(value) && value.every(item => record(item) && typeof item.product === 'string' && item.product.length > 0)
    && new Set(value.map(item => item.product)).size === value.length;
}

export function ShopSelectionField(props: unknown) {
  if (!propsValid(props)) return <p role="alert">Tina no proporcionó el formulario completo de selección.</p>;
  return <SelectionField {...props} />;
}

function SelectionField({ input, field, meta, form }: Props) {
  const cms = useCMS();
  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const [state, setState] = useState<{ submitting: boolean; values: Values }>({ submitting: false, values: {} });
  const [choice, setChoice] = useState('');
  const [editing, setEditing] = useState('');
  const [notice, setNotice] = useState('');
  useEffect(() => { if (meta.dirty === false) setNotice(''); }, [meta.dirty]);
  const picker = useRef<HTMLSelectElement>(null);
  const focusPicker = () => requestAnimationFrame(() => {
    picker.current?.scrollIntoView({ block: 'nearest' }); picker.current?.focus({ preventScroll: true });
  });
  useEffect(() => form.subscribe(setState, { submitting: true, values: true }), [form]);
  useEffect(() => {
    let active = true;
    async function load() {
      if (!cms.api.tina) throw new Error('El cliente de Tina todavía no está disponible.');
      const result: Product[] = [], seen = new Set<string>();
      let after: string | null = null;
      do {
        const response: Response = await cms.api.tina.request<Response>(QUERY, { variables: { after } });
        const connection = response.shopProductConnection;
        result.push(...connection.edges.map(edge => edge.node));
        if (!connection.pageInfo.hasNextPage) break;
        after = connection.pageInfo.endCursor ?? null;
        if (!after || seen.has(after)) throw new Error('No se pudo leer todo el inventario de piezas.');
        seen.add(after);
      } while (after);
      if (active) { setProducts(result); setLoaded(true); }
    }
    load().catch(cause => { if (active) setError(cause instanceof Error ? cause.message : 'No se pudieron cargar las piezas.'); });
    return () => { active = false; };
  }, [cms]);
  const value = input.value == null || input.value === '' ? [] : input.value;
  if (!selectionValid(value)) return <p role="alert">La selección contiene referencias vacías o duplicadas. Revisá el documento antes de cambiarlo.</p>;
  const latest = field.name === 'latest';
  const disabled = state.submitting || !loaded;
  const ids = value.map(item => item.product);
  const byId = new Map(products.map(product => [path(product), product]));
  const available = products.filter(product => (!latest || state.values.products?.some(item => item.product === path(product)))
    && (!ids.includes(path(product)) || editing === path(product)));
  const commit = (next: string[]) => { input.onChange(next.map(product => ({ product }))); setNotice('Selección modificada. Confirmá con Save.'); };
  const remove = (id: string) => {
    if (!latest && (state.values.hero === id || state.values.latest?.some(item => item.product === id))) {
      setNotice('Antes de quitar esta pieza, cambiala en la imagen principal y en novedades.'); return;
    }
    commit(ids.filter(item => item !== id)); setEditing(''); setChoice(''); focusPicker();
  };
  return <section className="al3-admin-visual-order al3-admin-native-order" aria-busy={disabled}
    onFocus={() => input.onFocus?.()} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) input.onBlur?.(); }}>
    <h2>{field.label}</h2><p>{field.description}</p>
    <p>Arrastrá para ordenar, usá las flechas o elegí una posición. Confirmá con Save o descartá con Reset.</p>
    {!latest && <p>Las piezas que agregás entran al principio. Después podés elegir su posición; editar su ficha o sus fotos no cambia el orden.</p>}
    {latest && <p>Sin novedades elegidas, la portada muestra las tres primeras piezas del catálogo. Agregá piezas aquí solo para priorizarlas manualmente; quitá todas para volver al orden automático.</p>}
    <EditorialOrderList label={field.label || 'Piezas'} disabled={disabled} dirty={meta.dirty}
      items={ids.map(id => ({ id, title: byId.get(id)?.title || id.split('/').pop() || id, image: byId.get(id)?.photos?.[0]?.image ?? undefined }))}
      onChange={commit} actions={(item, locked) => <>
        <button type="button" disabled={locked} title="Cambiar pieza seleccionada" aria-label={`Cambiar ${item.title} en la selección`} onClick={() => { setEditing(item.id); setChoice(item.id); focusPicker(); }}><Pencil size={18} aria-hidden="true" /></button>
        <button type="button" disabled={locked} title="Quitar de la selección" aria-label={`Quitar ${item.title} de la selección`} onClick={() => remove(item.id)}><Trash2 size={18} aria-hidden="true" /></button>
      </>} />
    <div className="al3-admin-list-picker">
      <label>{editing ? 'Reemplazar la pieza seleccionada' : 'Agregar una pieza'}
        <select ref={picker} className="al3-admin-control" value={choice} disabled={disabled || (!editing && latest && ids.length >= 3)} onChange={event => setChoice(event.target.value)}>
          <option value="">Elegí una pieza…</option>{available.map(product => <option key={path(product)} value={path(product)}>{product.title}</option>)}
        </select>
      </label>
      <button type="button" disabled={disabled || !available.some(product => path(product) === choice) || (!editing && latest && ids.length >= 3)} onClick={() => {
        if (editing && editing !== choice && !latest && (state.values.hero === editing || state.values.latest?.some(item => item.product === editing))) {
          setNotice('Antes de reemplazar esta pieza, cambiala en la imagen principal y en novedades.'); return;
        }
        commit(editing ? ids.map(id => id === editing ? choice : id) : latest ? [...ids, choice] : prependNewShopReferences(ids, [choice])); setChoice(''); setEditing('');
      }}>{editing ? <Pencil size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}{editing ? 'Cambiar' : 'Agregar'}</button>
      {editing && <button type="button" disabled={disabled} onClick={() => { setEditing(''); setChoice(''); }}>Cancelar</button>}
    </div>
    {latest && ids.length >= 3 && <p>La portada admite hasta tres novedades.</p>}
    <p role="status" aria-live="polite">{notice}</p>
    {(error || meta.error || meta.submitError) && <p role="alert">{error || meta.error || meta.submitError}</p>}
  </section>;
}
