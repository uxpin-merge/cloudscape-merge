import * as React from 'react';
import KeyValuePairs from '../KeyValuePairs';

export default (
  <KeyValuePairs
    uxpId="key-value-pair-1"
    columns={3}
    items={[
      {
        label: 'Distribution ID',
        value: 'E1WG1ZNPRXT0D4',
      },
      {
        label: 'ARN',
        value: 'arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4',
      },
      {
        label: 'Status',
        value: 'Available',
      },
      {
        label: 'SSL Certificate',
        id: 'ssl-certificate-id',
        value: 30,
      },
      {
        label: 'Price class',
        value: 'Use only US, Canada, Europe',
      },
      {
        label: 'CNAMEs',
        value: 'abc.service23G24.xyz',
      },
    ]}
  />
);
