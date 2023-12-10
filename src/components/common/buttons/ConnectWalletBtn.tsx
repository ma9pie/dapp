import React from 'react';
import tw, { styled } from 'twin.macro';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';

import Button from '@/components/common/buttons/Button';
import useWallet from '@/hooks/useWallet';
import { ellipsis } from '@/utils';

const ConnectWalletBtn = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { address, connector } = useAccount();
  const { openConnectWalletModal } = useWallet();

  return (
    <Wrapper>
      {address ? (
        <Button full onClick={disconnect}>
          {ellipsis(address)}
        </Button>
      ) : (
        <Button full color="primary" onClick={openConnectWalletModal}>
          Connect Wallet
        </Button>
      )}
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  ${tw`w-32`};
`;
