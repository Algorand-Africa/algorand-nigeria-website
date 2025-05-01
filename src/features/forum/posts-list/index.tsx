'use client';

import { PaginationNavigation } from '@/components/pagination-navigation';
import classNames from 'classnames';
import { PostCard } from '@/components/post-card';

export const PostsList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[19px] lg:pt-[26px]">
        {/* Filters */}
        <div className="flex items-center gap-4 lg:gap-9 pb-[10px] border-b border-[#EAE5E5]">
          <div className="flex items-center gap-2">
            <p className="text-[#6D6D6D] font-Trap-600 text-xs">Sort by:</p>
            <select
              className={classNames(
                'min-w-[70px] h-[24px] rounded-[100px] gap-[10px] py-[3px] px-[10px]',
                'text-[#000000] font-Trap-600 text-xs outline-none bg-[#F2F2F2]',
              )}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Popularty</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#6D6D6D] font-Trap-600 text-xs">Categories:</p>
            <select
              className={classNames(
                'min-w-[70px] h-[24px] rounded-[100px] gap-[10px] py-[3px] px-[10px]',
                'text-[#2f2f2f] font-Trap-600 text-xs outline-none bg-[#F2F2F2]',
              )}
            >
              <option value="all">All</option>
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
          {Array.from({ length: 10 }, (_, i) => (
            <PostCard key={i} />
          ))}
        </div>

        {/* Pagination */}
        <PaginationNavigation currentPage={1} totalPages={10} goTo={() => {}} />
      </div>
    </div>
  );
};
