import React, { useCallback } from 'react';

import { Level } from './components';
import { Json } from './types';

import '../public/styles.css';

type InputJsonProps = {
  value: Json;
  onChange(nextValue: Json): void;
};

export const ReactInputJson: React.FC<InputJsonProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    (nextValue) => {
      onChange(nextValue);
    },
    [onChange],
  );

  return (
    <span className="rij-container">
      <Level value={value} onChange={handleChange} />
    </span>
  );
};

ReactInputJson.displayName = 'ReactInputJson';
