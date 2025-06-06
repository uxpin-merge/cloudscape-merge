import * as React from 'react';
import WizardWrapper from '../WizardWrapper';
import Link from '../../Link/Link';
import Container from '../../Container/Container';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Header from '../../Header/Header';
import FormField from '../../FormField/FormField';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import KeyValuePairs from '../../KeyValuePairs/KeyValuePairs';
import WizardWrapperItem from '../../WizardWrapperItem/WizardWrapperItem';

export default (
  <WizardWrapper
    uxpId="wizard-1"
    submitButtonText="Launch instance"
    activeStepIndex={0}
    allowSkipTo
    i18nStrings={{
      navigationAriaLabel: 'Steps',
      cancelButton: 'Cancel',
      previousButton: 'Previous',
      nextButton: 'Next',
      optional: 'optional',
    }}
    steps={[
      {
        id: "1",
        title: 'Choose instance type',
        info: (
          <Link variant="info" uxpId="wizard-link-1">
            Info
          </Link>
        ),
        description:
          'Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.',
      },
      {
        id: "2",
        title: 'Add storage',
        isOptional: true,
      },
      {
        id: "3",
        title: 'Configure security group',
        isOptional: true,
      },
      {
        id: "4",
        title: 'Review and launch',
      },
    ]}
  >
    <WizardWrapperItem uxpId="wizard-wrapper-item-1" id="1">
      <Container
        uxpId="wizard-container-1"
        header={
          <Header variant="h2" uxpId="wizard-header-1">
            Form container header
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l" uxpId="wizard-space-between-1">
          <FormField label="First field" uxpId="wizard-form-field-1">
            <Input uxpId="wizard-input-1" />
          </FormField>
          <FormField label="Second field" uxpId="wizard-form-field-2">
            <Input uxpId="wizard-input-2" />
          </FormField>
        </SpaceBetween>
      </Container>
    </WizardWrapperItem>
    <WizardWrapperItem uxpId="wizard-wrapper-item-2" id="2">
      <Container
        uxpId="wizard-container-2"
        header={
          <Header variant="h2" uxpId="wizard-header-2">
            Form container header
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l" uxpId="wizard-space-between-2">
          <FormField label="First field" uxpId="wizard-form-field-3">
            <Input uxpId="wizard-input-3" />
          </FormField>
          <FormField label="Second field" uxpId="wizard-input-4">
            <Input uxpId="wizard-input-4" />
          </FormField>
        </SpaceBetween>
      </Container>
    </WizardWrapperItem>
    <WizardWrapperItem uxpId="wizard-wrapper-item-3" id="3">
      <Container
        uxpId="wizard-container-4"
        header={
          <Header variant="h2" uxpId="wizard-header-3">
            Form container header
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l" uxpId="wizard-space-between-3">
          <FormField label="First field" uxpId="wizard-form-field-5">
            <Input uxpId="wizard-input-5" />
          </FormField>
          <FormField label="Second field" uxpId="wizard-form-field-6">
            <Input uxpId="wizard-input-6" />
          </FormField>
        </SpaceBetween>
      </Container>
    </WizardWrapperItem>
    <WizardWrapperItem uxpId="wizard-wrapper-item-4" id="4">
      <SpaceBetween size="xs" uxpId="wizard-space-between-4">
        <Header uxpId="wizard-header-4" variant="h3" actions={<Button uxpId="wizard-button-2">Edit</Button>}>
          Step 1: Instance type
        </Header>
        <Container
          uxpId="wizard-container-5"
          header={
            <Header uxpId="wizard-header-5" variant="h2">
              Container title
            </Header>
          }
        >
          <KeyValuePairs
            uxpId="wizard-kay-value-1"
            columns={2}
            items={[
              {
                label: 'First field',
                value: 'Value',
              },
              {
                label: 'Second Field',
                value: 'Value',
              },
            ]}
          />
        </Container>
      </SpaceBetween>
    </WizardWrapperItem>

  </WizardWrapper>
);
