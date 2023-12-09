import React from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;

  size?: number;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;

  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;

  black50?: boolean;
  black100?: boolean;
  black200?: boolean;
  black300?: boolean;
  black400?: boolean;
  black500?: boolean;
  black600?: boolean;
  black700?: boolean;
  black800?: boolean;
  black900?: boolean;
  black950?: boolean;
  black?: boolean;
  white?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  children?: string;
}

const Text = ({
  className,

  size,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,

  medium,
  semibold,
  bold,

  black50,
  black100,
  black200,
  black300,
  black400,
  black500,
  black600,
  black700,
  black800,
  black900,
  black950,
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
      size={size}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      medium={medium}
      semibold={semibold}
      bold={bold}
      black50={black50}
      black100={black100}
      black200={black200}
      black300={black300}
      black400={black400}
      black500={black500}
      black600={black600}
      black700={black700}
      black800={black800}
      black900={black900}
      black950={black950}
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
  font-size: ${(props) => `${props.size}px`};
  ${(props) => props.xs && tw`text-xs`};
  ${(props) => props.sm && tw`text-sm`};
  ${(props) => props.md && tw`text-base`};
  ${(props) => props.lg && tw`text-lg`};
  ${(props) => props.xl && tw`text-xl`};
  ${(props) => props.xxl && tw`text-2xl`};

  ${(props) => props.medium && tw`font-medium`};
  ${(props) => props.semibold && tw`font-semibold`};
  ${(props) => props.bold && tw`font-bold`};

  ${(props) => props.black50 && tw`text-neutral-50`};
  ${(props) => props.black100 && tw`text-neutral-100`};
  ${(props) => props.black200 && tw`text-neutral-200`};
  ${(props) => props.black300 && tw`text-neutral-300`};
  ${(props) => props.black400 && tw`text-neutral-400`};
  ${(props) => props.black500 && tw`text-neutral-500`};
  ${(props) => props.black600 && tw`text-neutral-600`};
  ${(props) => props.black700 && tw`text-neutral-700`};
  ${(props) => props.black800 && tw`text-neutral-800`};
  ${(props) => props.black900 && tw`text-neutral-900`};
  ${(props) => props.black950 && tw`text-neutral-950`};
  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
