import classNames from 'classnames';

export const TopSection = () => {
  return (
    <>
      <div
        className={classNames(
          'flex items-center justify-end pt-[40px] ',
          'md:pt-[100px] md:pr-[32px] gap-[4px] md:text-[32px] md:leading-[35.2px] font-[700]',
          'text-[#279795] font-Inter text-[14px] leading-[19.6px]',
          'mb-[23.4px] md:mb-[80px]',
        )}
      >
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Past</span> Events
      </div>

      <div
        className={classNames(
          'text-[#000000] font-medium font-Inter mb-[24px] md:mb-[16px]',
          'text-[42px] leading-[46.2px] md:text-[130px] md:leading-[157.33px]',
        )}
      >
        Catch Up on Past Events in The Community
      </div>
    </>
  );
};
