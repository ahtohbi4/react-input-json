import React, { useCallback } from 'react';

import { ControlledFieldProps } from '../../types';
import { toNumber } from '../../utils';

interface ValueNumberProps extends ControlledFieldProps<number> {}

export const ValueNumber: React.FC<ValueNumberProps> = (props) => {
  const { readOnly, value, onChange } = props;
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
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
};

ValueNumber.displayName = 'ValueNumber';
