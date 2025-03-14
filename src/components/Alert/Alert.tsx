import React from "react";
import AlertBase, { AlertProps } from "@cloudscape-design/components/alert";

/**
 * @uxpindocurl https://cloudscape.design/components/alert/
 * @uxpindescription A brief message that provides information or instructs users to take a specific action.
 */

const Alert = (props: AlertProps) => {
  // Ensure visible state is always a boolean
  const [visible, setVisible] = React.useState<boolean>(props.visible ?? true);

  React.useEffect(() => {
    setVisible(props.visible ?? true); // Ensure it's always boolean
  }, [props.visible]);

  // Hide the alert when dismissed
  const handleDismiss = () => {
    setVisible(false);
  };

  // Do not render the Alert if not visible
  if (!visible) return null;

  return (
    <AlertBase
      {...props}
      onDismiss={handleDismiss} // Close alert on clicking X
      visible={visible}
    />
  );
};

export default Alert;
