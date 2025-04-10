import { useClient } from '@/hooks/use-client';
import { Token } from '@/interface';
import {
  ILogin,
  IProfile,
  IUpdateProfile,
  ISignUp,
  IUpdatePassword,
  ICreateEnquiry,
} from '@/interface/auth.interface';
import { authAtom, profileAtom } from '@/state';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';

export const useAuthActions = () => {
  const client = useClient();
  const setAuth = useSetRecoilState(authAtom);
  const setProfile = useSetRecoilState(profileAtom);

  async function getFallBackToken(): Promise<Token | undefined> {
    try {
      const response = await fetch('/api/auth');
      const data = await response.json();

      if (!!data.accessToken && !!data.expiresIn && !!data.expiryTime) {
        const newToken: Token = {
          accessToken: data.accessToken,
          expiresIn: data.expiresIn,
          expiryTime: data.expiryTime,
        };

        return newToken;
      }
    } catch (err) {
      return undefined;
    }
  }

  const logout = useCallback(async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });

    setAuth(null);
    setTimeout(() => {
      window.location.reload();
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

    const response = await client.get<IProfile>(url, undefined, { redirectIfUnauthorized: false });

    if (response.data) {
      setProfile(response.data);
      return response.data;
    } else {
      // toast.error(String(response.error?.toString()));
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
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/profile/avatar`;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = await getFallBackToken();

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token?.accessToken}`,
        },
      });

      const result = await response.json();

      return result;
    } catch (err) {
      toast.error(String(err?.toString()));
      return undefined;
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

  const createEnquiry = useCallback(async (dto: ICreateEnquiry) => {
    const { fullName, email, phone, message, enquiryType } = dto;

    const cleanedDto: any = { message, enquiryType };

    if (fullName) {
      cleanedDto.fullName = fullName;
    }

    if (email) {
      cleanedDto.email = email;
    }

    if (phone) {
      cleanedDto.phone = phone;
    }

    const url = `/customer-enquiry`;

    const response = await client.post(url, cleanedDto);

    return response;
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
    createEnquiry,
  };
};
