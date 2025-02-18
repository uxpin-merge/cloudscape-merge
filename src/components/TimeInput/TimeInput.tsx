import React from 'react';
import TimeInputBase, { TimeInputProps } from '@cloudscape-design/components/time-input';
/**
* @uxpindocurl https://cloudscape.design/components/time-input/
* @uxpindescription A form element in which a user can enter an absolute time value.
*/
const TimeInput = (props: TimeInputProps) => {
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);
  return <TimeInputBase {...props}
    onChange={({ detail }) => setValue(detail.value)}
    value={value}
  />;
};

export default TimeInput;
