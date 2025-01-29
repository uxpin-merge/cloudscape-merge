import * as React from 'react';
import ButtonGroup from '../ButtonGroup';
import StatusIndicator from '../../StatusIndicator/StatusIndicator';

export default (
  <ButtonGroup
    items={[
      {
        type: 'icon-button',
        id: 'copy',
        iconName: 'copy',
        text: 'Copy',
        popoverFeedback: (
          <StatusIndicator type="success" uxpId="status-indicator-1">
            Message copied
          </StatusIndicator>
        ),
      },
      {
        type: 'icon-button',
        id: 'add',
        iconName: 'add-plus',
        text: 'Add',
      },
      {
        type: 'icon-button',
        id: 'remove',
        iconName: 'remove',
        text: 'Remove',
      },
    ]}
    variant="icon"
    uxpId="button-group-1"
  />
);
