import { MOCK_UPCOMING_EVENTS, REAL_UPCOMING_EVENTS } from '@/constants/mock-events.constant';
import { UpcomingEventItem } from './upcoming-event-item';

export const UpcomingEventsList = () => {
  return (
    <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 my-6 md:my-20">
      {REAL_UPCOMING_EVENTS.map((event, index) => (
        <UpcomingEventItem {...event} key={index} />
      ))}
    </div>
  );
};
