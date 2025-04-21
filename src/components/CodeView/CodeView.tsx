import React from 'react';
import CodeViewBase, { CodeViewProps } from "@cloudscape-design/code-view/code-view";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

// Register only languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('html', xml); // xml loader is for HTML highlighting

export interface ExtendedCodeViewProps extends CodeViewProps {
  /**
   * @uxpincontroltype codeeditor
   */
  content: string;

  /**
   * @uxpincontroltype select
   * @uxpinpropname Language
   */
  // language?: 'javascript' | 'typescript' | 'json' | 'html';
}

/**
 * @uxpindocurl https://cloudscape.design/components/code-view/
 * @uxpindescription Allow users to read and copy a code snippet.
 */
const CodeView = (props: ExtendedCodeViewProps) => {


  return (
    <CodeViewBase
      {...props}
      content={props.content}
    />
  );
};

export default CodeView;
