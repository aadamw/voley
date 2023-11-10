import { Footer } from '@/app/footer';
import { Navigation } from '@/components/navigation';
import { H1 } from '@/components/ui/typography';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="mt-4 flex-grow px-4 md:mt-16 md:px-6">
        <div className="mx-auto md:w-2/3">
          <H1>Changelog</H1>
        </div>
      </main>
      <Footer />
    </>
  );
}
