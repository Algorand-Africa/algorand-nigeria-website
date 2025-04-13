import { PageMaxWidth } from '@/components/page-max-width';
import { TopSection } from './top-section';
import { PastEventsList } from './past-event-list';
import { IEvent } from '@/interface/event.interface';

export const PastEvents = () => {
  return (
    <PageMaxWidth>
      <TopSection />
      <PastEventsList />
    </PageMaxWidth>
  );
};
