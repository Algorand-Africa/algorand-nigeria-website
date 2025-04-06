'use client';

import { REAL_UPCOMING_EVENTS } from '@/constants/mock-events.constant';
import { useEventsActions } from '@/actions/events';
import { EventTestimonies } from './event-testimonies';
import { PastEvents } from './past-events';
import { UpcomingEvents } from './upcoming-events';
import { IEvent, IPastEvent } from '@/interface/event.interface';
import { useEffect, useState } from 'react';

export const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
  const { getAllEvents } = useEventsActions();

  const fetchUpcomingEvents = async () => {
    const events = await getAllEvents({ page: 1, status: 'upcoming' });
    if (events) {
      setUpcomingEvents(events.data);
    }
  };

  const fetchPastEvents = async () => {
    const events = await getAllEvents({ page: 1, status: 'past' });
    if (events) {
      setPastEvents(events.data);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents();
    fetchPastEvents();
  }, []);

  return (
    <>
      {upcomingEvents.length > 0 && <UpcomingEvents upcomingEvents={upcomingEvents} />}
      {<PastEvents pastEvents={pastEvents} />}
      {/* <EventTestimonies /> */}
    </>
  );
};
