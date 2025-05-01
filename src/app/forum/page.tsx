import { Forum } from '@/features/forum';
import { Suspense } from 'react';

export default function ForumPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Forum />
    </Suspense>
  );
}
