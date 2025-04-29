'use client';

import { useState } from 'react';
import { mockCategories, mockColorSchemes, mockImages, mockTitles } from './mock';
import classNames from 'classnames';

export const PostCardCollapsed = () => {
  const [data, setData] = useState({
    image: mockImages[Math.floor(Math.random() * mockImages.length)],
    colorScheme: mockColorSchemes[Math.floor(Math.random() * mockColorSchemes.length)],
    category: mockCategories[Math.floor(Math.random() * mockCategories.length)],
    title: mockTitles[Math.floor(Math.random() * mockTitles.length)],
    profileImage: mockImages[Math.floor(Math.random() * mockImages.length)],
  });

  return (
    <div className="flex items-start gap-3 pb-2 lg:pb-4 border-b border-[#EAE5E5]">
      <div className="flex flex-col gap-[5px] flex-1">
        <div className="flex flex-row items-center gap-2 flex-wrap">
          <div
            style={{
              background: data.colorScheme.background,
              color: data.colorScheme.foreground,
            }}
            className={classNames(
              'flex justify-center items-center pt-[2px] px-[9px] bg-[#F5F5F5] rounded-[100px]',
              'font-Trap-600 text-xs',
            )}
          >
            {data.category}
          </div>
        </div>

        <h4 className="text-sm lg:text-base leading-[140%] font-Trap-600 text-[#000000]">
          {data.title}
        </h4>

        <div className="flex flex-row items-center gap-[6px] flex-wrap">
          <p className="text-[8px] leading-[140%] text-[#000] font-Trap-500">25 upvotes</p>
          <svg
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#7C7979" />
          </svg>

          <p className="text-[8px] leading-[140%] text-[#000] font-Trap-500">147 comments</p>
        </div>
      </div>
    </div>
  );
};
