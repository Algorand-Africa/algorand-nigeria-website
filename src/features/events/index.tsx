import { EventTestimonies } from './event-testimonies';
import { PastEvents } from './past-events';
import { UpcomingEvents } from './upcoming-events';

export const Events = () => {
  return (
    <>
      <UpcomingEvents />
      <PastEvents />
      {/* <EventTestimonies /> */}
    </>
  );
};
