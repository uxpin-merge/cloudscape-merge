import React from 'react';
import AppLayoutBase, { AppLayoutProps } from '@cloudscape-design/components/app-layout';
/**
 * @uxpindocurl https://cloudscape.design/components/app-layout/
 * @uxpindescription Provides page structure for productive use cases, which include collapsible side navigation, tools panel, drawers, and split panel.
 */
const AppLayout = (props: AppLayoutProps) => {
  const [isToolsOpen, setIsToolsOpen] = React.useState(props.toolsOpen);
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(props.navigationOpen);
  const [isSplitPanelOpen, setSplitPanelOpen] = React.useState(props.splitPanelOpen);

  React.useEffect(() => {
    setIsToolsOpen(props.toolsOpen)
    setIsNavigationOpen(props.navigationOpen)
    setSplitPanelOpen(props.splitPanelOpen)
  }, [props]);

  return <AppLayoutBase
    {...props}
    navigationOpen={isNavigationOpen}
    onNavigationChange={({ detail }) => setIsNavigationOpen(detail.open)}
    toolsOpen={isToolsOpen}
    onToolsChange={({ detail }) => setIsToolsOpen(detail.open)}
    splitPanelOpen={isSplitPanelOpen}
  />;

};

export default AppLayout;
