import { TbCalendarMonth } from 'react-icons/tb';
import { SlLocationPin } from 'react-icons/sl';
import classNames from 'classnames';
import Link from 'next/link';
import { Tooltip } from '@/components/tooltip';

interface Props {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  rsvp: string;
}

export const UpcomingEventItem = ({ title, description, date, location, image, rsvp }: Props) => {
  return (
    <div
      className={classNames(
        'bg-[#F9F9F9] rounded-[16px] p-4 md:p-[25px]',
        'font-Inter',
        'flex flex-col',
      )}
    >
      <img
        className={classNames(
          'h-[150px] md:h-[371px] mb-4 md:mb-[25px] w-full',
          'object-cover rounded-[8px] overflow-[hidden]',
        )}
        src={image}
        alt={title}
      />
      <Tooltip text={title} position="top">
        <h4
          className={classNames(
            'text-[#001324] font-bold tracking-[-0.01em] mb-4 md:mb-5',
            'text-[24px] leading-[28.8px] md:text-[32px] md:leading-[35.2px] md:line-clamp-2 ',
            // 'md:h-[70px]',
          )}
        >
          {title}
        </h4>
      </Tooltip>
      <Tooltip text={description} position="top">
        <p
          className={classNames(
            'text-[#4C5965] font-normal tracking-[0.01em] mb-3 md:mb-4',
            'text-[14px] leading-[19.6px] md:text-[18px] md:leading-[25.2px] line-clamp-3',
            ' md:h-[75px] h-[60px]',
          )}
        >
          {description}
        </p>
      </Tooltip>
      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[9px] md:mt-auto">
        <TbCalendarMonth color="#4C5965" size={18} />
        <p className="text-[#4C5965] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
          {date}
        </p>
      </div>
      <div className="flex gap-[10.5px] md:gap-2 items-center mb-[19px]">
        <SlLocationPin color="#4C5965" size={18} />
        <p className="text-[#4C5965] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
          {location}
        </p>
      </div>
      {rsvp ? (
        <Link target="_blank" href={rsvp}>
          <button
            className={classNames(
              'mt-auto self-start w-full h-[60px] bg-[#001324] rounded-[8px]',
              'text-[#FFFFFF] text-[20px] leading-[24px] font-Inter font-medium',
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
            )}
          >
            RSVP
          </button>
        </Link>
      ) : (
        <button
          className={classNames(
            'mt-auto self-start w-full h-[60px] bg-[#001324] rounded-[8px]',
            'text-[#FFFFFF] text-[20px] leading-[24px] font-Inter font-medium',
            'hover:shadow-lg hover:scale-105 transition-transform duration-300',
            'opacity-0',
          )}
          style={{
            cursor: 'default',
          }}
        >
          RSVP
        </button>
      )}
    </div>
  );
};
