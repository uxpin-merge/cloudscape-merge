import React from 'react';
import ContainerBase, { ContainerProps } from '@cloudscape-design/components/container';
/**
 * @uxpindocurl https://cloudscape.design/components/container/
 * @uxpindescription With the container, you can present a group of pieces of content, indicating that the items are related. For example, a table is a type of container.
 */
const Container = (props: ContainerProps) => {
  return <ContainerBase {...props} />;
};

export default Container;
