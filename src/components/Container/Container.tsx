import React from 'react';
import ContainerBase, { ContainerProps } from '@cloudscape-design/components/container';
/**
 * @uxpindocurl https://cloudscape.design/components/container/
 * @uxpindescription With the container, you can present a group of pieces of content, indicating that the items are related. For example, a table is a type of container.
 */
const Container = (props: ContainerProps) => {
  return <div>
    <style>
      {`
      .custom-container {
        padding: 100px;
        border: 1px solid #ff0000 !important;
      }
    `}
    </style><ContainerBase {...props} /></div>;
};

export default Container;
