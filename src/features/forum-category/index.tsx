'use client';

import { FiPlus } from 'react-icons/fi';
import { PostsList } from '../forum/posts-list';
import { CategoryInfoCard } from './category-info-card';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IForumCategory as ICategory } from '@/interface/forum.interface';
import { motion } from 'framer-motion';
import { useForumActions } from '@/actions/forum';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export const ForumCategory = () => {
  const { getForumCategoryById } = useForumActions();
  const [category, setCategory] = useState<ICategory>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchCategory = async () => {
    setLoading(true);
    const response = await getForumCategoryById(id as string);
    if (response) {
      setCategory(response);
      setLoading(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) {
    return (
      <>
        <div className="w-full md:hidden flex">
          <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-[20px]" />
        </div>
        <div className="hidden md:block mb-[34px]">
          <div className="w-full h-[200px] relative rounded-[20px] animate-pulse bg-gray-200" />
          <div className="w-full mt-[9px] flex justify-between items-center pl-[161px]">
            <div className="h-[35px] w-[200px] bg-gray-200 animate-pulse rounded-lg" />
            <div className="h-[40px] w-[150px] bg-gray-200 animate-pulse rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
          <div className="w-full lg:flex-1">
            <PostsList categoryId={(id as string) || undefined} />
          </div>
          <div className="w-full lg:w-[369px] hidden lg:flex">
            <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-[20px]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hidden md:block mb-[34px]">
        <motion.div
          className="w-full h-[200px] relative rounded-[20px] pt-[37px] pl-[30px]"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            background: `linear-gradient(90deg, 
              ${category?.color}00 0%, 
              ${category?.color} 45%,
              ${category?.color} 55%, 
              ${category?.color}00 100%
            )`,
            backgroundSize: '200% 100%',
          }}
        >
          <div
            className="bg-[#F9F9F9] h-[45px] w-[45px] rounded-[100%] flex items-center justify-center cursor-pointer"
            onClick={() => router.back()}
          >
            <FaArrowLeftLong size={24} color="#6D6D6D" />
          </div>

          <div
            className="w-[99px] h-[99px] rounded-[100%] absolute left-[46px] bottom-[-50px]"
            style={{ backgroundColor: category?.color, border: '5px solid #FFF' }}
          />
        </motion.div>
        <div className="w-full mt-[9px] flex justify-between items-center pl-[161px]">
          <h4 className="text-[32px] font-Trap-700 text-[#000] leading-[110%] tracking-[-0.01em]">
            {category?.name}
          </h4>
          <Link
            href={`/forum/create-post?categoryId=${id as string}`}
            className="flex items-center py-[10px] px-[30px] border border-[#3B7FE4] rounded-[100px] gap-[8px] cursor-pointer"
          >
            <FiPlus color="#3B7FE4" />
            <span className="text-[14px] font-Trap-600 text-[#3B7FE4] leading-[140%] tracking-[0.01em]">
              Ask a question
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
        <div className="md:hidden mb-[45px]">
          {category && <CategoryInfoCard {...category} createdAt={category.createdAt as any} />}
        </div>
        <div className="w-full lg:flex-1">
          <PostsList categoryId={(id as string) || undefined} />
        </div>
        <div className="w-full lg:w-[369px] hidden lg:flex">
          {category && <CategoryInfoCard {...category} createdAt={category.createdAt as any} />}
        </div>
      </div>
    </>
  );
};
