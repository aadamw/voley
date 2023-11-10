'use client';
import * as React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useTheme } from 'next-themes';
import { ThemeLightIcon, ThemeNightIcon, ThemeSystemIcon } from './icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const className = cn(
  buttonVariants({ size: 'icon', variant: 'link' }),
  'rounded-full data-[state=checked]:bg-foreground/10',
);

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RadioGroup.Root
      value={theme}
      defaultValue={theme}
      onValueChange={setTheme}
      aria-label="Switch theme"
      className="flex gap-2"
    >
      <RadioGroup.Item value="dark" className={className}>
        <ThemeNightIcon className="h-4 w-4 text-foreground" />
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value="light" className={className}>
        <ThemeLightIcon className="h-4 w-4 text-foreground" />
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <RadioGroup.Item value="system" className={className}>
        <ThemeSystemIcon className="h-4 w-4 text-foreground" />
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
