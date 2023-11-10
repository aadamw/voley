import { cn } from '@/lib/utils';

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn('text-sans text-2xl font-semibold leading-tight md:text-4xl', className)}
    />
  );
}
