import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps } from '../../types';
import { toNumber } from '../../utils';
import { Input } from '../';

interface ValueNumberProps extends ControlledFieldProps<number> {
  classes?: ClassNames;
}

export const ValueNumber: React.FC<ValueNumberProps> = (props) => {
  const { classes, readOnly, value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(toNumber(nextValue));
    },
    [onChange],
  );

  return (
    <Input
      className={classes?.input}
      placeholder="value"
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
};

ValueNumber.displayName = 'ValueNumber';
