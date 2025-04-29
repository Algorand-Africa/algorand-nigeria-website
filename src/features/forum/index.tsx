'use client';

import { PostsList } from './posts-list';
import { TrendingPosts } from './trending-posts';

export const Forum = () => {
  return (
    <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
      <div className="w-full lg:flex-1">
        <PostsList />
      </div>
      <div className="w-full lg:w-[369px] hidden lg:flex">
        <TrendingPosts />
      </div>
    </div>
  );
};
