import React, { useCallback, useState } from 'react';

import { Json } from '../types';

import { Level } from './Level';

import '../styles.css';

type ValueArrayProps = {
  value: Json[];
  onChange(nextValue: Json): void;
};

export const ValueArray: React.FC<ValueArrayProps> = (props) => {
  const { value, onChange } = props;

  const [newValue, setNewValue] = useState<Json>('');
  const handleNewValueChange = useCallback((nextNewValue) => {
    setNewValue(nextNewValue);
  }, []);

  const handleNewValueApply = useCallback(() => {
    if (newValue !== '') {
      onChange([...value, newValue]);
      setNewValue('');
    }
  }, [newValue, value, onChange]);

  return (
    <ol className="input-json__level-array">
      {(value as Json[]).map((item, index, arr) => {
        return (
          <li className="input-json__array-item" key={index}>
            <Level
              value={item}
              onChange={(nextValue) => {
                const start = arr.slice(0, index);
                const end = arr.slice(index + 1);

                onChange([...start, nextValue, ...end]);
              }}
            />
          </li>
        );
      })}

      <li
        className="input-json__array-item"
        style={{ background: 'rgba(0,0,0,0.1)' }}
      >
        <Level value={newValue} onChange={handleNewValueChange} />

        <div>
          <button type="button" onClick={handleNewValueApply}>
            add
          </button>
        </div>
      </li>
    </ol>
  );
};

ValueArray.displayName = 'ValueArray';
