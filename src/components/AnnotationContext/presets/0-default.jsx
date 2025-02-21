import * as React from 'react';
import AnnotationContext from '../AnnotationContext';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import Form from '../../Form/Form';
import FormField from '../../FormField/FormField';
import Hotspot from '../../Hotspot/Hotspot';
import Input from '../../Input/Input';

export default (
  <AnnotationContext
    uxpId="annotation-context-1"
    currentTutorial={{
      title: 'S3 Bucket Creation',
      description: 'Learn how to create and configure an S3 bucket.',
      completedScreenDescription: 'You have successfully completed the tutorial.',
      completed: false,
      tasks: [
        {
          title: 'Create a bucket',
          steps: [
            {
              title: 'Name the bucket',
              content:
                'Create a bucket name. Bucket names can consist only of lowercase letters, numbers, dots (.), and hyphens (-).',
              hotspotId: 'bucket-name',
            },
            {
              title: 'Block all public access',
              content: 'Keep this checkbox selected to prevent unauthorized accessto your bucket.',
              hotspotId: 'block-public-access-checkbox',
              warningAlert:
                'Selecting a different value for this checkbox from the recommendation of the tutorial can result in your data being exposed to unauthorized access.',
            },
            {
              title: 'Create bucket',
              content: 'Submit the form to create the bucket.',
              hotspotId: 'create-bucket-button',
            },
          ],
        },
      ],
    }}
  >
    <Form
      uxpId="annotation-context-form-1"
      actions={
        <Hotspot side="right" hotspotId="create-bucket-button" uxpId="annotation-context-hotspot-1">
          <Button variant="primary" uxpId="annotation-context-button-1">
            Create bucket
          </Button>
        </Hotspot>
      }
    >
      <SpaceBetween direction="vertical" size="l" uxpId="annotation-context-space-between-1">
        <FormField label="Bucket name" uxpId="annotation-context-form-field-1">
          <Hotspot side="right" hotspotId="bucket-name" uxpId="annotation-context-hotspot-2">
            <Input value="" uxpId="annotation-context-input-1" />
          </Hotspot>
        </FormField>

        <Checkbox checked={true} uxpId="annotation-context-checkbox-1">
          <Hotspot side="right" hotspotId="block-public-access-checkbox" uxpId="annotation-context-hotspot-3" />
        </Checkbox>
      </SpaceBetween>
    </Form>
  </AnnotationContext>
);
