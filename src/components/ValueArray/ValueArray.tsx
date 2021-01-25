import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps, Json } from '../../types';
import { classNames } from '../../utils';

import { Item } from './Item';
import { ItemCreator } from './ItemCreator';

import styles from './ValueArray.css';

interface ValueArrayProps extends ControlledFieldProps<Json[]> {
  classes?: ClassNames;
}

export const ValueArray: React.FC<ValueArrayProps> = (props) => {
  const { classes, readOnly, value, onChange } = props;

  const handleChangeItem = useCallback(
    (index, nextItemValue) => {
      const start = value.slice(0, index);
      const end = value.slice(index + 1);

      onChange([...start, nextItemValue, ...end]);
    },
    [value, onChange],
  );

  const handleDeleteItem = useCallback(
    (index) => {
      const leftPart = value.slice(0, index);
      const rightPart = value.slice(index + 1)

      onChange([...leftPart, ...rightPart])
    },
    [value, onChange]
  )

  const handleItemCreate = useCallback(
    (newValue) => {
      onChange([...value, newValue]);
    },
    [value, onChange],
  );

  return (
    <ol
      className={classNames(styles.container, classes?.valueArray?.container)}
    >
      {(value as Json[]).map((itemValue, index) => {
        return (
          <Item
            classes={classes}
            index={index}
            key={index}
            readOnly={readOnly}
            value={itemValue}
            onChange={handleChangeItem}
            onDelete={handleDeleteItem}
          />
        );
      })}

      {readOnly ? null : (
        <ItemCreator classes={classes} onCreate={handleItemCreate} />
      )}
    </ol>
  );
};

ValueArray.displayName = 'ValueArray';
