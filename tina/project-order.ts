import type { Collection } from 'tinacms';
import { PROJECT_CATEGORIES } from '../src/lib/categories';
import { parseVisualOrder } from '../src/lib/project-visual-order';
import { ProjectVisualOrderField } from './dashboard/ProjectVisualOrderEditor';

export const projectOrderCollection: Collection = {
  name: 'projectOrder', label: 'Portfolio · orden visual',
  path: 'src/editorial/project-order', format: 'json', match: { include: 'order' },
  ui: { allowedActions: { create: false, delete: false } },
  fields: [{
    type: 'object', name: 'scopes', label: 'Ámbitos de orden', list: true,
    description: 'Ordená los artículos del portfolio completo o de una categoría. Los movimientos quedan pendientes hasta pulsar Save, igual que en la selección de Shop.',
    fields: [
      { type: 'string', name: 'category', label: 'Ámbito', required: true, options: [{ value: 'all', label: 'Portfolio completo' }, ...PROJECT_CATEGORIES.map(category => ({ value: category.value, label: category.label }))] },
      { type: 'object', name: 'projects', label: 'Artículos, en orden', list: true, fields: [{ type: 'reference', name: 'project', label: 'Artículo', collections: ['projects'], required: true }], ui: { itemProps: item => ({ label: String(item?.project ?? '').split('/').pop()?.replace('.mdx', '') || 'Artículo' }) } },
    ],
    ui: {
      component: ProjectVisualOrderField,
      itemProps: item => ({ label: item?.category === 'all' ? 'Portfolio completo' : String(item?.category ?? 'Ámbito') }),
      validate: (value: unknown) => { try { parseVisualOrder({ scopes: value ?? [] }); } catch (error) { return error instanceof Error ? error.message : 'Orden inválido.'; } },
    },
  }],
};
