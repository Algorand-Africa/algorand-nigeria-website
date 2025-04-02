export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IProfile {
  id: string;
  email: string;
  fullName: string;
  country: string;
  verified: boolean;
  phone: string;
  timezone: string;
  username: string;
}

export interface IUpdateProfile {
  full_name?: string;
  country?: string;
  phone?: string;
  timezone?: string;
}

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
