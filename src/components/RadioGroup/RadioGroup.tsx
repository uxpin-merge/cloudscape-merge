import React from 'react';
import RadioGroupBase, { RadioGroupProps } from '@cloudscape-design/components/radio-group';

interface ExtendedRadioGroupProps extends RadioGroupProps {
  /**
   *  Value of the input.
  * @uxpinbind onChange 0.detail.value
  */
  value: string;
}


/**
 * @uxpindocurl https://cloudscape.design/components/radio-group/
 * @uxpindescription Radio group enable users to choose one option from a predefined set.
 */
const RadioGroup = (props: ExtendedRadioGroupProps) => {
  return <RadioGroupBase {...props} />;
};

export default RadioGroup;
