import React from 'react';

import { classNames } from '../../utils';

import styles from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, type = 'button', ...restProps } = props;

  return (
    <button
      {...restProps}
      className={classNames(styles.button, className)}
      type={type}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
