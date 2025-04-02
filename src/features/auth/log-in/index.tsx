'use client';

import { useAuthActions } from '@/actions/auth';
import { Button } from '@/components';
import { Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const LogIn = () => {
  const { login } = useAuthActions();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(formData);
      if (response.data) {
        if (!response.data.user?.verified) {
          router.push(`/auth/verify-your-account?email=${formData.email}`);
        } else {
          toast.success('Login successful');
          setTimeout(() => {
            router.push('/');
          }, 500);
        }
      }
    } catch (error) {
      toast.error('Failed to log in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

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
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          required
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={formData.password}
          onChange={(value) => handleChange('password', value)}
        />
        <p className="text-[#645D5D] text-sm text-right mt-[-8px]">
          Forgot password?{' '}
          <Link className="text-[#2D2DF1] font-semibold" href="/auth/forgot-password">
            Reset
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button
          loaderText="Signing in..."
          disabled={!isFormValid}
          loading={isLoading}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
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
