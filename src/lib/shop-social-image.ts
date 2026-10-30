import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export const shopSocialImage = (image: ImageMetadata) => getImage({
  src: image, width: 1200, height: 630, format: 'jpg', fit: 'cover',
});
