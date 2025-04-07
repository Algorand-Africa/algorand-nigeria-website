import { AuthWrapper } from '@/providers';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <AuthWrapper>{children}</AuthWrapper>;
}
