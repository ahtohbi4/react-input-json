import { ItemType, Json } from '../types';
import { toArray } from './toArray';
import { toBoolean } from './toBoolean';
import { toNumber } from './toNumber';
import { toObject } from './toObject';
import { toString } from './toString';

export function convertTo(value: Json, type: ItemType): Json {
  const formatter = {
    [ItemType.Array]: toArray,
    [ItemType.Boolean]: toBoolean,
    [ItemType.Number]: toNumber,
    [ItemType.Object]: toObject,
    [ItemType.String]: toString,
  }[type];

  return formatter(value);
}
