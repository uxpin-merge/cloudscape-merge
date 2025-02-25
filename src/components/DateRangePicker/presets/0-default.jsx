import * as React from 'react';
import DateRangePicker from '../DateRangePicker';

export default (
  <DateRangePicker
    uxpId="date-range-picker-1"
    placeholder="Filter by a date and time range"
    relativeOptions={[
      {
        key: 'previous-5-minutes',
        amount: 5,
        unit: 'minute',
        type: 'relative',
      },
      {
        key: 'previous-30-minutes',
        amount: 30,
        unit: 'minute',
        type: 'relative',
      },
      {
        key: 'previous-1-hour',
        amount: 1,
        unit: 'hour',
        type: 'relative',
      },
      {
        key: 'previous-6-hours',
        amount: 6,
        unit: 'hour',
        type: 'relative',
      },
    ]}
  />
);
