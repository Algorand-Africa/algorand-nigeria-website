import { MOCK_PAST_EVENTS } from '@/constants/mock-events.constant';
import { PastEventItem } from './past-event-item';

export const PastEventsList = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 mb-[102.6px] md:mb-[109px]">
      {MOCK_PAST_EVENTS.map((event, index) => (
        <PastEventItem {...event} key={index} />
      ))}
    </div>
  );
};
