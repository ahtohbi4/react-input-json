import React, { useCallback } from 'react';

import { ClassNames, ControlledFieldProps, JsonObject } from '../../types';
import { classNames } from '../../utils';
import { Pair } from './Pair';
import { PairCreator } from './PairCreator';

import styles from './ValueObject.css';

interface ValueObjectProps extends ControlledFieldProps<JsonObject> {
  classes?: ClassNames;
}

export const ValueObject: React.FC<ValueObjectProps> = (props) => {
  const { classes, readOnly, value, onChange } = props;

  const handlePairChange = useCallback(
    (nextName, nextValue, prevName) => {
      const { [prevName]: _, ...restValues } = value;

      onChange({ ...restValues, [nextName]: nextValue });
    },
    [value, onChange],
  );

  const handlePairCreate = useCallback(
    (newPair) => {
      onChange({ ...value, ...newPair });
    },
    [value, onChange],
  );

  return (
    <dl
      className={classNames(styles.container, classes?.valueObject?.container)}
    >
      <div
        className={classNames(styles.content, classes?.valueObject?.content)}
      >
        {Object.entries(value).map(([itemKey, itemValue], index) => {
          return (
            <Pair
              classes={classes}
              key={index}
              name={itemKey}
              readOnly={readOnly}
              value={itemValue}
              onChange={handlePairChange}
            />
          );
        })}

        {readOnly ? null : (
          <PairCreator classes={classes} onCreate={handlePairCreate} />
        )}
      </div>
    </dl>
  );
};
