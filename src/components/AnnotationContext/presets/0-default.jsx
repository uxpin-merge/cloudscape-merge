import * as React from 'react';
import AnnotationContext from '../AnnotationContext';
import Button from '../../Button/Button';
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
              title: 'Create bucket',
              content: 'Submit the form to create the bucket.',
              hotspotId: 'create-bucket-button',
            },
          ],
        },
      ],
    }}
  >
    <Hotspot direction="bottom" hotspotId="bucket-name" uxpId="annotation-context-hotspot-1">
      <Input uxpId="annotation-context-input-1" />
    </Hotspot>
    <Hotspot side="right" hotspotId="create-bucket-button" uxpId="annotation-context-hotspot-2">
      <Button variant="primary" uxpId="annotation-context-button-1">
        Click me
      </Button>
    </Hotspot>
  </AnnotationContext>
);
