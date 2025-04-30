import { mockImages } from '@/components/post-card/mock';
import { IComment } from '@/interface/forum.interface';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { useState } from 'react';
import { ReplyInput } from '@/components/reply-input';

interface Props {
  data: IComment;
}

export const Comment = ({ data }: Props) => {
  const profileImage = mockImages[Math.floor(Math.random() * (mockImages.length - 1))];
  const [showReplies, setShowReplies] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-[10px]">
        <img
          src={profileImage}
          alt={data.createdBy}
          className="w-[25px] h-[25px] object-cover rounded-full"
        />
        <div className="flex items-center gap-1">
          <p className="font-Trap-700 text-xs text-black leading-[140%]">{data.createdBy}</p>
          <svg
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#D9D9D9" />
          </svg>
          <p className="font-Trap-500 text-[8px] leading-[140%] text-[#7D7C7C]">2 hrs. ago</p>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          <div className="bg-[#E8E8E8] w-[1px] ml-[12px] flex-1"></div>

          {data.replies.length > 0 && (
            <>
              <button
                title={showReplies ? 'Hide replies' : 'Show replies'}
                onClick={() => setShowReplies(!showReplies)}
                className="w-2.5 h-2.5 rounded-full justify-center items-center flex border border-black ml-[7px] text-[9px] leading-[140%] text-[#4C5965]"
              >
                {showReplies ? '-' : '+'}
              </button>

              <div className="bg-[#E8E8E8] w-[1px] ml-[12px] h-[10px]"></div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-[5px] py-[5px] flex-1">
          <div className="font-Trap-500 text-xs leading-[140%] text-[#4C5965]">
            Three or four years ago I had someone pitch a technology to me and my team that used
            'immutable distributed ledgers'. <strong>It was a blockchain project</strong>, but even
            then the term had become so toxic and associated with empty promises and scams that they
            didn't want to use the word.
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-row items-center gap-[7px] flex-wrap"
          >
            {/* Likes */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={classNames(
                'flex items-center gap-[10px] py-1 rounded-[100px]',
                'px-[5px]',
              )}
            >
              <button>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00028 12.7499C6.03544 12.7499 5.25028 11.9647 5.25028 10.9999V8.22089C4.58353 8.81822 3.48569 8.79197 2.84636 8.15381C2.51829 7.82563 2.33398 7.38059 2.33398 6.91656C2.33398 6.45252 2.51829 6.00748 2.84636 5.67931L7.00028 1.52539L11.1542 5.67931C11.4823 6.00748 11.6666 6.45252 11.6666 6.91656C11.6666 7.38059 11.4823 7.82563 11.1542 8.15381C10.516 8.79256 9.41644 8.81881 8.75028 8.22089V10.9999C8.75028 11.9647 7.96511 12.7499 7.00028 12.7499ZM6.41694 5.40806V10.9999C6.42366 11.1501 6.48806 11.2919 6.59672 11.3958C6.70538 11.4997 6.84993 11.5577 7.00028 11.5577C7.15062 11.5577 7.29518 11.4997 7.40384 11.3958C7.5125 11.2919 7.57689 11.1501 7.58361 10.9999V5.40806L9.50453 7.32897C9.61557 7.43516 9.7633 7.49442 9.91694 7.49442C10.0706 7.49442 10.2183 7.43516 10.3294 7.32897C10.4387 7.21958 10.5002 7.07124 10.5002 6.91656C10.5002 6.76188 10.4387 6.61353 10.3294 6.50414L7.00028 3.17506L3.67119 6.50414C3.56184 6.61353 3.5004 6.76188 3.5004 6.91656C3.5004 7.07124 3.56184 7.21958 3.67119 7.32897C3.78224 7.43516 3.92997 7.49442 4.08361 7.49442C4.23726 7.49442 4.38498 7.43516 4.49603 7.32897L6.41694 5.40806Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </button>

              <p
                style={{ transform: 'translateY(2px)' }}
                className="text-[12px] leading-[140%] text-[#6D6D6D] font-Trap-600"
              >
                2
              </p>

              <div>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99972 2.25011C7.96456 2.25011 8.74972 3.03528 8.74972 4.00011L8.74972 6.77911C9.41647 6.18178 10.5143 6.20803 11.1536 6.84619C11.4817 7.17437 11.666 7.61941 11.666 8.08344C11.666 8.54748 11.4817 8.99252 11.1536 9.32069L6.99972 13.4746L2.84581 9.32069C2.51773 8.99252 2.33343 8.54748 2.33343 8.08344C2.33343 7.61941 2.51773 7.17437 2.84581 6.84619C3.48397 6.20744 4.58356 6.18119 5.24972 6.77911V4.00011C5.24972 3.03528 6.03489 2.25011 6.99972 2.25011ZM7.58306 9.59194V4.00011C7.57634 3.84991 7.51194 3.70809 7.40328 3.60419C7.29462 3.50028 7.15007 3.44229 6.99972 3.44229C6.84938 3.44229 6.70482 3.50028 6.59616 3.60419C6.4875 3.70809 6.42311 3.84991 6.41639 4.00011V9.59194L4.49547 7.67103C4.38443 7.56484 4.2367 7.50558 4.08306 7.50558C3.92941 7.50558 3.78169 7.56484 3.67064 7.67103C3.56128 7.78042 3.49985 7.92876 3.49985 8.08344C3.49985 8.23812 3.56128 8.38647 3.67064 8.49586L6.99972 11.8249L10.3288 8.49586C10.4382 8.38647 10.4996 8.23812 10.4996 8.08344C10.4996 7.92876 10.4382 7.78042 10.3288 7.67103C10.2178 7.56484 10.07 7.50558 9.91639 7.50558C9.76274 7.50558 9.61502 7.56484 9.50397 7.67103L7.58306 9.59194Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Comments */}
            <motion.button
              transition={{ type: 'spring', stiffness: 400 }}
              className={classNames(
                'flex items-center gap-[10px] py-1 rounded-[100px]',
                'px-[9px]',
              )}
              onClick={() => setShowEditor(true)}
            >
              <div>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8337 7.24757C12.8337 10.3294 10.2216 12.8281 7.00033 12.8281C6.62157 12.8287 6.24386 12.7936 5.87181 12.7238C5.60402 12.6734 5.47011 12.6483 5.37663 12.6626C5.28315 12.6769 5.15068 12.7473 4.88574 12.8882C4.13624 13.2868 3.2623 13.4276 2.42181 13.2712C2.74126 12.8783 2.95943 12.4069 3.0557 11.9015C3.11403 11.5923 2.96949 11.292 2.75301 11.0721C1.76977 10.0737 1.16699 8.7283 1.16699 7.24757C1.16699 4.16574 3.77903 1.66699 7.00033 1.66699C10.2216 1.66699 12.8337 4.16574 12.8337 7.24757Z"
                    stroke="#6D6D6D"
                    stroke-width="0.875"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.9977 7.5H7.00295M9.32841 7.5H9.33366M4.66699 7.5H4.67222"
                    stroke="#6D6D6D"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <button
                style={{ transform: 'translateY(2px)' }}
                className="text-[12px] leading-[140%] text-[#6D6D6D] font-Trap-600"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowReplies(true);
                }}
              >
                14
              </button>
            </motion.button>

            {/* Share */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={classNames(
                'flex items-center gap-[10px] py-1 rounded-[100px]',
                'px-[9px]',
              )}
            >
              <button>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.43166 2.25C3.79826 2.54106 1.75 4.77333 1.75 7.48393C1.75 10.3923 4.10806 12.75 7.01686 12.75C9.723 12.75 11.9524 10.7095 12.25 8.0833"
                    stroke="#6D6D6D"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.25 4.01475L11.667 4.01328C9.48731 4.00776 8.39747 4.005 7.63132 4.55572C7.37669 4.73872 7.15328 4.96159 6.96964 5.21574C6.41699 5.9805 6.41699 7.07035 6.41699 9.24997M12.25 4.01475C12.2539 3.91988 12.2201 3.82445 12.1483 3.73944C11.7019 3.21067 10.5418 2.25 10.5418 2.25M12.25 4.01475C12.2465 4.09982 12.2125 4.18443 12.1482 4.26064C11.7018 4.78931 10.5418 5.75 10.5418 5.75"
                    stroke="#6D6D6D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <p
                style={{ transform: 'translateY(2px)' }}
                className="text-[12px] leading-[140%] text-[#6D6D6D] font-Trap-600"
              >
                Share
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {data.replies.length > 0 && showReplies && (
        <div className="flex flex-row">
          <div className="bg-[#E8E8E8] w-[1px] ml-[12px]"></div>

          <div>
            <svg
              width="35"
              height="31"
              viewBox="0 0 35 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.249 29.4996C15.8437 29.4994 0.741842 34.4991 0.741842 -0.00073934"
                stroke="#E8E8E8"
              />
            </svg>
          </div>

          <div className="flex flex-col flex-1 pt-4">
            {data.replies.map((reply) => (
              <Comment key={reply.id} data={reply} />
            ))}
          </div>
        </div>
      )}

      <ReplyInput
        value={content}
        onChange={setContent}
        onSubmit={() => {}}
        placeholder="Replying to u/ShinyTroll10"
        visible={showEditor}
        onClose={() => setShowEditor(false)}
      />
    </div>
  );
};
