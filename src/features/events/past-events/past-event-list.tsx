'use client';

import { REAL_PAST_EVENTS } from '@/constants/mock-events.constant';
import { PastEventItem } from './past-event-item';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useEventsActions } from '@/actions/events';
import { IEvent } from '@/interface/event.interface';
import { PastEventSkeleton } from './past-event-skeleton';

export const PastEventsList = () => {
  const ref = useRef(null);
  const loadMoreRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isLoadMoreVisible = useInView(loadMoreRef);

  const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { getAllEvents } = useEventsActions();

  const fetchPastEvents = async (pageNumber: number) => {
    setLoading(true);
    const events = await getAllEvents({ page: pageNumber, status: 'past', pageSize: 5 });
    setLoading(false);

    if (events) {
      setPastEvents((prev) => {
        const newEvents = [...prev, ...events.data];
        const uniqueEvents = newEvents.filter(
          (event, index, self) => index === self.findIndex((t) => t.id === event.id),
        );
        return uniqueEvents;
      });
      setHasMore(events.hasNext);
    }
  };

  useEffect(() => {
    fetchPastEvents(1);
  }, []);

  useEffect(() => {
    if (isLoadMoreVisible && !loading && hasMore) {
      setPage((prev) => {
        const newPage = prev + 1;
        fetchPastEvents(newPage);
        return newPage;
      });
    }
  }, [isLoadMoreVisible, loading, hasMore]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col gap-6 md:gap-8 mb-[102.6px] md:mb-[109px]"
    >
      {pastEvents.map((event, index) => (
        <motion.div key={event.id || index} variants={containerVariants}>
          <PastEventItem {...event} key={event.id} />
        </motion.div>
      ))}

      {loading && (
        <>
          <PastEventSkeleton />
          <PastEventSkeleton />
        </>
      )}

      {hasMore && <div ref={loadMoreRef} className="h-10" />}
    </motion.div>
  );
};
