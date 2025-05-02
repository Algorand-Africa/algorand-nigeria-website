'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  name: string;
  description: string;
  color: string;
  totalPosts: number;
}

export const CategoryItem = ({ id, name, description, color, totalPosts }: Props) => {
  return (
    <Link href={`/forum/category/${id}`} className="block">
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        className={classNames(
          'bg-[#F9F9F9] px-[22px] py-[25px] rounded-[10px]',
          'border border-[#DAD4D4]',
          'md:w-[400px] h-[120px] w-full cursor-pointer',
        )}
      >
        <div className="flex items-center gap-[8px] mb-3">
          <div style={{ backgroundColor: color }} className="w-[35px] h-[35px] rounded-[8px]" />

          <div>
            <h4 className="text-[#000] font-Trap-700 text-[16px] leading-[100%] line-clamp-1 m-0">
              {name}
            </h4>
            <p className="text-[#000] font-Trap-400 text-[10px] leading-[140%]">
              {totalPosts} Post{totalPosts > 1 || totalPosts === 0 ? 's' : ''}
            </p>
          </div>
        </div>

        <p className="text-[#000] font-Trap-400 text-[10px] leading-[100%] line-clamp-2 m-0">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};
