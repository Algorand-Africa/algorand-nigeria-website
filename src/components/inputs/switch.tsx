import classNames from 'classnames';
import styles from './index.module.scss';

interface SwitchProp {
  checked?: boolean;
  onClick?: () => any;
}

export const Switch = ({ checked, onClick = () => null }: SwitchProp) => {
  return (
    <div className={classNames(styles.switch, checked ? styles.on : styles.off)} onClick={onClick}>
      <div className={styles.ball}></div>
    </div>
  );
};
