import { useId } from 'react';
import { tinaField } from 'tinacms/dist/react';
import { Tag } from '@/components/UI';
import { articleBlockKind, articleImageHref, paragraphs, type ArticleBlock, type ArticleImage } from '@/lib/article-blocks';

function ImageFigure({ image, language }: { image: ArticleImage; language: 'es' | 'en' }) {
  const href = articleImageHref(image.href || image.src);
  const linkText = image.linkLabel || (language === 'es' ? 'Abrir imagen completa' : 'Open full image');
  const newTab = language === 'es' ? 'se abre en una pestaña nueva' : 'opens in a new tab';
  const picture = <img className="mdx-image" src={image.src} alt={image.alt} loading="lazy" decoding="async" />;
  return <figure className="article-figure" data-tina-field={tinaField(image)}>
    <div className="mdx-image-wrapper">{href ? <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${linkText}: ${image.alt} (${newTab})`}>{picture}</a> : picture}</div>
    {(image.caption || image.credit || href) && <figcaption>{image.caption}{image.credit && <small>{image.credit}</small>}{href && <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${linkText} (${newTab})`}>{linkText}<span aria-hidden="true"> ↗</span></a>}</figcaption>}
  </figure>;
}
function Block({ block, language }: { block: ArticleBlock; language: 'es' | 'en' }) {
  const id = useId();
  const title = block.title && <h2>{block.title}</h2>;
  const referenceHref = articleImageHref(block.href);
  const referenceLabel = block.linkLabel || (language === 'es' ? 'Ver referencia' : 'View reference');
  const referenceNewTab = language === 'es' ? 'se abre en una pestaña nueva' : 'opens in a new tab';
  const textContent = <>{paragraphs(block.text).map((text, index) => <p key={index}>{text}</p>)}{block.bullets?.length ? <ul>{block.bullets.map((text, index) => <li key={index}>{text}</li>)}</ul> : null}{referenceHref && <p><a href={referenceHref} target="_blank" rel="noopener noreferrer" aria-label={`${referenceLabel} (${referenceNewTab})`} data-tina-field={tinaField(block, 'href')}>{referenceLabel}<span aria-hidden="true"> ↗</span></a></p>}</>;
  switch (articleBlockKind(block)) {
    case 'section': return block.collapsed
      ? <details className="article-transcript"><summary>{block.title}</summary>{textContent}</details>
      : <>{title}{textContent}</>;
    case 'image': return <ImageFigure image={block as ArticleImage} language={language} />;
    case 'gallery': return <>{title}{block.layout === 'previews' && <p>{language === 'es' ? 'Vistas previas del diseño. Abrí cada imagen para verla completa en una pestaña nueva.' : 'Design previews. Open each image to view it in full in a new tab.'}</p>}<div className={block.layout === 'columns' ? 'article-gallery-columns' : block.layout === 'previews' ? 'mdx-grid article-gallery-previews' : 'mdx-grid'}>{block.images?.map((image, index) => <ImageFigure key={index} image={image} language={language} />)}</div></>;
    case 'cards': return <>{title}<div className="mdx-grid">{block.cards?.map((card, index) => <div key={index} className="mdx-card" data-tina-field={tinaField(card)}>
      <h3 className="mdx-title">{card.title}</h3>{paragraphs(card.text).map((text, i) => <p key={i} className="mdx-text">{text}</p>)}
      <div className="article-tags">{card.tags?.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>
    </div>)}</div></>;
    case 'video': return <>{title}<figure className="article-figure">
      <video className="mdx-image" controls playsInline preload="none" poster={block.poster} aria-label={block.title} aria-describedby={`${id}-transcript`}>
        <source src={block.src} />
        {block.captions && <track kind="captions" src={block.captions} srcLang={block.captionLanguage ?? language} label={(block.captionLanguage ?? language) === 'es' ? 'Español' : 'English'} default />}
        {language === 'es' ? 'Tu navegador no admite este video.' : 'Your browser does not support this video.'}
      </video>
      {(block.caption || block.credit) && <figcaption>{block.caption}{block.credit && <small>{block.credit}</small>}</figcaption>}
    </figure><details className="article-transcript"><summary>{language === 'es' ? 'Descripción / transcripción del video' : 'Video description / transcript'}</summary><div id={`${id}-transcript`}>{paragraphs(block.transcript).map((text, i) => <p key={i}>{text}</p>)}</div></details></>;
    default: throw new Error(`Unknown article block: ${block._template ?? block.__typename}`);
  }
}
export default function ArticleBlocks({ blocks = [], language = 'en' }: { blocks?: ArticleBlock[]; language?: 'es' | 'en' }) {
  return <>{blocks.map((block, index) => <div key={index} data-tina-field={tinaField(block)}><Block block={block} language={language} /></div>)}</>;
}
