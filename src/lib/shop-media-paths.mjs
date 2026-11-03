// Shared by schema, build and local review. No arbitrary public files or URLs.
export const shopPublicPhotoPattern = /^\/assets\/shop\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(?:jpg|jpeg|png|webp)$/;
export const shopPrivatePhotoPattern = /^src\/editorial\/shop-assets\/intake-\d{4}-\d{2}-\d{2}\/[a-zA-Z0-9_-]+\.jpg$/;

/** @param {{ image?: string, sourcePath?: string }} photo */
export function shopPhotoSource(photo) {
  const image = photo.image?.trim();
  if (image) {
    if (!shopPublicPhotoPattern.test(image)) throw new Error(`Invalid shop upload: ${image}. Use /assets/shop/ with JPG, PNG or WebP.`);
    return image;
  }
  const source = photo.sourcePath;
  if (typeof source !== 'string' || !shopPrivatePhotoPattern.test(source)) throw new Error(`Invalid shop original: ${source ?? '(empty)'}`);
  return source;
}

/** URL used by the local live preview, including unsaved public uploads.
 * @param {{ image?: string, sourcePath?: string }} photo
 */
export function shopPhotoPreviewUrl(photo) {
  const image = photo.image?.trim();
  if (image) return shopPublicPhotoPattern.test(image) ? image : undefined;
  const source = photo.sourcePath;
  if (typeof source !== 'string' || !shopPrivatePhotoPattern.test(source)) return undefined;
  return '/revision/tienda/media/' + source.split('/').slice(-2).join('/');
}
