'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { H2, H3 } from '@/components/ui/typography';
import { subscribeAction, unsubscribeAction } from './newsletter.action';
import { LoaderIcon } from '@/components/icons';
import Link from 'next/link';

function SubmitButton({ children }: { children?: React.ReactNode }) {
  const status = useFormStatus();
  return (
    <Button type="submit" aria-disabled={status.pending}>
      {status.pending ? <LoaderIcon className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}

export function NewsletterSubscription({
  isSubscribedToNewsletter,
}: {
  isSubscribedToNewsletter: boolean;
}) {
  const errorId = useId();
  const [state, formAction] = useFormState(subscribeAction, {});

  if (state.status === 'success') {
    return (
      <>
        <H3 className="text-green-600">{state.message}</H3>
      </>
    );
  }

  if (isSubscribedToNewsletter) {
    return (
      <span className="text-sm">
        Looks like you&apos;re already subscribed to our newsletter. You can unsubscribe at any time
        by clicking the{' '}
        <Link
          className="text-foreground/60 hover:text-foreground hover:underline"
          href="/unsubscribe"
        >
          unsubscribe
        </Link>
      </span>
    );
  }

  return (
    <div className="grid w-full gap-4">
      <H3>Subscribe to our changelog newsletter</H3>
      <form action={formAction} className="grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-2 ">
        <Input
          required
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Subscribe to our changelog newsletter"
          aria-describedby={state.status === 'error' ? errorId : undefined}
        />
        <SubmitButton>Subscribe</SubmitButton>
        {state.status === 'error' ? (
          <span aria-live="polite" id={errorId} className="text-sm text-destructive">
            {state.message}
          </span>
        ) : null}
      </form>
    </div>
  );
}

export function NewsletterUnsubscription() {
  const errorId = useId();
  const [state, formAction] = useFormState(unsubscribeAction, {});

  return (
    <div className="grid w-full justify-center gap-4">
      <H2>Do you want to unsubscribe from our newsletter?</H2>
      <form action={formAction} className="grid gap-2 sm:grid-cols-[minmax(0,2fr),minmax(0,1fr)] ">
        <Input
          required
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Subscribe to our changelog newsletter"
          aria-describedby={state.status === 'error' ? errorId : undefined}
        />
        <SubmitButton>Confirm</SubmitButton>
      </form>
      {state.status === 'error' ? (
        <span aria-live="polite" className="text-sm text-destructive">
          {state.message}
        </span>
      ) : null}
    </div>
  );
}
