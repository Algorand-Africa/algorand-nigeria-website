'use client';

import { MOCK_PAST_EVENTS, REAL_PAST_EVENTS } from '@/constants/mock-events.constant';
import { PastEventItem } from './past-event-item';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const PastEventsList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      {REAL_PAST_EVENTS.map((event, index) => (
        <motion.div key={index} variants={containerVariants}>
          <PastEventItem {...event} />
        </motion.div>
      ))}
    </motion.div>
  );
};
