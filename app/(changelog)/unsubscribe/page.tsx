import { redirect } from 'next/navigation';
import { NewsletterUnsubscribe } from '../newsletter-subscription';
import { unsubscribeFromNewsletter } from '../newsletter.action';

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  if (searchParams.email) {
    await unsubscribeFromNewsletter(searchParams.email);
    redirect('/');
  }

  return (
    <div className="mx-auto flex min-h-[400px] max-w-[800px] flex-col items-center justify-center md:w-2/3">
      <NewsletterUnsubscribe />
    </div>
  );
}
