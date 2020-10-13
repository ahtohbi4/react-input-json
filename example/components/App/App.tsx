import React, { useCallback, useState } from 'react';
import { ReactInputJson } from '../../../src';

import { Console } from '../Console';

export const App = () => {
  const [value, setValue] = useState({
    foo: [{ id: 24234, projects: [234, 43, 12312] }],
  });
  const handleChange = useCallback((nextValue) => {
    setValue(nextValue);
  }, []);

  return (
    <>
      <h1>Example</h1>

      <h2>ReactInputJson</h2>

      <label htmlFor="config">Config:</label>

      <ReactInputJson id="config" value={value} onChange={handleChange} />

      <h2>Result value</h2>

      <Console>{JSON.stringify(value, null, '  ')}</Console>
    </>
  );
};
