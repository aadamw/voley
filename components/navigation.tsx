import { siteConfig } from '@/config/site-config';
import Link from 'next/link';

export function Navigation() {
  return (
    <div className="sticky top-0 z-50 bg-background">
      <header className="flex h-12  w-full items-center border-b px-4 md:px-6">
        <nav className="flex items-center text-sm font-medium">
          <Link href="/" className="font-sans text-xl font-semibold">
            {siteConfig.title}
          </Link>
        </nav>
      </header>
    </div>
  );
}
