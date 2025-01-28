export interface LoginDto {
  phoneNo: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNo: string;
  name: string;
}

export interface VerifyEmailDto {
  verificationToken: string;
}

export interface ForgotPasswordDto {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface IPlan {
  smsCode: string;
  title: string;
  price: number;
  duration: 'day' | 'week' | 'month';
}
