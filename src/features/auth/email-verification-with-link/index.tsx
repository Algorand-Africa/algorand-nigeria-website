'use client';
import { useAuthActions } from '@/actions/auth';
import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const EmailVerificationWithLink = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [isLoading, setIsLoading] = useState(false);
  const { verifyEmail } = useAuthActions();

  const verifyEmailHandler = async () => {
    if (!token) {
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Verifying your email...');
    const response = await verifyEmail(token);

    if (response.data) {
      toast.success('Email verified successfully!', { id: toastId });
      push('/auth/log-in');
    } else {
      toast.error(response.error?.toString() || 'Failed to verify email!', { id: toastId });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    verifyEmailHandler();
  }, [token]);

  return (
    <main
      className={classNames(
        'flex flex-col gap-8 h-full justify-center',
        'translate-y-[-108px] md:translate-y-[-85.5px]',
      )}
    >
      <h1
        className={classNames(
          'font-Trap-700 text-[#1B1818] text-[28px] leading-[33.6px]',
          'md:text-[32px] md:leading-[35.2px]',
        )}
      >
        Verifying your email
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-[#645D5D] text-base mt-[-8px]">
          Hold on, we are verifying your email...
        </p>
      </div>
      {!isLoading && (
        <div className="flex flex-col gap-[26px]">
          <p className="text-[#645D5D] text-sm text-left mt-[-8px]">
            Verified your email?{' '}
            <Link className="text-[#2D2DF1] font-semibold" href="/auth/log-in">
              Sign In
            </Link>
          </p>
        </div>
      )}
    </main>
  );
};
