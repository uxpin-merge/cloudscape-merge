import React from 'react';
import CodeEditorBase, { CodeEditorProps } from '@cloudscape-design/components/code-editor';

export default (props: CodeEditorProps) => {
  const [preferences, setPreferences] = React.useState(
    undefined
  );
  const [loading, setLoading] = React.useState(false);
  return (
    <CodeEditorBase
      {...props}
      language="javascript"
      value="const pi = 3.14;"
      // preferences={preferences}
      // onPreferencesChange={e => setPreferences(e.detail)}
      // loading={loading}
      themes={{
        light: ["cloud_editor"],
        dark: ["cloud_editor_dark"]
      }}
    />
  );
}


