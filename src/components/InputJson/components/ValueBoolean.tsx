import React, { useCallback } from 'react';

import { Json } from '../types';
import { toBoolean } from '../utils';

import '../styles.css';

type ValueBooleanProps = {
  value: boolean;
  onChange(nextValue: Json): void;
};

export const ValueBoolean: React.FC<ValueBooleanProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { checked } }) => {
      onChange(toBoolean(checked));
    },
    [onChange],
  );

  return <input checked={value} type="checkbox" onChange={handleChange} />;
};

ValueBoolean.displayName = 'ValueBoolean';
