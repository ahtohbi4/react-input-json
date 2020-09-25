import React from 'react';

import { Level } from './Level';
import { ILevel } from 'types';

import './styles.css';

interface InputJsonProps {
  value: ILevel;
  onChange: (value: ILevel) => void;
}

export const InputJson: React.FC<ILevel> = (props) => {
  const { value, onChange } = props;

  return (
    <span className="input-json">
      <Level value={value} onChange={onChange} />
    </span>
  );
};

InputJson.displayName = 'InputJson';
