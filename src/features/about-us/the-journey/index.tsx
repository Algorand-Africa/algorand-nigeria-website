import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { JourneyItem } from './journey-item';

export const TheJourney = () => {
  const items: {
    period: string;
    title: string;
    description: string;
  }[] = [
    // {
    //   period: '2022',
    //   title: 'Launch and Early Engagements',
    //   description:
    //     'The Nigerian government signed a three-year exclusive intellectual property rights (IPR) agreement with Developing Africa Group to launch a nationwide wallet on the Algorand blockchain. This initiative aimed to enable the international commercialization of various IP forms created and registered within Nigeria, including trademarks, patents, and copyrights.',
    // },
    {
      period: '2021 - 2022',
      title: 'Decentralized Umoja Bounty Hacks',
      description:
        'Algorand Foundation   and  Reach   in partnership with  Africa Blockchain Alliance   launched the series of hackathons tagged Decentralized Umoja Algorand Bounty Hack. In line with the foundation’s commitment to foster blockchain education on the African continent, Algorand Foundation partnered with the Alliance and Reach to organize this agile and fast paced program for African web developers to get into blockchain development.',
    },
    {
      period: 'December, 2023',
      title: 'Developer Ecosystem and Community Growth',
      description:
        'Algorand Foundation’s efforts led to the empowerment of over 500 Nigerian software developers through comprehensive training via online and in-person bootcamps. Nigerian developers made a significant impact in the Build-A-Bull Global Hackathon, securing top positions across multiple tracks.',
    },
    {
      period: 'February, 2024',
      title: 'Developer Ecosystem and Community Growth',
      description:
        'The Foundation expanded its outreach to Plateau State, organizing workshops for over 50 software developers and hosting a policy dinner that brought together government officials and aspiring developers to explore blockchain’s potential in the region.',
    },
    {
      period: 'February, 2024',
      title: 'Strategic Partnerships and Government Collaborations',
      description:
        'The Government of Plateau State entered into a partnership with the Algorand Foundation to explore blockchain applications across various sectors, aiming to enhance efficiency, transparency, and economic opportunities for residents.',
    },
    {
      period: 'February, 2024',
      title: 'Cultural Integration and Community Engagement',
      description:
        'The Foundation sponsored the Incredible Music Festival in Jos, Plateau State, and collaborated with Algogems to host a workshop introducing local creatives to Web3, empowering them to participate in the digital economy. ',
    },
    {
      period: 'May, 2024',
      title: 'Educational Initiatives',
      description:
        'The #PythonMay series was launched, beginning with a webinar about Python on Algorand, followed by office hours and an in-person meetup in Abuja for intermediate blockchain developers. This series onboarded over 200 software developers to build on Algorand. ',
    },
  ];
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
        <span className="font-Trap-900">.</span> <span className="text-[#070D17]">Tracing Our</span>{' '}
        Roots
      </div>

      <div
        className={classNames(
          'text-[#000000] font-medium font-Trap-500 mb-[24px] md:mb-[16px]',
          'text-[42px] leading-[46.2px] md:text-[130px] md:leading-[157.33px]',
        )}
      >
        The Journey of Algorand in Nigeria
      </div>

      <div className="mb-[80px] mr-[69px] text-[#6D6D6D] font-light font-Inter leading-[25.2px] text-[18px] hidden md:block">
        Algorand’s journey in Nigeria is a story of innovation, collaboration, and empowerment. From
        its inception, Algorand has set out to redefine the blockchain landscape with its unique
        Pure Proof-of-Stake consensus, bringing security, scalability, and sustainability to the
        forefront. Here’s how Algorand has evolved and impacted the Nigerian blockchain ecosystem.
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5 mb-[71px] md:mb-[150px]">
        {items.map((item, index) => (
          <JourneyItem key={index} {...item} />
        ))}
      </div>
    </PageMaxWidth>
  );
};
