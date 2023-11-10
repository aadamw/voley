import { GoBackIcon } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/typography';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post._raw.flattenedPath }));
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const post = getPostBySlug(params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return { title: post.title };
};

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
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
      <H1>{post.title}</H1>
      <MDXContent />
    </div>
  );
}
