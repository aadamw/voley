import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '@/lib/utils';
import { TweetComponent } from './tweet';
import { NewsletterSubscribe } from '@/app/(changelog)/newsletter-subscription';

// This type is not exposed by next-contentlayer, so we have to re-create it here
type MDXComponents = Parameters<ReturnType<typeof useMDXComponent>>[0]['components'];

const CustomLink = ({ href, ...props }: { href: string; children: React.ReactNode }) => {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

function NextImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return (
    <div className="flex justify-center">
      <Image
        alt={alt}
        width={400}
        height={800}
        className="!my-6 aspect-video w-full max-w-[550px] rounded-lg border"
        {...props}
      />
    </div>
  );
}

function Pre({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <div className="flex justify-center">
      <pre
        className={cn(
          'mb-4 mt-6 w-full max-w-[550px] overflow-x-auto rounded-lg border py-4',
          className,
        )}
        {...props}
      />
    </div>
  );
}
function Code({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className,
      )}
      {...props}
    />
  );
}

const components = {
  Image: NextImage,
  a: CustomLink,
  code: Code,
  pre: Pre,
  StaticTweet: TweetComponent,
  NewsletterSubscribe,
} as MDXComponents;

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose-quoteless prose max-w-none font-sans dark:prose-invert xl:prose-xl">
      <Component components={components} />
    </div>
  );
}
