import { Post } from '@/.contentlayer/generated';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2 } from '@/components/ui/typography';
import { getAllPosts } from '@/lib/posts';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Time } from '@/components/time';
import { Mdx } from '@/components/mdx';
import { Step, Stepper } from '@/components/stepper';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const POSTS_TAKE = 5;

export default function Home({
  searchParams: { page = '1' },
}: {
  searchParams: { page?: string };
}) {
  const posts = getAllPosts();
  const pageAsNumber = parseInt(page, 10);

  const sortedPosts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const loadedPosts = sortedPosts.slice(0, pageAsNumber * POSTS_TAKE);

  const isLoadMoreBtnVisible = posts.length > loadedPosts.length;
  const nextPage = pageAsNumber + 1;

  return (
    <>
      <div className="mx-auto max-w-[800px] md:w-2/3">
        <H1 className="mb-10">Changelog</H1>
        <Stepper>
          <div className="grid gap-8 md:gap-16">
            {loadedPosts.map((post, idx) => (
              <div key={idx}>
                <Step>
                  <PlusIcon className="h-4 w-4 transition-all hover:rotate-45" />
                </Step>
                <Post post={post} />
              </div>
            ))}
          </div>
        </Stepper>
        {isLoadMoreBtnVisible ? (
          <div className="mt-10 flex w-full justify-center">
            <Link
              scroll={false}
              href={`/?page=${nextPage}`}
              className={cn(buttonVariants({ variant: 'outline' }), 'w-[300px]')}
            >
              Load More
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

function Post({ post }: { post: Post }) {
  return (
    <article className="grid gap-4 border-b md:pl-8">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {post.authors.map((author, idx) => (
            <Avatar key={idx}>
              <AvatarImage src={author.avatarUrl} alt={author.name} />
              <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Link href={post.url}>
          <Time date={post.date} />
        </Link>
      </div>
      {post.coverImgUrl ? (
        <Link href={post.url}>
          <Image
            src={post.coverImgUrl}
            alt={post.title}
            width={800}
            height={400}
            className="aspect-video w-full select-none rounded-lg border bg-cover"
          />
        </Link>
      ) : null}
      <H2>
        <Link href={post.url}>{post.title}</Link>
      </H2>
      <section>
        <Mdx code={post.description.code} />
      </section>
    </article>
  );
}
