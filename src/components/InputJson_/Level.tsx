import React, { useCallback, useState } from 'react';

import { ILevel } from './types';
import { Pair } from './Pair';

import './styles.css';

interface LevelProps {
  value: ILevel;
  onChange: (value: ILevel) => void;
}

export const Level: React.FC<LevelProps> = (props) => {
  const { value, onChange } = props;
  const handleValueChange = useCallback(
    (newValue) => {
      onChange({ ...value, ...newValue });
    },
    [value, onChange],
  );
  const handleAddPair = useCallback(() => {
    onChange({ ...value, '': '' });
  }, [value, onChange]);

  return (
    <dl className="input-json__level">
      <div className="input-json__level-content">
        {Object.keys(value).map((keyName) => {
          const { [keyName]: keyValue } = value;

          return (
            <Pair
              key={keyName}
              name={keyName}
              value={keyValue}
              onChange={handleValueChange}
              onNameChange={(newName) =>
                onChange({
                  ...value,
                  [newName]: keyValue,
                })
              }
            />
          );
        })}
        <div>
          <button type="button" onClick={handleAddPair}>
            Add
          </button>
        </div>
      </div>
    </dl>
  );
};

Level.displayName = 'Level';
