import { ForumPost } from '@/features/forum-post';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  // fetch post information
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forum/posts/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {
        title: 'Forum Post Not Found | Forum | Algorand Nigeria',
        description: 'The forum post you are looking for does not exist',
      };
    });

  return {
    title: `${post.title} | Forum | Algorand Nigeria`,
    description: post?.message.slice(0, 155),
  };
}

export default function ForumPostPage() {
  return <ForumPost />;
}
