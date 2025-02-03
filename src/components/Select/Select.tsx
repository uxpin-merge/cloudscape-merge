import React from 'react';
import SelectBase, { SelectProps } from '@cloudscape-design/components/select';

const Select = (props: SelectProps) => {
  const [selectedOption, setSelectedOption] = React.useState(props.selectedOption);
  React.useEffect(() => {
    setSelectedOption(props.selectedOption)
  }, [props]);

  return (
    <SelectBase
      {...props}
      onChange={({ detail }) =>
        setSelectedOption(detail.selectedOption)
      }
      selectedOption={selectedOption}
    />
  );
};


export default Select;
