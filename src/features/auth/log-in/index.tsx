'use client';
import { Button } from '@/components';
import { Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';

export const LogIn = () => {
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
        Welcome back
      </h1>
      <div className="flex flex-col gap-4">
        <Input label="Email Address" placeholder="Enter your email address" type="email" />
        <Input label="Password" placeholder="Enter your password" type="password" />
        <p className="text-[#645D5D] text-sm text-right mt-[-8px]">
          Forgot password?{' '}
          <Link className="text-[#2D2DF1] font-semibold" href="/auth/forgot-password">
            Reset
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button>Sign In</Button>
        <p className="text-[#645D5D] text-sm text-center mt-[-8px]">
          Don't have an account?{' '}
          <Link className="text-[#2D2DF1] font-semibold" href="/auth/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};
