export type CategoryOrder = { category: string; order: number };
export type OrderedProject = { order?: number | null; categoryOrders?: CategoryOrder[] | null };

export function projectOrder(project: OrderedProject, category = 'all'): number {
  const rank = category === 'all'
    ? project.order
    : project.categoryOrders?.find(item => item.category === category)?.order ?? project.order;
  return typeof rank === 'number' && Number.isFinite(rank) ? rank : 0;
}

export function compareProjectOrder(a: OrderedProject, b: OrderedProject, category = 'all'): number {
  return projectOrder(a, category) - projectOrder(b, category);
}
