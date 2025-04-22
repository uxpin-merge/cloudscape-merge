import * as React from 'react';
import BoardWrapper from '../BoardWrapper';
import BoardWrapperItem from '../../BoardWrapperItem/BoardWrapperItem';

export default (
  <BoardWrapper
    uxpId="board-wrapper-1"
    empty="This board is empty"
    items={[
      {
        id: '1',
        rowSpan: 1,
        columnSpan: 2,
        data: {
          title: 'Demo 1',
        },
      },
      {
        id: '2',
        rowSpan: 1,
        columnSpan: 2,
        data: {
          title: 'Demo 2',
        },
      },
      {
        id: '3',
        rowSpan: 1,
        columnSpan: 3,
        data: {
          title: 'Demo 3',
        },
      },
    ]}
  >
    <BoardWrapperItem uxpId="board-wrapper-item-1" id="1">First Item</BoardWrapperItem>
    <BoardWrapperItem uxpId="board-wrapper-item-2" id="2">Second Item</BoardWrapperItem>
    <BoardWrapperItem uxpId="board-wrapper-item-3" id="3">Third Item</BoardWrapperItem>
  </BoardWrapper>
);
