import React from 'react';

import { Json } from '../types';

import { Level } from './Level';

import '../styles.css';

type ValueArrayProps = {
  value: Json[];
  onChange(nextValue: Json): void;
};

export const ValueArray: React.FC<ValueArrayProps> = (props) => {
  const { value, onChange } = props;

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
    </ol>
  );
};

ValueArray.displayName = 'ValueArray';
