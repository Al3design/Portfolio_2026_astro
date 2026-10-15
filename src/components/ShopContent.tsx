import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { shopCopy, shopDemoProducts, type ShopLanguage } from '@/data/shop-demo';
import { formatTitle } from '@/helpers/text-helpers';
import { Tag } from '@/components/UI';
import styles from '@/styles/pages/_shop.module.scss';

type Product = typeof shopDemoProducts[number];
type Props = { language: ShopLanguage; imageUrl: string };

export default function ShopContent({ language, imageUrl }: Props) {
  const t = shopCopy[language];
  const index = language === 'es' ? 0 : 1;
  const [category, setCategory] = useState(0);
  const [selection, setSelection] = useState<Product | 'custom' | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visibleProducts = shopDemoProducts.filter(product => !category || product.category === category);

  useEffect(() => {
    if (selection && !dialog.current?.open) dialog.current?.showModal();
    else if (!selection && dialog.current?.open) dialog.current.close();
  }, [selection]);

  const image = (product: Product) => (
    <div
      className={styles.shop__image}
      style={{ backgroundPosition: `${product.id % 3 * 50}% ${product.id < 3 ? 0 : 100}%` }}
      role="img"
      aria-label={product.alts[index]}
    />
  );

  return (
    <div className={`page-container ${styles.shop}`} style={{ '--shop-image': `url("${imageUrl}")` } as CSSProperties}>
      <section className={styles.shop__hero} aria-labelledby="shop-title">
        <div className={styles.shop__heroCopy}>
          <p className={styles.shop__eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.shop__title} id="shop-title">{formatTitle(`${t.title1} // ${t.title2}`)}</h1>
          <p className={styles.shop__intro}>{t.intro}</p>
          <a className={`${styles.shop__button} ${styles['shop__button--primary']}`} href="#collection">
            {t.explore}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className={styles.shop__heroMeta}><span>{t.place}</span><span aria-hidden="true">/</span><span>{t.physical}</span></div>
        </div>
        <figure className={styles.shop__heroFigure}>
          {image(shopDemoProducts[0])}
          <figcaption><span><span className={styles.shop__index}>01 / </span>{t.heroProduct}</span><span>{t.render}</span></figcaption>
        </figure>
      </section>

      <section id="collection" className={styles.shop__collection} aria-labelledby="collection-title">
        <header className={styles.shop__sectionHeading}>
          <div><p className={styles.shop__eyebrow}>{t.collectionLabel}</p><h2 id="collection-title">{t.collectionTitle}</h2></div>
          <p className={styles.shop__count} aria-live="polite">{String(visibleProducts.length).padStart(2, '0')} {t.pieces}</p>
        </header>
        <div className={styles.shop__filters} role="group" aria-label={t.filterLabel}>
          {t.categories.map((label, i) => (
            <Tag key={label} active={category === i} className={styles.shop__filter} onClick={() => setCategory(i)}>{label}</Tag>
          ))}
        </div>
        <div className={styles.shop__products}>
          {visibleProducts.map(product => (
            <article key={product.id} className={styles.shop__product}>
              <button type="button" className={styles.shop__imageButton} onClick={() => setSelection(product)} aria-label={`${t.detail}: ${product.names[index]}`}>
                {image(product)}<span className={styles.shop__imageTag}>{t.render}</span>
              </button>
              <div className={styles.shop__productHeading}><h3>{product.names[index]}</h3><span>{t.categories[product.category]}</span></div>
              <p className={styles.shop__description}>{product.descriptions[index]}</p>
              <div className={styles.shop__productTail}><span>{t.price}</span><button type="button" onClick={() => setSelection(product)}>{t.detail}<ArrowUpRight size={14} aria-hidden="true" /></button></div>
            </article>
          ))}
        </div>
        <p className={styles.shop__disclaimer}>{t.disclaimer}</p>
      </section>

      <section className={styles.shop__custom} id="custom" aria-labelledby="custom-title">
        <Plus className={styles.shop__customIcon} size={40} aria-hidden="true" />
        <div><p className={styles.shop__eyebrow}>{t.customLabel}</p><h2 id="custom-title">{t.customTitle}</h2><p className={styles.shop__description}>{t.customCopy}</p></div>
        <button type="button" className={`${styles.shop__button} ${styles['shop__button--secondary']}`} onClick={() => setSelection('custom')}>{t.customButton}<ArrowUpRight size={18} aria-hidden="true" /></button>
      </section>

      <section className={styles.shop__process} aria-label={t.processTitle}>
        {[['step1Title', 'step1Copy'], ['step2Title', 'step2Copy'], ['step3Title', 'step3Copy']].map(([title, body], i) => (
          <article key={title}><span className={styles.shop__index}>0{i + 1} /</span><h3>{t[title as keyof typeof t]}</h3><p>{t[body as keyof typeof t]}</p></article>
        ))}
      </section>

      <dialog ref={dialog} className={styles.shop__dialog} aria-labelledby="shop-dialog-title" onClose={() => setSelection(null)}>
        <button type="button" className={styles.shop__close} onClick={() => dialog.current?.close()} aria-label={t.close}><X size={22} aria-hidden="true" /></button>
        {selection === 'custom' ? (
          <div className={styles.shop__customDialog}><p className={styles.shop__eyebrow}>{t.customLabel}</p><h2 id="shop-dialog-title">{t.customTitle}</h2><p>{t.customNotice}</p></div>
        ) : selection ? (
          <div className={styles.shop__dialogGrid}>
            {image(selection)}
            <div className={styles.shop__dialogCopy}>
              <p className={styles.shop__eyebrow}>{t.concept} / 0{selection.id + 1}</p>
              <h2 id="shop-dialog-title">{selection.names[index]}</h2>
              <p>{selection.descriptions[index]}</p>
              <dl className={styles.shop__details}>
                <div><dt>{t.material}</dt><dd>PLA · {t.pending}</dd></div>
                <div><dt>{t.dimensions}</dt><dd>{t.pending}</dd></div>
                <div><dt>{t.price}</dt><dd>{t.pending}</dd></div>
                <div><dt>{t.delivery}</dt><dd>{t.deliveryValue}</dd></div>
              </dl>
              <p className={styles.shop__notice}>{t.dialogNotice}</p>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
