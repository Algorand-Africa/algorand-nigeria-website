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
import { useAuthActions } from '@/actions/auth';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { profileAtom, profilePhotoBgIndexAtom } from '@/state';
import { usePathname } from 'next/navigation';
import { useWallet } from '@txnlab/use-wallet';
import { ConnectWalletVisibleAtom } from '@/state/wallet.atom';
import { profileColors } from '@/constants/profile-colors';

const links = [
  'Events',
  'About Us',
  'Contact Us',
  // 'Blog',
  //  'Forum'
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getProfile, logout } = useAuthActions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const profile = useRecoilValue(profileAtom);
  const [selectedIndex, setSelectedIndex] = useRecoilState(profilePhotoBgIndexAtom);
  const pathname = usePathname();
  const setConnectWalletVisible = useSetRecoilState(ConnectWalletVisibleAtom);
  const { activeAddress, providers } = useWallet();

  const disconnectWallet = () => {
    providers?.forEach((provider) => {
      provider.disconnect();
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const popup = document.getElementById('asset-factory-popup');

    if (!popup?.contains(target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    getProfile();

    const bgIndex = localStorage.getItem('profile-photo-prompt-bg-index');

    if (bgIndex && parseInt(bgIndex) < profileColors.length) {
      setSelectedIndex(parseInt(bgIndex));
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
                  pathname === `/${link.replaceAll(' ', '-').toLowerCase()}` && 'font-[700]',
                )}
                href={`/${link.replaceAll(' ', '-').toLowerCase()}`}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-4">
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="outline-none border-none lg:hidden"
          >
            <RxHamburgerMenu />
          </motion.button>

          {!profile && (
            <Link
              className="hidden lg:flex"
              href={`/auth/log-in${pathname !== '/auth/log-in' ? '?redirect=' + pathname : ''}`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={classNames(
                  'hidden lg:flex px-[44px] py-[20px] text-[#E7FAF9]',
                  'font-Inter text-[18px] leading-[25.2px] font-[700] transition-all',
                  'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
                  'hover:bg-[#2d4af1]',
                )}
              >
                Sign in
              </motion.button>
            </Link>
          )}

          {profile && (
            <div className="relative" id="asset-factory-popup">
              {profile?.image ? (
                <motion.img
                  className={classNames(
                    'w-12 h-12 rounded-full bg-gradient-to-tr cursor-pointer',
                    'flex items-center justify-center object-cover',
                  )}
                  animate={{ scale: 1 }}
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  src={profile.image}
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                  style={
                    profile?.image
                      ? { backgroundImage: `url(${profile?.image})` }
                      : profileColors[selectedIndex].properties
                  }
                ></motion.img>
              ) : (
                <motion.div
                  className={classNames(
                    'w-12 h-12 rounded-full bg-gradient-to-tr cursor-pointer',
                    'flex items-center justify-center',
                    profileColors[selectedIndex].className,
                  )}
                  animate={{ scale: 1 }}
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                  style={
                    profile?.image
                      ? { backgroundImage: `url(${profile?.image})` }
                      : profileColors[selectedIndex].properties
                  }
                >
                  <motion.p
                    className="text-[#020817] dark:text-white font-inter text-base font-semibold leading-9 tracking-[-0.225px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {profile?.fullName.charAt(0).toUpperCase() || 'P'}
                  </motion.p>
                </motion.div>
              )}

              {isPopupOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 z-20 bg-white rounded-lg shadow-lg py-2 overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 font-Inter hover:bg-[#1c16c1] hover:text-white transition-all"
                    onClick={() => setIsPopupOpen(!isPopupOpen)}
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={() => {
                      if (activeAddress) {
                        disconnectWallet();
                      } else {
                        setConnectWalletVisible(true);
                      }

                      setIsPopupOpen(!isPopupOpen);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#1c16c1] hover:text-white font-Inter"
                  >
                    {activeAddress ? activeAddress.slice(0, 10) + '...' : 'Connect Wallet'}
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setIsPopupOpen(!isPopupOpen);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#1c16c1] hover:text-white font-Inter"
                  >
                    Log out
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
          </div>
        )}
      </motion.nav>
    </PageMaxWidth>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [open, setOpen] = useState(false);
  const profile = useRecoilValue(profileAtom);
  const pathname = usePathname();

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
          'self-end fixed h-screen w-[95%] max-w-[286px] bg-white z-50',
          'transition-all duration-300 flex-col',
        )}
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between px-6 pt-20 pb-[30px]">
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-md text-[#141B34]"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <GrClose className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col gap-[30px] px-6">
          {links.map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                className={classNames(
                  'font-Inter font-[500] text-base leading-[140%]',
                  'text-[#141B34] hover:font-[700] transition-all',
                )}
                href={`/${link.replaceAll(' ', '-').toLowerCase()}`}
                onClick={handleClose}
              >
                {link}
              </Link>
            </motion.div>
          ))}

          {!profile && (
            <Link
              className="w-full flex"
              href={`/auth/log-in${pathname !== '/auth/log-in' ? '?redirect=' + pathname : ''}`}
            >
              <button
                className={classNames(
                  'bg-[#2D2DF1] px-5 py-2 rounded-2xl h-[60px] w-full',
                  'text-[#E9E9FD] font-Inter font-[700] text-[18px] leading-[140%]',
                )}
                onClick={handleClose}
              >
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </BackgroundOverlay>
  );
};
