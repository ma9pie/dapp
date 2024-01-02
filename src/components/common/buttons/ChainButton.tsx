import React, { useEffect, useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';
import { mainnet } from 'wagmi/chains';
import useWallet from '@/hooks/useWallet';
import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';

const ChainButton = () => {
  const { chain, chains, switchNetwork } = useWallet();

  const [chainName, setChainName] = useState('');

  const id = chain?.id;

  useEffect(() => {
    const currentChain = chains.find((item) => item.id === id);
    if (currentChain) {
      setChainName(currentChain.name);
    } else {
      setChainName('');
    }
  }, [id]);

  return (
    <Wrapper>
      {chainName ? (
        <>{chainName}</>
      ) : (
        <Flex
          gap={4}
          items="center"
          onClick={() => switchNetwork?.(mainnet.id)}
        >
          <IoWarningOutline size={24}></IoWarningOutline>
          <Text>Invalid network</Text>
        </Flex>
      )}
    </Wrapper>
  );
};

export default ChainButton;

const Wrapper = styled.div`
  ${tw`border-2 border-solid rounded-lg px-2 py-1 cursor-pointer select-none`};
`;
