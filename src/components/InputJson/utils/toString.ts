import { Json } from '../types';

export function toString(value: Json): string {
  if (typeof value === 'string') {
    return value;
  }

  if (['boolean', 'number'].includes(typeof value)) {
    return String(value);
  }

  if (value && typeof value === 'object') {
    return JSON.stringify(value);
  }

  return '';
}
