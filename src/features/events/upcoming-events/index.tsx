import { PageMaxWidth } from '@/components/page-max-width';
import { Filters } from './filters';
import { UpcomingEventsList } from './upcoming-events-list';
import { TopSection } from './top-section';

export const UpcomingEvents = () => {
  return (
    <PageMaxWidth>
      <TopSection />
      {/* <Filters /> */}
      <UpcomingEventsList />
    </PageMaxWidth>
  );
};
