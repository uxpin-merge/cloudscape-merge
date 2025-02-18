import * as React from 'react';
import TokenGroup from '../TokenGroup';

export default (
  <TokenGroup
    items={[
      {
        label: 'Item 1',
        dismissLabel: 'Remove item 1',
      },
      {
        label: 'Item 2',
        dismissLabel: 'Remove item 2',
      },
      {
        label: 'Item 3',
        dismissLabel: 'Remove item 3',
      },
    ]}
    uxpId="token-group-1"
  />
);
