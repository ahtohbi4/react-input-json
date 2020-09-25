import React, { useCallback } from 'react';

import { Json, JsonObject } from '../types';

import { Pair } from './Pair';

import '../styles.css';

type ValueObjectProps = {
  value: JsonObject;
  onChange(nextValue: Json): void;
};

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
    <dl className="input-json__level-object">
      <div className="input-json__level-object-content">
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
