'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import styles from './index.module.scss';
import { UIEvent, useEffect, useRef, useState } from 'react';
import { BlogCard } from './blog-card';

export const StayAhead = () => {
  const [buttonState, setButtonState] = useState({
    left: false,
    right: true,
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    const target = event.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth;
    const clientWidth = target.clientWidth;

    if (scrollLeft > 0) {
      setButtonState((prev) => ({ ...prev, left: true }));
    } else {
      setButtonState((prev) => ({ ...prev, left: false }));
    }

    if (scrollLeft + clientWidth < scrollWidth) {
      setButtonState((prev) => ({ ...prev, right: true }));
    } else {
      setButtonState((prev) => ({ ...prev, right: false }));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (ref.current) {
      const target = ref.current;
      const scrollLeft = target.scrollLeft;

      const pageWidth = window.innerWidth;

      const isMobile = pageWidth < 768;
      const unitScrollDistance = isMobile
        ? Math.min(340, pageWidth - 48) + 20
        : Math.min(416, pageWidth - 48) + 20;

      if (direction === 'left') {
        ref.current.scrollTo({
          top: 0,
          left: scrollLeft - unitScrollDistance,
          behavior: 'smooth',
        });
      } else {
        ref.current.scrollTo({
          top: 0,
          left: scrollLeft + unitScrollDistance,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      const target = ref.current;
      const scrollLeft = target.scrollLeft;
      const scrollWidth = target.scrollWidth;
      const clientWidth = target.clientWidth;

      if (scrollLeft > 0) {
        setButtonState((prev) => ({ ...prev, left: true }));
      } else {
        setButtonState((prev) => ({ ...prev, left: false }));
      }

      if (scrollLeft + clientWidth < scrollWidth) {
        setButtonState((prev) => ({ ...prev, right: true }));
      } else {
        setButtonState((prev) => ({ ...prev, right: false }));
      }
    }
  }, []);

  return (
    <section
      className={classNames(
        'flex flex-col pt-10 pb-10',
        'md:pt-[188px] md:pb-[62px]',
        'border-[#4C5965]',
      )}
    >
      <PageMaxWidth>
        <div className={classNames('flex flex-col gap-[46px] md:gap-[80px]')}>
          <h4
            className={classNames(
              'text-right font-Trap-700 text-sm text-[#070D17]',
              'md:text-[32px] md:leading-[35.2px]',
            )}
          >
            <span className="font-Trap-700 md:text-[50px] md:leading-[55px]">.</span>{' '}
            <span className="text-[#070D17]">Insights and</span> Updates
          </h4>
          <h1
            className={classNames(
              'font-Trap-500 font-[500] text-[42px] leading-[46.2px]',
              'text-[#001324] md:text-[130px] md:leading-[157.33px]',
            )}
          >
            Stay Ahead of the Curve in the Blockchain World
          </h1>
        </div>
        <div
          className={classNames(
            'mt-5 md:mt-10 flex flex-row items-center md:justify-between',
            'gap-2 md:gap-4 justify-end mb-6 md:mb-[90px]',
          )}
        >
          <Link
            className={classNames(
              'md:flex hidden border-[1px] border-[#001324] rounded-[100px] px-[46.5px]',
              'py-5 font-Inter font-[500] text-[#001324] text-sm',
              'md:border-[3px] md:py-[17px] md:px-[22px] md:font-[600] md:text-[20px]',
              'md:leading-[22px] hover:bg-[#001324] hover:text-[#FFFFFF]',
            )}
            href="/blog"
          >
            Browse More Articles
          </Link>
          <div className={classNames('flex flex-row items-center gap-3 md:gap-5')}>
            <button
              className={classNames(
                'flex items-center justify-center md:w-[55px] md:h-[55px] disabled:bg-[#E5E7E9] rounded-full',
                'disabled:text-[#141B34] bg-[#001324] text-[#FFFFFF]',
                'disabled:hover:bg-[#E5E7E9] disabled:hover:text-[#141B34] w-12 h-12',
              )}
              onClick={() => scroll('left')}
              disabled={!buttonState.left}
            >
              <BsArrowLeft />
            </button>
            <button
              className={classNames(
                'flex items-center justify-center md:w-[55px] md:h-[55px] disabled:bg-[#E5E7E9] rounded-full',
                'disabled:text-[#141B34] bg-[#001324] text-[#FFFFFF]',
                'disabled:hover:bg-[#E5E7E9] disabled:hover:text-[#141B34] w-12 h-12',
              )}
              onClick={() => scroll('right')}
              disabled={!buttonState.right}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          onScroll={handleScroll}
          className={classNames(styles.container, styles.full_page_width)}
        >
          <div className="flex flex-row gap-5">
            {Array.from({ length: 30 }).map((_, idx) => (
              <BlogCard key={idx} />
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center mt-6">
          <Link
            className={classNames(
              'flex border-[1px] border-[#001324] rounded-[100px] px-[46.5px]',
              'py-5 font-Inter font-[500] text-[#001324] text-sm',
              'md:border-[3px] md:py-[17px] md:px-[22px] md:font-[600] md:text-[20px]',
              'md:leading-[22px] hover:bg-[#001324] hover:text-[#FFFFFF]',
            )}
            href="/events"
          >
            View All Events
          </Link>
        </div>
      </PageMaxWidth>
    </section>
  );
};
