import React from 'react';
import tw, { styled } from 'twin.macro';

import ChainButton from '@/components/common/buttons/ChainButton';
import ConnectWalletBtn from '@/components/common/buttons/ConnectWalletBtn';
import ThemeToggle from '@/components/common/ThemeToggle';

const Header = () => {
  return (
    <Wrapper>
      <ThemeToggle></ThemeToggle>
      <ChainButton></ChainButton>
      <ConnectWalletBtn></ConnectWalletBtn>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`flex justify-end items-center gap-2 w-full h-10`};
`;
