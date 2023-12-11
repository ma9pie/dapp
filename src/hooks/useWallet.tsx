import React, { useCallback, useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import ConnectWalletModal from '@/components/modals/wallet/ConnectWalletModal';
import useModal from '@/hooks/useModal';

const useWallet = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { openModal } = useModal();

  const [account, setAccount] = useState();

  useEffect(() => {
    setAccount(address);
  }, [address]);

  const openConnectWalletModal = useCallback(() => {
    openModal({
      size: 'sm',
      title: 'Connect Wallet',
      component: () => <ConnectWalletModal></ConnectWalletModal>,
    });
  }, [openModal]);

  return {
    account,
    connectors,
    pendingConnector,
    error,
    isLoading,
    connect,
    disconnect,
    openConnectWalletModal,
  };
};

export default useWallet;
