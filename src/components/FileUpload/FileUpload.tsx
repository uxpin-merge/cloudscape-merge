import React from 'react';
import FileUploadBase, { FileUploadProps } from '@cloudscape-design/components/file-upload';

/**
 * @uxpindocurl https://cloudscape.design/components/file-upload/
 * @uxpindescription FileUpload allows users to upload files and manage them within a list.
 */
const FileUpload = (props: FileUploadProps) => {
  // Ensure value is always an array to avoid undefined errors
  const [value, setValue] = React.useState<FileUploadProps['value']>(props.value ?? []);

  React.useEffect(() => {
    setValue(props.value ?? []);
  }, [props.value]); // Only re-run effect when `props.value` changes

  return (
    <FileUploadBase
      {...props}
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      i18nStrings={{
        uploadButtonText: e =>
          e ? "Choose files" : "Choose file",
        dropzoneText: e =>
          e
            ? "Drop files to upload"
            : "Drop file to upload",
        removeFileAriaLabel: e =>
          `Remove file ${e + 1}`,
        limitShowFewer: "Show fewer files",
        limitShowMore: "Show more files",
        errorIconAriaLabel: "Error",
        warningIconAriaLabel: "Warning"
      }}
    />
  );
};

export default FileUpload;
