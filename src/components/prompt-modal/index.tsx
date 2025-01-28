import styles from './index.module.scss';
import { GrClose } from 'react-icons/gr';
import { BackgroundOverlay } from '../background-overlay';
import { Button } from '../button';

interface PromptModalProps {
  visible: boolean;
  onClose: () => any;
  textOnYesButton?: string;
  textOnNoButton?: string;
  title: string;
  description: string;
  yesButtonLoading?: boolean;
  noButtonLoading?: boolean;
  onYesClick?: () => any;
  onNoClick?: () => any;
}

export const PromptModal = ({
  visible,
  onClose,
  textOnYesButton = 'Confirm',
  textOnNoButton = 'Cancel',
  title,
  description,
  yesButtonLoading = false,
  noButtonLoading = false,
  onYesClick = () => null,
  onNoClick,
}: PromptModalProps) => {
  return (
    <BackgroundOverlay visible={visible} onClose={onClose}>
      <div className={styles['card']}>
        <div className={styles['title-div']}>
          <div className={styles['title']}>{title}</div>
          <GrClose onClick={onClose} />
        </div>
        <div className={styles['description']}>{description}</div>
        <div className={styles['buttons']}>
          <Button
            onClick={onNoClick || onClose}
            variant="outlined"
            className={styles['button']}
            loading={noButtonLoading}
          >
            {textOnNoButton}
          </Button>
          <Button
            onClick={onYesClick}
            variant="solid"
            className={styles['button']}
            loading={yesButtonLoading}
          >
            {textOnYesButton}
          </Button>
        </div>
      </div>
    </BackgroundOverlay>
  );
};
