import { Json } from '../types';

export function toArray(value: Json) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    try {
      const parsedValue = JSON.parse(value);

      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      return [];
    }
  }

  return [];
}
