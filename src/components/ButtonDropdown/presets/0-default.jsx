import * as React from 'react';
import ButtonDropdown from '../ButtonDropdown';

export default (
  <ButtonDropdown
    items={[
      { text: 'Delete', id: 'rm', disabled: false },
      { text: 'Move', id: 'mv', disabled: false },
      { text: 'Rename', id: 'rn', disabled: true },
      {
        id: 'view',
        text: 'View metrics',
        href: 'https://example.com',
        external: true,
        externalIconAriaLabel: '(opens in new tab)',
      },
    ]}
    uxpId="button-dropdown-group-1"
  >
    Short
  </ButtonDropdown>
);
