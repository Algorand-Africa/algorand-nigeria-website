'use client';

import { profileColors } from '@/constants/profile-colors';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { IoIosArrowDown, IoMdRemoveCircleOutline } from 'react-icons/io';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthActions } from '@/actions/auth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { profileAtom, profilePhotoBgIndexAtom } from '@/state';
import toast from 'react-hot-toast';

export const ProfilePhotoPrompt = () => {
  const [selectedIndex, setSelectedIndex] = useRecoilState(profilePhotoBgIndexAtom);
  const [isOpen, setIsOpen] = useState(false);
  const randomColor = profileColors[selectedIndex];
  const { logout, uploadProfileImage, getProfile } = useAuthActions();
  const profile = useRecoilValue(profileAtom);

  const onChangeProfilePhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        toast.error('Please select a file');
        return;
      }

      const toastId = toast.loading('Uploading profile photo...');
      const res = await uploadProfileImage(file);
      toast.dismiss(toastId);

      if (res) {
        toast.success('Profile photo updated successfully');
        getProfile();
        setIsOpen(false);
      }
    };

    input.click();
  };

  const onRemoveProfilePhoto = () => {
    console.log('remove profile photo');
  };

  // Add click outside handler
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const popup = document.getElementById('profile-photo-prompt-popup');

    if (!popup?.contains(target)) {
      setIsOpen(false);
    }
  };

  // Add effect to handle click outside
  useEffect(() => {
    const bgIndex = localStorage.getItem('profile-photo-prompt-bg-index');

    if (bgIndex && parseInt(bgIndex) < profileColors.length) {
      setSelectedIndex(parseInt(bgIndex));
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 lg:gap-8 lg:flex-row">
      {profile?.image ? (
        <motion.img
          className={classNames(
            'w-[90px] h-[90px] rounded-full bg-gradient-to-tr object-cover',
            'flex items-center justify-center lg:w-[200px] lg:h-[200px]',
          )}
          src={profile?.image}
          alt="profile"
          animate={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        ></motion.img>
      ) : (
        <motion.div
          className={classNames(
            'w-[90px] h-[90px] rounded-full bg-gradient-to-tr',
            'flex items-center justify-center lg:w-[200px] lg:h-[200px]',
            randomColor.className,
          )}
          style={
            profile?.image
              ? { backgroundImage: `url(${profile?.image})`, backgroundSize: 'cover' }
              : randomColor.properties
          }
          animate={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.p
            className="text-[#020817] dark:text-white font-inter text-[30px] font-semibold leading-9 tracking-[-0.225px] lg:text-[80px]"
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {profile?.fullName.charAt(0).toUpperCase() || 'P'}
          </motion.p>
        </motion.div>
      )}

      <div className="relative" id="profile-photo-prompt-popup">
        <motion.div
          className={classNames(
            'flex flex-row items-center justify-center px-4 py-2 gap-[10px] rounded-[6px] bg-[#F1F5F9]',
            'min-w-[156px] lg:min-w-[184px] cursor-pointer',
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="text-[#020817] font-inter text-sm lg:text-[18px] lg:leading-[28px] font-medium leading-[20px]">
            {profile?.fullName}
          </p>
          <IoIosArrowDown className="w-4 h-4" color="#020817" />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={classNames(
                'absolute lg:top-full top-[-50px] lg:left-[-100px] mt-2 w-full bg-white rounded-[6px] shadow-lg',
                'w-[228px] bg-white border z-10',
              )}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0px 4px 6px 0px #00000017',
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center px-[21px] py-4 gap-[6px] border-b"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {profileColors.map((color, index) => (
                  <motion.div
                    key={index}
                    className={classNames(
                      color.className,
                      'w-6 h-6 rounded-full cursor-pointer',
                      index === selectedIndex ? 'border-[2px] lg:border-[2px]' : '',
                    )}
                    onClick={() => {
                      setSelectedIndex(index);
                      localStorage.setItem('profile-photo-prompt-bg-index', index.toString());
                    }}
                    style={color.properties}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>
              <motion.div
                className="p-[5px] flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {['Change profile photo', 'Remove profile photo'].map((text, index) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-2 px-2 py-1.5 cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={index === 0 ? onChangeProfilePhoto : onRemoveProfilePhoto}
                  >
                    {index === 0 ? (
                      <MdOutlinePersonOutline className="w-4 h-4 text-[#020817]" />
                    ) : (
                      <IoMdRemoveCircleOutline className="w-4 h-4 text-[#020817]" />
                    )}
                    <p className="text-[#020817] font-inter text-sm font-medium leading-[20px]">
                      {text}
                    </p>
                  </motion.div>
                ))}
                <motion.div
                  className="flex items-center gap-2 px-2 py-1.5 cursor-pointer"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + 2 * 0.1 }}
                  onClick={() => {
                    logout();
                  }}
                >
                  <IoMdRemoveCircleOutline className="w-4 h-4 text-[#FF6600]" />
                  <p className="text-[#020817] font-inter text-sm font-medium leading-[20px]">
                    Log out
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
