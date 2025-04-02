import { useClient } from '@/hooks/use-client';
import { Token } from '@/interface';
import {
  ILogin,
  IProfile,
  IUpdateProfile,
  ISignUp,
  IUpdatePassword,
} from '@/interface/auth.interface';
import { authAtom, profileAtom } from '@/state';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';

export const useAuthActions = () => {
  const client = useClient();
  const setAuth = useSetRecoilState(authAtom);
  const { push } = useRouter();
  const setProfile = useSetRecoilState(profileAtom);

  const logout = useCallback(async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });

    setAuth(null);
    setTimeout(() => {
      push('/');
    }, 500);
  }, []);

  const login = useCallback(async (dto: ILogin) => {
    const url = `/auth/login`;

    const response = await client.post<Token>(url, dto, { redirectIfUnauthorized: false });

    if (response.data) {
      if (response.data?.user?.verified) {
        const expiryTime = new Date(Date.now() + Number(response.data.expiresIn) * 1000);
        setAuth({ ...response.data, expiryTime: expiryTime.getTime() });
        await saveTokenToCookie({ ...response.data, expiryTime: expiryTime.getTime() });
      }
    } else {
      toast.error(String(response.error?.toString()));
    }

    return response;
  }, []);

  const saveTokenToCookie = async (token: Token) => {
    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const signUp = useCallback(async (dto: ISignUp) => {
    const url = `/auth/sign-up`;

    const response = await client.post<IProfile>(
      url,
      { ...dto, callbackUrl: window.location.origin },
      { redirectIfUnauthorized: false },
    );

    return response;
  }, []);

  const verifyEmail = useCallback(async (token: string) => {
    const url = `/auth/verify-email`;

    const response = await client.post<IProfile>(url, { token }, { redirectIfUnauthorized: false });

    return response;
  }, []);

  const resendVerificationEmail = useCallback(async (email: string) => {
    const url = `/auth/resend-email-verification-link`;

    const response = await client.post<IProfile>(
      url,
      { email, callbackUrl: window.location.origin },
      { redirectIfUnauthorized: false },
    );

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    const url = `/auth/forgot-password`;

    const response = await client.post<IProfile>(
      url,
      { email, callbackUrl: window.location.origin },
      { redirectIfUnauthorized: false },
    );

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const resetPassword = useCallback(async (token: string, newPassword: string) => {
    const url = `/auth/reset-password`;

    const response = await client.post<IProfile>(
      url,
      { token, newPassword },
      { redirectIfUnauthorized: false },
    );

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const getProfile = useCallback(async () => {
    const url = `/auth/profile`;

    const response = await client.get<IProfile>(url);

    if (response.data) {
      setProfile(response.data);
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const updateProfile = useCallback(async (dto: IUpdateProfile) => {
    const url = `/auth/profile`;

    const response = await client.patch<IProfile>(url, dto);

    if (response.data) {
      setProfile(response.data);
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const uploadProfileImage = useCallback(async (file: File) => {
    const url = `/auth/profile-image`;

    const response = await client.post<IProfile>(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  const updatePassword = useCallback(async (dto: IUpdatePassword) => {
    const url = `/auth/password`;

    const response = await client.patch<IProfile>(url, dto);

    if (response.data) {
      return response.data;
    } else {
      toast.error(String(response.error?.toString()));
    }
  }, []);

  return {
    login,
    logout,
    signUp,
    verifyEmail,
    resendVerificationEmail,
    forgotPassword,
    resetPassword,
    getProfile,
    updateProfile,
    uploadProfileImage,
    updatePassword,
  };
};
