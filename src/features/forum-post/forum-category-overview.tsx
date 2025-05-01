'use client';
import { useForumActions } from '@/actions/forum';
import { PostCardCollapsed } from '@/components/post-card/collapsed';
import { IForumCategory, IForumPost, IForumPostPreview } from '@/interface/forum.interface';
import { parseNotificationTime } from '@/utils';
import { useEffect } from 'react';
import { useState } from 'react';

interface Props {
  categoryName?: string;
}

export const ForumCategoryOverview = ({ categoryName }: Props) => {
  const [category, setCategory] = useState<IForumCategory | null>(null);
  const [posts, setPosts] = useState<IForumPostPreview[]>([]);
  const { getAllPostPreviews, getAllForumCategories } = useForumActions();

  const fetchCategory = async () => {
    const response = await getAllForumCategories({ search: categoryName || '' });

    if (response?.data.length) {
      setCategory(response.data[0]);
    }
  };

  const fetchPosts = async () => {
    if (!category) return;

    const response = await getAllPostPreviews({ categoryId: category.id });

    if (response) {
      setPosts(response.data);
    }
  };

  useEffect(() => {
    if (categoryName) {
      fetchCategory();
    }
  }, [categoryName]);

  useEffect(() => {
    if (category) {
      fetchPosts();
    }
  }, [category]);

  return (
    <div className="flex flex-col gap-6 bg-[#FAFAFC] rounded-[10px] p-4 h-fit min-h-[500px] w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          {category ? (
            <h4 className="text-[32px] leading-[110%] text-[#000] font-Trap-700">
              {category.name}
            </h4>
          ) : (
            <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse" />
          )}
          {category ? (
            <h5 className="text-sm leading-[140%] text-[#000] font-Trap-400">
              {category.description}
            </h5>
          ) : (
            <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse" />
          )}
        </div>
        <div className="flex flex-col gap-[11px]">
          {/* Created */}
          <div className="flex flex-row gap-[14px] items-center">
            {/* Calendar */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 1.5V3M4.5 1.5V3"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 12.75L7.49999 10.0104C7.49999 9.86663 7.39744 9.75 7.27094 9.75H6.75M10.2223 12.75L11.2381 10.0119C11.2856 9.88388 11.1846 9.75 11.0405 9.75H9.75"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M1.875 9.1824C1.875 5.91446 1.875 4.28046 2.81409 3.26523C3.75318 2.25 5.26462 2.25 8.2875 2.25H9.7125C12.7354 2.25 14.2469 2.25 15.1859 3.26523C16.125 4.28046 16.125 5.91446 16.125 9.1824V9.5676C16.125 12.8356 16.125 14.4695 15.1859 15.4848C14.2469 16.5 12.7354 16.5 9.7125 16.5H8.2875C5.26462 16.5 3.75318 16.5 2.81409 15.4848C1.875 14.4695 1.875 12.8356 1.875 9.5676V9.1824Z"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 6H13.5"
                stroke="#6D6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {category ? (
              <p className="text-xs leading-[140%] text-[#6D6D6D] font-Trap-400">
                Created {parseNotificationTime(category.createdAt)}
              </p>
            ) : (
              <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse" />
            )}
          </div>

          {/* Visibility */}
          <div className="flex flex-row gap-[14px] items-center">
            {/* Globe */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                stroke="#6D6D6D"
                stroke-width="1.125"
              />
              <path
                d="M6 9C6 13.5 9 16.5 9 16.5C9 16.5 12 13.5 12 9C12 4.5 9 1.5 9 1.5C9 1.5 6 4.5 6 9Z"
                stroke="#6D6D6D"
                stroke-width="1.125"
                stroke-linejoin="round"
              />
              <path
                d="M15.75 11.25H2.25"
                stroke="#6D6D6D"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.75 6.75H2.25"
                stroke="#6D6D6D"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {category ? (
              <p className="text-xs leading-[140%] text-[#6D6D6D] font-Trap-400">Public</p>
            ) : (
              <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse" />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[18px] leading-[140%] text-[#6D6D6D] font-Trap-700">
            {category ? category.totalPosts : '---'}
          </h4>
          <p className="text-[10px] leading-[140%] text-[#6D6D6D] font-Trap-400">Total Posts</p>
        </div>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-[13px]">
        {posts.map((post) => (
          <PostCardCollapsed key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};
