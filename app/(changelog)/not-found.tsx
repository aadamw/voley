import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PostNoFoundPage() {
  return (
    <div className="mx-auto flex min-h-[400px] max-w-[800px] flex-grow flex-col items-center justify-center md:w-2/3">
      <H1>404 - Not Found</H1>
      <p>Looks like you&apos;re lost...</p>
      <Link href="/" className={cn(buttonVariants({ variant: 'default' }), 'mt-5')}>
        Go back
      </Link>
    </div>
  );
}
