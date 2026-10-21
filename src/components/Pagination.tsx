import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '@/styles/components/_pagination.module.scss';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  controlsId: string;
  label?: string;
};

export default function Pagination({ currentPage, totalPages, onPageChange, controlsId, label = 'Project pagination' }: Props) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
    .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1);
  return <nav className={styles.pagination} aria-label={label}>
    <button type="button" className={styles.button} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} aria-controls={controlsId} aria-label="Previous page">
      <ChevronLeft size={12} aria-hidden="true" />
    </button>
    <ol className={styles.numbers}>
      {pages.map((page, index) => <li key={page}>
        {index > 0 && page - pages[index - 1] > 1 && <span className={styles.ellipsis} aria-hidden="true">…</span>}
        <button type="button" className={styles.button} aria-current={page === currentPage ? 'page' : undefined} aria-label={`Page ${page}`} aria-controls={controlsId} onClick={() => onPageChange(page)}>
          {String(page).padStart(2, '0')}
        </button>
      </li>)}
    </ol>
    <button type="button" className={styles.button} disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} aria-controls={controlsId} aria-label="Next page">
      <ChevronRight size={12} aria-hidden="true" />
    </button>
  </nav>;
}
