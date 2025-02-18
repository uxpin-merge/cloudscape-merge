import React from 'react';
import AutosuggestBase, { AutosuggestProps } from '@cloudscape-design/components/autosuggest';

/**
 * @uxpindocurl https://cloudscape.design/components/autosuggest/
 * @uxpindescription Autosuggest provides users with real-time suggestions as they type in an input field.
 */
const Autosuggest = (props: AutosuggestProps) => {
  // Ensure value is always a string to prevent `toLowerCase` errors
  const [value, setValue] = React.useState<string>(props.value ?? '');

  React.useEffect(() => {
    setValue(props.value ?? ''); // Default to an empty string if undefined
  }, [props.value]);

  return (
    <AutosuggestBase
      {...props}
      onChange={({ detail }) => setValue(detail.value ?? '')}
      value={value}
    />
  );
};

export default Autosuggest;
