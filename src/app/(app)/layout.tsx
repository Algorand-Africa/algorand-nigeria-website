import { PageLayout } from '@/components/page-layout';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <>{children}</>
    </PageLayout>
  );
}
