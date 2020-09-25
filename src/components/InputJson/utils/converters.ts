/**
 * Utils to convert a value from type to type.
 */
import { Json, JsonObject } from '../types';

/**
 * Converts to the Array type.
 *
 * @param {Json} value - A source value.
 * @returns {Json[]} - Resulted value.
 */
export function toArray(value: Json): Json[] {
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

/**
 * Converts to the Boolean type.
 *
 * @param {Json} value - A source value.
 * @returns {boolean} - Resulted value.
 */
export function toBoolean(value: Json): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  return Boolean(value);
}

/**
 * Converts to the Number type.
 *
 * @param {Json} value - A source value.
 * @returns {number} - Resulted value.
 */
export function toNumber(value: Json): number {
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

/**
 * Converts to the Object type.
 *
 * @param {Json} value - A source value.
 * @returns {JsonObject} - Resulted value.
 */
export function toObject(value: Json): JsonObject {
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

/**
 * Converts to the String type.
 *
 * @param {Json} value - A source value.
 * @returns {string} - Resulted value.
 */
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
