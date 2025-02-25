import React from "react";
import TutorialPanelBase, { TutorialPanelProps } from "@cloudscape-design/components/tutorial-panel";
/**
* @uxpindocurl https://cloudscape.design/components/tutorial-panel/
* @uxpindescription The tutorial panel houses contextual Hands-on tutorials that help users learn how to use a service. 
*/
const TutorialPanel = (props: TutorialPanelProps) => {
  const defaultI18nStrings: TutorialPanelProps["i18nStrings"] = {
    labelsTaskStatus: {
      pending: "",
      "in-progress": "In Progress",
      success: "Success",
    },
    loadingText: "Loading",
    tutorialListTitle: "Choose a tutorial",
    tutorialListDescription:
      "Use our walk-through tutorials to learn how to achieve your desired objectives within Amazon Transcribe.",
    tutorialListDownloadLinkText: "Download PDF version",
    tutorialCompletedText: "Tutorial completed",
    labelExitTutorial: "Dismiss tutorial",
    learnMoreLinkText: "Learn more",
    startTutorialButtonText: "Start tutorial",
    restartTutorialButtonText: "Restart tutorial",
    completionScreenTitle: "Congratulations! You completed the tutorial.",
    feedbackLinkText: "Feedback",
    dismissTutorialButtonText: "Dismiss tutorial",
    taskTitle: (taskIndex, taskTitle) => `Task ${taskIndex + 1}: ${taskTitle}`,
    stepTitle: (stepIndex, stepTitle) => `Step ${stepIndex + 1}: ${stepTitle}`,
    labelTotalSteps: (totalStepCount) => `Total steps: ${totalStepCount}`,
    labelLearnMoreExternalIcon: "Opens in a new tab",
    labelTutorialListDownloadLink: "Download PDF version of this tutorial",
    labelLearnMoreLink: "Learn more about transcribing audio (opens new tab)",
  };

  return (
    <TutorialPanelBase
      {...props}
      i18nStrings={{
        ...defaultI18nStrings, // Provides all required default values
        ...(props.i18nStrings ?? {}), // Ensures user-defined values override defaults
      }}
    />
  );
};

export default TutorialPanel;
