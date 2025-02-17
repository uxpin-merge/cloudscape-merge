import * as React from 'react';
import Popover from '../Popover';
import StatusIndicator from '../../StatusIndicator/StatusIndicator';
import Button from '../../Button/Button';

export default (
  <Popover
    uxpId="popover-1"
    position="top"
    triggerType="custom"
    content={
      <StatusIndicator uxpId="popover-status-indicator-1" type="success">
        Code snippet copied
      </StatusIndicator>
    }
  >
    <Button uxpId="popover-button-1" iconName="copy">
      Copy
    </Button>
  </Popover>
);
