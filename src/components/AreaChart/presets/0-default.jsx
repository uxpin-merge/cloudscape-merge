import * as React from 'react';
import AreaChart from '../AreaChart';

export default (
  <AreaChart
    uxpId="areaChart-1"
    title="Example Area Chart"
    series={[
      {
        title: 'Series 1',
        type: 'area',
        data: [
          { x: '2024-01-01', y: 10 },
          { x: '2024-02-01', y: 15 },
          { x: '2024-03-01', y: 8 },
        ],
      },
      {
        title: 'Series 2',
        type: 'area',
        data: [
          { x: '2024-01-01', y: 5 },
          { x: '2024-02-01', y: 12 },
          { x: '2024-03-01', y: 7 },
        ],
      },
    ]}
    xScaleType="time"
    height={300}
  />
);
