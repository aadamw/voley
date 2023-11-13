import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `https://${process.env.VERCEL_URL}/sitemap.xml`,
    host: `https://${process.env.VERCEL_URL}`,
  };
}
