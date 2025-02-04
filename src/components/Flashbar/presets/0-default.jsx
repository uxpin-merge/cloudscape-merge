import * as React from 'react';
import Flashbar from '../Flashbar';

export default (
  <Flashbar
    uxpId="flashbar-1"
    items={[
      {
        type: 'info',
        dismissible: true,
        content: 'This is an info flash message.',
        id: 'message_1',
      },
    ]}
  />
);
