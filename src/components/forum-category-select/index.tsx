'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import { useForumActions } from '@/actions/forum';
import { IForumCategory } from '@/interface/forum.interface';
import { Paginated } from '@/interface/pagination.interface';
import { Spinner } from '../spinner';

interface ForumCategorySelectProp {
  placeholder?: string;
  value?: IForumCategory;
  onChange?: (val: IForumCategory) => any;
  searchable?: boolean;
  inputClassName?: string;
  wrapperClassName?: string;
}

interface CustomRef {
  dropdown: HTMLDivElement | null;
  searchInput: HTMLInputElement | null;
}

export const ForumCategorySelect = ({
  placeholder = 'Select category',
  value = undefined,
  onChange = () => null,
  searchable = false,
  inputClassName = '',
  wrapperClassName = '',
}: ForumCategorySelectProp) => {
  const { getAllForumCategories } = useForumActions();
  const [forumCategories, setForumCategories] = useState<Paginated<IForumCategory>>({
    data: [],
    total: 0,
    pageSize: 0,
    hasNext: false,
    hasPrevious: false,
    page: 1,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [justOpened, setJustOpened] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState<IForumCategory[]>([]);

  const [selectedRowId, setSelectedRowId] = useState('');

  const randomKey = '9080495';

  const ref = useRef<CustomRef>({
    dropdown: null,
    searchInput: null,
  });

  const toggle = () => {
    setJustOpened(false);
    setIsOpen(!isOpen);
  };

  const fetchForumCategories = async () => {
    setIsLoading(true);
    const response = await getAllForumCategories({
      pageSize: 100,
    });

    if (response) {
      setForumCategories(response);
    }
    setIsLoading(false);
  };

  const getDropdownClassName = () => {
    let className = '';

    if (forumCategories.data.length === 1) {
      className = isOpen ? styles.openAnimation1 : styles.closeAnimation1;
    } else if (forumCategories.data.length === 2) {
      className = isOpen ? styles.openAnimation2 : styles.closeAnimation2;
    } else if (forumCategories.data.length === 3) {
      className = isOpen ? styles.openAnimation3 : styles.closeAnimation3;
    } else if (forumCategories.data.length === 4) {
      className = isOpen ? styles.openAnimation4 : styles.closeAnimation4;
    } else if (forumCategories.data.length >= 5) {
      className = isOpen ? styles.openAnimation : styles.closeAnimation;
    } else {
      className = '';
    }

    return className;
  };

  const scrollToSelected = () => {
    const row = document.getElementById(selectedRowId);

    if (!row) return;

    const rowHeight = row.getClientRects()['0']?.height || 0;

    const indexOfSelected = forumCategories.data.findIndex((category) => category.id === value?.id);

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

  useEffect(() => {
    if (isOpen) {
      scrollToSelected();

      if (searchable) {
        const { searchInput } = ref.current;
        searchInput?.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchable && searchText !== value?.name) {
      const filteredData = forumCategories.data.filter((val) => {
        return val.name.toLowerCase().includes(searchText.toLowerCase());
      });

      setOptions(filteredData);
    } else if (searchable && searchText.toLowerCase() === value?.name.toLowerCase()) {
      setOptions(forumCategories.data);

      setTimeout(() => {
        scrollToSelected();
      }, 500);
    }
  }, [searchText]);

  useEffect(() => {
    setSearchText(value?.name || '');
  }, [value]);

  useEffect(() => {
    fetchForumCategories();
  }, []);

  useEffect(() => {
    if (forumCategories.data) {
      setOptions(forumCategories.data);
    }
  }, [forumCategories]);

  return (
    <div className={classNames(styles.input, wrapperClassName)}>
      <div className={classNames(styles.inputWrapper, inputClassName)} onClick={toggle}>
        <input
          ref={(element) => {
            ref.current.searchInput = element;
          }}
          className={classNames(styles.searchInput, !isOpen || !searchable ? styles.hide : '')}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        {isOpen && searchable ? (
          <></>
        ) : (
          <>
            {!!value && value?.name.length > 0 ? (
              <>
                <div
                  style={{ backgroundColor: value.color }}
                  className="w-5 h-5 rounded-full"
                ></div>
                <div className={styles.value}>{value?.name}</div>
              </>
            ) : (
              <div className={styles.placeholder}>{placeholder}</div>
            )}
          </>
        )}

        {isLoading ? (
          <Spinner size={19} color="#7B7D83" />
        ) : (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              styles.icon,
              'transition-transform duration-300',
              isOpen ? 'rotate-180' : 'rotate-0',
            )}
            onClick={toggle}
          >
            <path
              d="M4.66019 7.25C4.66019 7.25 7.97437 11.75 9.16019 11.75C10.346 11.75 13.6602 7.25 13.6602 7.25"
              stroke="#7B7D83"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div
        ref={(element) => {
          ref.current.dropdown = element;
        }}
        className={classNames(styles.dropdown, justOpened ? '' : getDropdownClassName())}
      >
        {options.map((current) => {
          const randomId = randomKey + '-' + current.name.toLowerCase();
          return (
            <div
              id={randomId}
              key={randomId}
              className={classNames(
                styles.row,
                current.name === value?.name ? styles.selected : '',
              )}
              onClick={() => {
                const selectedCategory = forumCategories.data.find(
                  (category) => category.id === current.id,
                );

                if (selectedCategory) {
                  onChange(selectedCategory);
                  toggle();
                  setSelectedRowId(randomId);
                }
              }}
            >
              <div
                style={{ backgroundColor: current.color }}
                className="w-5 h-5 rounded-full"
              ></div>
              <div className={styles.text}>{current.name}</div>

              {current.name === value?.name && <AiOutlineCheck color="#0D3DDC" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
