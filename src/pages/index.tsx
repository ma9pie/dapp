import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import LinkBox from '@/components/home/LinkBox';

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <w3m-button></w3m-button>
      </Header>

      <ContentWrapper>
        <Text className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]" white>
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
  ${tw`flex min-h-screen flex-col justify-between p-6`};
`;
const Header = styled.div`
  ${tw`flex justify-end`};
`;
const ContentWrapper = styled.div`
  ${tw`relative flex justify-center items-center z-[0] min-h-[360px]`};
  &::before {
    ${tw`absolute h-[300px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl content-['']`};
    ${tw`dark:(bg-gradient-to-br from-transparent to-blue-700 opacity-10)`};
    ${tw`lg:h-[360px]`};
  }
  &::after {
    ${tw`absolute -z-20 h-[180px] w-[240px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-['']`};
    ${tw`dark:(from-sky-900 via-[#0141ff] opacity-40)`};
  }
`;
const LinkContainer = styled.div`
  ${tw`grid`};
  ${tw`lg:(max-w-5xl w-full mb-0 grid-cols-4 text-left)`};
`;
