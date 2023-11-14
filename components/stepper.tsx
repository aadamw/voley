import { cn } from '@/lib/utils';

export const Step = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'absolute left-0 -ms-4 hidden h-8 w-8 items-center justify-center rounded-full bg-foreground p-1 text-background md:flex',
      className,
    )}
    {...props}
  />
);
export const Stepper = ({ ...props }) => (
  <div className="relative border-l-0 md:ml-4 md:border-l" {...props} />
);
