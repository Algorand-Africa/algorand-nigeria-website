'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';

export const UpcomingEventSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(
        'bg-[#F9F9F9] rounded-[16px] p-4 md:p-[25px]',
        'font-Inter',
        'flex flex-col',
      )}
    >
      <div className="h-[150px] md:h-[371px] mb-4 md:mb-[25px] w-full bg-gray-200 animate-pulse rounded-[8px]" />
      <div className="h-[28.8px] md:h-[35.2px] mb-4 md:mb-5 bg-gray-200 animate-pulse rounded-[4px] w-3/4" />
      <div className="space-y-2 mb-3 md:mb-4">
        <div className="h-[19.6px] md:h-[25.2px] bg-gray-200 animate-pulse rounded-[4px]" />
        <div className="h-[19.6px] md:h-[25.2px] bg-gray-200 animate-pulse rounded-[4px] w-4/5" />
        <div className="h-[19.6px] md:h-[25.2px] bg-gray-200 animate-pulse rounded-[4px] w-2/3" />
      </div>
      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[9px] md:mt-auto">
        <div className="w-[18px] h-[18px] bg-gray-200 animate-pulse rounded-full" />
        <div className="h-[22.4px] bg-gray-200 animate-pulse rounded-[4px] w-32" />
      </div>
      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[19px]">
        <div className="w-[18px] h-[18px] bg-gray-200 animate-pulse rounded-full" />
        <div className="h-[22.4px] bg-gray-200 animate-pulse rounded-[4px] w-24" />
      </div>
      <div className="h-[60px] w-full bg-gray-200 animate-pulse rounded-[8px]" />
    </motion.div>
  );
};
