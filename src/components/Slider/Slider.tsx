import React from 'react';
import SliderBase, { SliderProps } from '@cloudscape-design/components/slider';
/**
 * @uxpindocurl https://cloudscape.design/components/slider/
 * @uxpindescription A slider enables users to select a value within a defined range.
 */
const Slider = (props: SliderProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);
  return (
    <SliderBase
      {...props}
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      max={100}
      min={0}
    />
  );
};

export default Slider;
