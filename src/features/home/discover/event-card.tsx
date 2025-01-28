import classNames from 'classnames';
import Link from 'next/link';
import styles from './index.module.scss';
import { IoCalendarOutline } from 'react-icons/io5';
import { CalendarIcon } from '@/assets/icons/calendar.icon';
import { LocationIcon } from '@/assets/icons/location.icon';
import { ArrowIcon } from '@/assets/icons/arrow.icon';

export const EventCard = () => {
  return (
    <div className={classNames(styles.event_card)}>
      <img
        src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737629700/f125eff9506ca7fcdbaa86f83965f794_rizawi.jpg"
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
          Algorand 2025 Bootcamp
        </h2>
        <p
          className={classNames(
            'pt-2 md:pt-5 font-Inter text-[#4C5965] font-[400] text-[18px]',
            'leading-[25.2px] md:text-[24px] md:leading-[28.8px]',
          )}
        >
          Algorand Nigeria is a vibrant community dedicated to fostering growth and innovation in
          the blockchain space. We connect enthusiasts, developers, and businesses with the power of
          Algorand’s technology.
        </p>

        <div className="flex flex-col pt-2 md:pt-4 gap-2">
          <div className="flex flex-row items-center gap-2">
            <CalendarIcon />
            <p
              className={classNames('font-Inter font-[400] text-sm text-[#4C5965]', 'md:text-base')}
            >
              Jan 20th, 2024
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <LocationIcon />
            <p
              className={classNames('font-Inter font-[400] text-sm text-[#4C5965]', 'md:text-base')}
            >
              Pioneer’s Park, Gwarimpa - Abuja.
            </p>
          </div>
        </div>

        <Link
          className={classNames(
            'pt-5 flex flex-row items-center font-Inter font-[700] text-sm',
            'text-[#6D6D6D] gap-2 md:text-[24px] md:leading-[28.8px]',
          )}
          href="#"
        >
          <span className="underline">Register Now</span>
          <ArrowIcon className="md:text-[37.2px] text-[24px]" />
        </Link>
      </div>
    </div>
  );
};
