import { StarCheckIcon } from '@/assets/icons/star-check.icon';
import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';

export const MissionVision = () => {
  return (
    <PageMaxWidth>
      <div
        className={classNames(
          'flex items-center justify-end pt-[40px] ',
          'md:pt-[100px] md:pr-[32px] gap-[4px] md:text-[32px] md:leading-[35.2px] font-[700]',
          'text-[#279795] font-Trap-700 text-[14px] leading-[19.6px]',
          'mb-[23.4px] md:mb-[80px]',
        )}
      >
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Guiding</span>{' '}
        Principles
      </div>

      <div
        className={classNames(
          'font-Trap-700 text-[#000000] font-[500] md:text-[130px] text-[42px]',
          'md:leading-[157.33px] leading-[46.2px] tracking-[1%]',
          'mb-[24px] md:mb-[80px]',
        )}
      >
        Our Mission and What Drives Us Forward
      </div>

      <div
        className={classNames(
          'md:h-[583px] h-[512px] w-full bg-[#9595F5] md:rounded-[40px]',
          'rounded-[24px] flex flex-col md:justify-between',
          'md:flex-row items-center',
          'md:px-[117px] px-[16px] py-[20px] md:py-[unset]',
          'md:mb-[80px] mb-[24px]',
          'justify-center gap-[32px]',
        )}
      >
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737582582/40484092_8793902_1_gmchyg.png"
          className="md:w-[500px] md:h-[500px] w-[250px] h-[250px]"
        />

        <div className={classNames('md:w-[484px]')}>
          <h4
            className={classNames(
              'font-Trap-700 text-[#001324] font-[700] md:text-[48px] md:leading-[52.8px] md:text-left',
              'md:mb-[28px] text-center text-[24px] leading-[28.8px]',
            )}
          >
            What is Algorand Nigeria’s Mission
          </h4>
          <p
            className={classNames(
              'font-Trap-700 text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px] md:text-left',
              'text-center text-[18px] leading-[25.2px]',
            )}
          >
            Our mission is in line with Algorand Foundation’s mission to power a world where
            information has integrity and innovative solutions can scale.
          </p>
        </div>
      </div>

      {/* <div
        className={classNames(
          'md:h-[583px] h-[512px] w-full bg-[#279795] md:rounded-[40px]',
          'rounded-[24px] flex flex-col md:justify-between',
          'md:flex-row-reverse items-center',
          'md:px-[117px] px-[16px] py-[20px] md:py-[unset]',
          'md:mb-[80px] mb-[24px]',
          'justify-center gap-[32px]',
        )}
      >
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737582583/Group_1_f2hakt.png"
          className="md:w-[500px] md:h-[500px] w-[250px] h-[250px]"
        />

        <div className={classNames('md:w-[484px]')}>
          <h4
            className={classNames(
              'font-Inter text-[#001324] font-[700] md:text-[48px] md:leading-[52.8px] md:text-left',
              'md:mb-[28px] text-center text-[24px] leading-[28.8px]',
            )}
          >
            What is Algorand Nigeria’s Vision
          </h4>
          <p
            className={classNames(
              'font-Inter text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px] md:text-left',
              'text-center text-[18px] leading-[25.2px]',
            )}
          >
            To be the leading blockchain community driving change and opportunity in the digital
            era.
          </p>
        </div>
      </div> */}

      {/* <div
        className={classNames(
          'md:h-[583px] h-[512px] w-full bg-[#279795] md:rounded-[40px]',
          'rounded-[24px] flex flex-col md:justify-between',
          'md:flex-row items-center',
          'md:px-[117px] px-[16px] py-[20px] md:py-[unset]',
          'justify-center gap-[32px]',
          'mb-[101.6px] md:mb-[176px]',
        )}
      >
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737582582/Group_2_lzlzws.png"
          className="md:w-[500px] md:h-[500px] w-[250px] h-[250px]"
        />

        <div className={classNames('md:w-[484px]')}>
          <h4
            className={classNames(
              'font-Inter text-[#001324] font-[700] md:text-[48px] md:leading-[52.8px] md:text-left',
              'md:mb-[28px] text-center text-[24px] leading-[28.8px]',
            )}
          >
            What is Algorand Nigeria’s Value
          </h4>
          <div className="flex flex-col md:gap-[28px] gap-[8px] items-center">
            <div className="flex md:gap-[20px] gap-[8px] items-center">
              <StarCheckIcon className="hidden md:block" variant="white" />
              <StarCheckIcon className="md:hidden" variant="green" />
              <span
                className={classNames(
                  'font-Inter text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px]',
                  'text-[18px] leading-[25.2px]',
                )}
              >
                Inclusivity
              </span>
            </div>

            <div className="flex md:gap-[20px] gap-[8px] items-center">
              <StarCheckIcon className="hidden md:block" variant="white" />
              <StarCheckIcon className="md:hidden" variant="green" />
              <span
                className={classNames(
                  'font-Inter text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px]',
                  'text-[18px] leading-[25.2px]',
                )}
              >
                Transparency
              </span>
            </div>

            <div className="flex md:gap-[20px] gap-[8px] items-center">
              <StarCheckIcon className="hidden md:block" variant="white" />
              <StarCheckIcon className="md:hidden" variant="green" />
              <span
                className={classNames(
                  'font-Inter text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px]',
                  'text-[18px] leading-[25.2px]',
                )}
              >
                Innovation
              </span>
            </div>

            <div className="flex md:gap-[20px] gap-[8px] items-center">
              <StarCheckIcon className="hidden md:block" variant="white" />
              <StarCheckIcon className="md:hidden" variant="green" />
              <span
                className={classNames(
                  'font-Inter text-[#FFFFFF] font-[400] md:text-[42px] md:leading-[46.2px]',
                  'text-[18px] leading-[25.2px]',
                )}
              >
                Community
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </PageMaxWidth>
  );
};
