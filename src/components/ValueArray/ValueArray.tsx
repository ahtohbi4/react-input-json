import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../../types';

import { ArrayItem } from './ArrayItem';
import { ArrayItemCreator } from './ArrayItemCreator';

interface ValueArrayProps extends ControlledFieldProps<Json[]> {}

export const ValueArray: React.FC<ValueArrayProps> = (props) => {
  const { readOnly, value, onChange } = props;

  const handleChangeItem = useCallback(
    (index, nextItemValue) => {
      const start = value.slice(0, index);
      const end = value.slice(index + 1);

      onChange([...start, nextItemValue, ...end]);
    },
    [value, onChange],
  );

  const handleItemCreate = useCallback(
    (newValue) => {
      onChange([...value, newValue]);
    },
    [value, onChange],
  );

  return (
    <ol className="rij-value-array">
      {(value as Json[]).map((itemValue, index) => {
        return (
          <ArrayItem
            index={index}
            key={index}
            readOnly={readOnly}
            value={itemValue}
            onChange={handleChangeItem}
          />
        );
      })}

      {readOnly ? null : (
        <li className="rij-value-array__item-creator">
          <ArrayItemCreator onCreate={handleItemCreate} />
        </li>
      )}
    </ol>
  );
};

ValueArray.displayName = 'ValueArray';
