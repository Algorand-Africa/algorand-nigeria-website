'use client';

import { useForumActions } from '@/actions/forum';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostCardCollapsed, PostCardCollapsedSkeleton } from '@/components/post-card/collapsed';
import { IForumPostPreview } from '@/interface/forum.interface';

export const TrendingPosts = () => {
  const { getAllPostPreviews } = useForumActions();
  const [trendingPosts, setTrendingPosts] = useState<IForumPostPreview[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingPosts = async () => {
    setLoading(true);
    const response = await getAllPostPreviews({
      page: 1,
      pageSize: 10,
      sortBy: 'numberOfComments',
    });
    if (response) {
      setTrendingPosts(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingPosts();
  }, []);

  return (
    <div className="flex flex-col gap-[15px] bg-[#FAFAFC] rounded-[10px] p-4 h-fit min-h-[500px] w-full">
      <h4 className="text-[14px] leading-[140%] text-[#000] font-Trap-700 pb-1 border-b border-[#ECECEC] px-[26px] py-[17px]">
        Trending Posts
      </h4>

      {/* Posts */}
      <div className="flex flex-col gap-[13px]">
        {trendingPosts.map((post) => (
          <PostCardCollapsed key={post.id} data={post} />
        ))}
        {loading && Array.from({ length: 5 }, (_, i) => <PostCardCollapsedSkeleton key={i} />)}
      </div>
    </div>
  );
};
