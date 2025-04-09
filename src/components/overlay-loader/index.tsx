import { BackgroundOverlay } from '../background-overlay';
import { motion } from 'framer-motion';

interface Props {
  loading: boolean;
}

export const OverlayLoader: React.FC<Props> = ({ loading }) => {
  return (
    <BackgroundOverlay visible={loading} lockScroll={false}>
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 100,
          height: 100,
          border: '8px solid rgba(255, 255, 255, 0.1)',
          borderTop: '8px solid white',
          borderRadius: '50%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </BackgroundOverlay>
  );
};
