import * as React from 'react';
import SegmentedControl from '../SegmentedControl';

export default (
  <SegmentedControl
    options={[
      {
        text: 'Segment 1',
        id: 'seg-1',
      },
      {
        text: 'Segment 2',
        id: 'seg-2',
      },
      {
        text: 'Segment 3',
        id: 'seg-3',
      },
    ]}
    selectedId="seg-1"
    uxpId="segmented-control-1"
  />
);
