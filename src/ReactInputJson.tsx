import React from 'react';

import { Value } from './components';
import { Json, ControlledFieldProps } from './types';

interface InputJsonProps extends ControlledFieldProps<Json> {
  id?: string;
}

export const ReactInputJson: React.FC<InputJsonProps> = (props) => {
  return (
    <span className="rij-container">
      <Value {...props} />
    </span>
  );
};

ReactInputJson.displayName = 'ReactInputJson';
