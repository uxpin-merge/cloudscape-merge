import React, { useState, useEffect } from "react";
import FileTokenGroupBase, { FileTokenGroupProps } from "@cloudscape-design/components/file-token-group";

// Define a type for serialized file items
type SerializedFileItem = {
  name: string;
  type?: string;
  lastModified?: number;
  size?: number; // Ensure size is provided
};

/**
 * @uxpindocurl https://cloudscape.design/components/file-token-group/
 * @uxpindescription A collection of uploaded files displayed as tokens.
 */
const FileTokenGroup = ({
  items: propItems = [],
  showFileSize = false, // Ensure showFileSize is properly passed
  ...props
}: Omit<FileTokenGroupProps, "items"> & { items?: SerializedFileItem[]; showFileSize?: boolean }) => {
  // Ensure state is initialized correctly
  const [items, setItems] = useState<{ file: File }[]>([]);
  const [displayFileSize, setDisplayFileSize] = useState(showFileSize);

  // Convert serialized metadata to `File` objects with the correct `size`
  useEffect(() => {
    if (Array.isArray(propItems)) {
      setItems(
        propItems.map((item) => ({
          file: new File(
            [new Blob([" ".repeat(item.size || 0)])], // Create a Blob of the correct size
            item.name || "untitled",
            {
              type: item.type || "application/octet-stream",
              lastModified: item.lastModified || Date.now(),
            }
          ),
        }))
      );
    }
  }, [propItems]);

  // Update file size display when showFileSize changes
  useEffect(() => {
    setDisplayFileSize(showFileSize);
  }, [showFileSize]);

  return (
    <FileTokenGroupBase
      {...props}
      items={items} // Pass transformed items with correct size
      onDismiss={({ detail }) =>
        setItems((prevItems) =>
          prevItems.filter((_, index) => index !== detail.fileIndex)
        )
      }
      i18nStrings={{
        removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
        limitShowFewer: "Show fewer files",
        limitShowMore: "Show more files",
        errorIconAriaLabel: "Error",
        warningIconAriaLabel: "Warning",
      }}
      showFileSize={displayFileSize} // Dynamically update file size display
    />
  );
};

export default FileTokenGroup;
