import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Web3ModalProvider from '@/components/modals/Web3ModalProvider';

const App = (props: AppProps) => {
  return (
    <Web3ModalProvider>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Inner {...props}></Inner>
        </ThemeProvider>
      </NextUIProvider>
    </Web3ModalProvider>
  );
};

export default App;

const Inner = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  const [className, setClassName] = useState<string | undefined>();

  useEffect(() => {
    setClassName(theme);
  }, [theme]);

  return (
    <Wrapper className={className}>
      <Component {...pageProps}></Component>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`text-foreground bg-background`};
`;
