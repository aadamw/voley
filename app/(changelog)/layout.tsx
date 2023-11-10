import { Footer } from '@/app/footer';
import { Navigation } from '@/components/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="my-4 flex-grow px-4 md:mt-16 md:px-6">{children}</main>
      <Footer />
    </>
  );
}
