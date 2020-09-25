import { Json } from '../types';

export function toNumber(value: Json): number {
  console.log(value);
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return parseInt(value, 10);
  }

  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  return 0;
}
