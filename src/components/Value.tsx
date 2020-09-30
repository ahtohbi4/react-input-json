import React from 'react';

import { useType } from '../utils';
import { ControlledFieldProps, ItemType, Json, JsonObject } from '../types';

import { ValueArray } from './ValueArray';
import { ValueBoolean } from './ValueBoolean';
import { ValueNumber } from './ValueNumber';
import { ValueObject } from './ValueObject';
import { ValueString } from './ValueString';

interface ValueProps extends ControlledFieldProps<Json> {}

export const Value: React.FC<ValueProps> = (props) => {
  const { value, onChange } = props;
  const type = useType(value);

  switch (type) {
    case ItemType.Boolean:
      return <ValueBoolean value={value as boolean} onChange={onChange}/>;

    case ItemType.Array:
      return <ValueArray value={value as Json[]} onChange={onChange}/>;

    case ItemType.Object:
      return <ValueObject value={value as JsonObject} onChange={onChange}/>;

    case ItemType.Number:
      return <ValueNumber value={value as number} onChange={onChange}/>;

    case ItemType.String:
    default:
      return <ValueString value={value as string} onChange={onChange}/>;
  }
};

Value.displayName = 'Value';
