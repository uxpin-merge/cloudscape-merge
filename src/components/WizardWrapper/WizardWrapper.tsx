import React from 'react';
import WizardBase, { WizardProps } from '@cloudscape-design/components/wizard';
import Wizard from '../Wizard/Wizard';

type StepWithId = WizardProps['steps'][number] & { id: string };

interface WizardWrapperProps extends WizardProps {
  children: React.ReactNode,
  steps: StepWithId[],
  /**
   * @uxpinbind onNavigate 0.detail.requestedStepIndex
   */
  activeStepIndex?:number,
}

const WizardWrapper = (props: WizardWrapperProps) => {
  const contentMap = (React.Children.toArray(props.children)
    .filter(child => React.isValidElement(child) && child.props.id) as React.ReactElement[])
    .reduce((acc:{ [key:string]: React.ReactElement}, child: React.ReactElement) => {
      acc[child.props.id as string] = child;
      return acc;
    }, {});

  const transformedSteps = props.steps.map(step => ({
    ...step,
    content: contentMap[step.id] || null,
  })) ;

  return <Wizard {...props} steps={transformedSteps} />;
};

export default WizardWrapper;
