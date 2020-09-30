import React, { useCallback } from 'react';

import { ControlledFieldProps, ItemType } from '../types';

import '../../public/styles.css';

interface SelectTypeProps extends ControlledFieldProps<ItemType> {}

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
      className="rij__select"
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
