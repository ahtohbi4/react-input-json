import React from 'react';

import { Button } from '../Button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const ButtonDelete: React.FC<ButtonProps> = (props) => {
  const { className, type = 'button', ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={className}
      type={type}
    >
      {'Delete'}
    </Button>
  );
};

Button.displayName = 'ButtonDelete';
