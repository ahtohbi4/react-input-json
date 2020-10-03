import React, { useCallback } from 'react';

import { ControlledFieldProps } from '../../types';
import { toString } from '../../utils';

interface ValueStringProps extends ControlledFieldProps<string> {}

export const ValueString: React.FC<ValueStringProps> = (props) => {
  const { readOnly, value, onChange } = props;
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
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  );
};

ValueString.displayName = 'ValueString';
