import { ForumExplore } from '@/features/forum-explore';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Forum | Forum | Algorand Nigeria',
  description: 'Explore the forum and find the best posts and categories',
};

export default function ForumExplorePage() {
  return <ForumExplore />;
}
