'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { SlLocationPin } from 'react-icons/sl';
import { TbCalendarMonth } from 'react-icons/tb';
import { formatImages } from '@/utils/organize-images';
import { useWindowSize } from '@/hooks/use-window-size';
import { ImageOverlay } from '@/components/image-overlay';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useEventsActions } from '@/actions/events';
import { GalleryImage, IEvent } from '@/interface/event.interface';
import { createSanitizedMarkup } from '@/utils';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { profileAtom } from '@/state';
import toast from 'react-hot-toast';
import { useEventsContractActions } from '@/actions/events/index.contract';
import { useWallet } from '@txnlab/use-wallet';
import { ConnectWalletVisibleAtom } from '@/state/wallet.atom';

interface EventDetailsProps {
  token?: string;
  id?: string;
}

export const EventDetails = ({ token, id }: EventDetailsProps) => {
  const { width } = useWindowSize();
  const router = useRouter();
  const profile = useRecoilValue(profileAtom);
  const { getEventById, registerForEvent, markEventAsAttended, markEventAsCollectedNft } =
    useEventsActions();
  const { claimEventNft } = useEventsContractActions();
  const [isRegistering, setIsRegistering] = useState(false);
  const { activeAddress } = useWallet();
  const setConnectWallet = useSetRecoilState(ConnectWalletVisibleAtom);
  const isDesktop = width > 768;
  const [event, setEvent] = useState<IEvent | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt?: string } | null>(null);

  const eventImages: GalleryImage[] = (event?.imageGallery || []).map((image) => ({
    url: image,
    alt: image,
    fullWidth: true,
  }));

  const { column1, column2, spillOver } = formatImages(eventImages || []);

  const fetchEvent = async () => {
    const event = await getEventById(id as string);

    if (event) {
      setEvent(event);
    }
  };

  const register = async () => {
    setIsRegistering(true);
    const toastId = toast.loading('Registering for event...');
    const res = await registerForEvent(id as string);
    setIsRegistering(false);
    toast.dismiss(toastId);

    if (res) {
      toast.success('Registered for event successfully');
      fetchEvent();
    }
  };

  const markAsAttended = async () => {
    if (!event?.id || !token || !profile?.id) return;

    const toastId = 'kei';
    toast.loading('Marking event as attended...', { id: toastId });
    const res = await markEventAsAttended(token);
    toast.dismiss(toastId);

    if (res) {
      toast.success('Event marked as attended successfully', { id: toastId });
      router.push(`/events/${event.id}`);
      fetchEvent();
    }
  };

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

  const claimNft = async () => {
    if (!event?.id || !event?.smartContractId || !event?.asaId || !profile?.id) return;

    if (!activeAddress) {
      toast.error('Please connect your wallet to claim the NFT');
      setConnectWallet(true);
      return;
    }

    const toastId = 'kei';
    toast.loading('Claiming NFT...', { id: toastId });

    try {
      await claimEventNft(Number(event.smartContractId), Number(event.asaId));

      const response = await markEventAsCollectedNft(event.id);

      if (response) {
        toast.success('NFT claimed successfully');
        fetchEvent();
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(`Failed to claim NFT: ${error}`);
    }

    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  useEffect(() => {
    if (token) {
      markAsAttended();
    }
  }, [token, event, profile]);

  return (
    <PageMaxWidth maxWidth={1200} className={classNames('py-11 md:py-[94px]', 'relative')}>
      {event?.image && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={event.image}
          className="absolute top-0 left-0 w-full h-[150px] md:h-[400px] object-cover object-top blur-sm"
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={classNames(
          'bg-[#F9F9F9] rounded-[16px] p-6 md:p-[50px] relative z-1',
          'flex flex-col cursor-pointer font-Inter',
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 md:mb-5">
          <h4
            className={classNames(
              'text-[#001324] tracking-[-0.01em]',
              'text-[24px] leading-[33.6px] md:text-[42px] md:leading-[46.2px]',
              'md:line-clamp-2 font-Trap-700',
            )}
          >
            {event?.title}
          </h4>

          {!!profile?.id && !!event && event?.userStatus === 'not_registered' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classNames(
                'px-8 py-4 text-[#E7FAF9] min-w-[200px]',
                'font-Inter text-[16px] md:text-[18px] leading-[25.2px] font-[700]',
                'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
                'hover:bg-[#2d4af1] transition-all',
              )}
              disabled={isRegistering}
              onClick={register}
            >
              {isRegistering ? 'Registering...' : 'Register Now'}
            </motion.button>
          )}

          {!!profile?.id && !!event && event?.userStatus === 'attended' && !!event && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classNames(
                'px-8 py-4 text-[#E7FAF9]',
                'font-Inter text-[16px] md:text-[18px] leading-[25.2px] font-[700]',
                'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
                'hover:bg-[#2d4af1] transition-all',
              )}
              disabled={isRegistering}
              onClick={claimNft}
            >
              Claim Nft
            </motion.button>
          )}

          {!profile?.id && !!event && event.status === 'upcoming' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classNames(
                'px-8 py-4 text-[#E7FAF9] min-w-[200px]',
                'font-Inter text-[16px] md:text-[18px] leading-[25.2px] font-[700]',
                'rounded-[50px] border-[0.75px] border-[#2D2DF1] bg-[#2D2DF1]',
                'hover:bg-[#2d4af1] transition-all',
              )}
              disabled={isRegistering}
              onClick={() => {
                router.push(`/auth/log-in?redirect=/events/${event.id}`);
              }}
            >
              Reserve a spot
            </motion.button>
          )}
        </div>

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
            {event?.date
              ? new Date(event?.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : '---'}
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
          {event?.eventSummary && (
            <p
              className="text-[#6D6D6D] font-normal text-[16px] md:text-[20px] md:leading-[120%] leading-[140%] tracking-[0.01em] md:tracking-[0]"
              dangerouslySetInnerHTML={createSanitizedMarkup(event?.eventSummary || '---')}
            ></p>
          )}
        </div>

        {(event?.imageGallery?.length || 0) > 0 && (
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

        {(eventImages?.length || 0) > 0 && (
          <motion.div
            className="flex flex-col gap-2 md:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
              <div className="flex flex-wrap gap-2 md:gap-5">
                {column1.map((image, index) => (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
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
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + column1.length) }}
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
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * (index + column1.length + column2.length),
                    }}
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
          </motion.div>
        )}

        {selectedImage && (
          <ImageOverlay
            imageUrl={selectedImage.url}
            alt={selectedImage.alt}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </motion.div>
    </PageMaxWidth>
  );
};
