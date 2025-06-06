import * as React from 'react';
import AreaChart from '../AreaChart';

export default (
  <AreaChart
    uxpId="areaChart-1"
    series={[
      {
        title: 'Network 1',
        type: 'area',
        data: [
          { x: 1601013600000, y: 114489 },
          { x: 1601014500000, y: 136935 },
          { x: 1601015400000, y: 141026 },
          { x: 1601016300000, y: 123288 },
          { x: 1601017200000, y: 121956 },
          { x: 1601018100000, y: 119868 },
          { x: 1601019000000, y: 132326 },
          { x: 1601019900000, y: 126879 },
          { x: 1601020800000, y: 138543 },
          { x: 1601021700000, y: 144309 },
          { x: 1601022600000, y: 121118 },
          { x: 1601023500000, y: 113430 },
          { x: 1601024400000, y: 135911 },
          { x: 1601025300000, y: 113126 },
          { x: 1601026200000, y: 119538 },
          { x: 1601027100000, y: 124338 },
          { x: 1601028000000, y: 133884 },
          { x: 1601028900000, y: 135473 },
          { x: 1601029800000, y: 131187 },
          { x: 1601030700000, y: 136176 },
          { x: 1601031600000, y: 144422 },
          { x: 1601032500000, y: 115392 },
          { x: 1601033400000, y: 139307 },
          { x: 1601034300000, y: 128517 },
          { x: 1601035200000, y: 107160 },
          { x: 1601036100000, y: 110283 },
          { x: 1601037000000, y: 134513 },
          { x: 1601037900000, y: 111311 },
          { x: 1601038800000, y: 142686 },
          { x: 1601039700000, y: 130652 },
          { x: 1601040600000, y: 149418 },
          { x: 1601041500000, y: 121923 },
        ],
      },
      {
        title: 'Network 2',
        type: 'area',
        data: [
          { x: 1601013600000, y: 10413 },
          { x: 1601014500000, y: 26582 },
          { x: 1601015400000, y: 45593 },
          { x: 1601016300000, y: 65918 },
          { x: 1601017200000, y: 76223 },
          { x: 1601018100000, y: 62385 },
          { x: 1601019000000, y: 83330 },
          { x: 1601019900000, y: 127209 },
          { x: 1601020800000, y: 104802 },
          { x: 1601021700000, y: 145899 },
          { x: 1601022600000, y: 121375 },
          { x: 1601023500000, y: 112968 },
          { x: 1601024400000, y: 145263 },
          { x: 1601025300000, y: 139562 },
          { x: 1601026200000, y: 128343 },
          { x: 1601027100000, y: 122774 },
          { x: 1601028000000, y: 145396 },
          { x: 1601028900000, y: 176509 },
          { x: 1601029800000, y: 201006 },
          { x: 1601030700000, y: 196538 },
          { x: 1601031600000, y: 213773 },
          { x: 1601032500000, y: 205076 },
          { x: 1601033400000, y: 216369 },
          { x: 1601034300000, y: 159386 },
          { x: 1601035200000, y: 238852 },
          { x: 1601036100000, y: 207500 },
          { x: 1601037000000, y: 187110 },
          { x: 1601037900000, y: 314165 },
          { x: 1601038800000, y: 165653 },
          { x: 1601039700000, y: 175584 },
          { x: 1601040600000, y: 230042 },
          { x: 1601041500000, y: 293879 },
        ],
      },
    ]}
    xDomain={[1601013600000, 1601019000000]}
    yDomain={[0, 500000]}
    height={300}
    xTitle="Time (UTC)"
    yTitle="Bytes transferred"
    hideFilter
    xScaleType="time"
  />
);
