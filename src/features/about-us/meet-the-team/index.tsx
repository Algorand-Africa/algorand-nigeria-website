'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import { TeamItem } from './team-item';
import { useEffect, useRef, useState } from 'react';
import { TEAM_MEMBERS } from '@/constants/team-members.constant';

export const MeetTheTeam = () => {
  const carouselRef: any = useRef();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeMember, setActiveMember] = useState(1);

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
          'text-[#279795] font-Trap-700 text-[14px] leading-[19.6px]',
          'mb-[23.4px] md:mb-[80px]',
        )}
      >
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Our</span> Team
      </div>

      <div
        className={classNames(
          'text-[#001324] font-medium font-Trap-500 mb-[24px] md:mb-[80px]',
          'text-[42px] leading-[46.2px] md:text-[130px] md:leading-[157.33px]',
        )}
      >
        Meet The Team
      </div>

      {/* <div className={classNames('hidden md:flex justify-center gap-[16px] mb-[100px]')}>
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
      </div> */}

      <div className="hidden md:flex justify-center gap-[16px] mb-[100px] relative">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.id}
            className="relative cursor-pointer flex items-center"
            onMouseEnter={() => setActiveMember(member.id)}
          >
            <div
              className={classNames(
                'transition-all duration-200 overflow-hidden h-[500px] max-h-[500px]',
                activeMember === member.id
                  ? index === 0
                    ? 'w-[500px] opacity-100 scale-100'
                    : 'w-[300px] opacity-100 scale-100'
                  : 'w-0 opacity-0 scale-0',
              )}
            >
              <h3 className="mt-12 font-Trap-600 font-bold text-[#001324] text-[20px] leading-[24px] md:text-[24px] md:leading-28px mb-[16px] tracking-[1%]">
                {member.name}
              </h3>
              <p
                className={classNames(
                  'text-[#001324] font-normal font-Trap-500 text-[18px] leading-[25.2px] mb-[16px]',
                  'tracking-[1%]',
                )}
              >
                {member.title}
              </p>
              <p
                className={classNames(
                  'font-Inter text-[#6D6D6D] font-normal md:font-light tracking-[1%]',
                  'md:text-[18px] md:leading-[25.2px] text-[16px] leading-[22.4px]',
                  'overflow-y-auto justify max-h-[400px]',
                )}
              >
                {member.info}
              </p>
            </div>

            <img
              src={member.image}
              alt={member.name}
              className={classNames(
                'w-[200px] h-[500px] object-cover border-[2px] border-[#FFF] rounded-[16px]',
                activeMember === member.id ? 'scale-110' : '',
              )}
            />
          </div>
        ))}
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
          {TEAM_MEMBERS.map((item) => (
            <TeamItem
              key={item.name}
              image={item.imageMobile}
              name={item.name}
              title={item.title}
              info={item.info}
              linkedin={item.linkedin}
              twitter={item.twitter}
            />
          ))}
        </div>
      </div>
    </PageMaxWidth>
  );
};
