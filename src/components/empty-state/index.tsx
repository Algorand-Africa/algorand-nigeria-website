import { motion } from 'framer-motion';
import classNames from 'classnames';
interface Props {
  title?: string;
  description?: string;
  containerClassName?: string;
}

export const EmptyState = ({
  title = 'Oops! Nothing to show',
  description = 'There are no results to display.',
  containerClassName,
}: Props) => {
  return (
    <motion.div
      className={classNames(
        'flex flex-col justify-center items-center h-[600px] w-[100%]',
        containerClassName,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="font-Trap-600 font-[600] text-[144px] leading-[208.8px]"
        initial={{ scale: 0.5, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        👀
      </motion.div>
      <motion.div
        className="flex flex-col gap-1 max-w-[342px] items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div
          className="text-center font-Trap-600 font-[600] text-[24px] leading-[34.8px] text-[#000] dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-center font-Trap text-base text-[#475367] dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
