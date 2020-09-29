import React, { useCallback } from 'react';

import { Level } from './components/Level';
import { Json } from './types';

import './styles.css';

type InputJsonProps = {
  value: Json;
  onChange(nextValue: Json): void;
};

export const InputJson: React.FC<InputJsonProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    (nextValue) => {
      onChange(nextValue);
    },
    [onChange],
  );

  return (
    <span className="input-json">
      <Level value={value} onChange={handleChange} />
    </span>
  );
};

InputJson.displayName = 'InputJson';
