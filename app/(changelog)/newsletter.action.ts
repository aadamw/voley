'use server';

import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { subscribers } from '@/db/schemas';

export type NewsletterActionState = {
  message?: string;
  status?: 'success' | 'error';
};

const messages = {
  serviceError: 'Something went wrong',
  success: 'Thanks for subscribing!',
  validationError: 'Email is required',
};

export async function subscribeAction(
  _previousState: NewsletterActionState,
  fd: FormData,
): Promise<NewsletterActionState> {
  const email = fd.get('email');

  if (!email) {
    return { message: messages.validationError, status: 'error' };
  }

  try {
    await db
      .insert(subscribers)
      .values({ email: email.toString(), status: 'subscribed' })
      .onDuplicateKeyUpdate({ set: { status: 'subscribed' } });

    return { message: messages.success, status: 'success' };
  } catch (e) {
    return { message: messages.serviceError, status: 'error' };
  }
}

export async function unsubscribeAction(
  _previousState: NewsletterActionState,
  fd: FormData,
): Promise<NewsletterActionState> {
  const email = fd.get('email');

  if (!email) {
    return { message: messages.validationError, status: 'error' };
  }

  const isSubscribed = await db.query.subscribers.findFirst({
    where: eq(subscribers.email, email.toString()),
  });

  console.log({ isSubscribed });

  if (!isSubscribed) {
    return { message: messages.serviceError, status: 'error' };
  }

  try {
    await db
      .update(subscribers)
      .set({ status: 'unsubscribed' })
      .where(eq(subscribers.email, email.toString()));

    redirect('/');
  } catch (e) {
    return { message: messages.serviceError, status: 'error' };
  }
}
