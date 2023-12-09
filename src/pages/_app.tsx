import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Web3Modal from '@/components/modals/Web3Modal';

const App = (props: AppProps) => {
  return (
    <Web3Modal>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Inner {...props}></Inner>
        </ThemeProvider>
      </NextUIProvider>
    </Web3Modal>
  );
};

export default App;

const Inner = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps}></Component>;
};
