import React from 'react';
import CalendarBase, { CalendarProps } from '@cloudscape-design/components/calendar';

const Calendar = (props: CalendarProps) => {
  const [value, setValue] = React.useState("");
  return (
    <CalendarBase
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
  );
};

export default Calendar;
