import * as React from 'react';
import KeyValuePairs from '../KeyValuePairs';
import Link from '../../Link/Link';
import CopyToClipboard from '../../CopyToClipboard/CopyToClipboard';
import StatusIndicator from '../../StatusIndicator/StatusIndicator';
import ProgressBar from '../../ProgressBar/ProgressBar';

export default (
  <KeyValuePairs
    uxpId="key-value-pair-1"
    columns={3}
    items={[
      {
        label: 'Distribution ID',
        value: 'E1WG1ZNPRXT0D4',
        info: (
          <Link variant="info" href="#" uxpId="kvp-link-1">
            Info
          </Link>
        ),
      },
      {
        label: 'ARN',
        value: (
          <CopyToClipboard
            copyButtonAriaLabel="Copy ARN"
            copyErrorText="ARN failed to copy"
            copySuccessText="ARN copied"
            textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4"
            variant="inline"
            uxpId="kvp-copy-to-clipboard-1"
          />
        ),
      },
      {
        label: 'Status',
        value: <StatusIndicator uxpId="kvp-status-indicator-1">Available</StatusIndicator>,
      },
      {
        label: 'SSL Certificate',
        id: 'ssl-certificate-id',
        value: (
          <ProgressBar
            value={30}
            additionalInfo="Additional information"
            description="Progress bar description"
            ariaLabelledby="ssl-certificate-id"
            uxpId="kvp-progress-indicator-1"
          />
        ),
      },
      {
        label: 'Price class',
        value: 'Use only US, Canada, Europe',
      },
      {
        label: 'CNAMEs',
        value: (
          <Link external={true} href="#" uxpId="kvp-link-2">
            abc.service23G24.xyz
          </Link>
        ),
      },
    ]}
  />
);
