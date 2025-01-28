import classNames from 'classnames';
import styles from './index.module.scss';
import { MouseEvent } from 'react';

interface CheckboxProps {
  checked?: boolean;
  onClick?: (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void;
  type?: 'check' | 'radio';
  className?: string;
}

export function Checkbox({ checked, onClick, type = 'check', className }: CheckboxProps) {
  return (
    <label className={classNames(styles['checkbox-holder'], className)}>
      <input checked={checked} type={'checkbox'} onChange={() => null} />
      <span
        onClick={onClick}
        className={classNames(styles['checkbox'], type === 'radio' ? styles['radio'] : '')}
      ></span>
    </label>
  );
}
