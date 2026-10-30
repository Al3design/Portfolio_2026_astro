// Explicit selection for the prepared catalogue. New Tina drafts are never
// included automatically. Deployment remains a separate authorized action.
export const shopCatalogueSlugs = [
  'arbol-decorativo',
  'figura-articulada-verde-roja',
  'flor-decorativa-blanca',
  'jarron-acanalado',
  'maceta-acanalada-con-plato',
  'maceta-perro',
  'pieza-articulada-roja-negra',
  'soporte-control-creeper',
] as const;

// Latest new pieces supplied by Alejandro: controller stand (batch 3),
// dog planter and ribbed planter (batch 2). Tree colour updates do not
// create another piece. This is editorial incorporation, not print date.
export const shopLatestSlugs = [
  'soporte-control-creeper',
  'maceta-perro',
  'maceta-acanalada-con-plato',
] as const;
