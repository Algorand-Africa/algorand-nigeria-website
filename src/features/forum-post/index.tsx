'use client';

import { useState } from 'react';
import { ForumCategoryOverview } from './forum-category-overview';
import { PostDetails } from './post-details';
import { IForumPost } from '@/interface/forum.interface';

export const ForumPost = () => {
  const [post, setPost] = useState<IForumPost | null>(null);

  return (
    <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
      <div className="w-full lg:flex-1">
        <PostDetails onChangePost={setPost} />
      </div>
      <div className="w-full lg:w-[369px] hidden lg:flex">
        <ForumCategoryOverview categoryName={post?.category} />
      </div>
    </div>
  );
};
