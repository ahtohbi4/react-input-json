import React, { useCallback, useMemo } from 'react';
import { Level } from './Level';

import { ILevel } from './types';

import './styles.css';

interface PairProps {
  name: string;
  value: ILevel | boolean | string | number;
  onChange: (value?: ILevel | boolean | string | number) => void;
  onNameChange: (name: string) => void;
}

export const Pair: React.FC<PairProps> = (props) => {
  const { name, value, onChange, onNameChange } = props;
  const type = useMemo(() => {
    if (['boolean', 'number', 'string'].includes(typeof value)) {
      return typeof value;
    }

    if (value && typeof value === 'object') {
      return Array.isArray(value) ? 'array' : 'object';
    }

    return 'string';
  }, [value]);
  const handleNameChange = useCallback(
    ({ target: { value } }) => {
      onNameChange(value);
    },
    [onNameChange],
  );
  const handleValueChange = useCallback(
    ({ target: { value: newValue } }) => {
      onChange({ [name]: newValue });
    },
    [name, onChange],
  );
  const handleTypeChange = useCallback(
    ({ target: { value: type } }) => {
      if (type === 'string') {
        onChange({ [name]: typeof value === 'number' ? String(value) : '' });
      } else if (type === 'number') {
        onChange({
          [name]: typeof value === 'string' ? parseInt(value, 10) : 0,
        });
      } else if (type === 'object') {
        onChange({ [name]: {} });
      }
    },
    [name, value, onChange],
  );

  return (
    <div className="input-json__level-item">
      <dt className="input-json__key-container">
        <input
          className="input-json__input"
          placeholder="key"
          value={name}
          onChange={handleNameChange}
        />
      </dt>

      <dd className="input-json__value-container">
        <select
          className="input-json__select"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="string">S</option>
          <option value="number">N</option>
          <option value="boolean">B</option>
          <option value="array">A</option>
          <option value="object">O</option>
        </select>

        {['array', 'object'].includes(type) ? (
          <Level
            value={value}
            onChange={(value) => onChange({ [name]: value })}
          />
        ) : (
          <input
            className="input-json__input"
            placeholder="value"
            value={value}
            onChange={handleValueChange}
          />
        )}
      </dd>
    </div>
  );
};

Pair.displayName = 'Pair';
