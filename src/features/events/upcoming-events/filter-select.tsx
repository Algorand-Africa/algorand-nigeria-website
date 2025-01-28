'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import classNames from 'classnames';
import { CurvyCheckIcon } from '@/assets/icons/curvy-check.icon';

interface Props {
  label: string;
  options: { value: string; label?: string }[] | string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const FilterSelect = ({ label, options, value, onChange }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize the options into a consistent format for internal usage
  const normalizedOptions =
    typeof options[0] === 'string'
      ? (options as string[]).map((opt) => ({ value: opt, label: opt }))
      : (options as { value: string; label?: string }[]);

  const [val, setVal] = useState(normalizedOptions[0]?.value || '');

  useEffect(() => {
    if (value) {
      setVal(value);
    }
  }, [value]);

  const activeOption = normalizedOptions.find((v) => v.value === val);

  const handleSelect = (newValue: string) => {
    setVal(newValue);
    if (onChange) onChange(newValue);
    setShowDropdown((f) => !f);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={classNames('flex flex-col gap-[8px] relative')} ref={dropdownRef}>
      <p className="font-Inter font-normal text-[14px] leading-[19.6px] text-[#192A39] tracking-[0.01em]">
        {label}
      </p>

      <div
        className="relative cursor-pointer border border-[#192A39] p-[12px] rounded-[6px] md:min-w-[150px] min-w-[116px] w-[fit-content] flex items-center justify-between"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <p
          className={classNames(
            'whitespace-nowrap text-[14px] tracking-[0.01em] text-[#4C5965] font-normal leading-[19.6px] font-Inter',
            'text-[#344054] leading-[20.3px] font-600',
          )}
        >
          {activeOption?.label || activeOption?.value}
        </p>
        <FaAngleDown size={18} color="#667185" />
      </div>

      {showDropdown && (
        <div className="absolute left-0 top-full mt-1 w-[fit-content] min-w-[267px] bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {normalizedOptions.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={classNames(
                'font-Inter font-normal text-[14px] leading-[19.6px] text-[#101928] tracking-[0.01em] py-[8px] px-[16px] mb-[8px] cursor-pointer',
                val === opt.value && 'flex items-center justify-between',
              )}
            >
              {opt.label || opt.value}

              {val === opt.value && <CurvyCheckIcon fontSize={24} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
