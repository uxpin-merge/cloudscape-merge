import React from 'react';
import RadioGroupBase, { RadioGroupProps } from '@cloudscape-design/components/radio-group';
/**
 * @uxpindocurl https://cloudscape.design/components/radio-group/
 * @uxpindescription Radio group enable users to choose one option from a predefined set.
 */
const RadioGroup = (props: RadioGroupProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return <RadioGroupBase {...props} onChange={({ detail }) => setValue(detail.value)}
    value={value}
  />;
};

export default RadioGroup;
