import { format, parseISO } from 'date-fns';

export function Time({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-foreground/50">
      {format(parseISO(date), 'LLLL d, yyyy')}
    </time>
  );
}
