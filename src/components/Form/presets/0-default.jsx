import * as React from 'react';
import Form from '../Form';
import Header from '../../Header/Header';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Input from '../../Input/Input';
import FormField from '../../FormField/FormField';
import Container from '../../Container/Container';
import Button from '../../Button/Button';

export default (
  <Form
    uxpId="form-1"
    header={
      <Header uxpId="form-header-1" variant="h1">
        Form header
      </Header>
    }
    actions={
      <SpaceBetween direction="horizontal" size="xs" uxpId="form-space-between-1">
        <Button formAction="none" variant="link" uxpId="form-button-1">
          Cancel
        </Button>
        <Button variant="primary" uxpId="form-button-2">
          Submit
        </Button>
      </SpaceBetween>
    }
  >
    <Container
      uxpId="form-container-1"
      header={
        <Header variant="h2" uxpId="form-header-2">
          Form container header
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="l" uxpId="form-space-between-2">
        <FormField label="First field" uxpId="form-form-field-1">
          <Input uxpId="form-input-1" />
        </FormField>
        <FormField label="Second field" uxpId="form-form-field-2">
          <Input uxpId="form-input-2" />
        </FormField>
        <FormField label="Third field" uxpId="form-form-field-3">
          <Input uxpId="form-input-3" />
        </FormField>
      </SpaceBetween>
    </Container>
  </Form>
);
