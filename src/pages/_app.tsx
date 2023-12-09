import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import { useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import tw, { styled } from 'twin.macro';

import Web3Modal from '@/components/modals/Web3Modal';
import { themeAtom } from '@/states';

const App = (props: AppProps) => {
  return (
    <Web3Modal>
      <NextUIProvider>
        <Inner {...props}></Inner>
      </NextUIProvider>
    </Web3Modal>
  );
};

export default App;

const Inner = ({ Component, pageProps }: AppProps) => {
  const [theme] = useAtom(themeAtom);

  return (
    <Wrapper className={theme}>
      <Component {...pageProps}></Component>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`text-foreground bg-background`};
`;
