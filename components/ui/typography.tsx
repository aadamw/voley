import { cn } from '@/lib/utils';

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn('font-sans text-2xl font-semibold leading-tight md:text-4xl', className)}
    />
  );
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn('font-sans text-xl font-semibold leading-tight md:text-2xl', className)}
    />
  );
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn('font-sans text-lg font-semibold leading-tight md:text-xl', className)}
    />
  );
}
