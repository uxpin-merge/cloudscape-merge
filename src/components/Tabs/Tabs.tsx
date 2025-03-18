import React from "react";
import TabsBase, { TabsProps } from "@cloudscape-design/components/tabs";

/**
 * @uxpindocurl https://cloudscape.design/components/tabs/
 * @uxpindescription A tabbed interface for organizing content.
 */

interface ExtendedTabsProps extends TabsProps {
  /**
  * The ID of the currently active tab. This prop controls which tab is selected. If not provided, defaults to the first tab's ID.
  * @uxpinbind onChange 0.detail.activeTabId
  */
  activeTabId?: string;

  /**
   * Callback fired when the active tab changes.
   * @param event - The event object containing details about the tab change.
   * @param event.detail.activeTabId - The ID of the newly selected tab.
   */
  onChange?: (event: { detail: { activeTabId: string } }) => void;
}

const Tabs = (props: ExtendedTabsProps) => {
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

export default Tabs
