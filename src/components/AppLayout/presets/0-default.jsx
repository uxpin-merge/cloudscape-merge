import * as React from 'react';
import AppLayout from '../AppLayout';
import Header from '../../Header/Header';
import Button from '../../Button/Button';
import HelpPanel from '../../HelpPanel/HelpPanel';
import SideNavigation from '../../SideNavigation/SideNavigation';
import SplitPanel from '../../SplitPanel/SplitPanel';
import Flashbar from '../../Flashbar/Flashbar';
import BreadcrumbGroup from '../../BreadcrumbGroup/BreadcrumbGroup';
import ContentLayout from '../../ContentLayout/ContentLayout';

export default (
  <AppLayout
    uxpId="app-layout-1"
    navigationOpen={true}
    toolsOpen={true}
    content={
      <ContentLayout uxpId="app-layout-content-layout-1" defaultPadding>
        <Header
          uxpId="app-layout-header-1"
          variant="h1"
          description="Description"
          actions={<Button uxpId="app-layout-button-1">Button</Button>}
        >
          Page title
        </Header>
      </ContentLayout>
    }
    tools={
      <HelpPanel header="Overview" uxpId="app-layout-help-panel-1">
        Help content
      </HelpPanel>
    }
    splitPanel={
      <SplitPanel header="Split panel header" uxpId="app-layout-split-panel-1">
        Split panel content
      </SplitPanel>
    }
    notifications={
      <Flashbar
        uxpId="app-layout-flashbar-1"
        items={[
          {
            type: 'info',
            dismissible: true,
            content: 'This is an info flash message.',
            id: 'message_1',
          },
        ]}
      />
    }
    navigation={
      <SideNavigation
        header={{
          href: '#',
          text: 'Service name',
        }}
        items={[{ type: 'link', text: `Page #1`, href: `#` }]}
        uxpId="app-layout-side-navigation-1"
      />
    }
    breadcrumbs={
      <BreadcrumbGroup
        uxpId="app-layout-breadcrumb-group-1"
        items={[
          {
            text: 'System',
            href: '#',
          },
          {
            text: 'Components',
            href: '#components',
          },
          {
            text: 'Breadcrumb group',
            href: '#components/breadcrumb-group',
          },
        ]}
      />
    }
  />
);
