import { H1, H2 } from '@/components/ui/typography';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <div className="mx-auto md:w-2/3">
        <H1>Changelog</H1>
        <section className="mt-10 grid gap-4 ">
          {posts.map((post, idx) => (
            <article key={idx} className="border-b py-4">
              <H2>
                <Link href={post.url}>{post.title}</Link>
              </H2>
              <p>This is test description</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
