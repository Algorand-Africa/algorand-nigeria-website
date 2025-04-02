'use client';
import { useAuthActions } from '@/actions/auth';
import { Button } from '@/components';
import { Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const ForgotPassword = () => {
  const { forgotPassword } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await forgotPassword(formData.email);

      if (response) {
        toast.success('Password reset email sent');
      }
    } catch (error) {
      toast.error('Failed to send password reset email.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.email.trim() !== '';

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
        Forgot Password
      </h1>
      <div className="flex flex-col gap-4">
        <Input
          label="Email Address"
          placeholder="Enter your email address to reset your password"
          type="email"
          value={formData.email}
          onChange={(data) => handleChange('email', data)}
          required
        />
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button
          onClick={handleSubmit}
          loading={isLoading}
          loaderText="Sending reset link..."
          disabled={!isFormValid}
        >
          Reset Password
        </Button>
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
