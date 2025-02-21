import React from 'react';
import BoxBase, { BoxProps } from '@cloudscape-design/components/box';
/**
 * @uxpindocurl https://cloudscape.design/components/box/
 * @uxpindescription With the box component, you can display and style basic elements and containers in compliance with Cloudscape's typography and spacing strategy.
 */
const Box = (props: BoxProps) => {
  return <BoxBase {...props} />;
};

export default Box;
