import React from 'react';
import FileInputBase, { FileInputProps } from '@cloudscape-design/components/file-input';
/**
 * @uxpindocurl https://cloudscape.design/components/file-input/
 * @uxpindescription A trigger that allows users to select one or more files to upload.
 */
const FileInput = (props: FileInputProps) => {
  // Ensure the initial state is mutable by spreading into a new array
  const [value, setValue] = React.useState<File[]>([...(props.value || [])]);

  React.useEffect(() => {
    setValue([...(props.value || [])]); // Spread into a new array to ensure mutability
  }, [props.value]); // Only depend on `props.value` instead of `props`

  return (
    <FileInputBase
      {...props}
      onChange={({ detail }) => setValue([...detail.value])} // Ensure a mutable array
      value={value}
    />
  );
};

export default FileInput;
