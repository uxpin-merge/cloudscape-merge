import * as React from 'react';
import Header from '../Header';
import Button from '../../Button/Button';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';

export default (
  <Header
    uxpId="header-1"
    variant="h1"
    actions={
      <SpaceBetween direction="horizontal" size="xs" uxpId="header-space-between-1">
        <Button uxpId="header-button-1">Secondary button</Button>
        <Button variant="primary" uxpId="header-button-2">
          Primary button
        </Button>
      </SpaceBetween>
    }
  >
    Page title
  </Header>
);
