import classNames from 'classnames';
import { PageMaxWidth } from '../page-max-width';
import { AlgorandNigeriaWhiteIcon } from '@/assets/icons/algorand-nigeria-white.icon';
import { AlgorandNigeriaIcon } from '@/assets/icons';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <PageMaxWidth className="px-0">
      <main className={classNames('md:px-5 md:py-5 flex flex-row h-screen')}>
        <div
          className={classNames(
            'flex-1 relative rounded-[30px] overflow-hidden',
            'relative px-[60px] py-12 bg-[#3838CC] lg:flex hidden',
            'flex flex-col justify-between gap-10',
          )}
        >
          <img
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1739790321/auth-bg_hcevkq.png"
            alt="auth-layout-bg"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
          />
          <div className="flex flex-col gap-[68.74px] relative">
            <AlgorandNigeriaWhiteIcon />
            <div className="flex flex-col gap-8">
              <h1 className="font-Trap-700 text-[60px] leading-[66px] text-white">
                Join Us on Our Journey
              </h1>
              <p className="text-[18px] leading-[25.2px] font-normal text-white max-w-[420px]">
                Join the fastest-growing blockchain community and shape the future of decentralized
                technology.
              </p>
            </div>
          </div>

          <div
            className={classNames(
              'flex flex-col gap-4 relative p-6 bg-[#3838CC]',
              'rounded-[20px]',
            )}
          >
            <p className="font-Inter text-[16px] leading-[22.4px] text-[#F0E6E6]">
              Joining the Algorand Nigeria community has been a transformative experience for me
              both professionally and personally. As a software developer, I was initially drawn to
              the platform’s innovative approach to blockchain technology.
            </p>
            <div className="flex flex-row gap-3">
              <img
                src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657708/3eb9029833009af220bea7cb465f27ce_mhlak4.png"
                alt="auth-layout-bg"
                className="w-[40px] h-[40px] object-cover rounded-full border-[#F0E6E6] border-[1px]"
              />
              <div className="flex flex-col gap-[5px]">
                <p className="font-Inter font-[700] text-white text-sm">John Doe</p>
                <p className="font-normal text-white font-Inter text-[12px]">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'flex-1 flex flex-col items-center',
            'md:px-[24px] relative overflow-y-auto',
          )}
          style={{ scrollbarWidth: 'none' }}
        >
          <AlgorandNigeriaIcon
            className={classNames('lg:hidden w-[100px] h-[33.67px] absolute top-[38.95px] left-0')}
          />
          <div
            className={classNames(
              'w-full h-full max-w-[454px] relative flex flex-col',
              'md:pt-[85.5px] pt-[108px]',
            )}
          >
            {children}
          </div>
        </div>
      </main>
    </PageMaxWidth>
  );
};
