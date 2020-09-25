import { Json } from '../types';

export function toObject(value: Json) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    try {
      const parsedValue = JSON.parse(value);

      return parsedValue && typeof parsedValue === 'object' ? parsedValue : {};
    } catch (error) {
      return {};
    }
  }

  return {};
}
