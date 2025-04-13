'use client';

import { useEventsActions } from '@/actions/events';
import { EventTestimonies } from './event-testimonies';
import { PastEvents } from './past-events';
import { UpcomingEvents } from './upcoming-events';
import { IEvent, IPastEvent } from '@/interface/event.interface';
import { useEffect, useState } from 'react';

export const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const { getAllEvents } = useEventsActions();

  const fetchUpcomingEvents = async () => {
    const events = await getAllEvents({ page: 1, status: 'upcoming', pageSize: 20 });
    if (events) {
      setUpcomingEvents(events.data);
    }
  };
  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

  return (
    <>
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      {<PastEvents />}
      {/* <EventTestimonies /> */}
    </>
  );
};
