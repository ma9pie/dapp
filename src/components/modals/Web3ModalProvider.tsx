import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { ReactNode } from 'react';
import { arbitrum, mainnet, polygon, zkSync } from 'viem/chains';
import { WagmiConfig } from 'wagmi';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

// 2. Create wagmiConfig
const metadata = {
  name: 'dapp',
  description: 'dapp example',
  url: '',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, zkSync, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: arbitrum,
});

interface Props {
  children: ReactNode;
}

const Web3ModalProvider = ({ children }: Props) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};

export default Web3ModalProvider;
