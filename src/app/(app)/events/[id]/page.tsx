import { EventDetails } from '@/features/event-details';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = (await params).id;

  // fetch post information
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {
        title: 'Event Not Found | Events | Algorand Nigeria',
        description: 'The event you are looking for does not exist',
      };
    });

  return {
    title: `${post?.title} | Events | Algorand Nigeria`,
    description: post?.description,
    openGraph: {
      title: `${post?.title} | Events | Algorand Nigeria`,
      description: post?.description,
      images: [
        {
          url:
            post?.image ||
            'https://res.cloudinary.com/dvujkjs1q/image/upload/v1743032377/nft-images/1743032404424-6743922643.jpg',
        },
      ],
    },
  };
}

export default function Page({
  searchParams,
  params,
}: {
  searchParams: { token: string };
  params: { id: string };
}) {
  return <EventDetails token={searchParams.token} id={params.id} />;
}
