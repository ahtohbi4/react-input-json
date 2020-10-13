import React, { useCallback } from 'react';

import { ControlledFieldProps, ItemType } from '../../types';
import { classNames } from '../../utils';

import styles from './TypeSelector.css';

interface TypeSelectorProps extends ControlledFieldProps<ItemType> {
  className?: string;
  id?: string;
}

const typeNames = Object.keys(ItemType).filter(
  (k) => typeof ItemType[k as any] === 'number',
);

export const TypeSelector: React.FC<TypeSelectorProps> = (props) => {
  const { className, id, readOnly, value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(nextValue);
    },
    [onChange],
  );

  return (
    <select
      className={classNames(styles.container, className)}
      id={id}
      disabled={readOnly}
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

TypeSelector.displayName = 'TypeSelector';
