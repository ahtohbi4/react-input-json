import React from 'react';

import { classNames } from '../../utils';
import styles from './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  const { className, type = 'text', ...restProps } = props;

  return (
    <input
      {...restProps}
      className={classNames(styles.input, className)}
      type={type}
    />
  );
};

Input.displayName = 'Input';
