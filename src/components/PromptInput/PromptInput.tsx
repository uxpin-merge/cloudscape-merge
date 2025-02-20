import React from 'react';
import PromptInputBase, { PromptInputProps } from '@cloudscape-design/components/prompt-input';
/**
 * @uxpindocurl https://cloudscape.design/components/prompt-input/
 * @uxpindescription Enables users to provide a prompt or command.
 */
const PromptInput = (props: PromptInputProps) => {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <PromptInputBase
      {...props}
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
  );
};

export default PromptInput;
