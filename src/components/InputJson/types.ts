type Primitive = boolean | number | string | null | undefined;

export type Json = Primitive | JsonObject | Json[];

export type JsonObject = { [key: string]: Json };

export enum ItemType {
  Array,
  Boolean,
  Number,
  Object,
  String,
}

export type TypeChecker = (value: Json) => boolean;
