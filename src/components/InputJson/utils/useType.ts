import { useMemo } from 'react';

import { ItemType, Json } from '../types';
import { isArray, isObject } from './';

export function useType(value: Json): ItemType {
  return useMemo(() => {
    switch (true) {
      case typeof value === 'boolean':
        return ItemType.Boolean;

      case typeof value === 'number':
        return ItemType.Number;

      case value === null:
        return ItemType.Null;

      case isArray(value):
        return ItemType.Array;

      case isObject(value):
        return ItemType.Object;

      case typeof value === 'string':
      default:
        return ItemType.String;
    }
  }, [value]);
}
