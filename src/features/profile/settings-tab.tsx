'use client';

import { useMemo, useState } from 'react';
import { useAuthActions } from '@/actions/auth';
import toast from 'react-hot-toast';
import { Button, Input } from '@/components';

export const SettingsTab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { updatePassword } = useAuthActions();

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await updatePassword(formData);

    if (res) {
      toast.success('Password updated successfully');
    }

    setIsLoading(false);
  };

  const canSubmit = useMemo(() => {
    return (
      formData.currentPassword &&
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword === formData.confirmPassword
    );
  }, [formData]);

  return (
    <div className="flex flex-col gap-6 max-w-[520px]">
      <Input
        label="Current password"
        placeholder="Enter your current password"
        type="password"
        value={formData.currentPassword}
        onChange={(e) => setFormData({ ...formData, currentPassword: e })}
      />
      <Input
        label="New password"
        placeholder="Enter your new password"
        type="password"
        value={formData.newPassword}
        onChange={(e) => setFormData({ ...formData, newPassword: e })}
      />
      <Input
        label="Confirm new password"
        placeholder="Confirm your new password"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e })}
      />
      <Button
        className="self-end"
        loading={isLoading}
        loaderText="Changing password..."
        disabled={!canSubmit}
        onClick={handleSubmit}
      >
        Change password
      </Button>
    </div>
  );
};
