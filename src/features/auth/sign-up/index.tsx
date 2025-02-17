'use client';
import { Button } from '@/components';
import { Checkbox, Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';

export const SignUp = () => {
  return (
    <main
      className={classNames(
        'flex flex-col gap-8 h-full justify-center',
        'translate-y-[-54px] md:translate-y-[-42px]',
      )}
    >
      <h1
        className={classNames(
          'font-Trap-700 text-[#1B1818] text-[28px] leading-[33.6px]',
          'md:text-[32px] md:leading-[35.2px]',
        )}
      >
        Get Started
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <Input label="First Name" placeholder="Enter your first name" type="text" />
          <Input label="Last Name" placeholder="Enter your last name" type="text" />
        </div>
        <Input label="Email Address" placeholder="Enter your email address" type="email" />
        <Input label="Username" placeholder="Enter your username" type="text" />
        <Input label="Password" placeholder="Enter preferred password..." type="password" />
        <Input
          label="Confirm Password"
          placeholder="Re-enter preferred password..."
          type="password"
        />
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button>Sign Up</Button>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Checkbox />
            <p className="text-[#645D5D] text-sm text-center">
              I agree to the{' '}
              <Link className="text-[#2D2DF1] font-[500]" href="#">
                Terms
              </Link>{' '}
              and{' '}
              <Link className="text-[#2D2DF1] font-[500]" href="#">
                Privacy Policy
              </Link>
            </p>
          </div>
          <p className="text-[#645D5D] text-sm text-center mt-[-8px]">
            Don't have an account?{' '}
            <Link className="text-[#2D2DF1] font-semibold" href="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
