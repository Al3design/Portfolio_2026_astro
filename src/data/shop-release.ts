// Explicit selection edited through Tina; saving an unselected product does not publish it.
// Server/build only: never import the virtual editorial module into a client island.
import { selection } from 'virtual:shop-catalogue';

export const shopCatalogueSlugs = selection.slugs;
export const shopLatestSlugs = selection.latestSlugs;
export const shopHeroSlug = selection.heroSlug;
