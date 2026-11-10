// CMS-only entry point. Never import this installer from a public layout.
export function installAdminTheme() {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !/^\/admin(?:\/|$)/.test(window.location.pathname)) return;
  document.body.dataset.al3AdminTheme = 'dark';
  if (document.getElementById('al3-admin-theme')) return;
  const stylesheet = document.createElement('link');
  stylesheet.id = 'al3-admin-theme';
  stylesheet.rel = 'stylesheet';
  stylesheet.href = '/admin-theme/admin.css?v=20261110-6';
  document.head.append(stylesheet);
}
