import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useClient } from '@/hooks';
import { authAtom } from '@/state';
import { ForgotPasswordDto, LoginDto, SignUpDto, Token } from '@/interface';
import { notify } from '@/utils/notify';

export const useAuthActions = () => {
  const setAuth = useSetRecoilState(authAtom);
  const client = useClient();

  const logout = useCallback(async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });

    setAuth(null);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }, []);

  const login = useCallback(async (dto: LoginDto) => {
    const url = `/auth/login`;

    const response = await client.post<Token>(url, dto, { redirectIfUnauthorized: false });

    if (response.data) {
      setAuth(response.data);
      saveTokenToCookie(response.data);
    } else {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
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

  const signUp = async (dto: SignUpDto) => {
    const url = `/auth/sign-up`;

    const response = await client.post<Token>(url, {
      ...dto,
      callbackUrl: window.location.origin,
    });

    if (response.data) {
      return response.data;
    } else {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
    }
  };

  const verifyEmail = useCallback(async (verificationToken: string) => {
    const url = `/auth/verify`;

    const response = await client.post(url, { verificationToken });
    if (response.error) {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
    }

    return response;
  }, []);

  const resendVerifyOtp = useCallback(async (phoneNo: string) => {
    const url = `/auth/resend-otp`;

    const response = await client.post(url, { phoneNo, callbackUrl: window.location.origin });
    if (response.data) {
      return response.data;
    } else {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
    }
  }, []);

  const forgotPasswordBegin = useCallback(async (email: string) => {
    const url = `/auth/forgot-password-begin`;

    const response = await client.post(url, { email, callbackUrl: window.location.origin });
    if (response.data) {
      return response.data;
    } else {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
    }
  }, []);

  const forgotPasswordEnd = useCallback(async (dto: ForgotPasswordDto) => {
    const url = `/auth/forgot-password-end`;

    const response = await client.put(url, dto);
    if (response.data) {
      return response.data;
    } else {
      notify.error({ title: 'Error', message: String(response.error?.toString()) });
    }
  }, []);

  return {
    logout,
    login,
    signUp,
    verifyEmail,
    resendVerifyOtp,
    forgotPasswordBegin,
    forgotPasswordEnd,
  };
};
