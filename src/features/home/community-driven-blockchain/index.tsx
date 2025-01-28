import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import styles from './index.module.scss';

export const CommunityDrivenBlockchain = () => {
  return (
    <section
      className={classNames(
        'flex flex-col bg-[#E1F9F9] pt-10 pb-10',
        'md:pt-[220px] md:pb-[100px]',
      )}
    >
      <PageMaxWidth>
        <div className={classNames('flex flex-col gap-[46px] md:gap-[80px]')}>
          <h4
            className={classNames(
              'text-right font-Trap-700 text-sm text-[#17CAC6]',
              'md:text-[32px] md:leading-[35.2px]',
            )}
          >
            <span className="font-Trap-700 md:text-[50px] md:leading-[55px]">.</span>{' '}
            <span className="text-[#070D17]">About</span> Us
          </h4>
          <h1
            className={classNames(
              'font-Inter font-[500] text-[42px] leading-[46.2px]',
              'text-[#001324] md:text-[130px] md:leading-[157.33px]',
            )}
          >
            Algorand as a Community Driven Blockchain
          </h1>
          <div
            className={classNames(
              'px-4 pt-8 pb-4 bg-[#17CAC6] flex flex-col rounded-2xl',
              'gap-8 md:flex-row md:items-center md:px-[100px] md:pt-[50px] md:pb-[50px]',
              'md:rounded-[50px] md:justify-between',
            )}
          >
            <div className="flex flex-col gap-5 md:gap-10 md:flex-1">
              <div className="flex flex-col gap-2 md:gap-5">
                <h4
                  className={classNames(
                    'font-Inter font-[700] text-[24px] leading-[28.8px] text-[#FFFFFF]',
                    'md:text-[48px] md:leading-[52.8px]',
                  )}
                >
                  Who Are We?
                </h4>
                <p
                  className={classNames(
                    'font-Inter font-[400] text-[18px] leading-[25.2px] text-[#192A39]',
                    'md:text-[28px] md:leading-[33.6px]',
                  )}
                >
                  Algorand Nigeria is a vibrant community dedicated to fostering growth and
                  innovation in the blockchain space. We connect enthusiasts, developers, and
                  businesses with the power of Algorand’s technology.
                </p>
              </div>
              <Link className="flex flex-row items-center gap-2" href="/about-us">
                <span
                  className={classNames(
                    'font-Inter font-[700] text-sm text-[#FFFFFF]',
                    'md:text-[24px] md:leading-[28.8px]',
                  )}
                >
                  Learn More About Us
                </span>
                <BsArrowRight className="text-[#fff] text-[24px] md:text-[37.2px]" />
              </Link>
            </div>
            <div className={classNames('flex flex-row gap-2 h-[300px] md:h-[500px] md:w-[508px]')}>
              <div className={styles.picture1}></div>
              <div className="flex flex-col gap-2 flex-1">
                <div className={styles.picture2}></div>
                <div className={styles.picture3}></div>
              </div>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </section>
  );
};
