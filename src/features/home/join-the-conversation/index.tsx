import { MessageIcon } from '@/assets/icons/message.icon';
import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';

export const JoinTheConversation = () => {
  return (
    <section
      className={classNames(
        'flex flex-col pt-10 pb-10',
        'md:pt-[138px] md:pb-[100px]',
        'border-[#4C5965]',
      )}
    >
      <PageMaxWidth>
        <div className={classNames('flex flex-col gap-[46px] md:gap-[80px]')}>
          <h4
            className={classNames(
              'text-right font-Trap-700 text-sm text-[#17CAC6]',
              'md:text-[32px] md:leading-[35.2px]',
            )}
          >
            <span className="font-Trap-700 md:text-[50px] md:leading-[55px]">.</span>{' '}
            <span className="text-[#070D17]">Join the</span> Conversation
          </h4>
        </div>
        <div
          className={classNames(
            'mt-[77.6px] md:mt-[190px] flex flex-col items-center relative',
            'bg-[#2D2DF1] rounded-[12.41px] pt-[58.7px] pb-[24px] px-4',
            'md:pt-[189px] md:pb-[79px] md:px-[100px] md:rounded-[40px]',
          )}
        >
          <MessageIcon
            className={classNames(
              'absolute w-[106.21px] h-[106.21px] top-[-56.21px]',
              'md:w-[340px] md:h-[340px] md:top-[-170px]',
            )}
          />
          <h2
            className={classNames(
              'max-w-[315px] text-center text-white font-Trap-700 font-[700] text-[32px] leading-[35.2px]',
              'md:max-w-[1016px] md:font-[900] md:text-[96px] md:leading-[105.6px]',
            )}
          >
            Participate in Discussions in the Community Forum
          </h2>
          <p
            className={classNames(
              'max-w-[315px] text-center text-white font-[400] text-[14px] leading-[19.6px]',
              'pt-2 md:pt-[11px] md:max-w-[1016px] text-[28px] leading-[33.6px]',
            )}
          >
            Connect, Collaborate, and Thrive in Our Vibrant Blockchain Forum
          </p>
          <Link
            className={classNames(
              'text-center py-[7.76px] px-[16.45px] text-[#2D2DF1] font-[400] text-[14px] leading-[19.6px]',
              'bg-[#E9E9FD] mt-6 rounded-[31px] md:mt-[28px] md:px-[53px] md:py-[25px]',
              'md:rounded-[100px] md:font-[700] md:text-[20px] md:leading-[24px]',
            )}
            href="/forum"
          >
            Visit Forum
          </Link>
        </div>
      </PageMaxWidth>
    </section>
  );
};
