import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { shopReviewPhotos } from '@/lib/shop-review';

export const GET: APIRoute = async ({ params }) => {
  if (import.meta.env.MODE !== 'development') return new Response(null, { status: 404 });
  const photo = (await shopReviewPhotos()).find(item => item.batch === params.batch && item.file === params.file);
  if (!photo) return new Response(null, { status: 404 });
  let data: Uint8Array;
  try {
    data = await readFile(resolve(process.cwd(), photo.sourcePath));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return new Response(null, { status: 404 });
    throw error;
  }
  return new Response(new Uint8Array(data), { headers: {
    'Content-Type': 'image/jpeg',
    'Content-Length': String(data.length),
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
  } });
};
