'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={classNames(
              'font-Trap-900 text-[32px] leading-[35px] text-[#001324] text-center',
              'md:text-[60px] md:leading-[66px]',
            )}
          >
            Empowering Innovators in Nigeria with Algorand's Blockchain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={classNames(
              'mt-4 self-center max-w-[269px] text-center font-Inter font-[400] text-sm',
              'text-[#6D6D6D] md:text-[28px] md:leading-[33.6px] md:max-w-[868px]',
            )}
          >
            Join the fastest-growing blockchain community and shape the future of decentralized
            technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={classNames(
              'mt-8 md:mt-[50px] flex flex-col gap-3 items-center self-center w-[224px]',
              'md:w-full md:flex-row md:gap-8 md:justify-center',
            )}
          >
            <Link href="https://t.me/algorandnigeriaofficial" target="_blank">
              <button
                className={classNames(
                  'flex px-[10px] py-[18.5px] text-[#FFFFFF]',
                  'font-Inter text-[18px] leading-[25.2px] font-[700]',
                  'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
                  'hover:bg-[#2d4af1] items-center justify-center w-[224px] md:w-[220px]',
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
                  'rounded-[50px] border-[0.75px] border-[#001324] bg-[#FFF] w-[224px]',
                  'hover:bg-[#001324] hover:text-[#FFF] items-center justify-center md:w-[220px]',
                )}
              >
                Explore Events
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738690388/_GT15958_hcorrt.jpg"
          alt="Algorand Nigeria Bootcamp"
          className="hidden md:flex border-[#BEDEE8] border-[5px] rounded-[50px] aspect-[2.608] object-cover"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738690388/_GT15958_hcorrt.jpg"
          alt="Algorand Nigeria Bootcamp"
          className="flex md:hidden border-[#BEDEE8] border-[5px] rounded-[50px] aspect-[1.09] object-cover"
        />
      </div>
    </PageMaxWidth>
  );
};
