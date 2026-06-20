import { getCollection } from 'astro:content';
import { formatDate } from '../utils/date';

// gera o indice que o fuse consome no cliente (busca ctrl+k)
export async function GET() {
  const posts = await getCollection('posts');
  const items = posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags,
      date: formatDate(post.data.date),
      url: `/posts/${post.id}/`,
    }));

  return new Response(JSON.stringify(items), {
    headers: { 'content-type': 'application/json' },
  });
}
