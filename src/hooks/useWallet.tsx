import React from 'react';

import ConnectWallet from '@/components/modals/contents/ConnectWallet';
import useModal from '@/hooks/useModal';

const useWallet = () => {
  const { openModal } = useModal();

  const openConnectWalletModal = () => {
    openModal({
      title: 'Connect Wallet',
      component: () => <ConnectWallet></ConnectWallet>,
    });
  };

  return { openConnectWalletModal };
};

export default useWallet;
