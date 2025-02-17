import * as React from 'react';
import Tabs from '../Tabs';

export default (
  <Tabs
    tabs={[
      {
        label: 'First tab label',
        id: 'first',
        content: 'First tab content area',
      },
      {
        label: 'Second tab label',
        id: 'second',
        content: 'Second tab content area',
      },
      {
        label: 'Third tab label',
        id: 'third',
        content: 'Third tab content area',
        disabled: true,
      },
    ]}
    uxpId="tabs-1"
  />
);
