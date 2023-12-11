import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import ConnectWalletBtn from '@/components/common/buttons/ConnectWalletBtn';
import ThemeToggle from '@/components/common/ThemeToggle';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header>
        <ThemeToggle></ThemeToggle>
        <ConnectWalletBtn></ConnectWalletBtn>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  ${tw`flex flex-col min-h-screen p-4`};
  ${tw`sm:p-6`};
`;
const Header = styled.div`
  ${tw`flex justify-end gap-2 w-full h-10`};
`;
const Content = styled.div`
  ${tw`flex flex-col flex-1 p-4`};
`;
