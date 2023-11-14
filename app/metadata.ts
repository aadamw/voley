import { siteConfig } from '@/config/site-config';
import { postParams } from '@/lib/og';
import type { Metadata } from 'next';

const OG_URL = `${siteConfig.url}/api/og`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${OG_URL}/default`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [
      {
        url: `${OG_URL}/default`,
        width: 1920,
        height: 1080,
      },
    ],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export const buildMeta = async ({
  ogImageUrl,
  description,
  title,
}: {
  ogImageUrl?: string;
  description?: string;
  title?: string;
}): Promise<Metadata> => {
  baseMetadata.openGraph!.images = ogImageUrl;
  baseMetadata.twitter!.images = ogImageUrl;

  if (description) {
    baseMetadata.description = description;
    baseMetadata.twitter!.description = description;
    baseMetadata.openGraph!.description = description;
  }

  if (title) {
    baseMetadata.title = title;
    baseMetadata.twitter!.title = title;
    baseMetadata.openGraph!.title = title;
  }

  return baseMetadata;
};

interface MetaParamsForPost {
  title: string;
  coverImgUrl?: string;
  date: string;
  description: string;
}

/** Helper to build opengraph metadata for a post, you should call this in generateMetadata() next function */
export const buildMetaForPost = async ({
  title,
  date,
  coverImgUrl,
  description,
}: MetaParamsForPost): Promise<Metadata> => {
  const params = postParams.toSearchString({
    title,
    coverImgUrl,
    date,
  });

  const ogImageUrl = `${OG_URL}/post?${params.toString()}`;

  return buildMeta({
    title,
    ogImageUrl,
    description,
  });
};
