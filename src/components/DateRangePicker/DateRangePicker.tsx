import React, { useState } from "react";
import DateRangePickerBase, { DateRangePickerProps } from "@cloudscape-design/components/date-range-picker";
/**
* @uxpindocurl https://cloudscape.design/components/date-range-picker/
* @uxpindescription With the date range picker, users can specify a date and time range. 
*/
const DateRangePicker = (props: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRangePickerProps["value"] | null>(null);

  return (
    <DateRangePickerBase
      {...props}
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      isValidRange={(range) => {
        // Ensure `range` is not null and of type "absolute" before accessing properties
        if (range?.type === "absolute" && range.startDate && range.endDate) {
          const startDateWithoutTime = range.startDate.split("T")[0];
          const endDateWithoutTime = range.endDate.split("T")[0];

          if (!startDateWithoutTime || !endDateWithoutTime) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is incomplete. Select a start and end date for the date range.",
            };
          }

          if (new Date(range.startDate).getTime() > new Date(range.endDate).getTime()) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is invalid. The start date must be before the end date.",
            };
          }
        }
        return { valid: true };
      }}
    />
  );
};

export default DateRangePicker;
