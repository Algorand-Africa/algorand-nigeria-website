import classNames from 'classnames';

interface Props {
  period: string;
  title: string;
  description: string;
}

export const JourneyItem = ({ period, title, description }: Props) => {
  return (
    <div
      className={classNames(
        'md:h-[460px] py-[32px] px-[23px]',
        'rounded-[50px] border-[2px] border-[#E5E5E5]',
      )}
    >
      <p
        className={classNames(
          'text-[#001324] font-normal font-Inter text-[18px] leading-[25.2px] mb-[30px]',
          'p-[8px] bg-[#F9F9F9] rounded-[12px] tracking-[1%] w-[fit-content]',
        )}
      >
        {period}
      </p>
      <h4 className="font-Inter font-bold text-[#001324] text-[20px] leading-[24px] md:text-[24px] md:leading-28px mb-[16px] tracking-[1%]">
        {title}
      </h4>
      <p
        className={classNames(
          'font-Inter text-[#6D6D6D] font-normal md:font-light tracking-[1%]',
          'md:text-[18px] md:leading-[25.2px] text-[16px] leading-[22.4px]',
        )}
      >
        {description}
      </p>
    </div>
  );
};
