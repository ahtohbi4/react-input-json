import React, { useCallback } from 'react';

import { Json } from '../types';
import { toNumber } from '../utils';

import '../styles.css';

type ValueNumberProps = {
  value: number;
  onChange(nextValue: Json): void;
};

export const ValueNumber: React.FC<ValueNumberProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(toNumber(nextValue));
    },
    [onChange],
  );

  return (
    <input
      className="input-json__input"
      placeholder="value"
      value={value}
      onChange={handleChange}
    />
  );
};

ValueNumber.displayName = 'ValueNumber';
