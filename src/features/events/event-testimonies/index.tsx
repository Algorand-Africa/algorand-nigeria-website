'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { TESTIMONIES } from '@/constants/testimonies.constant';
import { useWindowSize } from '@/hooks/use-window-size';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';

export const EventTestimonies = () => {
  const carouselRef: any = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { width } = useWindowSize();

  const scrollCarousel = (direction: number) => {
    const scrollAmount = carouselRef.current.offsetWidth; // Scroll by one full container width
    carouselRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  const updateScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollState(); // Initial state
      carousel.addEventListener('scroll', updateScrollState);
      return () => carousel.removeEventListener('scroll', updateScrollState);
    }
  }, []);
  return (
    <section
      className={classNames(
        'pt-10 pb-[27px]',
        'md:pt-[67px] md:pb-[51px]',
        'bg-[#E9E9FD] mb-[97.6px] md:mb-[152px]',
      )}
    >
      <PageMaxWidth className="flex flex-col">
        <h4
          className={classNames(
            'text-right font-Trap-700 text-sm text-[#2D2DF1]',
            'md:text-[32px] md:leading-[35.2px]',
            'md:mb-[49px] mb-[23.4px]',
          )}
        >
          <span className="font-Trap-700 md:text-[50px] md:leading-[55px]">.</span>{' '}
          <span className="text-[#000000]">Event</span> Testimonies
        </h4>

        <div className="flex flex-col md:flex-row gap-6 gap-[46px]">
          <div className="flex flex-col gap-6 md:gap-[50px]">
            <h4
              className={classNames(
                'font-Trap-700 text-[#000000] text-[42px] leading-[46.2px] tracking-[-0.01em] w-[349px]',
                'md:text-[#001324] md:text-[60px] md:leading-[70px] md:w-[468px] md:tracking-[0em]',
              )}
            >
              Here’s what people are loving about us.
            </h4>

            <div className="flex self-end gap-[12px] md:gap-6 md:self-start">
              <div
                className={classNames(
                  'w-[48px] h-[48px] rounded-[100%]',
                  'md:w-[86.4px] md:h-[86.4px]',
                  'flex items-center justify-center cursor-pointer',
                )}
                style={{
                  backgroundColor: canScrollLeft ? '#2D2DF1' : '#F7F7F7',
                }}
                onClick={() => scrollCarousel(-1)}
              >
                <HiArrowSmallLeft
                  color={canScrollLeft ? '#FFFFFF' : '#ACACAC'}
                  size={width < 768 ? 24 : 36}
                />
              </div>
              <div
                className={classNames(
                  'w-[48px] h-[48px] rounded-[100%]',
                  'md:w-[86.4px] md:h-[86.4px]',
                  'flex items-center justify-center cursor-pointer',
                )}
                style={{
                  backgroundColor: canScrollRight ? '#2D2DF1' : '#F7F7F7',
                }}
                onClick={() => scrollCarousel(1)}
              >
                <HiArrowSmallRight
                  color={canScrollRight ? '#FFFFFF' : '#ACACAC'}
                  size={width < 768 ? 24 : 36}
                />
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className={classNames(
              'flex gap-5 md:gap-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory',
            )}
            style={{ scrollbarWidth: 'none' }}
          >
            {TESTIMONIES.map((item) => (
              <div
                className={classNames(
                  'bg-[#2D2DF1] rounded-[32px] p-4 w-[340px] h-[436px] md:w-[432px] md:h-[528px]',
                  'min-w-[340px] md:min-w-[432px]',
                )}
                key={item.name}
              >
                <div
                  className={classNames(
                    'w-full h-[308px] md:h-[400px] rounded-[16px] flex flex-col justify-end mb-4',
                  )}
                  style={{
                    background: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="p-4 backdrop-blur-[5px] inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.45)] to-white">
                    <h4
                      className={classNames(
                        'text-[#001324] font-Inter font-bold text-[20px] leading[24px] mb-[5px]',
                        'md:text-6 md:leading-[28.8px] tracking-[-0.01em]',
                      )}
                    >
                      {item.name}
                    </h4>
                    <h5
                      className={classNames(
                        'text-[#6D6D6D] font-Inter font-normal text-[18px] leading[25.2px] tracking-[0.01em]',
                        'md:text-5 md:leading-6 tracking-[0]',
                      )}
                    >
                      {item.designation}
                    </h5>
                  </div>
                </div>
                <p
                  className={classNames(
                    'text-[#FFFFFF] font-Inter font-normal text-[14px] leading[19.6px] tracking-[0.01em] italic line-clamp-4',
                  )}
                >
                  {item.testimony}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageMaxWidth>
    </section>
  );
};
