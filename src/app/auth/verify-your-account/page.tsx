import { VerifyYourAccount } from '@/features/auth/verify-your-account';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyYourAccount />
    </Suspense>
  );
}
