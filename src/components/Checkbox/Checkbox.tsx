import React from 'react';
import CheckboxBase, { CheckboxProps } from '@cloudscape-design/components/checkbox';
/**
 * @uxpindocurl https://cloudscape.design/components/checkbox/
 * @uxpindescription Checkboxes enable users to turn an option on or off.
 */
const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = React.useState(props.checked);
  React.useEffect(() => {
    setChecked(props.checked)
  }, [props]); // Only re-run the effect if value prop changes

  return (
    <CheckboxBase
      {...props}
      onChange={({ detail }) =>
        setChecked(detail.checked)
      }
      checked={checked}
    />
  );
};

export default Checkbox;
