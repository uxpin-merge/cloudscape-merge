import React from 'react';

const WizardWrapperItem = (props: { id: string, children?: React.ReactNode }) => {
    return <div>{props.children}</div>;
};

export default WizardWrapperItem;
