import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `https://${process.env.VERCEL_URL}${post.url}`,
    lastModified: post.date,
  }));

  const routes = [''].map((route) => ({
    url: `https://${process.env.VERCEL_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
