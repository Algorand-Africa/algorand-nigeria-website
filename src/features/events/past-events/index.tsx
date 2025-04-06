import { PageMaxWidth } from '@/components/page-max-width';
import { TopSection } from './top-section';
import { PastEventsList } from './past-event-list';
import { IEvent } from '@/interface/event.interface';

interface PastEventsProps {
  pastEvents: IEvent[];
}

export const PastEvents = ({ pastEvents }: PastEventsProps) => {
  return (
    <PageMaxWidth>
      <TopSection />
      <PastEventsList pastEvents={pastEvents} />
    </PageMaxWidth>
  );
};
