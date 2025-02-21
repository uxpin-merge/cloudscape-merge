import React from 'react';
import AlertBase, { AlertProps } from '@cloudscape-design/components/alert';
/**
 * @uxpindocurl https://cloudscape.design/components/alert/
 * @uxpindescription A brief message that provides information or instructs users to take a specific action.
 */
const Alert = (props: AlertProps) => {
  return <AlertBase {...props} />;
};

export default Alert;
