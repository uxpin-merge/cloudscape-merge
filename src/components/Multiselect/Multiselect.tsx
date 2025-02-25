import React from 'react';
import MultiselectBase, { MultiselectProps } from '@cloudscape-design/components/multiselect';
/**
 * @uxpindocurl https://cloudscape.design/components/multiselect/
 * @uxpindescription Multiselects enable users to choose multiple items from a list of options.
 */
const Multiselect = (props: MultiselectProps) => {
  //Ensure `selectedOptions` is mutable by creating a copy
  const [selectedOptions, setSelectedOptions] = React.useState<MultiselectProps.Option[]>([...(props.selectedOptions ?? [])]);

  React.useEffect(() => {
    setSelectedOptions([...(props.selectedOptions ?? [])])
  }, [props]);

  return (
    <MultiselectBase
      {...props}
      selectedOptions={selectedOptions}
      onChange={({ detail }) => setSelectedOptions([...detail.selectedOptions])} //Convert to mutable array
    />
  );
};

export default Multiselect;
