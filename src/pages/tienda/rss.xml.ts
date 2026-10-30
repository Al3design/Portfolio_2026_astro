import type { APIContext } from 'astro';
import { shopFeed } from '@/lib/shop-feed';
export const GET = (context: APIContext) => shopFeed(context, 'es');
