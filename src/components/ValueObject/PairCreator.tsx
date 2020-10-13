import React, { useCallback, useState } from 'react';

import { ClassNames, Json, JsonObject } from '../../types';
import { Button } from '../';
import { Pair } from './Pair';

const DEFAULT_PAIR: [string, Json] = ['', ''];

interface PairCreatorProps {
  onCreate: (nextPair: JsonObject) => void;

  classes?: ClassNames;
}

export const PairCreator: React.FC<PairCreatorProps> = (props) => {
  const { classes, onCreate } = props;

  const [isActive, setIsActive] = useState(false);
  const handleActivate = useCallback(() => {
    setIsActive(true);
  }, []);

  const [[name, value], setPair] = useState(DEFAULT_PAIR);
  const handleChange = useCallback((nextName, nextValue) => {
    setPair([nextName, nextValue]);
  }, []);
  const handleApply = useCallback(() => {
    onCreate({ [name]: value });
    setIsActive(false);
    setPair(DEFAULT_PAIR);
  }, [name, value, onCreate]);

  if (isActive) {
    return (
      <>
        <Pair
          classes={classes}
          name={name}
          value={value}
          onChange={handleChange}
        />

        <div>
          <Button className={classes?.button} onClick={handleApply}>
            Apply
          </Button>
        </div>
      </>
    );
  }

  return (
    <Button className={classes?.button} onClick={handleActivate}>
      Add
    </Button>
  );
};

PairCreator.displayName = 'ValueObject.PairCreator';
