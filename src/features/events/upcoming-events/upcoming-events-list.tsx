'use client';

import { REAL_UPCOMING_EVENTS } from '@/constants/mock-events.constant';
import { UpcomingEventItem } from './upcoming-event-item';
import { motion } from 'framer-motion';

export const UpcomingEventsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 my-6 md:my-20">
        {REAL_UPCOMING_EVENTS.map((event, index) => (
          <UpcomingEventItem {...event} key={index} />
        ))}
      </div>
    </motion.div>
  );
};
