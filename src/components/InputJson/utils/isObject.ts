import { TypeChecker } from '../types';

export const isObject: TypeChecker = (value) => {
  return value && typeof value === 'object';
};
