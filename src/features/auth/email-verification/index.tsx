'use client';
import { Button } from '@/components';
import classNames from 'classnames';
import { useState } from 'react';
import { OneTimePin } from '@/components/one-time-pin';

export const EmailVerification = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);

  return (
    <main
      className={classNames(
        'flex flex-col gap-8 h-full justify-center',
        'translate-y-[-108px] md:translate-y-[-85.5px]',
      )}
    >
      <div className="flex flex-col gap-[32px] w-full max-w-[454px]">
        <h1
          className={classNames(
            'font-Trap-700 text-[#1B1818] text-[28px] leading-[33.6px] text-center',
            'md:text-[32px] md:leading-[35.2px]',
          )}
        >
          Verify Your Email
        </h1>
        <p className="text-[#6D6D6D] text-[14px] leading-[20px] text-center mt-[-8px]">
          Please enter the verification code sent to your email.
        </p>
        <OneTimePin value={pin} onChange={setPin} />
        <div className="flex flex-col gap-[16px]">
          <Button className="bg-[#2D2DF1] text-[#FFFFFF]">Verify</Button>
          <Button variant="outlined">Cancel</Button>
        </div>
      </div>
    </main>
  );
};

export default EmailVerification;
