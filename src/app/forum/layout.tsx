import { ForumLayout } from '@/components/forum-layout';

interface Props {
  children: React.ReactNode;
  searchParams: {
    search?: string;
  };
}

export default function Layout({ children, searchParams }: Props) {
  return <ForumLayout searchValue={searchParams?.search}>{children}</ForumLayout>;
}
