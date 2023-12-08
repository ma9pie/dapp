import { Button } from '@nextui-org/react';
import React, { ReactNode } from 'react';

interface Props {
  className?: string;
  type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  full?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Component = ({
  className,
  type,
  size,
  radius,
  full,
  disabled,
  children,
  onClick,
}: Props) => {
  return (
    <span className={className}>
      <Button
        color={type}
        size={size}
        radius={radius}
        fullWidth={full}
        isDisabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </span>
  );
};

export default Component;
