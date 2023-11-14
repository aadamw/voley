import { GeistSans, GeistMono } from 'geist/font';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '../components/providers';

export { baseMetadata as metadata } from '@/app/metadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistMono.variable,
          GeistSans.variable,
          'flex min-h-screen flex-col bg-background font-mono text-foreground antialiased',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
