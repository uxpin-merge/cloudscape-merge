import * as React from 'react';
import BreadcrumbGroup from '../BreadcrumbGroup';

export default (
  <BreadcrumbGroup
    items={[
      { text: 'System', href: '#' },
      { text: 'Components', href: '#components' },
      {
        text: 'Breadcrumb group',
        href: '#components/breadcrumb-group',
      },
    ]}
    ariaLabel="Breadcrumbs"
    uxpId="breadcrumb-group-1"
  ></BreadcrumbGroup>
);
