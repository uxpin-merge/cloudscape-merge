import React from 'react';
import WizardBase, { WizardProps } from '@cloudscape-design/components/wizard';
import Link from '../Link/Link';
import Container from '../Container/Container';
import SpaceBetween from '../SpaceBetween/SpaceBetween';
import Header from '../Header/Header';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import Button from '../Button/Button';
import KeyValuePairs from '../KeyValuePairs/KeyValuePairs';
/**
 * @uxpindocurl https://cloudscape.design/components/wizard/
 * @uxpindescription A multi-page form that guides a user through a complex flow or a series of interrelated tasks. A wizard consists of a navigation pane, header, main content area, and action buttons.
 */
const Wizard = (props: WizardProps) => {
  const [
    activeStepIndex,
    setActiveStepIndex
  ] = React.useState(0);
  React.useEffect(() => {
    if (props.activeStepIndex !== undefined) {
      setActiveStepIndex(props.activeStepIndex);
    }
  }, [props.activeStepIndex]);

  return <WizardBase
    {...props}
    i18nStrings={{
      stepNumberLabel: stepNumber =>
        `Step ${stepNumber}`,
      collapsedStepsLabel: (stepNumber, stepsCount) =>
        `Step ${stepNumber} of ${stepsCount}`,
      skipToButtonLabel: (step, stepNumber) =>
        `Skip to ${step.title}`,
      ...props.i18nStrings
    }}
    onNavigate={(e) => {
      setActiveStepIndex(e.detail.requestedStepIndex)
      if (props.onNavigate) {
        props.onNavigate(e);
      }
    }}
    activeStepIndex={activeStepIndex}
  // steps={[
  //   {
  //     title: "Choose instance type",
  //     info: <Link variant="info">Info</Link>,
  //     description:
  //       "Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
  //     content: (
  //       <Container
  //         header={
  //           <Header variant="h2">
  //             Form container header
  //           </Header>
  //         }
  //       >
  //         <SpaceBetween direction="vertical" size="l">
  //           <FormField label="First field">
  //             <Input value={''} />
  //           </FormField>
  //           <FormField label="Second field">
  //             <Input value={''} />
  //           </FormField>
  //         </SpaceBetween>
  //       </Container>
  //     )
  //   },
  //   {
  //     title: "Add storage",
  //     content: (
  //       <Container
  //         header={
  //           <Header variant="h2">
  //             Form container header
  //           </Header>
  //         }
  //       >
  //         <SpaceBetween direction="vertical" size="l">
  //           <FormField label="First field">
  //             <Input value={''} />
  //           </FormField>
  //           <FormField label="Second field">
  //             <Input value={''} />
  //           </FormField>
  //         </SpaceBetween>
  //       </Container>
  //     ),
  //     isOptional: true
  //   },
  //   {
  //     title: "Configure security group",
  //     content: (
  //       <Container
  //         header={
  //           <Header variant="h2">
  //             Form container header
  //           </Header>
  //         }
  //       >
  //         <SpaceBetween direction="vertical" size="l">
  //           <FormField label="First field">
  //             <Input value={''} />
  //           </FormField>
  //           <FormField label="Second field">
  //             <Input value={''} />
  //           </FormField>
  //         </SpaceBetween>
  //       </Container>
  //     ),
  //     isOptional: true
  //   },
  //   {
  //     title: "Review and launch",
  //     content: (
  //       <SpaceBetween size="xs">
  //         <Header
  //           variant="h3"
  //           actions={
  //             <Button
  //               onClick={() => setActiveStepIndex(0)}
  //             >
  //               Edit
  //             </Button>
  //           }
  //         >
  //           Step 1: Instance type
  //         </Header>
  //         <Container
  //           header={
  //             <Header variant="h2">
  //               Container title
  //             </Header>
  //           }
  //         >
  //           <KeyValuePairs
  //             columns={2}
  //             items={[
  //               {
  //                 label: "First field",
  //                 value: "Value"
  //               },
  //               {
  //                 label: "Second Field",
  //                 value: "Value"
  //               }
  //             ]}
  //           />
  //         </Container>
  //       </SpaceBetween>
  //     )
  //   }
  // ]}
  />;
};

export default Wizard;
