import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabTogglerProps {
  tabs: string[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  randomId?: string;
}

export const TabToggler = ({
  tabs,
  selectedTab,
  onSelectTab,
  randomId = 'bla-bla-bla',
}: TabTogglerProps) => {
  const [sliderPosition, setSliderPosition] = useState({
    width: 0,
    left: 0,
    height: 0,
  });

  const onTabChange = (tab: string, index: number) => {
    const tabId = randomId + index + tab;
    const tabElement = document.getElementById(tabId);

    if (tabElement) {
      setSliderPosition({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft,
        height: tabElement.offsetHeight,
      });
    }

    onSelectTab(tab);
  };

  useEffect(() => {
    const selectedTabIndex = tabs.findIndex((tab) => tab === selectedTab);
    onTabChange(selectedTab, selectedTabIndex);
  }, []);

  return (
    <motion.div
      className="flex flex-col relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center p-[5px] w-fit rounded-md bg-[#F1F5F9] relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {tabs.map((tab, index) => (
          <motion.div
            className={`relative z-[2] cursor-pointer select-none font-inter text-sm lg:text-base font-medium leading-6 px-3 py-1.5
              ${tab === selectedTab ? 'text-[#020817]' : 'text-[#334155]'}`}
            key={index}
            id={randomId + index + tab}
            onClick={() => onTabChange(tab, index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{
              scale: tab === selectedTab ? 1 : 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {tab}
            </motion.span>
          </motion.div>
        ))}
        <motion.div
          className="absolute z-[1] rounded bg-white"
          initial={false}
          animate={{
            width: sliderPosition.width,
            left: sliderPosition.left,
            height: sliderPosition.height,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
            mass: 1,
          }}
          layoutId="slider"
        />
      </motion.div>
    </motion.div>
  );
};
