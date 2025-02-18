import React from 'react';
import ToggleButtonBase, { ToggleButtonProps } from '@cloudscape-design/components/toggle-button';
/**
* @uxpindocurl https://cloudscape.design/components/toggle-button/
* @uxpindescription Enables user to toggle between two actions / states.
*/
const ToggleButton = (props: ToggleButtonProps) => {
  const [pressed, setPressed] = React.useState(props.pressed);
  React.useEffect(() => {
    setPressed(props.pressed)
  }, [props]);

  return <ToggleButtonBase {...props}
    onChange={({ detail }) =>
      setPressed(detail.pressed)
    }
    pressed={pressed}

  />;
};

export default ToggleButton;
