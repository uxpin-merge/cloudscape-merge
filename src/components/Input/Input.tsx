import React from 'react';
import InputBase, { InputProps } from '@cloudscape-design/components/input';
/**
 * @uxpindocurl https://cloudscape.design/components/input/
 * @uxpindescription With the input control, users can input a single line of text.
 */
const Input = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return (
    <InputBase
      {...props}
      onChange={({ detail }) =>
        setValue(detail.value)
      }
      value={value}
    />
  );
};


export default Input;
