import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps, Json } from '../../types';
import { classNames } from '../../utils';
import { Input, Value } from '../';

import styles from './Pair.css';

interface PairProps extends Omit<ControlledFieldProps<Json>, 'onChange'> {
  name: string;
  onChange: (
    name: string,
    value: Json,
    prevName: string,
    prevValue: Json,
  ) => void;

  classes?: ClassNames;
}

export const Pair: React.FC<PairProps> = (props) => {
  const { classes, name, readOnly, value, onChange } = props;

  const handleNameChange = useCallback(
    ({ target: { value: nextName } }) => {
      onChange(nextName, value, name, value);
    },
    [name, value, onChange],
  );

  const handleValueChange = useCallback(
    (nextValue) => {
      onChange(name, nextValue, name, value);
    },
    [name, value, onChange],
  );

  return (
    <div className={classNames(styles.pair, classes?.valueObject?.pair)}>
      <dt
        className={classNames(styles.pairName, classes?.valueObject?.pairName)}
      >
        <Input
          className={classes?.input}
          placeholder="name"
          readOnly={readOnly}
          value={name}
          onChange={handleNameChange}
        />
      </dt>
      <dd
        className={classNames(
          styles.pairValue,
          classes?.valueObject?.pairValue,
        )}
      >
        <Value
          classes={classes}
          readOnly={readOnly}
          value={value}
          onChange={handleValueChange}
        />
      </dd>
    </div>
  );
};

Pair.displayName = 'ValueObject.Pair';
