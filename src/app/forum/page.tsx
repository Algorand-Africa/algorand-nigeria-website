import { Forum } from '@/features/forum';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forum | Algorand Nigeria',
  description: 'The forum for Algorand Nigeria',
};

export default function ForumPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Forum />
    </Suspense>
  );
}
