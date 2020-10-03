import React, { useCallback, useState } from 'react';

import { Json, JsonObject } from '../../types';
import { ObjectPair } from './ObjectPair';

const DEFAULT_PAIR: [string, Json] = ['', ''];

interface ObjectPairCreatorProps {
  onCreate: (nextPair: JsonObject) => void;
}

export const ObjectPairCreator: React.FC<ObjectPairCreatorProps> = (props) => {
  const { onCreate } = props;

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
        <ObjectPair name={name} value={value} onChange={handleChange} />

        <div>
          <button type="button" onClick={handleApply}>
            Apply
          </button>
        </div>
      </>
    );
  }

  return (
    <button type="button" onClick={handleActivate}>
      Add
    </button>
  );
};

ObjectPairCreator.displayName = 'ObjectPairCreator';
