import React, { useCallback } from 'react';

import { ControlledFieldProps, JsonObject } from '../../types';
import { ObjectPair } from './ObjectPair';
import { ObjectPairCreator } from './ObjectPairCreator';

interface ValueObjectProps extends ControlledFieldProps<JsonObject> {}

export const ValueObject: React.FC<ValueObjectProps> = (props) => {
  const { readOnly, value, onChange } = props;

  const handlePairChange = useCallback(
    (nextName, nextValue, prevName) => {
      const { [prevName]: _, ...restValues } = value;

      onChange({ ...restValues, [nextName]: nextValue });
    },
    [value, onChange],
  );

  const handlePairCreate = useCallback(
    (newPair) => {
      onChange({ ...value, ...newPair });
    },
    [value, onChange],
  );

  return (
    <dl className="rij-value-object">
      <div className="rij-value-object__content">
        {Object.entries(value).map(([itemKey, itemValue], index) => {
          return (
            <ObjectPair
              key={index}
              name={itemKey}
              readOnly={readOnly}
              value={itemValue}
              onChange={handlePairChange}
            />
          );
        })}

        {readOnly ? null : <ObjectPairCreator onCreate={handlePairCreate} />}
      </div>
    </dl>
  );
};
