'use client';

import { IForumCategory } from '@/interface/forum.interface';
import classNames from 'classnames';
import { CategoryItem } from './category-item';
import { CategoryItemSkeleton } from './category-item-skeleton';
import { useForumActions } from '@/actions/forum';
import { useEffect, useState } from 'react';

export const ForumExplore = () => {
  const { getAllForumCategories } = useForumActions();

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<IForumCategory[]>([]);

  const fetchCategories = async () => {
    setLoading(true);
    const response = await getAllForumCategories({ page: 1, pageSize: 100 });

    if (response) {
      setCategories(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="h-full flex flex-col md:justify-center items-center">
      <div
        className={classNames('text-[#000] font-Trap-600 text-[26px]', 'leading-[140%] mb-[13px]')}
      >
        Explore Categories
      </div>

      <div className={classNames('grid grid-cols-1 md:grid-cols-2 gap-[16px]')}>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <CategoryItemSkeleton key={index} />)
          : categories.map((category) => <CategoryItem key={category.id} {...category} />)}
      </div>
    </div>
  );
};
