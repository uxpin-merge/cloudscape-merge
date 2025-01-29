import * as React from 'react';
import AnchorNavigation from '../AnchorNavigation';

export default (
  <AnchorNavigation
    uxpId="anchor-navigation-1"
    activeHref="#playground"
    anchors={[
      {
        text: 'Section 1',
        href: '#playground',
        level: 1,
      },
      {
        text: 'Section 2',
        href: '#section2',
        level: 1,
      },
      {
        text: 'Section 3',
        href: '#section3',
        level: 1,
      },
      { text: 'Section 4', href: '#section4', level: 1 },
    ]}
  />
);
