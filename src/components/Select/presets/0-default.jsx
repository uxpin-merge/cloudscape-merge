import * as React from 'react';
import Select from '../Select';

export default (
  <Select
    options={[
      {
        label: 'Option 1',
        value: '1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
      {
        label: 'Option 3',
        value: '3',
      },
      {
        label: 'Option 4',
        value: '4',
      },
      {
        label: 'Option 5',
        value: '5',
      },
    ]}
    placeholder="Select an Option"
    uxpId="select-1"
  />
);
