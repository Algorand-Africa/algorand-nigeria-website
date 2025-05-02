import { CreateForumPost } from '@/features/create-forum-post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Post | Forum | Algorand Nigeria',
  description: 'Create a new post in the forum',
};

export default function CreatePost() {
  return <CreateForumPost />;
}
