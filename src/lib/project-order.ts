export type CategoryOrder = { category: string; order: number };
export type OrderedProject = { order?: number | null; categoryOrders?: CategoryOrder[] | null; visualOrders?: Record<string, number> };

export function projectOrder(project: OrderedProject, category = 'all'): number {
  const visual = project.visualOrders?.[category] ?? project.visualOrders?.all;
  if (visual !== undefined) return visual;
  const rank = category === 'all'
    ? project.order
    : project.categoryOrders?.find(item => item.category === category)?.order ?? project.order;
  return typeof rank === 'number' && Number.isFinite(rank) ? rank : 0;
}

export function compareProjectOrder(a: OrderedProject, b: OrderedProject, category = 'all'): number {
  return projectOrder(a, category) - projectOrder(b, category);
}
