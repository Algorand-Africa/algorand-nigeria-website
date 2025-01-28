import classNames from 'classnames';
import styles from './index.module.scss';
import { PageMaxWidth } from '../page-max-width';
import { AlgorandNigeriaWhiteIcon } from '@/assets/icons/algorand-nigeria-white.icon';
import Link from 'next/link';
import { InstagramIcon } from '@/assets/icons/instagram.icon';
import { XIcon } from '@/assets/icons/x.icon';
import { TelegramIcon } from '@/assets/icons/telegram.icon';
import { DiscordIcon } from '@/assets/icons/discord.icon';

export const Footer = () => {
  const links = ['Events', 'About Us', 'Contact Us', 'Blog', 'Forum'];
  const thisYear = new Date().getFullYear();

  return (
    <PageMaxWidth className="relative">
      <footer
        className={classNames(
          'flex flex-col bg-[#001324] mb-[25px] md:mb-[52px]',
          'rounded-[20px] pt-[50px] pb-8 px-[35px] md:pb-[70px]',
          'md:pt-[70px] md:px-[88px]',
        )}
      >
        <div
          className={classNames(
            'flex flex-col md:flex-row md:items-center',
            'md:justify-between gap-10 md:gap-4',
          )}
        >
          <div className="flex flex-row items-center justify-between gap-2 w-full md:w-fit">
            <AlgorandNigeriaWhiteIcon
              className={classNames(
                'w-[125px] h-[42.09px]',
                'lg:w-[178.18px] lg:h-[60px]',
                'md:w-[150px]',
              )}
            />

            <div className="flex flex-row items-center gap-1 md:hidden">
              <Link
                href="https://instagram"
                target="_blank"
                className={classNames(
                  'flex items-center justify-center rounded-full w-[30px] h-[30px]',
                  'bg-[#FF6D60] border-[1px] border-[#141B34]',
                )}
              >
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                className={classNames(
                  'flex items-center justify-center rounded-full w-[30px] h-[30px]',
                  'bg-[#FFFEF8] border-[1px] border-[#141B34]',
                )}
              >
                <XIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://telegram.com"
                target="_blank"
                className={classNames(
                  'flex items-center justify-center rounded-full w-[30px] h-[30px]',
                  'bg-[#FFFEF8] border-[1px] border-[#141B34]',
                )}
              >
                <TelegramIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://telegram.com"
                target="_blank"
                className={classNames(
                  'flex items-center justify-center rounded-full w-[30px] h-[30px]',
                  'bg-[#4170D8] border-[1px] border-[#141B34]',
                )}
              >
                <DiscordIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            className={classNames(
              'flex flex-col gap-[15px] items-center',
              'md:flex-row md:gap-[50px]',
            )}
          >
            <div
              className={classNames(
                'flex flex-row items-center justify-center flex-wrap',
                'content-center gap-y-5 gap-x-[46px] md:gap-[38px]',
              )}
            >
              {links.map((link) => (
                <Link
                  className={classNames(
                    'font-Trap-600 text-[14px] leading-3 text-white md:font-Inter',
                    'md:font-[500] md:text-xl hover:font-[600]',
                  )}
                  href={`/${link.replaceAll(' ', '-').toLowerCase()}`}
                >
                  {link}
                </Link>
              ))}
            </div>

            <button
              className={classNames(
                'flex px-4 py-4 bg-white rounded-[100px]',
                'font-Inter font-[500] text-sm md:py-[11px]',
                'md:font-[700] md:text-xl text-[#001324]',
              )}
            >
              Join our community
            </button>
          </div>
        </div>

        <div className="md:flex flex-col mt-[49px] gap-[37px] hidden">
          <div className="w-full h-[1px] bg-[#6D6D6D]"></div>
          <div className="flex flex-row items-center self-end gap-[6px]">
            <Link
              href="https://instagram"
              target="_blank"
              className={classNames(
                'flex items-center justify-center rounded-full w-[45px] h-[45px]',
                'bg-[#FF6D60] border-[1px] border-[#141B34]',
                styles.spinOnHover,
              )}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              className={classNames(
                'flex items-center justify-center rounded-full w-[45px] h-[45px]',
                'bg-[#FFFEF8] border-[1px] border-[#141B34]',
                styles.spinOnHover,
              )}
            >
              <XIcon />
            </Link>
            <Link
              href="https://telegram.com"
              target="_blank"
              className={classNames(
                'flex items-center justify-center rounded-full w-[45px] h-[45px]',
                'bg-[#FFFEF8] border-[1px] border-[#141B34]',
                styles.spinOnHover,
              )}
            >
              <TelegramIcon />
            </Link>
            <Link
              href="https://telegram.com"
              target="_blank"
              className={classNames(
                'flex items-center justify-center rounded-full w-[45px] h-[45px]',
                'bg-[#4170D8] border-[1px] border-[#141B34]',
                styles.spinOnHover,
              )}
            >
              <DiscordIcon />
            </Link>
          </div>
        </div>

        <div
          className={classNames(
            'flex flex-col mt-8 gap-[39px] md:mt-[61px]',
            'md:flex-row md:items-center md:justify-between',
          )}
        >
          <div
            className={classNames(
              'font-Inter font-[400] text-sm text-[#B2B8BD]',
              'md:font-Trap-500 md:text-[18px] md:leading-[19.8px]',
            )}
          >
            ©{thisYear} Algorand Nigeria, All Rights Reserved.
          </div>

          <div
            className={classNames(
              'flex flex-row gap-[43px] justify-between items-center',
              'md:justify-normal',
            )}
          >
            <Link
              href="#"
              className={classNames(
                'font-Inter font-[400] text-sm text-[#B2B8BD]',
                'md:font-Trap-500 md:text-[18px] md:leading-[19.8px]',
              )}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className={classNames(
                'font-Inter font-[400] text-sm text-[#B2B8BD]',
                'md:font-Trap-500 md:text-[18px] md:leading-[19.8px]',
              )}
            >
              Disclaimers
            </Link>
          </div>
        </div>
      </footer>
    </PageMaxWidth>
  );
};
