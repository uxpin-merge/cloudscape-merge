
import React from 'react';
import DateInputBase, { DateInputProps } from '@cloudscape-design/components/date-input';

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
