import classNames from 'classnames';

interface OneTimePinProps {
  value: string[];
  onChange: (index: number, newValue: string) => void;
}

export const OneTimePin: React.FC<OneTimePinProps> = ({ value, onChange }) => {
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
          onChange={(e) => onChange(index, e.target.value)}
          aria-label={`Pin ${index + 1}`}
        />
      ))}
    </div>
  );
};
