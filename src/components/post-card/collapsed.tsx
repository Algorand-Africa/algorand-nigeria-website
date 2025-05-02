'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { IForumPostPreview } from '@/interface/forum.interface';

interface PostCardCollapsedProps {
  showCategory?: boolean;
  data: IForumPostPreview;
}

export const PostCardCollapsed = ({ showCategory = true, data }: PostCardCollapsedProps) => {
  return (
    <Link
      href={`/forum/post/${data.id}`}
      className="flex items-start gap-3 pb-2 lg:pb-4 border-b border-[#EAE5E5]"
    >
      <div className="flex flex-col gap-[5px] flex-1">
        {showCategory && (
          <div className="flex flex-row items-center gap-2 flex-wrap">
            <div
              style={{
                background: data.categoryColor,
                color: data.categoryTextColor,
              }}
              className={classNames(
                'flex justify-center items-center pt-[2px] px-[9px] bg-[#F5F5F5] rounded-[100px]',
                'font-Trap-600 text-xs',
              )}
            >
              {data.category}
            </div>
          </div>
        )}

        <h4 className="text-sm lg:text-base leading-[140%] font-Trap-600 text-[#000000]">
          {data.title}
        </h4>

        <div className="flex flex-row items-center gap-[6px] flex-wrap">
          <p className="text-[8px] leading-[140%] text-[#000] font-Trap-400">
            {data.numberOfUpVotes} upvote{data.numberOfUpVotes > 1 ? 's' : ''}
          </p>
          <svg
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#7C7979" />
          </svg>

          <p className="text-[8px] leading-[140%] text-[#000] font-Trap-400">
            {data.numberOfComments} comment{data.numberOfComments > 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const PostCardCollapsedSkeleton = () => {
  return (
    <div className="flex items-start gap-3 pb-2 lg:pb-4 border-b border-[#EAE5E5]">
      <div className="flex flex-col gap-[5px] flex-1">
        <div className="flex flex-row items-center gap-2 flex-wrap">
          <div className="w-20 h-5 bg-gray-200 rounded-[100px] animate-pulse" />
        </div>

        <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse" />

        <div className="flex flex-row items-center gap-[6px] flex-wrap">
          <div className="w-14 h-3 bg-gray-200 rounded animate-pulse" />

          <svg
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#D9D9D9" />
          </svg>

          <div className="w-16 h-3 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};
