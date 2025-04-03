'use client';

import { useWallet } from '@txnlab/use-wallet';
import { BackgroundOverlay } from '../background-overlay';
import { useEffect } from 'react';
import styles from './index.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onClose: () => void;
}

export const WalletConnectModal = ({ onClose }: Props) => {
  const { providers: wallets, activeAddress } = useWallet();

  useEffect(() => {
    if (activeAddress) {
      onClose();
    }
  }, [activeAddress]);

  return (
    <BackgroundOverlay onClose={onClose}>
      <motion.div
        className={styles.container}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={styles.title}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h4>Connect a Wallet</h4>
          <h5>Supported wallets</h5>
        </motion.div>
        <div className={styles.wallets}>
          <AnimatePresence>
            {wallets?.map((wallet, index) => (
              <motion.div
                className={styles.wallet}
                key={wallet.metadata.id}
                onClick={wallet.connect}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={wallet.metadata.icon} alt={`${wallet.metadata.name} icon`} />
                <span>{wallet.metadata.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </BackgroundOverlay>
  );
};
