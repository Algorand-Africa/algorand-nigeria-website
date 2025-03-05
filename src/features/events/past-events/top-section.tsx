'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const TopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={classNames(
          'flex items-center justify-end pt-[40px] ',
          'md:pt-[100px] md:pr-[32px] gap-[4px] md:text-[32px] md:leading-[35.2px] font-[700]',
          'text-[#279795] font-Inter text-[14px] leading-[19.6px]',
          'mb-[23.4px] md:mb-[80px]',
        )}
      >
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Past</span> Events
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={classNames(
          'text-[#000000] font-medium font-Inter mb-[24px] md:mb-[16px]',
          'text-[42px] leading-[46.2px] md:text-[130px] md:leading-[157.33px]',
        )}
      >
        Catch Up on Past Events in The Community
      </motion.div>
    </div>
  );
};
