import classNames from 'classnames';
import { useRef } from 'react';

interface OneTimePinProps {
  value: string[];
  onChange: (newValue: string[]) => void;
}

export const OneTimePin: React.FC<OneTimePinProps> = ({ value, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, newValue: string) => {
    const newPin = [...value];
    newPin[index] = newValue;

    if (newValue.length === 1 && index < value.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (newValue.length === 0) {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    onChange(newPin);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      if (value[index].length === 0 && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex gap-2 justify-center mb-4">
      {value.map((pinValue, index) => (
        <input
          key={index}
          name={`pin-${index}`}
          type="text"
          maxLength={1}
          className={classNames(
            'w-12 h-12 text-center border border-gray-300 rounded',
            'focus:outline-none focus:border-blue-500',
          )}
          value={pinValue}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => inputRefs.current[index]?.select()}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          aria-label={`Pin ${index + 1}`}
        />
      ))}
    </div>
  );
};
