import { RightArrowIcon } from '@/assets/icons/right-arrow.icon';
import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';

export const JoinUs = () => {
  return (
    <PageMaxWidth>
      <div className="mt-[46.6px] md:mt-[131px] flex flex-col">
        <div
          className={classNames(
            'md:mx-[60px] bg-[#F3F7FA] md:rounded-[30px] rounded-[32px]',
            'md:h-[482px] h-[521px]',
            'flex md:flex-row md:items-center flex-col-reverse md:gap-[58px] gap-[16px]',
            'md:justify-center p-[16px] mb-[93px] md:mb-[174px]',
          )}
        >
          <div>
            <h4
              className={classNames(
                'font-Inter font-bold text-[#070D17] mb-[16px]',
                'md:text-[48px] md:leading-[52.8px] md:w-[497px]',
                'text-[28px] leading-[33.6px] tracking-[-0.01em]',
              )}
            >
              Join Us on Our Journey
            </h4>
            <p
              className={classNames(
                'font-Inter font-light text-[#6D6D6D] mb-[16px] md:mb-[32px]',
                'md:text-[24px] md:leading-[28.8px] md:w-[497px] md:font-normal',
                'text-[18px] leading-[25.2px] w-[300px]',
              )}
            >
              Be a part of a thriving blockchain community
            </p>
            <Link href="https://t.me/algorandnigeriaofficial" target="_blank">
              <div
                className={classNames(
                  'text-[#FFF] bg-[#001324] rounded-[5px] w-fit cursor-pointer',
                  'px-[20px] py-[12.5px] md:py-[18px]',
                  'flex items-center gap-[8px] shadow-custom-1',
                  'hover:bg-[#00243E] hover:shadow-lg hover:scale-105 transition-transform duration-300',
                )}
              >
                Get Involved <RightArrowIcon />
              </div>
            </Link>
          </div>

          <img
            className="md:block hidden w-[504px] h-[307px] object-contain"
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737757794/Group_100_1_kphrtz.png"
          />

          <img
            className="md:hidden w-[100%] object-contain"
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737757794/Group_100_vg23hm.png"
          />
        </div>
      </div>
    </PageMaxWidth>
  );
};
