'use client';

import { REAL_UPCOMING_EVENTS } from '@/constants/mock-events.constant';
import { UpcomingEventItem } from './upcoming-event-item';
import { motion } from 'framer-motion';
import { IEvent } from '@/interface/event.interface';
import { UpcomingEventSkeleton } from './upcoming-event-skeleton';

interface UpcomingEventsListProps {
  upcomingEvents: IEvent[];
}

export const UpcomingEventsList = ({ upcomingEvents }: UpcomingEventsListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 my-6 md:my-20">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <UpcomingEventItem
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              rsvp={`/events/${event.id}`}
              image={event.image}
            />
          ))
        ) : (
          <>
            <UpcomingEventSkeleton />
            <UpcomingEventSkeleton />
            <UpcomingEventSkeleton />
          </>
        )}
      </div>
    </motion.div>
  );
};
