import { IProfile, Token } from '@/interface';
import { atom } from 'recoil';

export const authAtom = atom<Token | null>({
  default: null,
  key: 'auth-atom',
});

export const profileAtom = atom<IProfile | null>({
  default: null,
  key: 'profile-atom',
});
