
import React from 'react';
import DatePickerBase, { DatePickerProps } from '@cloudscape-design/components/date-picker';

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
