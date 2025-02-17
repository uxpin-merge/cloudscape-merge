import React from 'react';
import PopoverBase, { PopoverProps } from '@cloudscape-design/components/popover';

const Popover = (props: PopoverProps) => {
  return <PopoverBase {...props}>{props.children}</PopoverBase>;
};

export default Popover;
