import React, { useCallback } from 'react';

import ConnectWalletModal from '@/components/modals/wallet/ConnectWalletModal';
import useModal from '@/hooks/useModal';

const useWallet = () => {
  const { openModal } = useModal();

  const openConnectWalletModal = useCallback(() => {
    openModal({
      size: 'sm',
      title: 'Connect Wallet',
      component: () => <ConnectWalletModal></ConnectWalletModal>,
    });
  }, [openModal]);

  return { openConnectWalletModal };
};

export default useWallet;
