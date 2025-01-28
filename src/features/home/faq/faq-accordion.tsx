'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';

interface Props {
  question: string;
  answer: string;
}

export const FaqAccordion = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={classNames(
        'flex flex-col bg-[#F3F7FA] md:px-[46px] md:py-[33px]',
        'rounded-[20px] md:border-[3px] border-black px-[33px] py-[25px]',
        'border-[2px]',
      )}
    >
      <div className={classNames('flex items-center justify-between gap-[10px]')}>
        <h4
          className={classNames(
            'font-Inter font-[500] text-[28px] leading-[33.6px] text-black',
            'font-[700] text-[42px] leading-[46px]',
          )}
        >
          {question}
        </h4>
        <div
          className={classNames(
            'rounded-full flex items-center justify-center w-[55px] h-[55px] border-[3px]',
            'border-black md:w-[75px] md:h-[75px] cursor-pointer',
          )}
          onClick={handleClick}
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <FiPlus className="w-[29.33px] h-[29.33px] md:w-[40px] md:h-[40px]" />
        </div>
      </div>
      <div
        style={{ maxHeight: open ? 400 : 0 }}
        className={classNames('', open ? 'mt-[25px] md:mt-[33px] opacity-100' : 'mt-0 opacity-0')}
      >
        <p className={classNames('font-Inter text-base md:text-2xl')}>{answer}</p>
      </div>
    </div>
  );
};
