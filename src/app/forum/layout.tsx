import { ForumLayout } from '@/components/forum-layout';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <ForumLayout>{children}</ForumLayout>;
}
