import { Suspense } from 'react';
import { getTweet } from 'react-tweet/api';
import { EmbeddedTweet, TweetNotFound, TweetSkeleton, type TweetProps } from 'react-tweet';
import '@/styles/tweet.css';

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          error = onError(err);
        } else {
          console.error(err);
          error = err;
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => (
  <Suspense fallback={<TweetSkeleton />}>
    <TweetContent {...props} />
  </Suspense>
);

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className="flex justify-center">
        <ReactTweet id={id} />
      </div>
    </div>
  );
}
