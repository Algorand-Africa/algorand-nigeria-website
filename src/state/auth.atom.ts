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

export const profilePhotoBgIndexAtom = atom<number>({
  default: 0,
  key: 'profile-photo-bg-index-atom',
});
