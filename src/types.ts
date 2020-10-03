export type Json =
  | boolean
  | number
  | string
  | null
  | { [key: string]: Json }
  | Json[];

export type JsonObject = { [key: string]: Json };

export enum ItemType {
  Array,
  Boolean,
  Null,
  Number,
  Object,
  String,
}

export type TypeChecker = (value: Json) => boolean;

export interface ControlledFieldProps<T> {
  value: T;
  onChange: (nextValue: T) => void;

  readOnly?: boolean;
}
