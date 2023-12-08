import '@/styles/globals.css';
import tw, { styled } from 'twin.macro';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { themeAtom } from '@/states';
import Web3Modal from '@/components/modals/Web3Modal';
import { useAtom } from 'jotai';

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
