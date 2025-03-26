import React from 'react';
import SelectBase, { SelectProps } from '@cloudscape-design/components/select';
interface ExtendedSelectProps extends SelectProps {
  /**
   *  ID of the selected option. If you want to clear the selection, use null.
  * @uxpinbind onChange 0.detail.selectedOption
  */
  selectedOption: any;
}
/**
* @uxpindocurl https://cloudscape.design/components/select/
* @uxpindescription Selects enable users to choose a single item from a list of items.
*/
const Select = (props: ExtendedSelectProps) => {

  return (
    <SelectBase
      {...props}

    />
  );
};


export default Select;
