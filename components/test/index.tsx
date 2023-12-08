import React from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/Button';

const Test = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Button type="default">default</Button>
          <Button type="primary">primary</Button>
          <Button type="secondary">secondary</Button>
          <Button type="success">success</Button>
          <Button type="warning">warning</Button>
          <Button type="danger">danger</Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="primary" size="sm">
            primary
          </Button>
          <Button type="primary" size="md">
            primary
          </Button>
          <Button type="primary" size="lg">
            primary
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="primary" radius="none">
            primary
          </Button>
          <Button type="primary" radius="sm">
            primary
          </Button>
          <Button type="primary" radius="md">
            primary
          </Button>
          <Button type="primary" radius="lg">
            primary
          </Button>
          <Button type="primary" radius="full">
            primary
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="primary" disabled>
            primary
          </Button>
          <Button type="primary" full>
            primary
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Test;

const Wrapper = styled.main`
  ${tw`flex flex-col gap-6 min-h-screen p-6`};
`;
