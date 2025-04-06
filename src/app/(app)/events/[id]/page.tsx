import { EventDetails } from '@/features/event-details';

export default function Page({
  searchParams,
  params,
}: {
  searchParams: { token: string };
  params: { id: string };
}) {
  return <EventDetails token={searchParams.token} id={params.id} />;
}
