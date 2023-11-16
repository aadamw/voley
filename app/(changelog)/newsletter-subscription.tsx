'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { H3 } from '@/components/ui/typography';
import { subscribeAction } from './newsletter.action';

export function NewsletterSubscription() {
  return (
    <div className="mx-auto grid w-full gap-4 p-6 md:w-2/3 md:px-6 md:py-8">
      <H3>Subscribe to our changelog newsletter</H3>
      <form
        action={subscribeAction}
        className=" grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-2 "
      >
        <Input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Subscribe to our changelog newsletter"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}
