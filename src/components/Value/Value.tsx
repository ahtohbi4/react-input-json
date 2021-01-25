import React, { useCallback, useMemo } from 'react';

import {
  ClassNames,
  ControlledFieldProps,
  ItemType,
  Json,
  JsonObject,
} from '../../types';
import { convertTo, useType } from '../../utils';

import {
  ButtonDelete,
  TypeSelector,
  ValueArray,
  ValueBoolean,
  ValueNumber,
  ValueNull,
  ValueObject,
  ValueString,
} from '../';

interface ValueProps extends ControlledFieldProps<Json> {
  classes?: ClassNames;
  id?: string;
  onDelete?: () => void;
}

export const Value: React.FC<ValueProps> = (props) => {
  const { id, value, onDelete, ...restProps } = props;
  const { classes, readOnly, onChange } = restProps;

  const type = useType(value);

  const valueType = useMemo(() => {
    switch (type) {
      case ItemType.Boolean:
        return <ValueBoolean {...restProps} value={value as boolean} />;
      case ItemType.Number:
        return <ValueNumber {...restProps} value={value as number} />;
      case ItemType.Null:
        return <ValueNull />;
      case ItemType.Array:
        return <ValueArray {...restProps} value={value as Json[]} />;
      case ItemType.Object:
        return <ValueObject {...restProps} value={value as JsonObject} />;
      case ItemType.String:
      default:
        return <ValueString {...restProps} value={value as string} />;
    }
  }, [type, restProps, value]);

  const handleTypeChange = useCallback(
    (nextType) => {
      onChange(convertTo(value, nextType));
    },
    [value, onChange],
  );

  const handleDelete = useCallback(
    () => {
      onDelete?.()
    },
    [onDelete]
  );

  return (
    <>
      <TypeSelector
        className={classes?.typeSelector}
        id={id}
        readOnly={readOnly}
        value={type}
        onChange={handleTypeChange}
      />

      {valueType}

      {props.onDelete !== undefined && (
        <ButtonDelete
          className={classes?.buttonDelete}
          onClick={handleDelete}
        />
      )}
    </>
  );
};

Value.displayName = 'Value';
