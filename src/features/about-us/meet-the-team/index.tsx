'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import { TeamItem } from './team-item';
import { useEffect, useRef, useState } from 'react';

export const MeetTheTeam = () => {
  const carouselRef: any = useRef();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    <PageMaxWidth className="bg-[#F9F9F9]">
      <div
        className={classNames(
          'flex items-center justify-end pt-[40px] ',
          'md:pt-[100px] md:pr-[32px] gap-[4px] md:text-[32px] md:leading-[35.2px] font-[700]',
          'text-[#279795] font-Inter text-[14px] leading-[19.6px]',
          'mb-[23.4px] md:mb-[80px]',
        )}
      >
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Our</span> Leader
      </div>

      <div
        className={classNames(
          'text-[#001324] font-medium font-Inter mb-[24px] md:mb-[80px]',
          'text-[42px] leading-[46.2px] md:text-[130px] md:leading-[157.33px]',
        )}
      >
        Meet The Team
      </div>

      <div className={classNames('hidden md:flex justify-center gap-[16px] mb-[100px]')}>
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657115/Team_card_v1ctd3.png"
          alt="Benjamin Onuoha"
        />
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657115/Team_card_1_jwzfat.png"
          alt="Anjorin Tayo"
        />
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657115/Team_card_2_w4wgv3.png"
          alt="Timothy Ogwulumba"
        />
        <img
          src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657115/Team_card_3_oeixz8.png"
          alt="Paul Ogwulumba"
        />
      </div>

      <div className="md:hidden flex flex-col gap-[45px] mb-[45px]">
        <div className="flex self-end gap-[12px]">
          <div
            className={classNames(
              'w-[48px] h-[48px] rounded-[100%]',
              'flex items-center justify-center',
            )}
            style={{
              backgroundColor: canScrollLeft ? '#001324' : '#E5E7E9',
            }}
          >
            <HiArrowSmallLeft
              color={canScrollLeft ? '#FFFFFF' : '#001324'}
              size={24}
              onClick={() => scrollCarousel(-1)}
            />
          </div>
          <div
            className={classNames(
              'w-[48px] h-[48px] rounded-[100%]',
              'flex items-center justify-center',
            )}
            style={{
              backgroundColor: canScrollRight ? '#001324' : '#E5E7E9',
            }}
          >
            <HiArrowSmallRight
              color={canScrollRight ? '#FFFFFF' : '#001324'}
              size={24}
              onClick={() => scrollCarousel(1)}
            />
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-[20px] overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          <TeamItem
            name="Ben Onuoha"
            title="Country Manager, Nigeria"
            info="Ben has been a consultant and advisor to multiple blockchain projects in Africa and globally. His areas of interest are emerging technology, youth leadership and entrepreneurship ecosystems development."
            image="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657708/3eb9029833009af220bea7cb465f27ce_mhlak4.png"
          />

          <TeamItem
            name="Ben Onuoha"
            title="Country Manager, Nigeria"
            info="Ben has been a consultant and advisor to multiple blockchain projects in Africa and globally. His areas of interest are emerging technology, youth leadership and entrepreneurship ecosystems development."
            image="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657714/30386013ab96f544385d66cb68e845cd_tlzqbw.jpg"
          />

          <TeamItem
            name="Ben Onuoha"
            title="Country Manager, Nigeria"
            info="Ben has been a consultant and advisor to multiple blockchain projects in Africa and globally. His areas of interest are emerging technology, youth leadership and entrepreneurship ecosystems development."
            image="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657707/fe843d82b2a514abfd7a12051bb2eccc_vhekgz.jpg"
          />

          <TeamItem
            name="Ben Onuoha"
            title="Country Manager, Nigeria"
            info="Ben has been a consultant and advisor to multiple blockchain projects in Africa and globally. His areas of interest are emerging technology, youth leadership and entrepreneurship ecosystems development."
            image="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737657707/a14da1ab01cdd7e788a230228bccb984_v5uxuj.jpg"
          />
        </div>
      </div>
    </PageMaxWidth>
  );
};
