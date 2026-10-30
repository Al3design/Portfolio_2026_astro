// Use the protected Preview's own URLs until the catalogue is released.
export function shopOrigin(site: URL, requestUrl: URL): string {
  if (import.meta.env.DEV) return requestUrl.origin;
  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return site.origin;
}
