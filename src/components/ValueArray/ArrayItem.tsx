import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../../types';
import { Value } from '../Value';

interface ArrayItemProps extends Omit<ControlledFieldProps<Json>, 'onChange'> {
  index: number;
  onChange: (index: number, nextValue: Json) => void;
}

export const ArrayItem: React.FC<ArrayItemProps> = (props) => {
  const { index, readOnly, value, onChange } = props;

  const handleChange = useCallback(
    (nextValue) => {
      onChange(index, nextValue);
    },
    [index, onChange],
  );

  return (
    <li className="rij-value-array__item">
      <Value readOnly={readOnly} value={value} onChange={handleChange} />
    </li>
  );
};

ArrayItem.displayName = 'ArrayItem';
