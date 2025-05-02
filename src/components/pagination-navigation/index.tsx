'use client';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';

interface PaginationNavigationProps {
  currentPage: number;
  totalPages: number;
  goTo: (page: number) => void;
  loading?: boolean;
}

export const PaginationNavigation = ({
  currentPage,
  totalPages,
  goTo,
  loading,
}: PaginationNavigationProps) => {
  const renderPageNumbers = () => {
    const pageDivs: ReactNode[] = [];
    const numAhead = totalPages - currentPage + 1;
    const numBehind = totalPages - numAhead;

    if (numAhead < 6 && numBehind > 0) {
      const offset = 6 - numAhead;
      const firstIndexOffset = offset > numBehind ? numBehind : offset;
      const firstIndex = currentPage - firstIndexOffset;

      for (let i = firstIndex; i <= totalPages; i++) {
        pageDivs.push(
          <PageDiv
            isCurrentPage={i === currentPage}
            key={i}
            value={i}
            onSelect={() => goTo(i)}
            loading={loading}
          />,
        );
      }
    } else if (numAhead <= 6) {
      for (let i = currentPage; i <= totalPages; i++) {
        pageDivs.push(
          <PageDiv
            isCurrentPage={i === currentPage}
            key={i}
            value={i}
            onSelect={() => goTo(i)}
            loading={loading}
          />,
        );
      }
    } else {
      for (let i = 0; i < 3; i++) {
        pageDivs.push(
          <PageDiv
            isCurrentPage={i + currentPage === currentPage}
            key={i}
            value={i + currentPage}
            onSelect={() => goTo(i + currentPage)}
            loading={loading}
          />,
        );
      }

      pageDivs.push(
        <PageDiv
          isCurrentPage={false}
          key={3}
          value={'...'}
          onSelect={() => goTo(currentPage + 3)}
          loading={loading}
        />,
      );

      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageDivs.push(
          <PageDiv
            isCurrentPage={i === currentPage}
            key={i}
            value={i}
            onSelect={() => goTo(i)}
            loading={loading}
          />,
        );
      }
    }

    return pageDivs;
  };

  return (
    <div className={'flex flex-row items-center justify-center gap-6 p-4 bg-white flex-wrap'}>
      <div className={'font-Inter text-sm font-[600] text-[#000000] hidden lg:block'}>
        Page {currentPage} of {totalPages}
      </div>

      <div className={'flex flex-row items-center gap-1'}>
        <div
          className={classNames(
            'flex flex-row items-center gap-[10px] p-2 hover:bg-[#f0f6ff]',
            'rounded-lg border-[1px] border-[#D0D5DD] cursor-pointer transition-all justify-center',
            currentPage <= 1 ? 'opacity-50 hover:bg-[#FFF] cursor-not-allowed' : '',
          )}
          style={{ boxShadow: '0px 4px 8px -2px #00000014' }}
          onClick={() => {
            if (currentPage !== 1) {
              goTo(currentPage - 1);
            }
          }}
        >
          <FaChevronLeft className="text-xs" />
        </div>

        {renderPageNumbers()}

        <div
          className={classNames(
            'flex flex-row items-center gap-[10px] p-2 hover:bg-[#f0f6ff]',
            'rounded-lg border-[1px] border-[#D0D5DD] cursor-pointer transition-all justify-center',
            currentPage >= totalPages ? 'opacity-40 hover:bg-[#FFF] cursor-not-allowed' : '',
          )}
          style={{ boxShadow: '0px 4px 8px -2px #00000014' }}
          onClick={() => {
            if (currentPage < totalPages) {
              goTo(currentPage + 1);
            }
          }}
        >
          <FaChevronRight className="text-xs" />
        </div>
      </div>

      <div className="hidden flex-row items-center gap-[14px] lg:flex">
        <p className="text-[#98A2B3] font-Inter text-sm font-[400]">Go to page</p>
        <select
          className={classNames(
            'w-[56px] h-[36px] rounded-[6px] border border-[#D0D5DD] p-2',
            'text-[#344054] font-Inter text-sm font-[400]',
          )}
          onChange={(e) => goTo(Number(e.target.value))}
          value={currentPage}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface PageDivProps {
  isCurrentPage: boolean;
  onSelect: () => any;
  value: number | string;
  loading?: boolean;
}

const PageDiv = ({ isCurrentPage, onSelect, value, loading }: PageDivProps) => {
  return (
    <div
      className={classNames(
        'rounded-[6px] min-w-6 min-h-6 font-geist font-[400] text-sm text-[#98A2B3] cursor-pointer',
        'flex items-center justify-center',
        !loading && 'hover:bg-[#E7F6EC] hover:text-[#0F973D]',
        isCurrentPage ? 'bg-[#E7FAF9] text-[#000000] border border-[#17CAC6]' : '',
        loading ? 'opacity-50 cursor-progress' : '',
      )}
      onClick={() => {
        if (!isCurrentPage && !loading) {
          onSelect();
        }
      }}
    >
      {value}
    </div>
  );
};
