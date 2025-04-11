import React from 'react';
import ToggleBase, { ToggleProps } from '@cloudscape-design/components/toggle';

interface ExtendedToggleProps extends ToggleProps {
  /**
   *  Value of the input.
  * @uxpinbind onChange 0.detail.checked
  */
  checked: boolean;
}

/**
* @uxpindocurl https://cloudscape.design/components/toggle/
* @uxpindescription Toggles enable users to turn an option on or off, and can result in an immediate change.
*/
const Toggle = (props: ExtendedToggleProps) => {

  return <ToggleBase {...props} />
};

export default Toggle;

