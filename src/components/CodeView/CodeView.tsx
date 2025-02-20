import React from 'react';
import typescriptHighlight from "@cloudscape-design/code-view/code-view/highlight/typescript";
import CodeView, { CodeViewProps } from "@cloudscape-design/code-view/code-view";
/**
 * @uxpindocurl https://cloudscape.design/components/code-view/
 * @uxpindescription Allow users to read and copy a code snippet.
 */

export default (props: CodeViewProps) => {
  return (
    <CodeView
      {...props}
    />
  );
}


