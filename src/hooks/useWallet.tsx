import React from 'react';

import ConnectWalletModal from '@/components/modals/wallet/ConnectWalletModal';
import useModal from '@/hooks/useModal';

const useWallet = () => {
  const { openModal } = useModal();

  const openConnectWalletModal = () => {
    openModal({
      title: 'Connect Wallet',
      component: () => <ConnectWalletModal></ConnectWalletModal>,
    });
  };

  return { openConnectWalletModal };
};

export default useWallet;
