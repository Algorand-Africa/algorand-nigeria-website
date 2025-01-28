import styles from './index.module.scss';
import classNames from 'classnames';
import { RiErrorWarningLine } from 'react-icons/ri';

interface InputProp {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => any;
  warning?: string;
  error?: string;
  success?: string;
  prefix?: string;
  disabled?: boolean;
  className?: string;
}

export const InputWithPrefix = ({
  label = '',
  placeholder = '',
  value,
  onChange = () => null,
  warning = '',
  error = '',
  success = '',
  prefix = 'https://',
  disabled = false,
  className,
}: InputProp) => {
  return (
    <div className={classNames(styles.input, className)}>
      {label.length > 0 && <div className={styles.label}>{label}</div>}

      <div
        className={classNames(
          styles.inputWrapper,
          error.length > 0 ? styles.errorBorder : '',
          disabled ? styles.disabled : '',
        )}
      >
        <div className={classNames(styles.prefix, disabled ? styles.disabled : '')}>{prefix}</div>
        <div
          className={classNames(
            styles.innerInputWrapper,
            error.length > 0 ? styles.errorBorder : '',
            disabled ? styles.disabled : '',
          )}
        >
          <input
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={disabled}
          />

          {error.length > 0 && <RiErrorWarningLine className={styles.errorIcon} size={20} />}
        </div>
      </div>

      {error.length > 0 && <div className={styles.error}>{error}</div>}

      {warning.length > 0 && <div className={styles.warning}>{warning}</div>}

      {success.length > 0 && <div className={styles.success}>{success}</div>}
    </div>
  );
};
