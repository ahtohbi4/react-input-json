import { Json } from '../types';

export function toBoolean(value: Json) {
  if (typeof value === 'boolean') {
    return value;
  }

  return Boolean(value);
}
