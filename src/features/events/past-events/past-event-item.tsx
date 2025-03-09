'use client';

import { TbCalendarMonth } from 'react-icons/tb';
import { SlLocationPin } from 'react-icons/sl';
import classNames from 'classnames';
import { FaCirclePlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  id: string;
}

export const PastEventItem = ({ title, description, date, location, image, id }: Props) => {
  return (
    <Link href={`/events/${id}/past`}>
      <motion.div
        className={classNames(
          'bg-[#192A39] rounded-[32px] p-4 md:p-[25px]',
          'flex flex-col cursor-pointer font-Inter',
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1 }}
      >
        <div className="relative flex items-center justify-center">
          <img
            className={classNames(
              'h-[250px] md:h-[500px] mb-4 md:mb-[40px] w-full',
              'object-cover rounded-[25px]',
            )}
            src={image}
            alt={title}
          />

          {/* <img
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737991767/Frame_1707479429_rhdeyp.png"
            className="absolute z-10"
          /> */}
        </div>

        <h4
          className={classNames(
            'text-[#FFFFFF] font-bold tracking-[-0.01em] mb-3 md:mb-5',
            'text-[28px] leading-[33.6px] md:text-[42px] md:leading-[46.2px]',
            'md:line-clamp-2',
          )}
        >
          {title}
        </h4>
        <p
          className={classNames(
            'text-[#B2B8BD] font-normal tracking-[0.01em] mb-4',
            'text-[18px] leading-[25.2px] md:text-[20px] md:leading-[24px]',
            'line-clamp-5 md:line-clamp-2',
          )}
        >
          {description}
        </p>
        <div className="flex gap-[10.5px] md:gap-2 items-center mb-[9px]">
          <TbCalendarMonth color="#B2B8BD" size={18} />
          <p className="text-[#B2B8BD] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
            {date}
          </p>
        </div>
        <div className="flex gap-[10.5px] md:gap-2 items-center mb-[19px]">
          <SlLocationPin color="#B2B8BD" size={18} />
          <p className="text-[#B2B8BD] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
            {location}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
