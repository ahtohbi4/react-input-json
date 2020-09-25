import React, { useCallback } from 'react';

import { Json } from '../types';

import { Level } from './Level';

type PairProps = {
  name: string;
  value: Json;
  onChange(name: string, value: Json, prevName: string, prevValue: Json): void;
};

export const Pair: React.FC<PairProps> = (props) => {
  const { name, value, onChange } = props;
  const handleChange = useCallback(
    (nextValue) => {
      onChange(name, nextValue, name, value);
    },
    [name, value, onChange],
  );
  const handleNameChange = useCallback(
    ({ target: { value: nextName } }) => {
      onChange(nextName, value, name, value);
    },
    [name, value, onChange],
  );

  return (
    <div className="input-json__level-object-item">
      <dt className="input-json__level-object-key">
        <input
          className="input-json__input"
          placeholder="key"
          value={name}
          onChange={handleNameChange}
        />
      </dt>
      <dd className="input-json__level-object-value">
        <Level value={value} onChange={handleChange} />
      </dd>
    </div>
  );
};

Pair.displayName = 'Pair';
