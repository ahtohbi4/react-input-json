import React from 'react';

import { classNames } from '../../utils';

import styles from './Root.css';

interface RootProps {
  className?: string;
}

export const Root: React.FC<RootProps> = (props) => {
  const { children, className } = props;

  return (
    <span className={classNames(styles.container, className)}>{children}</span>
  );
};

Root.displayName = 'Root';
