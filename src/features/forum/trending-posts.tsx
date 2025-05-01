'use client';

import { PostCardCollapsed } from '@/components/post-card/collapsed';

export const TrendingPosts = () => {
  return (
    <div className="flex flex-col gap-[15px] bg-[#FAFAFC] rounded-[10px] p-4 h-fit min-h-[500px] w-full">
      <h4 className="text-[14px] leading-[140%] text-[#000] font-Trap-700 pb-1 border-b border-[#ECECEC] px-[26px] py-[17px]">
        Trending Posts
      </h4>

      {/* Posts */}
      <div className="flex flex-col gap-[13px]">
        {Array.from({ length: 10 }, (_, i) => (
          <PostCardCollapsed key={i} />
        ))}
      </div>
    </div>
  );
};
