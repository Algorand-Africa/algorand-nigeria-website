'use client';
import { useAuthActions } from '@/actions/auth';
import { Button } from '@/components';
import { Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const ResetPassword = () => {
  const { resetPassword } = useAuthActions();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
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
    const token = searchParams.get('token');

    if (!token) {
      toast.error('Invalid token');
      setIsLoading(false);
      return;
    }

    try {
      const response = await resetPassword(token, formData.password);

      if (response) {
        toast.success('Password reset successfully');
        router.push('/auth/log-in');
      }
    } catch (error) {
      toast.error('Failed to reset password.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '' &&
    formData.password === formData.confirmPassword;

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
        <Input
          label="Password"
          placeholder="Enter your new password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e)}
          required
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your new password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e)}
          required
        />
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button
          onClick={handleSubmit}
          loading={isLoading}
          loaderText="Resetting password.."
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
