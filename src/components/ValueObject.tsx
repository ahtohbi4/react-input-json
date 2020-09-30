import React, { useCallback } from 'react';

import { ControlledFieldProps, JsonObject } from '../types';
import { Pair } from './Pair';

import '../../public/styles.css';

interface ValueObjectProps extends ControlledFieldProps<JsonObject> {}

export const ValueObject: React.FC<ValueObjectProps> = (props) => {
  const { value, onChange } = props;
  const handlePairChange = useCallback(
    (nextName, nextValue, prevName) => {
      const { [prevName]: _, ...restValues } = value;

      onChange({ ...restValues, [nextName]: nextValue });
    },
    [value, onChange],
  );

  return (
    <dl className="rij-value-object">
      <div className="rij-value-object__content">
        {Object.entries(value).map(([itemKey, itemValue], index) => {
          return (
            <Pair
              key={index}
              name={itemKey}
              value={itemValue}
              onChange={handlePairChange}
            />
          );
        })}
      </div>
    </dl>
  );
};
