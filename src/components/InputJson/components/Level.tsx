import React, { useCallback } from 'react';

import { Json } from '../types';
import { convertTo, useType } from '../utils';

import { SelectType } from './SelectType';
import { Value } from './Value';

type LevelProps = {
  value: Json;
  onChange(nextValue: Json): void;
};

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
