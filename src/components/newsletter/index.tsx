import classNames from 'classnames';
import { PageMaxWidth } from '../page-max-width';

export const NewsLetter = () => {
  return (
    <PageMaxWidth className="self-center text-center md:mb-[158px] mb-[66px]">
      <h4
        className={classNames(
          'font-Inter font-bold text-[#000000] mb-[7px]',
          'text-[32px] leading-[35.2px] tracking-[-0.01em]',
        )}
      >
        Newsletter
      </h4>
      <p
        className={classNames(
          'font-Inter font-normal text-[#858484] md:mb-[40px] mb-[60px]',
          'md:text-[24px] md:leading-[28.8px] md:w-[673px]',
          'text-[16px] leading-[22.4px] tracking-[-0.01em]',
        )}
      >
        Subscribe to our amazing newsletter to receive all the latest news & updates.
      </p>

      <div className="hidden md:flex items-center border-[3px] border-[#B2B8BD] rounded-[200px] overflow-hidden">
        <input
          type="text"
          placeholder="Your email address"
          className="flex-grow px-[32px] py-[29px] focus:outline-none text-[28px] leading-[33.6px] text-[#B2B8BD]"
        />
        <button
          className={classNames(
            'm-[16px] bg-[#001324] text-white px-[30px] py-[23.5px] hover:scale-105 transition-transform duration-300 rounded-[100px]',
            'font-bold text-[18px] leading-25.2px font-Inter tracking-[0.02em]',
          )}
        >
          Subscribe
        </button>
      </div>

      <div className="md:hidden flex flex-col gap-[20px] items-center">
        <input
          type="text"
          placeholder="Your email address"
          className="w-[100%] rounded-[100px] flex-grow px-[24px] py-[16px] border-[2px] border-[#000000] text-[14px] leading-[19.6px] text-[#000000]"
        />

        <button
          className={classNames(
            'bg-[#001324] text-white px-[30px] py-[15px] hover:scale-105 transition-transform duration-300 rounded-[100px]',
            'font-600 text-[14px] leading-15.4px font-Inter',
          )}
        >
          Subscribe
        </button>
      </div>
    </PageMaxWidth>
  );
};
