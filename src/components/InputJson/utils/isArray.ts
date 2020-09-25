import { TypeChecker } from '../types';

export const isArray: TypeChecker = (value) => {
  return Array.isArray(value);
};
