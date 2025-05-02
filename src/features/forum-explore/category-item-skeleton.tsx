'use client';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export const CategoryItemSkeleton = () => {
  return (
    <div className="block">
      <div
        className={classNames(
          'bg-[#F9F9F9] px-[22px] py-[25px] rounded-[10px]',
          'border border-[#DAD4D4]',
          'md:w-[400px] h-[120px] w-full',
        )}
      >
        <div className="flex items-center gap-[8px] mb-3">
          <div className="w-[35px] h-[35px] rounded-[8px] animate-pulse bg-gray-200" />

          <div>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1" />
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="h-3 w-full bg-gray-200 rounded animate-pulse mt-4" />
      </div>
    </div>
  );
};
