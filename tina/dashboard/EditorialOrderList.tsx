import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Reorder, useDragControls, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, FileText, GripVertical } from 'lucide-react';
import { EDITORIAL_PAGE_SIZE, moveToPosition, reorderPage } from '../../src/lib/editorial-list';

export type EditorialRow = { id: string; title: string; image?: string };
type Props = {
  label: string; items: EditorialRow[]; disabled?: boolean;
  dirty?: boolean;
  onChange: (ids: string[]) => void;
  onDragStart?: () => void;
  onDragCancel?: () => void;
  actions?: (item: EditorialRow, disabled: boolean) => ReactNode;
};

function Position({ position, total, title, disabled, onMove }: {
  position: number; total: number; title: string; disabled: boolean; onMove: (position: number) => void;
}) {
  const [value, setValue] = useState(String(position));
  useEffect(() => setValue(String(position)), [position]);
  const commit = () => {
    const number = Number(value);
    if (Number.isInteger(number) && number >= 1 && number <= total && number !== position) onMove(number);
    else setValue(String(position));
  };
  return <label className="al3-admin-row-position">Pos.
    <input type="number" min={1} max={total} step={1} value={value} disabled={disabled}
      aria-label={`Posición de ${title} en la lista completa`}
      onChange={event => setValue(event.target.value)} onBlur={commit}
      onKeyDown={event => {
        if (event.key === 'Enter') { event.preventDefault(); commit(); }
        if (event.key === 'Escape') { event.preventDefault(); setValue(String(position)); }
      }} />
  </label>;
}

function Row({ item, position, total, disabled, dragging, move, register, start, drag, end, cancel, actions }: {
  item: EditorialRow; position: number; total: number; disabled: boolean; dragging: boolean;
  move: (position: number) => void; register: (node: HTMLButtonElement | null) => void;
  start: (y: number) => void; drag: (y: number) => void; end: () => void; cancel: () => void; actions?: ReactNode;
}) {
  const controls = useDragControls();
  const reduced = useReducedMotion();
  return <Reorder.Item value={item.id} dragListener={false} dragControls={controls} layout="position"
    transition={{ layout: { duration: reduced ? 0 : 0.2 } }} className="al3-admin-sort-row" style={{ position: 'relative' }}
    onDragStart={(_, info) => start(info.point.y - window.scrollY)} onDrag={(_, info) => drag(info.point.y - window.scrollY)} onDragEnd={end}>
    <button ref={register} type="button" className="al3-admin-sort-handle" disabled={disabled}
      aria-label={`Arrastrar ${item.title}. También podés usar las flechas o Posición.`}
      onKeyDown={event => { if (event.key === 'Escape') { controls.cancel(); cancel(); } }}
      onPointerCancel={() => { controls.cancel(); cancel(); }}
      onPointerDown={event => { if (!disabled && !dragging && event.isPrimary && event.button === 0) controls.start(event); }}>
      <GripVertical size={18} aria-hidden="true" />
    </button>
    <span className="al3-admin-sort-thumb" aria-hidden="true">{item.image?.startsWith('/assets/')
      ? <img src={item.image} alt="" width={40} height={30} loading="lazy" /> : <FileText size={18} />}</span>
    <span className="al3-admin-sort-title">{item.title}</span>
    <div className="al3-admin-sort-actions">
      <Position position={position} total={total} title={item.title} disabled={disabled || dragging} onMove={move} />
      <button type="button" disabled={disabled || dragging || position === 1} title="Subir" aria-label={`Subir ${item.title}`} onClick={() => move(position - 1)}><ArrowUp size={18} aria-hidden="true" /></button>
      <button type="button" disabled={disabled || dragging || position === total} title="Bajar" aria-label={`Bajar ${item.title}`} onClick={() => move(position + 1)}><ArrowDown size={18} aria-hidden="true" /></button>
      {actions}
    </div>
  </Reorder.Item>;
}

/** Same row/pager for Portfolio and Shop. The parent owns all data and native Save/Reset. */
export function EditorialOrderList({ label, items, onChange, onDragStart, onDragCancel, dirty, disabled = false, actions }: Props) {
  const id = useId();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(EDITORIAL_PAGE_SIZE);
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => { if (dirty === false) setMessage(''); }, [dirty]);
  const handles = useRef(new Map<string, HTMLButtonElement>());
  const list = useRef<HTMLOListElement>(null);
  const dragY = useRef(0);
  const beforeDrag = useRef<string[]>([]);
  const cancelled = useRef(false);
  const order = items.map(item => item.id);
  const count = Math.max(1, Math.ceil(items.length / size));
  const currentPage = Math.min(page, count - 1);
  const start = currentPage * size;
  const visible = items.slice(start, start + size);
  useEffect(() => { if (page !== currentPage) setPage(currentPage); }, [page, currentPage]);
  useEffect(() => {
    if (!dragging) return;
    let frame = 0, previous = performance.now();
    const scroll = (now: number) => {
      const target = list.current?.closest<HTMLElement>('[data-test^="form:"]');
      const elapsed = Math.min(now - previous, 40); previous = now;
      if (target) {
        const rect = target.getBoundingClientRect(), edge = Math.min(64, rect.height / 3);
        const speed = dragY.current < rect.top + edge ? -Math.min(1, (rect.top + edge - dragY.current) / edge)
          : dragY.current > rect.bottom - edge ? Math.min(1, (dragY.current - rect.bottom + edge) / edge) : 0;
        if (speed) target.scrollTop += speed * elapsed * 0.5;
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [dragging]);
  const focus = (path: string) => requestAnimationFrame(() => {
    const handle = handles.current.get(path);
    handle?.closest('li')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    handle?.focus({ preventScroll: true });
  });
  const move = (item: EditorialRow, position: number) => {
    if (disabled || dragging) return;
    onChange(moveToPosition(order, item.id, position));
    setPage(Math.floor((position - 1) / size));
    setMessage(`${item.title}: posición ${position} de ${items.length}. Pendiente de guardar.`);
    focus(item.id);
  };
  return <div className="al3-admin-editorial-list" aria-label={label}>
    <Reorder.Group ref={list} id={id} aria-label={label} as="ol" axis="y" values={visible.map(item => item.id)}
      onReorder={next => { if (!disabled && !cancelled.current) onChange(reorderPage(order, start, next)); }} className="al3-admin-sort-list">
      {visible.map((item, index) => <Row key={item.id} item={item} position={start + index + 1} total={items.length} disabled={disabled} dragging={dragging}
        register={node => { if (node) handles.current.set(item.id, node); else handles.current.delete(item.id); }} move={position => move(item, position)}
        start={y => { beforeDrag.current = order; onDragStart?.(); cancelled.current = false; dragY.current = y; setDragging(true); }} drag={y => { dragY.current = y; }}
        cancel={() => { if (!dragging) return; cancelled.current = true; if (onDragCancel) onDragCancel(); else onChange(beforeDrag.current); setDragging(false); setMessage('Movimiento cancelado.'); focus(item.id); }}
        end={() => { setDragging(false); if (!cancelled.current) { setMessage('Orden actualizado. Confirmá con Save.'); focus(item.id); } }}
        actions={actions?.(item, disabled || dragging)} />)}
    </Reorder.Group>
    {!items.length && <p>La lista está vacía.</p>}
    {items.length > EDITORIAL_PAGE_SIZE && <nav className="al3-admin-list-pager" aria-label={`Páginas de ${label}`}>
      <label>Filas<select value={size} disabled={disabled || dragging} onChange={event => { setSize(Number(event.target.value)); setPage(0); }}>
        {[10, 20, 50].map(value => <option key={value} value={value}>{value}</option>)}
      </select></label>
      <span>{start + 1}–{Math.min(start + size, items.length)} de {items.length} · Página {currentPage + 1} de {count}</span>
      <button type="button" aria-controls={id} aria-label={`Página anterior de ${label}`} disabled={disabled || dragging || currentPage === 0} onClick={() => setPage(currentPage - 1)}><ChevronLeft size={18} aria-hidden="true" /></button>
      <button type="button" aria-controls={id} aria-label={`Página siguiente de ${label}`} disabled={disabled || dragging || currentPage === count - 1} onClick={() => setPage(currentPage + 1)}><ChevronRight size={18} aria-hidden="true" /></button>
    </nav>}
    {items.length > EDITORIAL_PAGE_SIZE && <p>Arrastrá dentro de esta página o usá Pos. para mover a cualquier lugar de la lista.</p>}
    <p role="status" aria-live="polite" className="al3-admin-order-notice">{message}</p>
  </div>;
}
