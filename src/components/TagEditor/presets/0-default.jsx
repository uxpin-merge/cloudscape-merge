import * as React from 'react';
import TagEditor from '../TagEditor';

export default (
  <TagEditor
    uxpId="tag-editor-1"
    valuesRequestValues={['value-1', 'value-2', 'value-3']}
    tags={[
      { key: 'some-custom-key-1', value: 'some-value-1', existing: false },
      { key: 'some-custom-key-2', value: 'some-value-2', existing: false },
      { key: 'some-custom-key-3', value: 'some-value-3', existing: false },
    ]}
    keysRequestValues={['some-existing-key-3', 'some-existing-key-4', 'some-existing-key-5']}
  />
);
