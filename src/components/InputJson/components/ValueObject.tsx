import React, { useCallback, useRef } from 'react';

import { Json, JsonObject } from '../types';

import { Pair } from './Pair';

import '../styles.css';

type ValueObjectProps = {
  value: JsonObject;
  onChange(nextValue: Json): void;
};

export const ValueObject: React.FC<ValueObjectProps> = (props) => {
  const { value, onChange } = props;
  const keys = useRef(Object.keys(value));
  const handlePairChange = useCallback(
    (nextName, nextValue, prevName) => {
      const { [prevName]: _, ...restValues } = value;

      if (nextName !== prevName) {
        const index = keys.current.findIndex((key) => key === prevName);
        const start = keys.current.slice(0, index);
        const end = keys.current.slice(index + 1);

        keys.current = [...start, nextName, ...end];
      }

      onChange({ ...restValues, [nextName]: nextValue });
    },
    [value, onChange],
  );

  return (
    <dl className="input-json__level-object">
      <div className="input-json__level-object-content">
        {keys.current.map((key, index) => {
          return (
            <Pair
              key={index}
              name={key}
              value={value[key]}
              onChange={handlePairChange}
            />
          );
        })}
      </div>
    </dl>
  );
};
