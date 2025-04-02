'use client';

import { AlgorandNigeriaIcon } from '@/assets/icons';
import { PageMaxWidth } from '../page-max-width';
import { RxHamburgerMenu } from 'react-icons/rx';
import classNames from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const links = [
    'About Us',
    'Events',
    // 'Contact Us',
    // 'Blog',
    //  'Forum'
  ];

  return (
    <PageMaxWidth className="relative">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-between py-[30px]"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link href={'/'}>
            <AlgorandNigeriaIcon className="w-[125px] h-[42px] md:w-[178px] md:h-[60px]" />
          </Link>
        </motion.div>

        <div className="hidden md:flex flex-row items-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                className={classNames(
                  'font-Inter font-[500] text-[18px] leading-[25.2px]',
                  'text-[#192A39] hover:font-[700] transition-all',
                )}
                href={`/${link.replaceAll(' ', '-').toLowerCase()}`}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button whileTap={{ scale: 0.95 }} className="outline-none border-none md:hidden">
          <RxHamburgerMenu />
        </motion.button>

        <Link href={'/auth/log-in'}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={classNames(
              'hidden md:flex px-[44px] py-[23.5px] text-[#E7FAF9]',
              'font-Inter text-[18px] leading-[25.2px] font-[700] transition-all',
              'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
              'hover:bg-[#2d4af1]',
            )}
          >
            Sign in
          </motion.button>
        </Link>
      </motion.nav>
    </PageMaxWidth>
  );
};
