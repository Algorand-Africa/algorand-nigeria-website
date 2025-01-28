import styles from './index.module.scss';
import { IoIosClose } from 'react-icons/io';
import classNames from 'classnames';
import { NOTIFICATION_POPUP_TYPE } from '@/enums';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CiWarning } from 'react-icons/ci';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { toast } from 'react-hot-toast';

interface NotificationPopup {
  id: string;
  type: 'plain' | 'info' | 'error' | 'warning' | 'success';
  title: string;
  message: string;
  className?: string;
  firstAction?: () => any;
  firstActionLabel?: string;
  secondAction?: () => any;
  secondActionLabel?: string;
}

export const NotificationPopup = ({
  id,
  title,
  message,
  type,
  className,
  firstAction = () => null,
  firstActionLabel = '',
  secondAction = () => null,
  secondActionLabel = '',
}: NotificationPopup) => {
  function parseStyles() {
    const classes = [];

    switch (type) {
      case NOTIFICATION_POPUP_TYPE.PLAIN:
        classes.push(styles['plain']);
        break;
      case NOTIFICATION_POPUP_TYPE.INFO:
        classes.push(styles['info']);
        break;
      case NOTIFICATION_POPUP_TYPE.ERROR:
        classes.push(styles['error']);
        break;
      case NOTIFICATION_POPUP_TYPE.WARNING:
        classes.push(styles['warning']);
        break;
      default:
        classes.push(styles['success']);
        break;
    }

    if (className) {
      classes.push(className);
    }

    return { classes };
  }

  const onClose = () => {
    toast.dismiss(id);
  };

  return (
    <div className={classNames(styles['box'], parseStyles().classes)}>
      <div className={styles.leftSection}>
        {type === 'info' ? (
          <AiOutlineInfoCircle className={styles.leftIcon} />
        ) : type === 'error' ? (
          <AiOutlineInfoCircle className={styles.leftIcon} />
        ) : type === 'plain' ? (
          <AiOutlineInfoCircle className={styles.leftIcon} />
        ) : type === 'warning' ? (
          <CiWarning className={styles.leftIcon} />
        ) : (
          <IoIosCheckmarkCircleOutline className={styles.leftIcon} />
        )}

        <div className={styles.messageInfo}>
          <h3>{title}</h3>
          <p>{message}</p>

          <div className={styles.lowerInfo}>
            {firstActionLabel.length > 0 && (
              <h5
                onClick={() => {
                  firstAction();
                  onClose();
                }}
              >
                {firstActionLabel}
              </h5>
            )}
            {secondActionLabel.length > 0 && (
              <h5
                onClick={() => {
                  secondAction();
                  onClose();
                }}
              >
                {secondActionLabel}
              </h5>
            )}
          </div>
        </div>
      </div>

      <IoIosClose className={styles.close} onClick={onClose} />
    </div>
  );
};
