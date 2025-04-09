'use client';

import { ReactNode, useEffect, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { disableScrollLock, enableScrollLock } from '@/utils/scroll-lock';

interface BackgroundOverlayProps {
  children?: ReactNode;
  visible?: boolean;
  onClose?: () => any;
  className?: string;
  lockScroll?: boolean;
}

export const BackgroundOverlay = ({
  children = <></>,
  visible = true,
  onClose = () => null,
  className,
  lockScroll = true,
}: BackgroundOverlayProps) => {
  useEffect(() => {
    if (lockScroll) {
      enableScrollLock();
    }

    return () => {
      if (lockScroll) {
        disableScrollLock();
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      if (lockScroll) {
        enableScrollLock();
      }
    } else {
      if (lockScroll) {
        disableScrollLock();
      }
    }
  }, [visible]);

  const handleClose = () => {
    onClose();
  };

  return visible ? (
    <div className={classNames(styles['wrapper'], className)}>
      <div className={styles['overlay']} onClick={handleClose}></div>
      {children}
    </div>
  ) : null;
};
