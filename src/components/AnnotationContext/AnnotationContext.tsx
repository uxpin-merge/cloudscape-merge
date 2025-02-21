import React from "react";
import AnnotationContextBase, {
  AnnotationContextProps,
} from "@cloudscape-design/components/annotation-context";
/**
 * @uxpindocurl https://cloudscape.design/components/annotation-context/
 * @uxpindescription The annotation context is an invisible layer on top of the interface. It tracks the progress of a launched tutorial and feeds dynamic content to the Tutorial panel in Hands-on tutorials. It also renders annotation popovers and hotspot icons.
 */
const AnnotationContext = (props: AnnotationContextProps) => {
  return (
    <AnnotationContextBase
      {...props}
      currentTutorial={props.currentTutorial}
      onStartTutorial={() => console.log("Tutorial started")}
      onExitTutorial={() => console.log("Tutorial exited")}
      i18nStrings={{
        stepCounterText: (stepIndex, totalStepCount) =>
          `Step ${stepIndex + 1}/${totalStepCount}`,
        taskTitle: (taskIndex, taskTitle) =>
          `Task ${taskIndex + 1}: ${taskTitle}`,
        labelHotspot: (openState, stepIndex, totalStepCount) =>
          openState
            ? `Close annotation for step ${stepIndex + 1} of ${totalStepCount}`
            : `Open annotation for step ${stepIndex + 1} of ${totalStepCount}`,
        nextButtonText: "Next",
        previousButtonText: "Previous",
        finishButtonText: "Finish",
        labelDismissAnnotation: "Dismiss annotation",
      }}
    >
      {props.children}
    </AnnotationContextBase>
  );
};

export default AnnotationContext;
