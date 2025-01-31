'use client';

import { AlgorandNigeriaIcon } from '@/assets/icons';
import { PageMaxWidth } from '../page-max-width';
import { RxHamburgerMenu } from 'react-icons/rx';
import classNames from 'classnames';
import Link from 'next/link';

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
      <nav className="flex flex-row items-center justify-between py-[30px]">
        <Link href={'/'}>
          <AlgorandNigeriaIcon className="w-[125px] h-[42px] md:w-[178px] md:h-[60px]" />
        </Link>

        <div className="hidden md:flex flex-row items-center gap-8">
          {links.map((link) => (
            <Link
              className={classNames(
                'font-Inter font-[500] text-[18px] leading-[25.2px]',
                'text-[#192A39] hover:font-[700] transition-all',
              )}
              href={`/${link.replaceAll(' ', '-').toLowerCase()}`}
            >
              {link}
            </Link>
          ))}
        </div>

        <button className="outline-none border-none md:hidden">
          <RxHamburgerMenu />
        </button>

        <button
          className={classNames(
            'hidden md:flex px-[44px] py-[23.5px] text-[#E7FAF9]',
            'font-Inter text-[18px] leading-[25.2px] font-[700] transition-all',
            'rounded-[50px] border-[0.75px] border-[#5CC2BF] bg-[#279795]',
            'hover:bg-[#28817f] opacity-[0]',
          )}
          style={{ boxShadow: '0px -4px 0px 0px #070D17 inset' }}
        >
          Sign in
        </button>
      </nav>
    </PageMaxWidth>
  );
};
