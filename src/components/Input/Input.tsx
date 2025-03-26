import React from 'react';
import InputBase, { InputProps } from '@cloudscape-design/components/input';
interface ExtendedInputProps extends InputProps {
  /**
   *  ID of the selected option. If you want to clear the selection, use null.
  * @uxpinbind onChange 0.detail.value
  */
  value: string;
}
/**
 * @uxpindocurl https://cloudscape.design/components/input/
 * @uxpindescription With the input control, users can input a single line of text.
 */
const Input = (props: ExtendedInputProps) => {

  return (
    <InputBase
      {...props}
    />
  );
};


export default Input;
