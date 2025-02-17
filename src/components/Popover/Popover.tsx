import React from 'react';
import PopoverBase, { PopoverProps } from '@cloudscape-design/components/popover';
/**
 * @uxpindocurl https://cloudscape.design/components/popover/
 * @uxpindescription Provides on-demand contextual information about elements or events.
 */
const Popover = (props: PopoverProps) => {
  return <PopoverBase {...props}>{props.children}</PopoverBase>;
};

export default Popover;
