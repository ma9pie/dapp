import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import tailwindColors from 'tailwindcss/colors';
interface Props {
  [key: string]: any;
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

  black,
  white,

  left,
  right,
  center,

  children,
  ...props
}: Props) => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    Object.keys(props).map((key) => {
      const result = key.match(/([a-z]+)(\d+)/);
      if (!result) return;
      const [, color, number] = result;
      const tailwindColor = (tailwindColors as any)[color];
      if (!tailwindColor) return;
      const code = tailwindColor[number];
      setColor(code);
    });
  }, []);

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
      black={black}
      white={white}
      left={left}
      right={right}
      center={center}
      style={{ color: color }}
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

  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
