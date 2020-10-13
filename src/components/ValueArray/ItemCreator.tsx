import React, { useCallback, useState } from 'react';

import { ClassNames, Json } from '../../types';
import { classNames } from '../../utils';
import { Button, Value } from '../';

import styles from './ItemCreator.css';

const DEFAULT_VALUE: Json = '';

interface ItemCreatorProps {
  onCreate: (nextValue: Json) => void;

  classes?: ClassNames;
}

export const ItemCreator: React.FC<ItemCreatorProps> = (props) => {
  const { classes, onCreate } = props;

  const [isActive, setIsActive] = useState(false);
  const handleActivate = useCallback(() => {
    setIsActive(true);
  }, []);

  const [value, setValue] = useState<Json>(DEFAULT_VALUE);
  const handleChange = useCallback((nextValue) => {
    setValue(nextValue);
  }, []);
  const handleApply = useCallback(() => {
    onCreate(value);
    setIsActive(false);
    setValue(DEFAULT_VALUE);
  }, [value, onCreate]);

  return (
    <li
      className={classNames(
        styles.itemCreator,
        classes?.valueArray?.itemCreator,
      )}
    >
      {isActive ? (
        <div
          className={classNames(
            styles.itemCreatorForm,
            classes?.valueArray?.itemCreatorForm,
          )}
        >
          <Value classes={classes} value={value} onChange={handleChange} />

          <div>
            <Button className={classes?.button} onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      ) : (
        <Button className={classes?.button} onClick={handleActivate}>
          Add
        </Button>
      )}
    </li>
  );
};

ItemCreator.displayName = 'ValueArray.ItemCreator';
