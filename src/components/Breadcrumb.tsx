
import { Folder } from 'lucide-react';
import styles from '@/styles/components/_breadcrumb.module.scss';

type BreadcrumbPath = string | { name: string; href: string };

export default function Breadcrumb({ paths }: { paths: BreadcrumbPath[] }) {
  return (
    <nav className={`${styles.breadcrumb} print:hidden`} aria-label="Breadcrumb">
      <Folder size={14} aria-hidden="true" />
      <ol className={styles.breadcrumb__list} role="list">
        <li className={styles.breadcrumb__item}>
          <a href="/" className={styles.breadcrumb__link} aria-label="Home">~</a>
        </li>
        <li className={styles.breadcrumb__item}>
          <span className={styles.breadcrumb__separator} aria-hidden="true">/</span>
          <a href="/" className={styles.breadcrumb__link}>root</a>
        </li>
        {paths.map((path, index) => {
          const isLink = typeof path === 'object';
          return (
            <li key={index} className={styles.breadcrumb__item}>
              <span className={styles.breadcrumb__separator} aria-hidden="true">/</span>
              {isLink ? (
                <a href={path.href} className={styles.breadcrumb__link} aria-current={index === paths.length - 1 ? 'page' : undefined}>{path.name}</a>
              ) : (
                <span className={styles.breadcrumb__current} aria-current={index === paths.length - 1 ? 'page' : undefined}>{path}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
