'use client';
import { FilterSelect } from './filter-select';

export const Filters = () => {
  return (
    <div className="flex md:justify-end md:gap-[32px] justify-between">
      <FilterSelect label="Location" options={['All', 'In-person', 'Virtual']} />
      <FilterSelect label="Event Type" options={['All', 'Webinar', 'Hackathon', 'Conference']} />
      <FilterSelect label="Time" options={['Anytime', 'This Week', 'This Month', 'This Quarter']} />
    </div>
  );
};
