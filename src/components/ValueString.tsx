import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../types';
import { toString } from '../utils';

import '../../public/styles.css';

interface ValueStringProps extends ControlledFieldProps<string> {}

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
      className="rij__input"
      placeholder="value"
      value={value}
      onChange={handleChange}
    />
  );
};

ValueString.displayName = 'ValueString';
