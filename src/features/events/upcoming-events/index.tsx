import { PageMaxWidth } from '@/components/page-max-width';
import { UpcomingEventsList } from './upcoming-events-list';
import { TopSection } from './top-section';
import { IEvent } from '@/interface/event.interface';

interface UpcomingEventsProps {
  upcomingEvents: IEvent[];
}

export const UpcomingEvents = ({ upcomingEvents }: UpcomingEventsProps) => {
  return (
    <PageMaxWidth>
      <TopSection />
      {/* <Filters /> */}
      <UpcomingEventsList upcomingEvents={upcomingEvents} />
    </PageMaxWidth>
  );
};
