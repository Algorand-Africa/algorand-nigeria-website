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
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737535811/algorand-banner-desktop_mzh33g.png"
          alt="Algorand Nigeria Bootcamp"
          className="hidden md:flex mt-[48px]"
        />
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737558064/Frame_1000003596_qvpwnk.png"
          alt="Algorand Nigeria Bootcamp"
          className="flex md:hidden mt-[34px]"
        />
      </div>
    </PageMaxWidth>
  );
};
