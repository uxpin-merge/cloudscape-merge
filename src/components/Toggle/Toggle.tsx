import React from 'react';
import ToggleBase, { ToggleProps } from '@cloudscape-design/components/toggle';
/**
* @uxpindocurl https://cloudscape.design/components/toggle/
* @uxpindescription Toggles enable users to turn an option on or off, and can result in an immediate change.
*/
const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(props.checked)
  }, [props]);
  return <ToggleBase
    onChange={({ detail }) =>
      setChecked(detail.checked)
    }
    checked={checked}
  >
    Toggle
  </ToggleBase>
};

export default Toggle;

