import styles from './index.module.scss';
import classNames from 'classnames';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { COUNTRIES } from '@/constants';
import { useState, useRef, useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Country } from '@/interface';

interface InputProp {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => any;
  warning?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
}

interface CustomRef {
  dropdown: HTMLDivElement | null;
}

export const PhoneNumberInput = ({
  label = '',
  placeholder = '',
  onChange = () => null,
  warning = '',
  error = '',
  success = '',
  disabled = false,
}: InputProp) => {
  const [open, setOpen] = useState(false);
  const [justOpened, setJustOpened] = useState(true);
  const [selectedRowId, setSelectedRowId] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [entry, setEntry] = useState('');
  const randomKey = '9080492dhjshjhd5';

  const ref = useRef<CustomRef>({
    dropdown: null,
  });

  const scrollToSelected = () => {
    const row = document.getElementById(selectedRowId);

    if (!row) return;

    const rowHeight = row.getClientRects()['0']?.height || 0;

    const indexOfSelected = selectedCountry ? COUNTRIES.indexOf(selectedCountry) : NaN;

    if (isNaN(indexOfSelected)) return;

    setTimeout(() => {
      const distance = rowHeight * indexOfSelected;

      const { dropdown } = ref.current;

      dropdown?.scrollTo({
        top: distance,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  };

  const toggle = () => {
    if (disabled) return;

    setJustOpened(false);
    setOpen((old) => !old);
  };

  const getDropdownClassName = () => {
    return open ? styles.openAnimation : styles.closeAnimation;
  };

  const onCountryChange = (country: Country) => {
    if (selectedCountry) {
      setEntry((old) => {
        return old.replace(selectedCountry.dialCode, country.dialCode);
      });
    } else {
      setEntry((old) => {
        return country.dialCode + old;
      });
    }

    setSelectedCountry(country);
  };

  const onEntryChange = (val: string) => {
    if (selectedCountry) {
      if (val.indexOf(selectedCountry.dialCode) === 0) {
        const temp = val.substring(selectedCountry.dialCode.length - 1);
        if (!/^[A-Za-z!@#$%^&*()_=<>,.?/;:'"\[\]{}|`~\s]+$/.test(temp)) {
          setEntry(val);
        }
      }
    } else {
      toggle();
    }
  };

  const handleInputClick = () => {
    if (open) {
      toggle();
    } else {
      if (!selectedCountry) {
        toggle();
      }
    }
  };

  useEffect(() => {
    if (open) {
      scrollToSelected();
    }
  }, [open]);

  useEffect(() => {
    if (selectedCountry) {
      if (entry.length === selectedCountry.dialCode.length) {
        onChange('');
      } else {
        onChange(entry);
      }
    } else {
      onChange('');
    }
  }, [entry]);

  useEffect(() => {
    if (disabled) {
      setOpen(false);
    }
  }, [disabled]);

  return (
    <div className={styles.input}>
      {label.length > 0 && <div className={styles.label}>{label}</div>}

      <div className={classNames(styles.inputWrapper, error.length > 0 ? styles.errorBorder : '')}>
        <div className={styles.prefix} onClick={toggle}>
          {selectedCountry ? `${selectedCountry.code}` : <span style={{ color: '#FFF' }}>.</span>}
          {open ? <RxCaretUp /> : <RxCaretDown />}
        </div>
        <div
          className={classNames(
            styles.innerInputWrapper,
            error.length > 0 ? styles.errorBorder : '',
          )}
        >
          <input
            placeholder={placeholder}
            value={entry}
            onChange={(event) => onEntryChange(event.target.value)}
            disabled={disabled}
            onClick={handleInputClick}
          />

          {error.length > 0 && <RiErrorWarningLine className={styles.errorIcon} size={20} />}
        </div>
      </div>

      <div
        className={classNames(styles.dropdown, justOpened ? '' : getDropdownClassName())}
        ref={(element) => {
          ref.current.dropdown = element;
        }}
      >
        {COUNTRIES.map((current) => {
          const randomId = randomKey + '-' + current.code.toLowerCase();
          return (
            <div
              id={randomId}
              key={randomId}
              className={classNames(
                styles.row,
                current.code === selectedCountry?.code ? styles.selected : '',
              )}
              onClick={() => {
                onCountryChange(current);
                toggle();
                setSelectedRowId(randomId);
              }}
            >
              <div className={styles.text}>
                {`${current.name} ${current.flag} ${current.dialCode}`}
              </div>

              {current.code === selectedCountry?.code && <AiOutlineCheck color="#0D3DDC" />}
            </div>
          );
        })}
      </div>

      {error.length > 0 && <div className={styles.error}>{error}</div>}

      {warning.length > 0 && <div className={styles.warning}>{warning}</div>}

      {success.length > 0 && <div className={styles.success}>{success}</div>}
    </div>
  );
};
