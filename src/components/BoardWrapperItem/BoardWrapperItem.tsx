import React from 'react';

const BoardWrapperItem = (props: { id: string, children?: React.ReactNode }) => {
    return <div>{props.children}</div>;
};

export default BoardWrapperItem;
