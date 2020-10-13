import React from 'react';

import { Root, Value } from './components';
import { Json, ClassNames, ControlledFieldProps } from './types';

interface ReactInputJsonProps extends ControlledFieldProps<Json> {
  classes?: ClassNames;
  id?: string;
}

export const ReactInputJson: React.FC<ReactInputJsonProps> = (props) => {
  const { classes } = props;

  return (
    <Root className={classes?.root}>
      <Value {...props} />
    </Root>
  );
};

ReactInputJson.displayName = 'ReactInputJson';
