// Static HTML pages use trailing-slash canonical URLs throughout the site.
export function canonicalPageUrl(path: string, site: URL | string): URL {
  const url = new URL(path, site);
  url.pathname = `${url.pathname.replace(/\/+$/, '')}/`;
  url.search = '';
  url.hash = '';
  return url;
}
