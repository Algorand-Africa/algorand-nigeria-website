'use client';

import { useAuthActions } from '@/actions/auth';
import { Button } from '@/components';
import { Checkbox, Input } from '@/components/inputs';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const SignUp = () => {
  const router = useRouter();
  const { signUp } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value !== '');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Full name validation
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Country validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await signUp({
        email: formData.email,
        fullName: `${formData.firstName} ${formData.lastName}`,
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      if (response.data) {
        toast.success('Account created successfully!');
        router.push(`/auth/verify-your-account?email=${formData.email}`);
      } else {
        toast.error(String(response.error));
      }
    } catch (error) {
      toast.error('An error occurred during sign up');
    } finally {
      setIsLoading(false);
    }
  };

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
          <Input
            label="First Name"
            placeholder="Enter your first name"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e)}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e)}
            error={errors.firstName}
          />
        </div>
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.trim())}
          error={errors.email}
        />
        <Input
          label="Username"
          placeholder="Enter your username"
          type="text"
          value={formData.username}
          onChange={(e) => handleInputChange('username', e.trim())}
          error={errors.username}
        />
        <Input
          label="Password"
          placeholder="Enter preferred password..."
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.trim())}
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          placeholder="Re-enter preferred password..."
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.trim())}
          error={errors.confirmPassword}
        />
      </div>
      <div className="flex flex-col gap-[26px]">
        <Button
          loading={isLoading}
          loaderText="Creating account..."
          onClick={handleSubmit}
          disabled={!isFormComplete() || !terms}
        >
          Sign Up
        </Button>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Checkbox checked={terms} onClick={() => setTerms(!terms)} />
            <p className="text-[#645D5D] text-sm text-center">
              I agree to the{' '}
              <Link
                target="_blank"
                className="text-[#2D2DF1] font-[500]"
                href="https://algorand.co/algorand-foundation/disclaimer"
              >
                Terms
              </Link>{' '}
              and{' '}
              <Link
                target="_blank"
                className="text-[#2D2DF1] font-[500]"
                href="https://algorand.co/algorand-foundation/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <p className="text-[#645D5D] text-sm text-center mt-[-8px]">
            Already have an account?{' '}
            <Link className="text-[#2D2DF1] font-semibold" href="/auth/log-in">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
