import React from 'react';
import ButtonDropdownBase, { ButtonDropdownProps } from '@cloudscape-design/components/button-dropdown';


interface ExtendedButtonDropdownProps extends ButtonDropdownProps {
  /**
   *
   *
   * @uxpinbind onItemClick 0.detail.id
   */
  selectedItemId?:string;
}


/**
 * @uxpindocurl https://cloudscape.design/components/button-dropdown/
 * @uxpindescription With a button dropdown, you can group a set of actions under one button.
 */
const ButtonDropdown = ({ selectedItemId, ...otherProps}: ExtendedButtonDropdownProps) => {
  return <ButtonDropdownBase {...otherProps} />;
};

export default ButtonDropdown;
