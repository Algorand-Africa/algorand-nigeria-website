import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import Link from 'next/link';
import { FaqAccordion } from './faq-accordion';

export const Faq = () => {
  const faqs = [
    {
      question: 'What is Algorand Nigeria?',
      answer:
        'The blockchain is a decentralized digital ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively. This technology enables the secure transfer of digital assets without the need for a central authority.',
    },
    {
      question: 'How can I join the Algorand Nigeria Community?',
      answer:
        'The community is open to everyone. You can join the community by signing up on the website and participating in the various activities and events organized by the community.',
    },
    {
      question: 'What is Algorand and how does it work?',
      answer:
        'Algorand is a blockchain platform that aims to create a borderless economy by providing a fast, secure, and scalable platform for decentralized applications.',
    },
    {
      question: 'Are there any fees for attending events?',
      answer: 'Events are free to attend for all members of the community.',
    },
    {
      question: 'Can I get a certificate for attending an event?',
      answer:
        'Yes, you can get a certificate of attendance for attending an event. Please contact the event organizer for more information.',
    },
  ];

  return (
    <section className={classNames('flex flex-col pt-10 pb-10', 'md:pt-[114px] md:pb-[100px]')}>
      <PageMaxWidth>
        <div className={classNames('flex flex-col gap-[46px] md:gap-[80px]')}>
          <h4
            className={classNames(
              'text-right font-Trap-700 text-sm text-[#17CAC6]',
              'md:text-[32px] md:leading-[35.2px]',
            )}
          >
            <span className="font-Trap-700 md:text-[50px] md:leading-[55px]">.</span>{' '}
            <span className="text-[#070D17]">Any</span> Question?
          </h4>
        </div>
        <h2
          className={classNames(
            'pt-[62px] font-Inter font-[700] text-[42px] leading-[46.2px]',
            'text-black md:font-Trap-600 md:text-[80px] md:leading-[88px]',
            'md:pt-[47px] md:pb-[97px] pb-[50px]',
          )}
        >
          FAQ
        </h2>

        <div className="flex flex-col gap-4 md:gap-[50px]">
          {faqs.map((faq) => (
            <FaqAccordion key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* <div className="flex justify-center mt-[50px] md:mt-[97px]">
          <Link
            className={classNames(
              'md:flex hidden border-[1px] border-[#001324] rounded-[100px] px-[46.5px]',
              'py-5 w-fit font-Inter font-[500] text-[#001324] text-sm',
              'md:border-[3px] md:py-[17px] md:px-[22px] md:font-Trap-600 md:text-[20px]',
              'md:leading-[22px] hover:bg-[#001324] hover:text-[#FFFFFF]',
            )}
            href="#"
          >
            Show all questions
          </Link>
        </div> */}
      </PageMaxWidth>
    </section>
  );
};
