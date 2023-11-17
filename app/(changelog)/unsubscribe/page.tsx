import { NewsletterUnsubscription } from '../newsletter-subscription';

export default function UnsubscribePage() {
  return (
    <div className="mx-auto flex min-h-[400px] max-w-[800px] flex-col items-center justify-center md:w-2/3">
      <NewsletterUnsubscription />
    </div>
  );
}
