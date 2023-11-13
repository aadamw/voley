import { GoBackIcon } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/typography';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Time } from '@/components/time';
import { notFound } from 'next/navigation';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Post } from '@/.contentlayer/generated';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mdx } from '@/components/mdx';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post._raw.flattenedPath }));
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Not found' };

  return { title: post.title };
};

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-[800px] md:w-2/3">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'link' }),
          'text-foreground/50, mb-10 px-0 text-xs',
        )}
      >
        <GoBackIcon className="mr-2 h-4 w-4" />
        Back to Changelog
      </Link>
      <article className="grid gap-8">
        <Time date={post.date} />
        <H1>{post.title}</H1>
        {post.coverImgUrl ? (
          <Image
            src={post.coverImgUrl}
            alt={post.title}
            width={800}
            height={400}
            className="aspect-video w-full select-none rounded-lg border bg-cover"
          />
        ) : null}
        <Authors authors={post.authors} />
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}

function Authors({ authors }: { authors: Post['authors'] }) {
  return (
    <section className="grid gap-2 border-b pb-4 font-sans">
      <p className="text-foreground/50">Posted by</p>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max gap-4">
          {authors.map((author, idx) => (
            <div key={idx} className="flex select-none gap-2">
              <Avatar>
                <AvatarImage src={author.avatarUrl} alt={author.name} />
                <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{author.name}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
