import { EmailVerificationWithLink } from '@/features/auth/email-verification-with-link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailVerificationWithLink />
    </Suspense>
  );
}
