'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageOverlayProps {
  imageUrl: string;
  alt?: string;
  onClose: () => void;
}

export const ImageOverlay = ({ imageUrl, alt, onClose }: ImageOverlayProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classNames('fixed inset-0 z-50 bg-black/80', 'flex items-center justify-center')}
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1 }}
          className={classNames(
            'absolute top-4 right-4 p-2',
            'text-white hover:text-gray-300 transition-colors',
          )}
          onClick={onClose}
        >
          <IoClose size={32} />
        </motion.button>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          src={imageUrl}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain w-full h-full"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
};
