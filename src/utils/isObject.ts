import { TypeChecker } from '../types';

export const isObject: TypeChecker = (value) => {
  return value !== null && typeof value === 'object';
};
