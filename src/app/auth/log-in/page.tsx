import { LogIn } from '@/features/auth/log-in';

export default function Page({ searchParams }: { searchParams: { redirect: string } }) {
  return <LogIn redirect={searchParams.redirect} />;
}
