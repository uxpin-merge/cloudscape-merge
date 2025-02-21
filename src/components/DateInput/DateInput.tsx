
import React from 'react';
import DateInputBase, { DateInputProps } from '@cloudscape-design/components/date-input';
/**
 * @uxpindocurl https://cloudscape.design/components/date-input/
 * @uxpindescription  A form element in which a user can enter a date value.
 */
const DateInput = (props: DateInputProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return (
    <DateInputBase
      {...props}
      onChange={({ detail }) =>
        setValue(detail.value)
      }
      value={value}
    />
  );
};


export default DateInput;
