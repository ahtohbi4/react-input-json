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

export interface ClassNames {
  button?: string;
  buttonDelete?: string;
  input?: string;
  root?: string;
  typeSelector?: string;
  valueArray?: {
    container?: string;
    item?: string;
    itemCreator?: string;
    itemCreatorForm?: string;
  };
  valueObject?: {
    container?: string;
    content?: string;
    pair?: string;
    pairName?: string;
    pairValue?: string;
  };
}
