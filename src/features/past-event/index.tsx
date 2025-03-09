'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { useParams } from 'next/navigation';
import { REAL_PAST_EVENTS } from '@/constants/mock-events.constant';
import classNames from 'classnames';
import { SlLocationPin } from 'react-icons/sl';
import { TbCalendarMonth } from 'react-icons/tb';
import { formatImages } from '@/utils/organize-images';
import { useWindowSize } from '@/hooks/use-window-size';
import { ImageOverlay } from '@/components/image-overlay';
import { useState } from 'react';

export const PastEvent = () => {
  const { id } = useParams();
  const { width } = useWindowSize();
  const isDesktop = width > 768;
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt?: string } | null>(null);

  const event = REAL_PAST_EVENTS.find((event) => event.id === id);

  const { column1, column2, spillOver } = formatImages(event?.images || []);

  const computeImageDimensions = (
    fullWidth: boolean,
    isDesktop: boolean,
  ): { width: string; height: string } => {
    if (fullWidth) {
      if (isDesktop) return { width: '100%', height: '400px' };
      return { width: '100%', height: '200px' };
    }
    if (isDesktop) return { width: 'calc(50% - 10px)', height: '200px' };
    return { width: 'calc(50% - 4px)', height: '150px' };
  };

  return (
    <PageMaxWidth maxWidth={1200} className={classNames('py-11 md:py-[94px]', 'relative')}>
      {event?.image && (
        <img
          src={event.image}
          className="absolute top-0 left-0 w-full h-[150px] md:h-[400px] object-cover object-top"
        />
      )}
      <div
        className={classNames(
          'bg-[#F9F9F9] rounded-[16px] p-6 md:p-[50px] relative z-10',
          'flex flex-col cursor-pointer font-Inter',
        )}
      >
        <h4
          className={classNames(
            'text-[#001324] tracking-[-0.01em] mb-4 md:mb-5',
            'text-[24px] leading-[33.6px] md:text-[42px] md:leading-[46.2px]',
            'md:line-clamp-2 font-Trap-700',
          )}
        >
          {event?.title}
        </h4>
        <p
          className={classNames(
            'text-[#4C5965] font-normal tracking-[0.01em] mb-3 md:mb-4',
            'text-[14px] leading-[140%] md:text-[20px] md:leading-[120%]',
            // 'line-clamp-3 md:line-clamp-2',
          )}
        >
          {event?.description}
        </p>
        <div className="flex gap-[10.5px] md:gap-2 items-center mb-[9px]">
          <TbCalendarMonth color="#4C5965" size={18} />
          <p className="text-[#4C5965] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
            {event?.date}
          </p>
        </div>
        <div className="flex gap-[10.5px] md:gap-2 items-center">
          <SlLocationPin color="#4C5965" size={18} />
          <p className="text-[#4C5965] font-normal text-[16px] leading-[22.4px] tracking-[0.01em]">
            {event?.location}
          </p>
        </div>

        <hr className="w-full h-[1px] bg-[#B2B8BD] my-6 border-dashed" />

        <div className="flex flex-col gap-4 mb-8">
          {event?.descriptionParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#6D6D6D] font-normal text-[16px] md:text-[20px] md:leading-[120%] leading-[140%] tracking-[0.01em] md:tracking-[0]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {event?.images && (
          <h4
            className={classNames(
              'text-[#001324] tracking-[-0.01em] mb-8',
              'text-[32px] md:text-[48px] leading-[110%]',
              'font-Trap-700',
            )}
          >
            Image Gallery
          </h4>
        )}

        {event?.images && (
          <div className="flex flex-col gap-2 md:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
              <div className="flex flex-wrap gap-2 md:gap-5">
                {column1.map((image, index) => (
                  <img
                    key={image.url + index + 'column1'}
                    src={image.url}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="object-cover md:rounded-[16px] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                    style={{
                      width: computeImageDimensions(image.fullWidth!, isDesktop).width,
                      height: computeImageDimensions(image.fullWidth!, isDesktop).height,
                    }}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 md:gap-5">
                {column2.map((image, index) => (
                  <img
                    key={image.url + index + 'column2'}
                    src={image.url}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="object-cover md:rounded-[16px] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                    style={{
                      width: computeImageDimensions(image.fullWidth!, isDesktop).width,
                      height: computeImageDimensions(image.fullWidth!, isDesktop).height,
                    }}
                  />
                ))}
              </div>
            </div>

            {spillOver.length > 0 && (
              <div className="flex flex-col gap-2 md:gap-5">
                {spillOver.map((image, index) => (
                  <img
                    key={image.url + index + 'spillOver'}
                    src={image.url}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="object-cover md:rounded-[16px] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                    style={{
                      width: '100%',
                      height: width > 768 ? '400px' : '200px',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {selectedImage && (
          <ImageOverlay
            imageUrl={selectedImage.url}
            alt={selectedImage.alt}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </PageMaxWidth>
  );
};
