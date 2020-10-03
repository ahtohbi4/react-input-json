import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../../types';
import { Value } from '../';

interface ObjectPairProps extends Omit<ControlledFieldProps<Json>, 'onChange'> {
  name: string;
  onChange: (
    name: string,
    value: Json,
    prevName: string,
    prevValue: Json,
  ) => void;
}

export const ObjectPair: React.FC<ObjectPairProps> = (props) => {
  const { name, readOnly, value, onChange } = props;

  const handleNameChange = useCallback(
    ({ target: { value: nextName } }) => {
      onChange(nextName, value, name, value);
    },
    [name, value, onChange],
  );

  const handleValueChange = useCallback(
    (nextValue) => {
      onChange(name, nextValue, name, value);
    },
    [name, value, onChange],
  );

  return (
    <div className="rij-value-object__pair">
      <dt className="rij-value-object__pair-name">
        <input
          className="rij__input"
          placeholder="key"
          readOnly={readOnly}
          value={name}
          onChange={handleNameChange}
        />
      </dt>
      <dd className="rij-value-object__pair-value">
        <Value readOnly={readOnly} value={value} onChange={handleValueChange} />
      </dd>
    </div>
  );
};

ObjectPair.displayName = 'ObjectPair';
