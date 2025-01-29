import * as React from 'react';
import HelpPanel from '../HelpPanel';
import Header from '../../Header/Header';

export default (
  <HelpPanel
    uxpId="help-panel-1"
    footer="Help panel footer"
    header={
      <Header variant="h2" uxpId="help-panel-header-1">
        Help Panel Header
      </Header>
    }
  >
    Help panel content
  </HelpPanel>
);
