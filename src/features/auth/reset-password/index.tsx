'use client';
import { Button } from '@/components';
import { Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';

export const ResetPassword = () => {
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
        Reset Password
      </h1>
      <div className="flex flex-col gap-4">
        <Input label="Password" placeholder="Enter your new password" type="password" />
        <Input label="Confirm Password" placeholder="Confirm your new password" type="password" />
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button>Reset Password</Button>
        <p className="text-[#645D5D] text-sm text-center mt-[-8px]">
          Remembered your password?{' '}
          <Link className="text-[#2D2DF1] font-semibold" href="/auth/log-in">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};
