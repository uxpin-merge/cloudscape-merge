import React, { useEffect, useState } from "react";
import CodeEditorM, { CodeEditorProps } from "@cloudscape-design/components/code-editor";
import ace from "ace-builds";
import "ace-builds/css/ace.css"; // Ensures Ace Editor styles are applied
import "./styles/theme/cloud_editor.css";
import "./styles/theme/cloud_editor_dark.css";
import "./styles/ace.css";

export function aceLoader() {
  return import("ace-builds").then((module) => {
    const ace = module.default;

    // Load syntax mode and theme dynamically
    import("ace-builds/src-noconflict/mode-javascript"); // Change based on language
    import("ace-builds/src-noconflict/theme-monokai"); // Preferred theme

    return ace;
  });
}

/**
 * @uxpindocurl https://cloudscape.design/components/code-editor/
 * @uxpindescription With the code editor, users can write and edit code.
 */
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
  const [aceInstance, setAceInstance] = useState<typeof ace | null>(null); // Properly typed Ace state

  // Load Ace instance once
  useEffect(() => {
    if (!aceInstance) {
      aceLoader().then(setAceInstance).finally(() => setLoading(false));
    }
  }, [aceInstance]);

  // Update value when props change
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <CodeEditorM
      {...props}
      ace={aceInstance || ace}
      value={value}
      // mode="javascript" // Set language mode explicitly
      // theme="monokai" // Set theme explicitly
      onDelayedChange={(event) => setValue(event.detail.value)}
      preferences={preferences}
      onPreferencesChange={(event) => setPreferences(event.detail)}
      i18nStrings={i18nStrings}
    />
  );
}
