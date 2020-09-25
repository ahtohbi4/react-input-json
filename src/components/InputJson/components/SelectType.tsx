import React, { useCallback } from 'react';

import { ItemType } from '../types';

import '../styles.css';

type SelectTypeProps = {
  value: ItemType;
  onChange(nextValue: ItemType): void;
};

const typeNames = Object.keys(ItemType).filter(
  (k) => typeof ItemType[k as any] === 'number',
);

export const SelectType: React.FC<SelectTypeProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(nextValue);
    },
    [onChange],
  );

  return (
    <select
      className="input-json__select"
      value={value}
      onChange={handleChange}
    >
      {typeNames.map((name) => {
        return (
          <option key={name} value={ItemType[name as any]}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

SelectType.displayName = 'SelectType';
