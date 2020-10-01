import React, { useCallback, useState } from 'react';

import { ControlledFieldProps, Json } from '../types';
import { Level } from './Level';

import '../../public/styles.css';

interface ValueArrayProps extends ControlledFieldProps<Json[]> {}

export const ValueArray: React.FC<ValueArrayProps> = (props) => {
  const { value, onChange } = props;

  const [addedValue, setAddedValue] = useState<Json>('');
  const handleAddedValueChange = useCallback((nextAddedValue) => {
    setAddedValue(nextAddedValue);
  }, []);
  const handleApplyAddedValue = useCallback(() => {
    if (addedValue !== '') {
      onChange([...value, addedValue]);
      setAddedValue('');
    }
  }, [addedValue, value, onChange]);

  return (
    <ol className="rij-value-array">
      {(value as Json[]).map((item, index, arr) => {
        return (
          <li className="rij-value-array__item" key={index}>
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

      <li className="input-json__array-item-creator">
        <Level value={addedValue} onChange={handleAddedValueChange} />

        <div>
          <button type="button" onClick={handleApplyAddedValue}>
            add
          </button>
        </div>
      </li>
    </ol>
  );
};

ValueArray.displayName = 'ValueArray';
