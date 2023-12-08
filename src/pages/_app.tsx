import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import Web3Modal from '@/components/modals/Web3Modal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Modal>
      <Component {...pageProps}></Component>
    </Web3Modal>
  );
}
