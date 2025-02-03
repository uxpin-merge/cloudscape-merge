import React from 'react';
import InputBase, { InputProps } from '@cloudscape-design/components/input';

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
