// import React from "react";
// import CodeEditorBase, { CodeEditorProps } from "@cloudscape-design/components/code-editor";
// import ace from "ace-builds"; // Import ace for the 'ace' prop
// import "./styles/theme/cloud_editor.css";
// import "./styles/theme/cloud_editor_dark.css";
// import "./styles/ace.css";
// export default (props: CodeEditorProps) => {
//   const [preferences, setPreferences] = React.useState<CodeEditorProps["preferences"]>(undefined);
//   const [loading, setLoading] = React.useState(false);

//   return (
//     <CodeEditorBase
//       {...props}
//       ace={ace}
//     // language="javascript"
//     // value="const pi = 3.14;"
//     // preferences={preferences}
//     // onPreferencesChange={(e) => setPreferences(e.detail)}
//     // loading={loading}
//     // themes={{
//     //   light: ["cloud_editor"],
//     //   dark: ["cloud_editor_dark"],
//     // }}

//     />
//   );
// };


import React, { useEffect, useState } from "react";
import CodeEditorM, { CodeEditorProps } from "@cloudscape-design/components/code-editor";
import "./styles/theme/cloud_editor.css";
import "./styles/theme/cloud_editor_dark.css";
import "./styles/ace.css";


import ace from "ace-builds";
export function aceLoader() {
  return import("ace-builds").then((module) => module.default);
}


const i18nStrings: CodeEditorProps["i18nStrings"] = {
  loadingState: "Loading code editor",
  errorState: "There was an error loading the code editor.",
  errorStateRecovery: "Retry",
  editorGroupAriaLabel: "Code editor",
  statusBarGroupAriaLabel: "Status bar",
  cursorPosition: (row, column) => `Ln ${row}, Col ${column}`,
  errorsTab: "Errors",
  warningsTab: "Warnings",
  preferencesButtonAriaLabel: "Preferences",
  paneCloseButtonAriaLabel: "Close",
  preferencesModalHeader: "Preferences",
  preferencesModalCancel: "Cancel",
  preferencesModalConfirm: "Confirm",
  preferencesModalWrapLines: "Wrap lines",
  preferencesModalTheme: "Theme",
  preferencesModalLightThemes: "Light themes",
  preferencesModalDarkThemes: "Dark themes",
};

export default function CodeEditor(props: CodeEditorProps) {
  const [value, setValue] = useState<string>(props.value);
  const [preferences, setPreferences] = useState<CodeEditorProps["preferences"]>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [aceInstance, setAceInstance] = useState<typeof ace | null>(null); // ✅ Properly typed ace state

  useEffect(() => {
    aceLoader()
      .then((loadedAce) => {
        setAceInstance(loadedAce);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  React.useEffect(() => {
    aceLoader()
      .then((loadedAce) => {
        setAceInstance(loadedAce);
      })
      .finally(() => {
        setLoading(false);
      });
    setValue(props.value)
  }, [props]);


  return (
    <CodeEditorM
      {...props}
      ace={aceInstance || ace}
      value={value}
      onDelayedChange={(event) => setValue(event.detail.value)}
      preferences={preferences}
      onPreferencesChange={(event) => setPreferences(event.detail)}
      i18nStrings={i18nStrings}
      themes={{ light: ["cloud_editor"], dark: ["cloud_editor_dark"] }}
    />
  );
}
