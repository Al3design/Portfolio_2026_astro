import styles from '@/styles/components/_brand-mark.module.scss';

/** Decorative mark: the adjacent Al3Design wordmark supplies the accessible name. */
export default function BrandMark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <img className={styles.mark__color} src="/brand/isologo-A3D.svg" alt="" width="737" height="824" />
      <img className={styles.mark__white} src="/brand/isologo-A3D-white.svg" alt="" width="749" height="836" />
      <img className={styles.mark__print} src="/brand/isologo-A3D-black.svg" alt="" width="737" height="824" />
    </span>
  );
}
