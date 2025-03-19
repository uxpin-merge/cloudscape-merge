import React from 'react';
import CheckboxBase, { CheckboxProps } from '@cloudscape-design/components/checkbox';
/**
 * @uxpindocurl https://cloudscape.design/components/checkbox/
 * @uxpindescription Checkboxes enable users to turn an option on or off.
 */
const Checkbox = ({ checked = false, ...props}: CheckboxProps) => {
  return (
    <CheckboxBase
      {...props}
      onChange={(e) => {
        // uxpinOnChange(prevValue, nextValue, propertyName) property injected by uxpin
        // @ts-ignore
        props.uxpinOnChange(checked, e.detail.checked, 'checked');
        if (props.onChange) {
          props.onChange(e);
        }
      }
      }
      checked={checked}
    />
  );
};

export default Checkbox;
