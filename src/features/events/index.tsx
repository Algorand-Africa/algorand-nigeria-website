import { REAL_UPCOMING_EVENTS } from '@/constants/mock-events.constant';
import { EventTestimonies } from './event-testimonies';
import { PastEvents } from './past-events';
import { UpcomingEvents } from './upcoming-events';

export const Events = () => {
  return (
    <>
      {REAL_UPCOMING_EVENTS.length > 0 && <UpcomingEvents />}
      <PastEvents />
      {/* <EventTestimonies /> */}
    </>
  );
};
