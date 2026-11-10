/** Pagination is a view over the complete order, never a persistence boundary. */
export const EDITORIAL_PAGE_SIZE = 10;

export function reorderPage(order: string[], start: number, pageOrder: string[]): string[] {
  const original = order.slice(start, start + pageOrder.length);
  if (!Number.isInteger(start) || start < 0 || original.length !== pageOrder.length
    || new Set(pageOrder).size !== pageOrder.length || original.some(id => !pageOrder.includes(id))) {
    throw new Error('La página cambió. Volvé a cargar la lista antes de ordenar.');
  }
  return [...order.slice(0, start), ...pageOrder, ...order.slice(start + pageOrder.length)];
}

export function moveToPosition(order: string[], id: string, position: number): string[] {
  const from = order.indexOf(id);
  if (from < 0 || !Number.isInteger(position) || position < 1 || position > order.length) {
    throw new Error('Elegí una posición válida dentro de la lista completa.');
  }
  const next = [...order];
  next.splice(position - 1, 0, next.splice(from, 1)[0]);
  return next;
}
