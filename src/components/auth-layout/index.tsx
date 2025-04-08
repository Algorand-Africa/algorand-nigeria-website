'use client';

import classNames from 'classnames';
import { PageMaxWidth } from '../page-max-width';
import { AlgorandNigeriaWhiteIcon } from '@/assets/icons/algorand-nigeria-white.icon';
import { AlgorandNigeriaIcon } from '@/assets/icons';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <PageMaxWidth className="px-0">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={classNames('md:px-5 md:py-5 flex flex-row h-screen')}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={classNames(
            'flex-1 relative rounded-[30px] overflow-hidden',
            'relative px-[60px] py-12 bg-[#3838CC] lg:flex hidden',
            'flex flex-col justify-between gap-10',
          )}
        >
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.7 }}
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1739790321/auth-bg_hcevkq.png"
            alt="auth-layout-bg"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-[68.74px] relative"
          >
            <AlgorandNigeriaWhiteIcon />
            <div className="flex flex-col gap-8">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-Trap-700 text-[60px] leading-[66px] text-white"
              >
                Join Us on Our Journey
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-[18px] leading-[25.2px] font-normal text-white max-w-[420px]"
              >
                Join the fastest-growing blockchain community and shape the future of decentralized
                technology.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className={classNames(
              'flex flex-col gap-4 relative p-6 bg-[#3838CC]',
              'rounded-[20px]',
            )}
          >
            <p className="font-Inter text-[16px] leading-[22.4px] text-[#F0E6E6]">
              Joining the Algorand Nigeria community has been a transformative experience for me
              both professionally and personally. As a software developer, I was initially drawn to
              the platform's innovative approach to blockchain technology.
            </p>
            <div className="flex flex-row gap-3">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                src="https://res.cloudinary.com/dvujkjs1q/image/upload/v1744100191/WhatsApp_Image_2025-04-08_at_09.15.16_sec8iq.jpg"
                alt="Software Developer"
                className="w-[40px] h-[40px] rounded-full border-[#F0E6E6] border-[1px]"
              />
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex flex-col gap-[5px]"
              >
                <p className="font-Inter font-[700] text-white text-sm">Praise Anosike</p>
                <p className="font-normal text-white font-Inter text-[12px]">Software Developer</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={classNames(
            'flex-1 flex flex-col items-center',
            'md:px-[24px] relative overflow-y-auto',
          )}
          style={{ scrollbarWidth: 'none' }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AlgorandNigeriaIcon
              className={classNames(
                'lg:hidden w-[100px] h-[33.67px] absolute top-[38.95px] left-0',
              )}
            />
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className={classNames(
              'w-full h-full max-w-[454px] relative flex flex-col',
              'md:pt-[85.5px] pt-[108px]',
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.main>
    </PageMaxWidth>
  );
};
