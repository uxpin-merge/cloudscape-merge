import * as React from 'react';
import Steps from '../Steps';

export default (
  <Steps
    uxpId="steps-1"
    steps={[
      {
        status: 'success',
        header: 'Success step',
        statusIconAriaLabel: 'Success',
      },
      {
        status: 'warning',
        header: 'Warning step',
        statusIconAriaLabel: 'Warning',
      },
      {
        status: 'stopped',
        header: 'Stopped step',
        statusIconAriaLabel: 'Stopped',
      },
    ]}
  />
);
