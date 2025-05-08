import React from 'react';
import { BoardProps } from '@cloudscape-design/board-components/board';
import Board from '../Board/Board';

interface ItemType {
    id: string;
    rowSpan?: number;
    columnSpan?: number;
    data: {
        title: string;
    };
}

interface BoardItemType {
    id: string;
    rowSpan?: number;
    columnSpan?: number;
    data: {
        title: string;
        content: React.ReactElement;
    };
}

const BoardWrapper = ({ items, children, ...otherProps}: BoardProps & { items?: ItemType[], children?: React.ReactNode }) => {
    const contentMap = (React.Children.toArray(children)
      .filter(child => React.isValidElement(child) && child.props.id) as React.ReactElement[])
      .reduce((acc:{ [key:string]: React.ReactElement}, child: React.ReactElement) => {
          acc[child.props.id as string] = child;
          return acc;
      }, {});

    const transformedItems = items.map(item => ({
        ...item,
        data: {
            ...item.data,
            content: contentMap[item.id] || null
        }
    })) as BoardItemType[];

    return <Board {...otherProps} items={transformedItems} />;
};

export default BoardWrapper;
