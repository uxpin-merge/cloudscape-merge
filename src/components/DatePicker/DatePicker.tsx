
import React from 'react';
import DatePickerBase, { DatePickerProps } from '@cloudscape-design/components/date-picker';
/**
 * @uxpindocurl https://cloudscape.design/components/date-picker/
 * @uxpindescription  With the date picker, users can enter or choose a date value.
 */
const DatePicker = (props: DatePickerProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return (
    <DatePickerBase
      {...props}
      onChange={({ detail }) =>
        setValue(detail.value)
      }
      value={value}
    />
  );
};


export default DatePicker;
