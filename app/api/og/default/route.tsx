/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/config/site-config';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex' }}>
        <img src={`${siteConfig.url}/og.png?cache-bust=${new Date().getDate()}`} alt="OG" />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
