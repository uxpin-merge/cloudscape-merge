import React from "react";
import TabsBase, { TabsProps } from "@cloudscape-design/components/tabs";

/**
 * @uxpindocurl https://cloudscape.design/components/tabs/
 * @uxpindescription A tabbed interface for organizing content.
 */

const Tabs = (props: TabsProps) => {
  // Ensure activeTabId state is always controlled
  const [activeTabId, setActiveTabId] = React.useState<string>(
    props.activeTabId ?? (props.tabs?.[0]?.id || "")
  );

  React.useEffect(() => {
    if (props.activeTabId !== undefined) {
      setActiveTabId(props.activeTabId);
    }
  }, [props.activeTabId]);

  // Handle tab change
  const handleChange: TabsProps["onChange"] = (event) => {
    setActiveTabId(event.detail.activeTabId);
    props.onChange?.(event); // Pass the event to the parent if needed
  };

  return (
    <TabsBase
      {...props}
      activeTabId={activeTabId}
      onChange={handleChange}
    />
  );
};

export default Tabs;
