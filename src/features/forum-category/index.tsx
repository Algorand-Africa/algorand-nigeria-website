'use client';

import { FiPlus } from 'react-icons/fi';
import { PostsList } from '../forum/posts-list';
import { CategoryInfoCard } from './category-info-card';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { ICategory } from '@/interface/forum.interface';
import { motion } from 'framer-motion';

const mockCategory: ICategory = {
  id: 'blockchain-basics',
  name: 'Blockchain Basics',
  description: 'Discussions and useful links for SaaS owners, online business owners, and more.',
  createdAt: new Date(),
  totalPosts: 136,
  color: '#2AC441',
  textColor: '#fff',
  image: '',
};

export const ForumCategory = () => {
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
              ${mockCategory.color}00 0%, 
              ${mockCategory.color} 45%,
              ${mockCategory.color} 55%, 
              ${mockCategory.color}00 100%
            )`,
            backgroundSize: '200% 100%',
          }}
        >
          <div className="bg-[#F9F9F9] h-[45px] w-[45px] rounded-[100%] flex items-center justify-center">
            <FaArrowLeftLong size={24} color="#6D6D6D" />
          </div>

          <div
            className="w-[99px] h-[99px] rounded-[100%] absolute left-[46px] bottom-[-50px]"
            style={{ backgroundColor: mockCategory.color, border: '5px solid #FFF' }}
          />
        </motion.div>
        <div className="w-full mt-[9px] flex justify-between items-center pl-[161px]">
          <h4 className="text-[32px] font-Trap-700 text-[#000] leading-[110%] tracking-[-0.01em]">
            {mockCategory.name}
          </h4>
          <div className="flex items-center py-[10px] px-[30px] border border-[#3B7FE4] rounded-[100px] gap-[8px] cursor-pointer">
            <FiPlus color="#3B7FE4" />
            <span className="text-[14px] font-Trap-600 text-[#3B7FE4] leading-[140%] tracking-[0.01em]">
              Ask a question
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
        <div className="md:hidden mb-[45px]">
          <CategoryInfoCard {...mockCategory} />
        </div>
        <div className="w-full lg:flex-1">
          <PostsList />
        </div>
        <div className="w-full lg:w-[369px] hidden lg:flex">
          <CategoryInfoCard {...mockCategory} />
        </div>
      </div>
    </>
  );
};
