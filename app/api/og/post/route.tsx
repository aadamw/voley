import { postParams } from '@/lib/og';
import { ImageResponse } from '@vercel/og';
import { format, parseISO } from 'date-fns';

export const runtime = 'edge';

export async function GET(req: Request) {
  const parsed = postParams.decodeRequest(req);

  if (!parsed.success) {
    return new Response(parsed.error.toString(), { status: 400 });
  }

  const { date, title, coverImgUrl } = parsed.data.input;

  //TODO: Add Geist as font
  return new ImageResponse(
    (
      <div tw="bg-zinc-900 h-full w-full text-white bg-cover flex flex-col px-10 py-8">
        <div tw="flex flex text-center h-full w-full gap-4 items-center">
          {coverImgUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImgUrl}
              tw="absolute bottom-0 opacity-80 right-0 object-cover w-3/4 aspect-video rounded-lg"
              alt=""
            />
          ) : null}
          <div tw="flex flex-col ml-10">
            <h1 tw="text-8xl font-bold">{title}</h1>
            <p tw="text-4xl mt-6 font-medium">{format(parseISO(date), 'LLLL d, yyyy')}</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
