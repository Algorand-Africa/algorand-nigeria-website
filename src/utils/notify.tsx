import { NotificationParams } from '@/interface';
import { generateRandomId } from './generate-random-id';
import { NotificationPopup } from '@/components';
import { toast } from 'react-hot-toast';

const success = (params: NotificationParams) => {
  const {
    title = 'Success',
    message,
    action = () => null,
    actionLabel = '',
    secondAction = () => null,
    secondActionLabel = '',
    duration = 5000,
    id = generateRandomId(),
  } = params;

  toast.custom(
    <NotificationPopup
      title={title}
      message={message}
      type="success"
      id={id}
      firstAction={() => {
        toast.dismiss(id);
        action();
      }}
      secondAction={() => {
        toast.dismiss(id);
        secondAction();
      }}
      firstActionLabel={actionLabel}
      secondActionLabel={secondActionLabel}
    />,
    {
      duration,
      id,
    },
  );
};

const error = (params: NotificationParams) => {
  const {
    title = 'Error',
    message,
    action = () => null,
    actionLabel = 'Retry',
    secondAction = () => null,
    secondActionLabel = '',
    duration = 5000,
    id = generateRandomId(),
  } = params;

  toast.custom(
    <NotificationPopup
      title={title}
      message={message}
      type="error"
      id={id}
      firstAction={() => {
        toast.dismiss(id);
        action();
      }}
      secondAction={() => {
        toast.dismiss(id);
        secondAction();
      }}
      firstActionLabel={actionLabel}
      secondActionLabel={secondActionLabel}
    />,
    {
      duration,
      id,
    },
  );
};

const warning = (params: NotificationParams) => {
  const randomId = generateRandomId();

  const {
    title = 'Warning',
    message,
    action = () => toast.dismiss(params.id || randomId),
    actionLabel = 'Ok',
    secondAction = () => null,
    secondActionLabel = '',
    duration = 5000,
    id = randomId,
  } = params;

  toast.custom(
    <NotificationPopup
      title={title}
      message={message}
      type="warning"
      id={id}
      firstAction={() => {
        toast.dismiss(id);
        action();
      }}
      secondAction={() => {
        toast.dismiss(id);
        secondAction();
      }}
      firstActionLabel={actionLabel}
      secondActionLabel={secondActionLabel}
    />,
    {
      duration,
      id,
    },
  );
};

const info = (params: NotificationParams) => {
  const randomId = generateRandomId();

  const {
    title = 'Attention',
    message,
    action = () => toast.dismiss(params.id || randomId),
    actionLabel = 'Ok',
    secondAction = () => null,
    secondActionLabel = '',
    duration = 5000,
    id = randomId,
  } = params;

  toast.custom(
    <NotificationPopup
      title={title}
      message={message}
      type="info"
      id={id}
      firstAction={() => {
        toast.dismiss(id);
        action();
      }}
      secondAction={() => {
        toast.dismiss(id);
        secondAction();
      }}
      firstActionLabel={actionLabel}
      secondActionLabel={secondActionLabel}
    />,
    {
      duration,
      id,
    },
  );
};

const plain = (params: NotificationParams) => {
  const randomId = generateRandomId();

  const {
    title = '',
    message,
    action = () => toast.dismiss(params.id || randomId),
    actionLabel = 'Ok',
    secondAction = () => null,
    secondActionLabel = '',
    duration = 5000,
    id = randomId,
  } = params;

  toast.custom(
    <NotificationPopup
      title={title}
      message={message}
      type="plain"
      id={id}
      firstAction={() => {
        toast.dismiss(id);
        action();
      }}
      secondAction={() => {
        toast.dismiss(id);
        secondAction();
      }}
      firstActionLabel={actionLabel}
      secondActionLabel={secondActionLabel}
    />,
    {
      duration,
      id,
    },
  );
};

export const notify = {
  success,
  error,
  warning,
  info,
  plain,
};
