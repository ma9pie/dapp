import React from 'react';
import tw, { styled } from 'twin.macro';
import ConnectWalletBtn from '@/components/common/buttons/ConnectWalletBtn';
import Text from '@/components/common/Text';
import ThemeToggle from '@/components/common/ThemeToggle';
import LinkBox from '@/components/home/LinkBox';

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <ThemeToggle></ThemeToggle>
        <ConnectWalletBtn></ConnectWalletBtn>
      </Header>

      <ContentWrapper>
        <Text
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          semibold
          size={72}
        >
          DApp
        </Text>
      </ContentWrapper>

      <LinkContainer>
        <LinkBox
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Docs"
          desc="Find in-depth information about Next.js features and API."
        ></LinkBox>

        <LinkBox
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          title="Learn"
          desc="Learn about Next.js in an interactive course with quizzes!"
        ></LinkBox>

        <LinkBox
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Templates"
          desc="Explore starter templates for Next.js."
        ></LinkBox>

        <LinkBox
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Deploy"
          desc="Instantly deploy your Next.js site to a shareable URL with Vercel."
        ></LinkBox>
      </LinkContainer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  ${tw`flex items-center min-h-screen flex-col justify-between p-4`};
  ${tw`sm:p-6`};
`;
const Header = styled.div`
  ${tw`flex justify-end gap-2 w-full h-10`};
`;
const ContentWrapper = styled.div`
  ${tw`relative flex justify-center items-center min-h-[360px]`};
`;
const LinkContainer = styled.div`
  ${tw`grid`};
  ${tw`lg:(max-w-5xl w-full mb-0 grid-cols-4 text-left)`};
`;
