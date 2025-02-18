import * as React from 'react';
import Tiles from '../Tiles';

export default (
  <Tiles
    items={[
      {
        label: 'Item 1 label',
        value: 'item1',
      },
      {
        label: 'Item 2 label',
        value: 'item2',
      },
      {
        label: 'Item 3 label',
        value: 'item3',
      },
    ]}
    value="item1"
    uxpId="tiles-1"
  />
);
