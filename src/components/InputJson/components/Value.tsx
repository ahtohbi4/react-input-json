import React from 'react';

import { useType } from '../utils';
import { ItemType, Json, JsonObject } from '../types';

import { ValueArray } from './ValueArray';
import { ValueBoolean } from './ValueBoolean';
import { ValueNumber } from './ValueNumber';
import { ValueObject } from './ValueObject';
import { ValueString } from './ValueString';

type ValueProps = {
  value: Json;
  onChange(value: Json): void;
};

export const Value: React.FC<ValueProps> = (props) => {
  const { value, onChange } = props;
  const type = useType(value);

  if (type === ItemType.Boolean) {
    return <ValueBoolean value={value as boolean} onChange={onChange} />;
  }

  if (type === ItemType.Array) {
    return <ValueArray value={value as Json[]} onChange={onChange} />;
  }

  if (type === ItemType.Object) {
    return <ValueObject value={value as JsonObject} onChange={onChange} />;
  }

  if (type === ItemType.Null) {
    return null;
  }

  if (type === ItemType.Number) {
    return <ValueNumber value={value as number} onChange={onChange} />;
  }

  return <ValueString value={value as string} onChange={onChange} />;
};

Value.displayName = 'Value';
