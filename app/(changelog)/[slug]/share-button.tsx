import { TwitterIcon } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site-config';
import { cn } from '@/lib/utils';

export function TwitterShareButton({ url }: { url: string }) {
  if (!siteConfig.twitterHandle) {
    return null;
  }
  return (
    <a
      href={`https://twitter.com/intent/tweet?url=${siteConfig.url}${url}&via=${siteConfig.twitterHandle}&text=Check+out+the+latest+changes+from+${siteConfig.title}`}
      target="__blank"
      className={cn(buttonVariants(), 'font-semibold, select-none')}
    >
      <TwitterIcon className="mr-2 h-4 w-4" />
      Post
    </a>
  );
}
