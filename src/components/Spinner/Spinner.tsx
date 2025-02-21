import React from 'react';
import SpinnerBase, { SpinnerProps } from '@cloudscape-design/components/spinner';
/**
* @uxpindocurl https://cloudscape.design/components/spinner/
* @uxpindescription A compact, looped animation giving the user feedback that a process is currently running.
*/
const Spinner = (props: SpinnerProps) => {
  return <SpinnerBase {...props} />;
};

export default Spinner;
