import { CSSProperties } from 'react';

export const profileColors: { properties: CSSProperties; className?: string }[] = [
  {
    properties: { background: 'linear-gradient(135deg, #BEF264 0%, #34D399 100%)' },
    className: 'border-[4.5px] border-[#F1F5F9] lg:border-[10px]',
  },
  {
    properties: { background: 'linear-gradient(180deg, #FBCFE8 0%, #818CF8 100%)' },
  },
  {
    properties: { background: 'linear-gradient(180deg, #FB923C 0%, #FB7185 100%)' },
  },
  {
    properties: { background: 'linear-gradient(180deg, #5EEAD4 0%, #14B8A6 100%)' },
  },
  {
    properties: { background: 'linear-gradient(225deg, #38BDF8 0%, #3B82F6 100%)' },
  },
];
