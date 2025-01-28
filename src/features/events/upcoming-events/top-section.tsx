import classNames from 'classnames';

export const TopSection = () => {
  return (
    <div>
      <h4
        className={classNames(
          'font-Inter font-bold w-[174px] text-[28px] leading-[33.6px] text-[#001324] mb-[8px] tracking-[-0.01em]',
          'md:font-medium md:w-[776px] md:text-[130px] md:leading-[157.33px] md:text-[#000000] md:mb-[32px]',
        )}
      >
        Upcoming Events
      </h4>
      <p
        className={classNames(
          'font-Inter font-normal w-[269px] text-[14px] leading-[19.6px] text-[#6D6D6D] mb-[24px] tracking-[0.01em]',
          'md:font-normal md:w-[665px] md:text-[28px] md:leading-[33.6px]  md:mb-[80px] md:tracking-[-0.01em]',
        )}
      >
        Stay connected with upcoming events, workshops, and seminars that are shaping the future of
        blockchain in Nigeria.
      </p>
    </div>
  );
};
