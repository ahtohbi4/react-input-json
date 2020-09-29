import React, { useCallback } from 'react';

import { Json } from '../types';
import { toString } from '../utils';

import '../styles.css';

type ValueStringProps = {
  value: string;
  onChange(nextValue: Json): void;
};

export const ValueString: React.FC<ValueStringProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(toString(nextValue));
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

ValueString.displayName = 'ValueString';
