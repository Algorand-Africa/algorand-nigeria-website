'use client';

import styles from './index.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import classNames from 'classnames';

interface BackButtonProp {
  onClick?: () => any;
  className?: string;
}

export const BackButton = ({ onClick = () => null, className = '' }: BackButtonProp) => {
  return (
    <div className={classNames(styles.wrapper, className)} onClick={onClick}>
      <IoIosArrowBack className={styles.icon} />
      <div className={styles.text}>Back</div>
    </div>
  );
};
