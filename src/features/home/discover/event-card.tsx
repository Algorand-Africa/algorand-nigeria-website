'use client';

import classNames from 'classnames';
import Link from 'next/link';
import styles from './index.module.scss';
import { CalendarIcon } from '@/assets/icons/calendar.icon';
import { LocationIcon } from '@/assets/icons/location.icon';
import { ArrowIcon } from '@/assets/icons/arrow.icon';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  rsvp: string;
}

export const EventCard = ({ title, description, date, location, image, rsvp }: Props) => {
  return (
    <motion.div
      className={classNames(styles.event_card)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt="Event image"
        className={classNames(
          'h-[200px] md:h-[500px] md:w-[500px] object-cover rounded-lg',
          'md:rounded-[25px]',
        )}
      />
      <div className="flex flex-col md:flex-1">
        <h2
          className={classNames(
            'pt-8 md:pt-0 font-Inter text-[#001324] font-[700] text-[24px]',
            'leading-[28.8px] md:text-[42px] md:leading-[46.2px]',
          )}
        >
          {title}
        </h2>
        <p
          className={classNames(
            'pt-2 md:pt-5 font-Inter text-[#4C5965] font-[400] text-[18px]',
            'leading-[25.2px] md:text-[24px] md:leading-[28.8px]',
          )}
        >
          {description}
        </p>

        <div className="flex flex-col pt-2 md:pt-4 gap-2">
          <div className="flex flex-row items-center gap-2">
            <CalendarIcon />
            <p
              className={classNames('font-Inter font-[400] text-sm text-[#4C5965]', 'md:text-base')}
            >
              {date}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <LocationIcon />
            <p
              className={classNames('font-Inter font-[400] text-sm text-[#4C5965]', 'md:text-base')}
            >
              {location}
            </p>
          </div>
        </div>

        {rsvp && (
          <Link
            className={classNames(
              'pt-5 flex flex-row items-center font-Inter font-[700] text-sm',
              'text-[#6D6D6D] hover:text-[#001324] transition-colors duration-300',
              'gap-2 md:text-[24px] md:leading-[28.8px] group',
            )}
            href={rsvp}
            target="_blank"
          >
            <span className="underline">Register Now</span>
            <ArrowIcon
              className={classNames(
                'md:text-[37.2px] text-[24px] transition-transform duration-300',
                'group-hover:translate-x-1',
              )}
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
};
