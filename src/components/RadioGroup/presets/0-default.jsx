import * as React from 'react';
import RadioGroup from '../RadioGroup';

export default (
  <RadioGroup
    items={[
      {
        value: 'first',
        label: 'First choice',
      },
      {
        value: 'second',
        label: 'Second choice',
      },
      {
        value: 'third',
        label: 'Third choice',
      },
    ]}
    value="second"
    uxpId="second"
  />
);
