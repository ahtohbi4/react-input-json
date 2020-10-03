import React, { useCallback, useState } from 'react';

import { Json } from '../../types';
import { Value } from '../';

const DEFAULT_VALUE: Json = '';

interface ArrayItemCreatorProps {
  onCreate: (nextValue: Json) => void;
}

export const ArrayItemCreator: React.FC<ArrayItemCreatorProps> = (props) => {
  const { onCreate } = props;

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

  if (isActive) {
    return (
      <div className="rij-value-array__item-creator-form">
        <Value value={value} onChange={handleChange} />

        <div>
          <button type="button" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    );
  }

  return (
    <button type="button" onClick={handleActivate}>
      Add
    </button>
  );
};

ArrayItemCreator.displayName = 'ArrayItemCreator';
