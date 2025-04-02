'use client';

import { useAuthActions } from '@/actions/auth';
import { Button } from '@/components';
import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const VerifyYourAccount = () => {
  const [countdown, setCountdown] = useState(60 * 5);
  const [resending, setResending] = useState(false);
  const { resendVerificationEmail } = useAuthActions();
  const searchParams = useSearchParams();

  const handleResendEmail = async () => {
    setResending(true);
    const email = searchParams.get('email');

    if (!email) {
      toast.error('No email found!');
      setResending(false);
      return;
    }

    const response = await resendVerificationEmail(email);

    if (response) {
      setCountdown(60 * 5);
      toast.success('Verification email sent successfully!');
    } else {
      toast.error('Failed to send verification email!');
    }

    setResending(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);

      if (countdown <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

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
        Please, verify your email
      </h1>
      <div className="flex flex-col gap-4">
        <p className={classNames('font-inter font-[400] text-sm text-[#64748B]', 'md:text-xl')}>
          A verification link has been sent to your email. Kindly, click it to activate your
          account.
        </p>
        <p className="font-inter font-[400] text-sm text-[#64748B] md:text-xl">
          Didn’t receive an email? Check spam or resend email{' '}
          {countdown > 0 ? `in ${countdown} seconds` : ''}
        </p>
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button
          loaderText="Resending email..."
          onClick={handleResendEmail}
          disabled={countdown > 0}
          loading={resending}
        >
          Resend email
        </Button>
        <p className="text-[#645D5D] text-sm text-center mt-[-8px]">
          Verified your account?{' '}
          <Link className="text-[#2D2DF1] font-semibold" href="/auth/log-in">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};
