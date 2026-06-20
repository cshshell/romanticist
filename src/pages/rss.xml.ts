import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  return rss({
    title: SITE.domain,
    description: SITE.description,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/posts/${post.id}/`,
        categories: post.data.tags,
      })),
  });
}
