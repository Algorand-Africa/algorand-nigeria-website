import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';

export const DiscoverTheHeart = () => {
  return (
    <PageMaxWidth>
      <div className={'flex flex-col pt-[48px] md:pt-[121px] gap-[16px] mb-[78px] md:mb-[178px]'}>
        <h1
          className={classNames(
            'font-Trap-900 md:text-[60px] text-[32px]',
            'text-[#001324] text-center md:text-left leading-[35px] md:leading-[66px]',
            'md:w-[794px]',
          )}
        >
          Discover the Heart of Algorand Nigeria
        </h1>
        <p
          className={classNames(
            'font-Inter font-[400] text-sm text-[#6D6D6D]',
            'md:text-[28px] md:leading-[33.6px] text-center md:text-left',
          )}
        >
          Unifying Blockchain Enthusiasts Across Nigeria
        </p>

        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738583795/_GT16031_xnoly8.jpg"
          alt="Algorand Nigeria Bootcamp"
          className={classNames(
            'w-full h-[350px] md:h-[500px] object-cover',
            'rounded-[25px] md:rounded-[50px] md:mt-[64px] mt-[50px]',
            'border-[5px] md:border-[10px] before:absolute before:rounded-lg before:border-[5px] before:border-transparent before:bg-gradient-to-r before:from-[#E3F7FF] before:to-[#BEDEE8] before:-z-10',
          )}
        />
      </div>
    </PageMaxWidth>
  );
};
