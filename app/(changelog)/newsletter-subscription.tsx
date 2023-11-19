'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { H2, H3 } from '@/components/ui/typography';
import { subscribeAction, unsubscribeAction } from './newsletter.action';
import { CheckIcon, LoaderIcon } from '@/components/icons';

function SubmitButton({ children, className }: { children?: React.ReactNode; className?: string }) {
  const status = useFormStatus();
  return (
    <Button type="submit" aria-disabled={status.pending} className={className}>
      {status.pending ? <LoaderIcon className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}

export function NewsletterSubscribe() {
  const errorId = useId();
  const [state, formAction] = useFormState(subscribeAction, {});

  const success = state.status === 'success';

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
        <SubmitButton className={success ? 'bg-green-400' : ''}>
          {success ? <CheckIcon /> : 'Subscribe'}
        </SubmitButton>
        {state.status === 'error' ? (
          <span aria-live="polite" id={errorId} className="text-sm text-destructive">
            {state.message}
          </span>
        ) : null}
      </form>
    </div>
  );
}

export function NewsletterUnsubscribe() {
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
          aria-label="Unsubscribe from our changelog newsletter"
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
