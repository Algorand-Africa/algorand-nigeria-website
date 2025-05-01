import classNames from 'classnames';
import ReactQuill from 'react-quill';
import { Spinner } from '../spinner';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  visible: boolean;
  onClose: () => void;
  loading?: boolean;
}

export const ReplyInput = ({
  value,
  onChange,
  onSubmit,
  placeholder,
  visible,
  onClose,
  loading,
}: Props) => {
  return visible ? (
    <div
      style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' }}
      className={classNames(
        'fixed w-[95vw] lg:w-screen h-screen max-w-[755px] max-h-[240px] bottom-[55px] bg-white rounded-[5px] border-b border-l border-r border-[#D5D5D5]',
        'overflow-hidden lg:left-auto left-[2.5vw] z-10 flex flex-col',
      )}
    >
      <button
        onClick={() => onClose()}
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M1 13L13 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <ReactQuill
        className="h-[168px] border-none"
        theme="snow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={classNames(
          'bg-[#001324] text-white px-4 py-2.5',
          'disabled:bg-[#E5E7E9] w-[141px] rounded-[100px]',
          'font-Trap-600 text-[14px] leading-[140%] disabled:text-[#B2B8BD]',
          'self-end mr-10 cursor-pointer z-10',
        )}
        disabled={value.length === 0}
        onClick={onSubmit}
      >
        {loading ? <Spinner /> : 'Post an answer'}
      </button>
    </div>
  ) : null;
};
