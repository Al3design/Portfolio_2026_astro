// Shared editorial contract. No Tina configuration/runtime imports here.
export type ArticleImage = { src: string; alt: string; caption?: string; credit?: string; href?: string; linkLabel?: string };
export type ArticleCard = { title: string; text: string; tags?: string[] };
export type ArticleBlock = {
  _template?: string; __typename?: string;
  title?: string; text?: string; bullets?: string[];
  collapsed?: boolean;
  src?: string; alt?: string; caption?: string; credit?: string; href?: string; linkLabel?: string;
  images?: ArticleImage[]; cards?: ArticleCard[];
  layout?: 'grid' | 'columns' | 'previews';
  poster?: string; transcript?: string; captions?: string; captionLanguage?: string;
  hasAudio?: boolean;
};
export function articleBlockKind(block: ArticleBlock) {
  const kind = block._template ?? block.__typename ?? '';
  return ['section', 'image', 'gallery', 'video', 'cards'].find(name => kind.toLowerCase().endsWith(name));
}
export function paragraphs(text?: string) { return text?.split(/\n\s*\n/).filter(Boolean) ?? []; }
export function articleImageHref(href?: string) { return href && /^(https:\/\/|\/[^/])/.test(href) ? href : undefined; }

const imageMarkdown = (image: ArticleImage) => [
  `![${image.alt.replace(/[\[\]]/g, '')}](${image.src})`, image.caption, image.credit,
  articleImageHref(image.href) && `[${(image.linkLabel || image.alt).replace(/[\[\]]/g, '')}](${image.href})`,
].filter(Boolean).join('\n\n');

export function articleBlocksMarkdown(blocks: ArticleBlock[] = []) {
  return blocks.map(block => {
    const heading = block.title ? `## ${block.title}\n\n` : '';
    switch (articleBlockKind(block)) {
      case 'section': return heading + [block.text, block.bullets?.map(text => `- ${text}`).join('\n'), articleImageHref(block.href) && `[${(block.linkLabel || block.href || '').replace(/[\[\]]/g, '')}](${block.href})`].filter(Boolean).join('\n\n');
      case 'image': return heading + imageMarkdown({src: block.src ?? '', alt: block.alt ?? '', caption: block.caption, credit: block.credit, href: block.href, linkLabel: block.linkLabel});
      case 'gallery': return heading + (block.images ?? []).map(imageMarkdown).join('\n\n');
      case 'cards': return heading + (block.cards ?? []).map(card => `### ${card.title}\n\n${card.text}${card.tags?.length ? '\n\n' + card.tags.join(' · ') : ''}`).join('\n\n');
      case 'video': return heading + [block.src && `[${block.title ?? 'Video'}](${block.src})`, block.caption, block.transcript, block.credit, block.captions && `[${block.captionLanguage ?? 'VTT'}](${block.captions})`].filter(Boolean).join('\n\n');
      default: throw new Error(`Unknown article block: ${block._template ?? block.__typename}`);
    }
  }).join('\n\n');
}
