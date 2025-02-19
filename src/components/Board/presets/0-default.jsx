import * as React from 'react';
import Board from '../Board';

export default (
  <Board
    uxpId="board-1"
    empty="This board is empty"
    items={[
      {
        id: '1',
        rowSpan: 1,
        columnSpan: 2,
        data: {
          title: 'Demo 1',
          content: 'First item',
        },
      },
      {
        id: '2',
        rowSpan: 1,
        columnSpan: 2,
        data: {
          title: 'Demo 2',
          content: 'Second item',
        },
      },
      {
        id: '3',
        rowSpan: 1,
        columnSpan: 3,
        data: {
          title: 'Demo 3',
          content: 'Third item',
        },
      },
    ]}
  />
);
