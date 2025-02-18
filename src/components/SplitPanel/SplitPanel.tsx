import React from 'react';
import SplitPanelBase, { SplitPanelProps } from '@cloudscape-design/components/split-panel';
/**
 * @uxpindocurl https://cloudscape.design/components/status-indicator/
 * @uxpindescription NOTE: Must be used inside AppLayoput. A collapsible panel that provides access to secondary information or controls. It is the primary component to implement split view, a pattern to display resource collection with contextual resource details.
 */
const SplitPanel = (props: SplitPanelProps) => {
  return <SplitPanelBase {...props} />;
};

export default SplitPanel;
