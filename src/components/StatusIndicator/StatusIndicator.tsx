import React from 'react';
import StatusIndicatorBase, { StatusIndicatorProps } from '@cloudscape-design/components/status-indicator';
/**
 * @uxpindocurl https://cloudscape.design/components/status-indicator/
 * @uxpindescription A status indicator communicates the state of a resource—either in its entirety or a particular facet of a resource—in a compact form that is easily embedded in a card, table, list, or header view.
 */
const StatusIndicator = (props: StatusIndicatorProps) => {
  return <StatusIndicatorBase {...props} />;
};

export default StatusIndicator;
