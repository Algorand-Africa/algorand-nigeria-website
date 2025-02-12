'use client';
import { useState } from 'react';
import classNames from 'classnames';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

export const Tooltip = ({ text, position = 'top', children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={classNames(
          'absolute px-3 py-1 text-white text-sm bg-gray-900 rounded-md shadow-lg transition-opacity duration-200',
          'opacity-0 pointer-events-none',
          isVisible && 'opacity-100',
          position === 'top' && 'bottom-full mb-2 left-1/2 -translate-x-1/2',
          position === 'bottom' && 'top-full mt-2 left-1/2 -translate-x-1/2',
          position === 'left' && 'right-full mr-2 top-1/2 -translate-y-1/2',
          position === 'right' && 'left-full ml-2 top-1/2 -translate-y-1/2',
        )}
      >
        {text}
      </div>
    </div>
  );
};
