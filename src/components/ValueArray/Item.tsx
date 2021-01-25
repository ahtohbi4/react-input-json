import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps, Json } from '../../types';
import { classNames } from '../../utils';
import { Value } from '../Value';

import styles from './Item.css';

interface ItemProps extends Omit<ControlledFieldProps<Json>, 'onChange'> {
  index: number;
  onChange: (index: number, nextValue: Json) => void;
  onDelete: (index: number) => void;

  classes?: ClassNames;
}

export const Item: React.FC<ItemProps> = (props) => {
  const { classes, index, readOnly, value, onChange, onDelete } = props;

  const handleChange = useCallback(
    (nextValue) => {
      onChange(index, nextValue);
    },
    [index, onChange],
  );

  const handleDelete = useCallback(
    () => {
      onDelete(index);
    },
    [index, onDelete]
  );

  return (
    <li className={classNames(styles.item, classes?.valueArray?.item)}>
      <Value
        classes={classes}
        readOnly={readOnly}
        value={value}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    </li>
  );
};

Item.displayName = 'ValueArray.Item';
