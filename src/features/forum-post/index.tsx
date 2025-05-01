'use client';

import { ForumCategoryOverview } from './forum-category-overview';
import { PostDetails } from './post-details';

export const ForumPost = () => {
  return (
    <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
      <div className="w-full lg:flex-1">
        <PostDetails />
      </div>
      <div className="w-full lg:w-[369px] hidden lg:flex">{/* <ForumCategoryOverview /> */}</div>
    </div>
  );
};
