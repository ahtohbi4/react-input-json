import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps } from '../../types';
import { toString } from '../../utils';
import { Input } from '../';

interface ValueStringProps extends ControlledFieldProps<string> {
  classes?: ClassNames;
}

export const ValueString: React.FC<ValueStringProps> = (props) => {
  const { classes, readOnly, value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(toString(nextValue));
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

ValueString.displayName = 'ValueString';
