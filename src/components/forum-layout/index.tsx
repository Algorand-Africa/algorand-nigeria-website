'use client';

import { AlgorandNigeriaIcon } from '@/assets/icons/algorand-nigeria.icon';
import Link from 'next/link';
import classNames from 'classnames';
import { ForumNavIcons } from '@/assets/icons/forum-nav.icon';
import { BackgroundOverlay } from '../background-overlay';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { FiPlus, FiSearch } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

export const ForumLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row bg-green-200 h-screen">
      <div className="w-[265px] bg-[#E7FAF9] hidden lg:flex flex-col py-[56px] px-5 gap-[64px]">
        <Link className="cursor-pointer self-center" href={'/'}>
          <AlgorandNigeriaIcon className="w-[140px] h-[47px]" />
        </Link>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[14px]">
            <NavLink href={'/'} text="Home" icon={<ForumNavIcons.Home />} isActive={true} />
            <NavLink
              href={'/forum/explore'}
              text="Explore"
              icon={<ForumNavIcons.Discover />}
              isActive={false}
            />
            <NavLink
              href={'/bookmarks'}
              text="Saved"
              icon={<ForumNavIcons.Saved />}
              isActive={false}
            />
          </div>
          <hr className="w-full border-t border-[#000] opacity-20" />
          <div className="flex flex-col gap-4">
            <h4 className="font-Trap-500 text-xs leading-[140%] text-[#7B7D83]">RESOURCES</h4>
            <div className="flex flex-col gap-[14px]">
              <NavLink href={'/'} text="About" icon={<ForumNavIcons.About />} isActive={false} />
              <NavLink
                href={'/explore'}
                text="Rules"
                icon={<ForumNavIcons.Rules />}
                isActive={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-[#E7FAF9] lg:py-4 lg:pr-4">
        <div
          className={classNames(
            'bg-[#FFF] flex flex-col h-full rounded-[10px] px-5 py-6 lg:px-6 lg:py-5',
            'overflow-y-auto',
          )}
        >
          <div className="flex flex-row justify-between">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              className="outline-none border-none lg:hidden"
            >
              <RxHamburgerMenu />
            </motion.button>

            <div
              className={classNames(
                'lg:flex flex-row items-center gap-2 flex-1 max-w-[438px] border border-[#CECECE] rounded-[100px] py-3',
                'px-4 bg-[#F9F9F9] hidden',
              )}
            >
              <FiSearch className="text-base text-black" />
              <input
                type="text"
                placeholder="Search by keywords, tags or filters"
                className="outline-none bg-transparent flex-1 text-xs text-black"
              />
            </div>

            <div className="flex flex-row items-center gap-4">
              <button
                className={classNames(
                  'flex flex-row items-center gap-[11px] py-[10px] px-4 border rounded-[100px] border-[#3B7FE4]',
                  'text-sm text-[#3B7FE4] font-Trap-600',
                )}
              >
                <FiPlus size={16} />
                <span>Ask a question</span>
              </button>

              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://th.bing.com/th/id/OIP.dPJ-e4giUcSpbyARhLssJQHaJ4?rs=1&pid=ImgDetMain"
              />
            </div>
          </div>

          <div
            className={classNames(
              'flex flex-row items-center gap-2 border border-[#CECECE] rounded-[100px] py-3',
              'px-4 bg-[#F9F9F9] lg:hidden mt-4',
            )}
          >
            <FiSearch className="text-base text-black" />
            <input
              type="text"
              placeholder="Search by keywords, tags or filters"
              className="outline-none bg-transparent flex-1 text-xs text-black"
            />
          </div>

          <div className="lg:hidden">
            {isOpen && <MobileMenu isOpen={isOpen} onClose={toggleMenu} />}
          </div>
          <div className="flex flex-col mt-6 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [open, setOpen] = useState(false);

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
          'self-start fixed h-screen w-[95%] max-w-[300px] bg-[#E7FAF9]  z-50',
          'transition-all duration-300 flex-col rounded-r-[32px]',
        )}
        style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="flex flex-col py-[56px] pt-[90px] px-5 gap-[64px] relative">
          <motion.button
            onClick={handleClose}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full cursor-pointer bg-white flex items-center justify-center absolute top-[50px] right-5"
          >
            <RxCross1 />
          </motion.button>

          <Link onClick={handleClose} className="cursor-pointer self-start" href={'/'}>
            <AlgorandNigeriaIcon className="w-[140px] h-[47px]" />
          </Link>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[14px]">
              <NavLink
                onClick={handleClose}
                href={'/'}
                text="Home"
                icon={<ForumNavIcons.Home />}
                isActive={true}
              />
              <NavLink
                href={'/explore'}
                text="Explore"
                icon={<ForumNavIcons.Discover />}
                isActive={false}
                onClick={handleClose}
              />
              <NavLink
                href={'/bookmarks'}
                text="Saved"
                icon={<ForumNavIcons.Saved />}
                isActive={false}
                onClick={handleClose}
              />
            </div>
            <hr className="w-full border-t border-[#000] opacity-20" />
            <div className="flex flex-col gap-4">
              <h4 className="font-Trap-500 text-xs leading-[140%] text-[#7B7D83]">RESOURCES</h4>
              <div className="flex flex-col gap-[14px]">
                <NavLink
                  onClick={handleClose}
                  href={'/'}
                  text="About"
                  icon={<ForumNavIcons.About />}
                  isActive={false}
                />
                <NavLink
                  onClick={handleClose}
                  href={'/explore'}
                  text="Rules"
                  icon={<ForumNavIcons.Rules />}
                  isActive={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundOverlay>
  );
};

const NavLink = ({
  href,
  text,
  icon,
  isActive,
  onClick,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      className={classNames(
        'cursor-pointer flex rounded-[100px] px-6 py-2 gap-[10px]',
        'hover:bg-white items-center',
        isActive ? 'bg-white' : 'bg-transparent',
      )}
      href={href}
    >
      {icon}
      <p className={classNames('text-black font-Trap-500 text-[14px] leading-[140%]')}>{text}</p>
    </Link>
  );
};
