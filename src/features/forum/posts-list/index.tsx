'use client';

import { PaginationNavigation } from '@/components/pagination-navigation';
import classNames from 'classnames';
import { PostCard, PostCardSkeleton } from '@/components/post-card';
import { IForumCategory, IForumPostPreview } from '@/interface/forum.interface';
import { useState, useEffect } from 'react';
import { useForumActions } from '@/actions/forum';
import { useSearchParams } from 'next/navigation';
import { Paginated } from '@/interface/pagination.interface';
import { EmptyState } from '@/components/empty-state';

interface Props {
  categoryId?: string;
}

export const PostsList = ({ categoryId: initialCategoryId }: Props) => {
  const { getAllForumCategories, getAllPostPreviews } = useForumActions();
  const [forumCategories, setForumCategories] = useState<IForumCategory[]>();
  const [selectedForumCategory, setSelectedForumCategory] = useState<IForumCategory>();
  const searchParams = useSearchParams();
  const [postPreviews, setPostPreviews] = useState<Paginated<IForumPostPreview>>();

  const fetchForumCategories = async () => {
    const response = await getAllForumCategories({
      pageSize: 100,
    });

    if (response) {
      setForumCategories(response.data);
    }
  };

  const fetchPostPreviews = async (page = 1, showLoader = false) => {
    if (showLoader) {
      setPostPreviews(undefined);
    }

    const search = searchParams.get('search');
    const categoryId = selectedForumCategory?.id;

    const response = await getAllPostPreviews({
      page,
      pageSize: 10,
      search: search || undefined,
      categoryId: initialCategoryId || categoryId,
    });

    if (response) {
      setPostPreviews(response);
    } else {
      setPostPreviews({
        data: [],
        page: 1,
        pageSize: 10,
        total: 0,
        hasNext: false,
        hasPrevious: false,
      });
    }
  };

  useEffect(() => {
    fetchForumCategories();
  }, []);

  useEffect(() => {
    fetchPostPreviews();
  }, [selectedForumCategory, searchParams]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[19px] lg:pt-[26px]">
        {/* Filters */}
        <div className="flex items-center gap-4 lg:gap-9 pb-[10px] border-b border-[#EAE5E5]">
          {/* <div className="flex items-center gap-2">
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
          </div> */}
          {!!forumCategories && !initialCategoryId && (
            <div className="flex items-center gap-2">
              <p className="text-[#6D6D6D] font-Trap-600 text-xs">Categories:</p>
              <select
                className={classNames(
                  'min-w-[70px] h-[24px] rounded-[100px] gap-[10px] py-[3px] px-[10px]',
                  'text-[#2f2f2f] font-Trap-600 text-xs outline-none bg-[#F2F2F2]',
                )}
                onChange={(e) => {
                  const category = forumCategories.find(
                    (category) => category.id === e.target.value,
                  );
                  setSelectedForumCategory(category);
                }}
                value={selectedForumCategory?.id || 'all'}
              >
                <option value="all">All</option>
                {forumCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
          {postPreviews?.data.map((post) => (
            <PostCard
              refresh={() => fetchPostPreviews(postPreviews.page || 1)}
              key={post.id}
              data={post}
            />
          ))}
          {!postPreviews && Array.from({ length: 10 }, (_, i) => <PostCardSkeleton key={i} />)}
          {postPreviews?.data.length === 0 && (
            <EmptyState title="No posts found" description="There are no posts to display." />
          )}
        </div>

        {/* Pagination */}
        <PaginationNavigation
          currentPage={postPreviews?.page || 1}
          totalPages={Math.ceil((postPreviews?.total || 0) / (postPreviews?.pageSize || 10))}
          goTo={(page) => fetchPostPreviews(page)}
        />
      </div>
    </div>
  );
};
