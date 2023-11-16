import { Footer } from '@/app/footer';
import { Navigation } from '@/components/navigation';
import { NewsletterSubscription } from './newsletter-subscription';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="mb-16 mt-4 flex-grow px-4 md:my-16 md:px-6">{children}</main>
      <NewsletterSubscription />
      <Footer />
    </>
  );
}
