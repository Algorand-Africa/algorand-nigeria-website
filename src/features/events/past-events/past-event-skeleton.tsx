'use client';

import classNames from 'classnames';

export const PastEventSkeleton = () => {
  return (
    <div
      className={classNames(
        'bg-[#192A39] rounded-[32px] p-4 md:p-[25px]',
        'flex flex-col font-Inter animate-pulse',
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-[250px] md:h-[500px] mb-4 md:mb-[40px] w-full bg-gray-700 rounded-[25px]" />
      </div>

      <div className="h-8 md:h-12 bg-gray-700 rounded mb-3 md:mb-5 w-3/4" />
      <div className="h-20 md:h-6 bg-gray-700 rounded mb-4 w-full" />

      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[9px]">
        <div className="w-[18px] h-[18px] bg-gray-700 rounded" />
        <div className="h-[22px] bg-gray-700 rounded w-32" />
      </div>

      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[19px]">
        <div className="w-[18px] h-[18px] bg-gray-700 rounded" />
        <div className="h-[22px] bg-gray-700 rounded w-48" />
      </div>
    </div>
  );
};
