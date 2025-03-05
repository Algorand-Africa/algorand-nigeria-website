'use client';
import { useState } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={classNames(
              'absolute px-3 py-1 text-white text-sm bg-gray-900 rounded-md shadow-lg',
              position === 'top' && 'bottom-full mb-2 left-1/2 -translate-x-1/2',
              position === 'bottom' && 'top-full mt-2 left-1/2 -translate-x-1/2',
              position === 'left' && 'right-full mr-2 top-1/2 -translate-y-1/2',
              position === 'right' && 'left-full ml-2 top-1/2 -translate-y-1/2',
            )}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
