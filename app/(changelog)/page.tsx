import { Post } from '@/.contentlayer/generated';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2 } from '@/components/ui/typography';
import { getAllPosts } from '@/lib/posts';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { compareDesc, format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();
  const sortedPosts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="mx-auto md:w-2/3">
        <H1>Changelog</H1>
        <div className="mt-10 grid gap-4 ">
          {sortedPosts.map((post, idx) => (
            <Post key={idx} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

function Post({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.description.code);

  return (
    <article className="grid gap-4 border-b py-4">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {post.authors.map((author) => (
            <Avatar key={author._id}>
              <AvatarImage src={author.avatarUrl} alt={author.name} />
              <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Link href={post.url}>
          <time dateTime={post.date} className="text-foreground/50">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
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
        <MDXContent />
      </section>
    </article>
  );
}
