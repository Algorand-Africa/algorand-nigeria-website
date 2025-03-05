'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { Logos } from './logos';
import { shuffleArray } from '@/utils/shuffle-array';

export const OneBlockchain = () => {
  return (
    <main
      className={classNames(
        'flex flex-col mt-[19px] mb-[120px] gap-10',
        'md:mt-[61px] md:mb-[105px] md:gap-[89px]',
      )}
    >
      <PageMaxWidth>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={classNames('flex flex-col gap-10 items-center')}
        >
          <div className={classNames('flex flex-col gap-4 md:gap-[6px]')}>
            <h1
              className={classNames(
                'font-Trap-700 font-[700] text-[42px] leading-[46.2px] text-[#2D2DF1]',
                'text-center md:text-[48px] md:leading-[52.8px]',
              )}
            >
              One Blockchain, 100+ solutions
            </h1>
            <p
              className={classNames(
                'font-Inter font-[400] text-[18px] leading-[25.2px] text-[#6D6D6D]',
                'text-center md:font-[500] md:leading-[21.6px]',
              )}
            >
              A list of solutions built on the Algorand Blockchain.
            </p>
          </div>
        </motion.div>
      </PageMaxWidth>
      <div className={classNames('flex flex-col gap-[19px] md:gap-[27px]')}>
        <Marquee speed={25} pauseOnHover>
          <div className={classNames('flex flex-row items-center gap-2 md:gap-[14px]', '')}>
            {shuffleArray(Logos).map((item) => (
              <div
                className={classNames(
                  'flex flex-row items-center py-[7px] px-2',
                  'gap-2 md:px-[13.5px] md:gap-4',
                )}
                key={item.logo}
              >
                <img
                  src={item.logo}
                  alt={item.name + ' logo'}
                  className={classNames('rounded-full w-[24px] h-[24px] md:w-[50px] md:h-[50px]')}
                />
                <p
                  className={classNames(
                    'font-Inter font-[700] text-sm text[#001324]',
                    'md:text-[24px] md:leading-[28.8px] whitespace-nowrap',
                  )}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
        <div className={classNames('flex flex-row items-center justify-center gap-5')}>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.2, scaleX: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-[0.5px] bg-[#192A39] min-w-10"
              key={i}
            ></motion.div>
          ))}
        </div>
        <Marquee speed={25} pauseOnHover direction="right">
          <div className={classNames('flex flex-row items-center gap-2 md:gap-[14px]', '')}>
            {shuffleArray(Logos).map((item) => (
              <div
                className={classNames(
                  'flex flex-row items-center py-[7px] px-2',
                  'gap-2 md:px-[13.5px] md:gap-4',
                )}
                key={item.logo}
              >
                <img
                  src={item.logo}
                  alt={item.name + ' logo'}
                  className={classNames('rounded-full w-[24px] h-[24px] md:w-[50px] md:h-[50px]')}
                />
                <p
                  className={classNames(
                    'font-Inter font-[700] text-sm text[#001324]',
                    'md:text-[24px] md:leading-[28.8px] whitespace-nowrap',
                  )}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </main>
  );
};
