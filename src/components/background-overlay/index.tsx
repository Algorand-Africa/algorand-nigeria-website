'use client';

import { ReactNode, useEffect } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { disableScrollLock, enableScrollLock } from '@/utils/scroll-lock';

interface BackgroundOverlayProps {
  children?: ReactNode;
  visible?: boolean;
  onClose?: () => any;
  className?: string;
}

export const BackgroundOverlay = ({
  children = <></>,
  visible = true,
  onClose = () => null,
  className,
}: BackgroundOverlayProps) => {
  useEffect(() => {
    enableScrollLock();

    return () => disableScrollLock();
  }, []);

  useEffect(() => {
    if (visible) {
      enableScrollLock();
    } else {
      disableScrollLock();
    }
  }, [visible]);

  return visible ? (
    <div className={classNames(styles['wrapper'], className)}>
      <div className={styles['overlay']} onClick={onClose}></div>
      {children}
    </div>
  ) : null;
};
