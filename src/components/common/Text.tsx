import React from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;

  black?: boolean;
  white?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  children?: string;
}

const Text = ({
  className,
  black,
  white,
  left,
  right,
  center,
  children,
}: Props) => {
  return (
    <P
      className={className}
      black={black}
      white={white}
      left={left}
      right={right}
      center={center}
    >
      {children}
    </P>
  );
};

export default Text;

const P = styled.p<Props>`
  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
