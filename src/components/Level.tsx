import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../types';
import { convertTo, useType } from '../utils';

import { SelectType } from './SelectType';
import { Value } from './Value';

interface LevelProps extends ControlledFieldProps<Json> {}

export const Level: React.FC<LevelProps> = (props) => {
  const { value, onChange } = props;
  const type = useType(value);
  const handleTypeChange = useCallback(
    (nextType) => {
      onChange(convertTo(value, nextType));
    },
    [value, onChange],
  );

  return (
    <>
      <SelectType value={type} onChange={handleTypeChange} />

      <Value value={value} onChange={onChange} />
    </>
  );
};

Level.displayName = 'Level';
