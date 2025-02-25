import React, { useState } from "react";
import FileDropzoneBase, { FileDropzoneProps } from "@cloudscape-design/components/file-dropzone";
import { SpaceBetween, FileTokenGroup, FileInput, Box } from "@cloudscape-design/components";

/**
 * @uxpindocurl https://cloudscape.design/components/file-dropzone/
 * @uxpindescription An area that allows users to drag and drop files.
 */
const FileDropzone = (props: FileDropzoneProps) => {
  const [value, setValue] = useState<File[]>([]);

  return (
    <SpaceBetween size="l">
      <FileDropzoneBase
        {...props}
        onChange={({ detail }) => setValue(detail.value as File[])}
      >
        {props.children}
      </FileDropzoneBase>

      <FileTokenGroup
        items={value.map((file) => ({ file }))}
        onDismiss={({ detail }) =>
          setValue((prevValue) =>
            prevValue.filter((_, index) => index !== detail.fileIndex)
          )
        }
        i18nStrings={{
          removeFileAriaLabel: () => "Remove file",
          limitShowFewer: "Show fewer files",
          limitShowMore: "Show more files",
          errorIconAriaLabel: "Error",
          warningIconAriaLabel: "Warning",
        }}
      />
    </SpaceBetween>
  );
};

export default FileDropzone;
