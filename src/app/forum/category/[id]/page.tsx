import { ForumCategory } from '@/features/forum-category';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  // fetch category information
  const category = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forum/posts/categories/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {
        title: 'Forum Category Not Found | Forum | Algorand Nigeria',
        description: 'The forum category you are looking for does not exist',
      };
    });

  return {
    title: `${category?.name} | Forum Category | Algorand Nigeria`,
    description: category?.description,
  };
}

export default function ForumCategoryPage() {
  return <ForumCategory />;
}
