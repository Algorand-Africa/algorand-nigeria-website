'use client';

import { useRecoilValue } from 'recoil';
import { profileAtom } from '@/state';
import { useAuthActions } from '@/actions/auth';
import { useEffect, useMemo, useState } from 'react';
import { IUpdateProfile } from '@/interface/auth.interface';
import toast from 'react-hot-toast';
import { Button, Input } from '@/components';

export const ProfileTab = () => {
  const profile = useRecoilValue(profileAtom);
  const { updateProfile } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<IUpdateProfile>({
    full_name: profile?.fullName || '',
    phone: profile?.phone || '',
  });

  const canSubmit = useMemo(() => {
    return formData.full_name !== profile?.fullName || formData.phone !== profile?.phone;
  }, [formData, profile]);

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await updateProfile(formData);

    if (res) {
      toast.success('Profile updated successfully');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setFormData({
      full_name: profile?.fullName || '',
      phone: profile?.phone || '',
    });
  }, [profile]);

  return (
    <div className="flex flex-col gap-6 max-w-[520px]">
      <Input
        label="Full name"
        placeholder="Enter your full name"
        type="text"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e })}
      />
      <Input
        label="Phone number"
        placeholder="Enter your phone number"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e })}
      />

      <Button
        className="self-end w-[150px]"
        loading={isLoading}
        // loaderText="Updating profile..."
        disabled={!canSubmit}
        onClick={handleSubmit}
      >
        Update profile
      </Button>
    </div>
  );
};
