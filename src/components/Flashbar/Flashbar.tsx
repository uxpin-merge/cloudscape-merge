import React from 'react';
import FlashbarBase, { FlashbarProps } from '@cloudscape-design/components/flashbar';
/**
 * @uxpindocurl https://cloudscape.design/components/flashbar/
 * @uxpindescription Displays one or more page-level flash notifications to communicate the status of a user’s action, such as success, failed, and so on.
 */
const Flashbar = (props: FlashbarProps) => {
  return <FlashbarBase {...props} />;
};

export default Flashbar;
