import * as React from 'react';
import SideNavigation from '../SideNavigation';
import Badge from '../../Badge/Badge';

export default (
  <SideNavigation
    items={[
      {
        type: 'link',
        text: 'Page 1',
        href: '#/page1',
      },
      {
        type: 'link',
        text: 'Page 2',
        href: '#/page2',
      },
      {
        type: 'link',
        text: 'Page 3',
        href: '#/page3',
      },
      {
        type: 'link',
        text: 'Page 4',
        href: '#/page4',
      },
      {
        type: 'divider',
      },
      {
        type: 'link',
        text: 'Notifications',
        href: '#/notifications',
        info: (
          <Badge color="red" uxpId="side-navigation-badge-1">
            23
          </Badge>
        ),
      },
      {
        type: 'link',
        text: 'Documentation',
        href: 'https://example.com',
        external: true,
      },
    ]}
    header={{
      href: '#/',
      text: 'Service name',
    }}
    activeHref="#/page1"
    uxpId="side-navigation-1"
  />
);
