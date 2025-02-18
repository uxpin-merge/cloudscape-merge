import React from 'react';
import TextareaBase, { TextareaProps } from '@cloudscape-design/components/textarea';
/**
* @uxpindocurl https://cloudscape.design/components/text-area/
* @uxpindescription A form element that provides a multi-line, plain-text input control.
*/
const Textarea = (props: TextareaProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return (
    <TextareaBase
      {...props}
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
  );

};

export default Textarea;
