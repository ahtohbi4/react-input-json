import { ItemType, Json } from '../types';
import { toArray, toBoolean, toNumber, toObject, toString } from './converters';

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
