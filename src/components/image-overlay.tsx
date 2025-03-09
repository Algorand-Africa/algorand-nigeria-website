'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';

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
    <div
      className={classNames('fixed inset-0 z-50 bg-black/80', 'flex items-center justify-center')}
      onClick={onClose}
    >
      <button
        className={classNames(
          'absolute top-4 right-4 p-2',
          'text-white hover:text-gray-300 transition-colors',
        )}
        onClick={onClose}
      >
        <IoClose size={32} />
      </button>
      <img
        src={imageUrl}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain w-full h-full"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
