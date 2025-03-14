import React from 'react';
import TabsBase, { TabsProps } from '@cloudscape-design/components/tabs';
/**
 * @uxpindocurl https://cloudscape.design/components/tabs/
 * @uxpindescription With tabs, users can switch between different categories of information in the same view.
 */
const Tabs = (props: TabsProps) => {
  const [activeTabId, setActiveTabId] = React.useState(
    props.activeTabId
  );
  React.useEffect(() => {
    setActiveTabId(props.activeTabId)
  }, [props.activeTabId]); // Only re-run the effect if value prop changes

  return (<div>
    test: {activeTabId}<TabsBase {...props}
      onChange={({ detail }) =>
        setActiveTabId(detail.activeTabId)
      }
      activeTabId={activeTabId}
    /></div>);
};

export default Tabs;
