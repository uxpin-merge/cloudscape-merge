import React from 'react';
import MultiselectBase, { MultiselectProps } from '@cloudscape-design/components/multiselect';

interface MultiselectPropsProps extends MultiselectProps {
  /**
   *  Specifies the currently selected options. Provide an empty array to clear the selection.
  * @uxpinbind onChange 0.detail.selectedOptions
  */
  selectedOptions: any;
}

/**
 * @uxpindocurl https://cloudscape.design/components/multiselect/
 * @uxpindescription Multiselects enable users to choose multiple items from a list of options.
 */
const Multiselect = (props: MultiselectPropsProps) => {

  return (
    <MultiselectBase
      {...props}
    />
  );
};

export default Multiselect;
