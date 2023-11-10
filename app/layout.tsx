import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site-config';
import { Providers } from '../components/providers';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistMono.variable,
          GeistSans.variable,
          'text-foreground bg-background flex min-h-screen flex-col font-mono antialiased',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
