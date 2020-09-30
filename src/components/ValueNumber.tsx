import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../types';
import { toNumber } from '../utils';

import '../../public/styles.css';

interface ValueNumberProps extends ControlledFieldProps<number> {}

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
      className="rij__input"
      placeholder="value"
      value={value}
      onChange={handleChange}
    />
  );
};

ValueNumber.displayName = 'ValueNumber';
