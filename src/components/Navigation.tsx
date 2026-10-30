'use client';



import { Sun, Moon, Rss, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import styles from '@/styles/components/_navigation.module.scss';
import { clsx } from 'clsx';
import { registerWebTools, publicPageState } from '@/lib/webmcp';
import { siteNavigation, type SiteSection, type SiteLanguage, type SiteLanguageLinks } from '@/lib/site-navigation';
import { shopRoutes } from '@/data/shop-demo';
import BrandMark from '@/components/BrandMark';

// Stagger variants for overlay links
const overlayVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
    transition: { duration: 0.32, ease: [0.55, 0, 1, 0.45] },
  },
};

const linkItemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.18 + i * 0.07, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, x: 16, transition: { duration: 0.15 } },
};

export default function Navigation({ pathname = '/', section = 'portfolio', language = 'en', languageLinks, shopCollectionHref, shopNotice }: { pathname?: string; section?: SiteSection; language?: SiteLanguage; languageLinks?: SiteLanguageLinks; shopCollectionHref?: string; shopNotice?: string }) {
  const navLinks = siteNavigation(section, language).map(link => section === 'shop' && shopCollectionHref && link.href.endsWith('#collection') ? { ...link, href: shopCollectionHref } : link);
  const shop = section === 'shop';
  const spanish = language === 'es';
  const rssHref = shop ? (spanish ? '/tienda/rss.xml' : '/en/shop-3d/rss.xml') : '/rss.xml';
  const rssLabel = shop ? (spanish ? 'RSS de la tienda' : 'Shop RSS feed') : 'RSS Feed';
  const translations: SiteLanguageLinks = languageLinks ?? (shop ? shopRoutes : { [language]: pathname });
  const themeStorageKey = shop ? 'shop-theme' : 'theme';
  const defaultTheme = shop ? 'light' : 'dark';
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(themeStorageKey) as 'light' | 'dark') ?? defaultTheme;
    }
    return defaultTheme;
  });
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contained, setContained] = useState(false);
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Observe one threshold instead of updating React on every scroll event.
  useEffect(() => {
    if (!mounted || shop || !sentinelRef.current) return;
    if (!('IntersectionObserver' in window)) {
      setContained(true);
      return;
    }
    setContained(window.scrollY > 64);
    const observer = new IntersectionObserver(([entry]) => {
      setContained(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [mounted, shop]);

  // Hydration guard + restore theme class on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(themeStorageKey) ?? defaultTheme;
    if (saved === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [themeStorageKey, defaultTheme]);

  useEffect(() => registerWebTools([
    {
      name: 'portfolio_get_state',
      description: 'Read the current public page, theme and rendered heading colors.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: publicPageState,
      annotations: { readOnlyHint: true },
    },
    {
      name: 'portfolio_set_theme',
      description: 'Switch the portfolio to light or dark theme and save that preference.',
      inputSchema: {
        type: 'object',
        properties: { theme: { type: 'string', enum: ['light', 'dark'], description: 'The desired color theme.' } },
        required: ['theme'],
        additionalProperties: false,
      },
      execute: ({ theme: requestedTheme }) => {
        if (requestedTheme !== 'light' && requestedTheme !== 'dark') {
          return { error: 'theme must be light or dark' };
        }
        flushSync(() => setTheme(requestedTheme));
        localStorage.setItem(themeStorageKey, requestedTheme);
        document.documentElement.classList.toggle('light', requestedTheme === 'light');
        return publicPageState();
      },
    },
  ]), [themeStorageKey]);

  // Scroll lock while menu is open — html+body overflow hidden (modern, safe)
  useEffect(() => {
    if (!mounted) return;
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [menuOpen, mounted]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    if (!menu) return;
    const background = [navRef.current, ...document.querySelectorAll<HTMLElement>('main, footer, .skip-link')]
      .filter((element): element is HTMLElement => !!element);
    const previous = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    const focusable = () => Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'))
      .filter(element => element.getClientRects().length > 0);
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
      }
      if (event.key === 'Tab') {
        const items = focusable();
        const index = items.indexOf(document.activeElement as HTMLElement);
        if (index === -1 || (event.shiftKey ? index === 0 : index === items.length - 1)) {
          event.preventDefault();
          items[event.shiftKey ? items.length - 1 : 0]?.focus();
        }
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', closeOnDesktop);
      background.forEach((element, index) => { element.inert = previous[index]; });
      if (!desktop.matches) triggerRef.current?.focus();
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(themeStorageKey, newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const languageSelector = (
    <div className={styles.nav__languages} role="group" aria-label={spanish ? 'Idioma de la página' : 'Page language'}>
      {(['es', 'en'] as const).map(locale => {
        const href = translations[locale];
        const label = locale === 'en' ? 'Switch to English' : 'Cambiar a español';
        return href ? (
          <a key={locale} href={href} lang={locale} hrefLang={locale} className={styles.nav__language} aria-label={label} aria-current={locale === language ? 'page' : undefined}>{locale.toUpperCase()}</a>
        ) : (
          <button key={locale} type="button" className={styles.nav__language} disabled lang={locale} aria-label={`${label}: ${spanish ? 'traducción pendiente' : 'translation pending'}`} title={spanish ? 'Traducción pendiente' : 'Translation pending'}>{locale.toUpperCase()}</button>
        );
      })}
    </div>
  );

  const themeIcon = shop ? (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" />
    </svg>
  ) : theme === 'light' ? <Moon size={20} /> : <Sun size={20} />;

  if (!mounted) {
    return (
      <nav className={clsx(styles.nav, shop ? styles['nav--shop'] : styles['nav--localized'], 'opacity-0')}>
        <div className={styles.nav__logo}>
          <BrandMark /><span><span className={styles.nav__prefix}>Al3</span>Design</span>
        </div>
      </nav>
    );
  }

  return (
    <>
      {!shop && <span ref={sentinelRef} className={styles.scrollSentinel} aria-hidden="true" />}
      {shop && <p className={styles.shopNotice}>{shopNotice ?? (spanish ? 'Exploración de diseño · piezas y renders de ejemplo' : 'Design exploration · sample pieces and renders')}</p>}
      <nav ref={navRef} data-contained={!shop && contained} className={clsx(styles.nav, shop ? styles['nav--shop'] : styles['nav--localized'])}>
        <a href={shop ? shopRoutes[language] : '/'} className={styles.nav__logo} onClick={() => setMenuOpen(false)}>
          <BrandMark /><span><span className={styles.nav__prefix}>Al3</span>Design</span>
        </a>

        {/* Desktop links */}
        <div className={styles.nav__links}>
          {navLinks.map((link) => {
            // Normalize paths: strip trailing slash except for root
            const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
            const normalizedHref = link.href === '/' ? '/' : link.href.replace(/\/$/, '');
            const isActive = normalizedPathname === normalizedHref || (shop && link.href.endsWith('#collection'));
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(styles.nav__link, isActive && styles['nav__link--active'])}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className={styles.nav__pill}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right-side actions */}
        <div className={styles.nav__actions}>
          {languageSelector}
          {/* Theme toggle — always visible */}
          <button onClick={toggleTheme} className={styles.nav__btn} aria-label="Toggle theme">
            {themeIcon}
          </button>

          {/* Desktop-only action buttons */}
          <a href={rssHref} target="_blank" rel="noopener noreferrer" className={clsx(styles.nav__btn, styles['nav__btn--desktop'])} aria-label={rssLabel} title={rssLabel}>
            <Rss size={18} aria-hidden="true" />
          </a>
          {!shop && <button className={clsx(styles.nav__btn, styles['nav__btn--desktop'])} aria-label="Source">
            <Code size={18} />
          </button>}

          {/* Mobile hamburger — terminal >_ icon */}
          <button
            ref={triggerRef}
            className={clsx(styles.nav__terminal_btn, menuOpen && styles['nav__terminal_btn--active'])}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  className={styles.terminal_icon}
                  {...overlayVariants}
                  aria-hidden="true"
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  className={styles.terminal_icon}
                  {...overlayVariants}
                  aria-hidden="true"
                >
                  {'>_'}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className={styles.mobile_overlay}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <button className={styles.mobile_overlay__close} onClick={() => setMenuOpen(false)} aria-label="Close navigation">✕</button>
            {/* Overlay header */}
            <div className={styles.mobile_overlay__header}>
              <a
                href={shop ? shopRoutes[language] : '/'}
                className={clsx(styles.nav__logo, styles['nav__logo--overlay'])}
                onClick={() => setMenuOpen(false)}
              >
                <BrandMark /><span><span className={styles.nav__prefix}>Al3</span>Design</span>
              </a>

              <div className={styles.mobile_overlay__meta}>
                <span className={styles.meta__label}>{shop ? 'AL3DESIGN / OBJECTS' : 'FILE_PATH: /ROOT/NAVIGATION'}</span>
                <span className={styles.meta__title}>{shop ? 'SHOP 3D' : 'SYSTEM_INDEX'}</span>
              </div>
            </div>

            {/* Nav links */}
            <nav className={styles.mobile_overlay__nav} aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                // Normalize paths: strip trailing slash except for root
                const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
                const normalizedHref = link.href === '/' ? '/' : link.href.replace(/\/$/, '');
                const isActive = normalizedPathname === normalizedHref || (shop && link.href.endsWith('#collection'));
                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={styles.mobile_overlay__container_link}
                  >
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={clsx(
                        styles.mobile_overlay__link,
                        isActive && styles['mobile_overlay__link--active']
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className={styles.mobile_overlay__index}>{link.index} —</span>
                      <span className={styles.mobile_overlay__name}>{link.name}</span>
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer actions */}
            <div className={styles.mobile_overlay__footer}>
              <div className={styles.mobile_overlay__actions}>
                {languageSelector}
                <button
                  className={clsx(styles.nav__btn, styles['nav__btn--overlay'])}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {themeIcon}
                  <span>{theme === 'light' ? 'LIGHT_MODE' : 'DARK_MODE'}</span>
                </button>
                <a href={rssHref} className={clsx(styles.nav__btn, styles['nav__btn--overlay'])} aria-label={rssLabel}>
                  <Rss size={18} aria-hidden="true" />
                  <span>RSS FEED</span>
                </a>
                {!shop && <button className={clsx(styles.nav__btn, styles['nav__btn--overlay'])} aria-label="Source">
                  <Code size={18} />
                  <span>SOURCE</span>
                </button>}
              </div>
              <div className={styles.mobile_overlay__status}>
                <span>{shop ? (spanish ? 'ARGENTINA / OBJETOS IMPRESOS EN 3D' : 'ARGENTINA / 3D PRINTED OBJECTS') : 'STATUS: AUTHORIZED'}</span>
                <span className={styles.status__uuid}>{shop ? (spanish ? 'EXPLORACIÓN DE DISEÑO' : 'DESIGN EXPLORATION') : 'UUID: 0X2A99·FF01·V1.0·SOUL'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
