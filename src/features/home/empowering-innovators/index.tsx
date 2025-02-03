import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';

export const EmpoweringInnovators = () => {
  return (
    <PageMaxWidth>
      <div
        className={classNames(
          'flex flex-col pt-[48px] md:pt-[121px] md:gap-[112px]',
          'gap-[50px] pb-[88px] md:pb-[121px]',
        )}
      >
        <div className={classNames('flex flex-col self-center w-full max-w-[1064px]')}>
          <h1
            className={classNames(
              'font-Trap-900 text-[32px] leading-[35px] text-[#001324] text-center',
              'md:text-[60px] md:leading-[66px]',
            )}
          >
            Empowering Innovators in Nigeria with Algorand’s Blockchain
          </h1>
          <p
            className={classNames(
              'mt-4 self-center max-w-[269px] text-center font-Inter font-[400] text-sm',
              'text-[#6D6D6D] md:text-[28px] md:leading-[33.6px] md:max-w-[868px]',
            )}
          >
            Join the fastest-growing blockchain community and shape the future of decentralized
            technology.
          </p>
          <div
            className={classNames(
              'mt-8 md:mt-[50px] flex flex-col gap-3 self-center w-[224px]',
              'md:w-full md:flex-row md:gap-8 md:justify-center',
            )}
          >
            <Link href="https://t.me/algorandnigeriaofficial" target="_blank">
              <button
                className={classNames(
                  'flex px-[10px] py-[18.5px] text-[#FFFFFF]',
                  'font-Inter text-[18px] leading-[25.2px] font-[700]',
                  'rounded-[50px] border-[0.75px] border-[#5CC2BF] bg-[#279795]',
                  'hover:bg-[#28817f] items-center justify-center md:w-[220px]',
                )}
              >
                Join our Community
              </button>
            </Link>

            <Link href={'/events'} target="_blank">
              <button
                className={classNames(
                  'flex px-[10px] py-[18.5px] text-[#001324]',
                  'font-Inter text-[18px] leading-[25.2px] font-[700]',
                  'rounded-[50px] border-[0.75px] border-[#001324] bg-[#FFF]',
                  'hover:bg-[#001324] hover:text-[#FFF] items-center justify-center md:w-[220px]',
                )}
              >
                Explore Events
              </button>
            </Link>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737535811/algorand-banner-desktop_mzh33g.png"
          alt="Algorand Nigeria Bootcamp"
          className="hidden md:flex"
        />
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737535809/algorand-banner-mobile_ya5vyf.png"
          alt="Algorand Nigeria Bootcamp"
          className="flex md:hidden"
        />
      </div>
    </PageMaxWidth>
  );
};
