import React from 'react';
import ProgressBarBase, { ProgressBarProps } from '@cloudscape-design/components/progress-bar';
/**
 * @uxpindocurl https://cloudscape.design/components/progress-bar/
 * @uxpindescription Informs the user about the progress of an operation with a known duration.
 */
const ProgressBar = (props: ProgressBarProps) => {
  return <ProgressBarBase {...props} />;
};

export default ProgressBar;
