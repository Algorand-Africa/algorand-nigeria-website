'use client';

import classNames from 'classnames';
import { ForumCategorySelect } from '@/components/forum-category-select';
import { IForumCategory } from '@/interface/forum.interface';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiDelete } from 'react-icons/fi';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

export const CreateForumPost = () => {
  const [selectedCategory, setSelectedCategory] = useState<IForumCategory | undefined>(undefined);
  const [selectedTab, setSelectedTab] = useState('Text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const tabs = ['Text', 'Image'];

  const clickToUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e: any) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (!file) {
        toast.error('Please select a file');
        return;
      }

      setImages([...images, file]);
    };

    input.click();
  };
  return (
    <div className="flex flex-col gap-[19px] lg:flex-row lg:gap-[45px]">
      <div className="w-full lg:flex-1 flex flex-col">
        <h1
          className={classNames(
            'text-base font-Trap-600 leading-[140%] text-[#001324]',
            'lg:text-[26px] mb-5 lg:mb-3',
          )}
        >
          Create post
        </h1>
        <ForumCategorySelect
          wrapperClassName="w-fit min-w-[250px] mb-6"
          value={selectedCategory}
          onChange={setSelectedCategory}
          searchable
        />

        <div className="flex flex-row items-center gap-5 mb-8">
          {/* Tab */}
          {tabs.map((tab) => (
            <div
              onClick={() => setSelectedTab(tab)}
              key={tab}
              className="flex flex-col gap-0.5 cursor-pointer"
            >
              <div
                className={classNames(
                  'text-sm font-Trap-600 leading-[140%]',
                  tab === selectedTab ? 'text-[#000]' : 'text-[#A0A0A0]',
                )}
              >
                {tab}
              </div>
              <div
                className="w-full h-0.5"
                style={{ backgroundColor: tab === selectedTab ? '#3B7FE4' : 'transparent' }}
              ></div>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 mb-8">
          <input
            className={classNames(
              'w-full border px-4 py-4 border-[#BEBABA] rounded-[100px] text-black outline-none',
              'lg:py-6 lg:px-8 placeholder:text-[#A0A0A0] font-Trap-600 text-base leading-[140%]',
            )}
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value.slice(0, 100));
            }}
          />
          <p className="text-xs font-Trap-400 leading-[140%] text-[#000000] self-end">
            {title.length}/100 characters
          </p>
        </div>

        {/* Content */}
        {selectedTab === 'Text' && (
          <>
            <div className="flex flex-col gap-5 mb-8">
              <h4 className="text-base font-Trap-600 leading-[140%] text-[#000]">Post Content</h4>

              <div
                style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' }}
                className={classNames(
                  ' bg-white rounded-[20px] border border-[#D5D5D5]',
                  'overflow-hidden flex flex-col pt-2',
                )}
              >
                <ReactQuill
                  className="h-[400px] border-none"
                  theme="snow"
                  placeholder={'Write your post here...'}
                  value={content}
                  onChange={setContent}
                />
              </div>
            </div>
          </>
        )}

        {/* Image */}
        {selectedTab === 'Image' && (
          <div className="flex flex-col gap-5 mb-8">
            <div
              className={classNames(
                'flex flex-col py-7 px-6 border-dashed justify-center',
                'border-[#D0D5DD] rounded-[16px] border-[1.5px] items-center gap-4',
                'cursor-pointer',
              )}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const files = Array.from(e.dataTransfer.files);
                setImages([...images, ...files]);
              }}
            >
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28.5" r="28" fill="#F0F2F5" />
                <path
                  d="M20.9993 25.583C20.9993 22.0392 23.8722 19.1663 27.416 19.1663C30.5552 19.1663 33.17 21.4217 33.7242 24.4008C33.8019 24.8186 34.1006 25.161 34.5039 25.2948C36.8265 26.0651 38.4994 28.2552 38.4994 30.833C38.4994 34.0547 35.8877 36.6663 32.666 36.6663C32.0217 36.6663 31.4993 37.1887 31.4993 37.833C31.4993 38.4773 32.0217 38.9997 32.666 38.9997C37.1763 38.9997 40.8327 35.3433 40.8327 30.833C40.8327 27.4585 38.7866 24.5645 35.87 23.3192C34.872 19.584 31.4664 16.833 27.416 16.833C22.5835 16.833 18.666 20.7505 18.666 25.583C18.666 25.7 18.6683 25.8165 18.6729 25.9325C16.5782 27.141 15.166 29.4043 15.166 31.9997C15.166 35.8657 18.3 38.9997 22.166 38.9997C22.8103 38.9997 23.3327 38.4773 23.3327 37.833C23.3327 37.1887 22.8103 36.6663 22.166 36.6663C19.5887 36.6663 17.4993 34.577 17.4993 31.9997C17.4993 30.0661 18.6756 28.4046 20.3561 27.6966C20.8424 27.4918 21.1307 26.986 21.0591 26.4632C21.0197 26.176 20.9993 25.8822 20.9993 25.583Z"
                  fill="#475367"
                />
                <path
                  d="M27.2243 31.1277C27.6663 30.7348 28.3324 30.7348 28.7744 31.1277L30.5244 32.6833C31.006 33.1113 31.0494 33.8487 30.6213 34.3303C30.2468 34.7516 29.6356 34.8376 29.166 34.5659V40.1663C29.166 40.8107 28.6437 41.333 27.9993 41.333C27.355 41.333 26.8327 40.8107 26.8327 40.1663V34.5659C26.3631 34.8376 25.7519 34.7516 25.3774 34.3303C24.9493 33.8487 24.9927 33.1113 25.4743 32.6833L27.2243 31.1277Z"
                  fill="#475367"
                />
              </svg>

              <div className="flex flex-col">
                <h4 className="text-sm font-Inter font-[400] leading-[140%] text-[#475367]">
                  <span
                    className="text-[#17CAC6] cursor-pointer font-[600]"
                    onClick={clickToUpload}
                  >
                    Click to upload
                  </span>{' '}
                  or drag and drop
                </h4>
                <p className="text-xs font-[400] font-Inter leading-[145%] text-[#98A2B3]">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>

              <div className="flex items-center w-full gap-2">
                <div className="flex-1 h-[1px] bg-[#F0F2F5]"></div>
                <p className="text-xs font-[600] font-Inter leading-[145%] text-[#98A2B3]">OR</p>
                <div className="flex-1 h-[1px] bg-[#F0F2F5]"></div>
              </div>

              <button
                onClick={clickToUpload}
                className="bg-[#17CAC6] text-white px-4 py-2 rounded-[6px] font-Inter font-[600] text-sm"
              >
                Browse Files
              </button>
            </div>

            {images.map((image) => (
              <div className="relative" key={image.name}>
                <img src={URL.createObjectURL(image)} alt={image.name} />
                <button
                  className="absolute top-0 right-0"
                  onClick={() => {
                    setImages(images.filter((i) => i !== image));
                  }}
                >
                  <FiDelete />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <div className="flex flex-col">
          <button
            className={classNames(
              'bg-[#3B7FE4] text-white px-[30px] py-2.5 rounded-[100px] font-Trap-500 text-[14px] leading-[140%]',
              'w-fit self-end',
            )}
          >
            Submit Question
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[369px] hidden lg:flex"></div>
    </div>
  );
};
