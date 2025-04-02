'use client';

import { AlgorandNigeriaIcon } from '@/assets/icons';
import { PageMaxWidth } from '../page-max-width';
import { RxHamburgerMenu } from 'react-icons/rx';
import classNames from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../button';
import { BackgroundOverlay } from '../background-overlay';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    'About Us',
    'Events',
    // 'Contact Us',
    // 'Blog',
    //  'Forum'
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        <div className="hidden lg:flex flex-row items-center gap-8">
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

        <motion.button whileTap={{ scale: 0.95 }} className="outline-none border-none lg:hidden">
          <RxHamburgerMenu />
        </motion.button>

        <Link className="hidden lg:flex" href={'/auth/log-in'}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={classNames(
              'hidden lg:flex px-[44px] py-[23.5px] text-[#E7FAF9]',
              'font-Inter text-[18px] leading-[25.2px] font-[700] transition-all',
              'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
              'hover:bg-[#2d4af1]',
            )}
          >
            Sign in
          </motion.button>
        </Link>

        {/* <div className="lg:hidden">
          <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
        </div> */}
      </motion.nav>
    </PageMaxWidth>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [open, setOpen] = useState(false);
  // const setConnectWalletVisible = useSetRecoilState(ConnectWalletVisibleAtom);
  // const { activeAddress, providers } = useWallet();

  // const disconnectWallet = () => {
  //   providers?.forEach((provider) => {
  //     provider.disconnect();
  //   });
  // };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isOpen]);

  return (
    <BackgroundOverlay visible={isOpen} onClose={handleClose}>
      <div
        className={classNames(
          'self-end fixed h-screen w-[95%] max-w-[286px] bg-white dark:bg-[#020817] z-50',
          'transition-all duration-300 flex-col',
        )}
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between p-4 border-b-[1px] border-b-[#CBD5E1] dark:border-b-[#334155]">
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-md text-[#0F172A] dark:text-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <GrClose className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col gap-6 px-4 py-8">
          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/marketplace"
          >
            Creator Market
          </Link>
          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/secondary-marketplace"
          >
            Trader Market
          </Link>

          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/asset-factory"
          >
            Create Asset
          </Link>

          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/list-asset"
          >
            List an Asset
          </Link>

          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/listings"
          >
            Your listings
          </Link>

          <Link
            className={classNames(
              'text-[#64748B] font-inter font-semibold',
              'hover:text-gray-900 dark:text-[#94A3B8] dark:hover:text-white text-base',
            )}
            href="/profile"
          >
            Profile
          </Link>

          {/* {activeAddress ? (
            <motion.div
              className={classNames(
                'bg-gradient-to-tr flex items-center justify-center cursor-pointer',
                'rounded-[6px] py-2 px-4 bg-[#F1F5F9] dark:bg-[#1E293B]',
              )}
              onClick={disconnectWallet}
              title="Disconnect Wallet"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.p
                className="font-inter text-sm font-[500] leading-6 text-[#020817] dark:text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {activeAddress.slice(0, 10)}...
              </motion.p>
            </motion.div>
          ) : (
            <Button
              className="px-4"
              onClick={() => {
                setConnectWalletVisible(true);
                handleClose();
              }}
            >
              Connect Wallet
            </Button>
          )} */}
        </div>
      </div>
    </BackgroundOverlay>
  );
};
