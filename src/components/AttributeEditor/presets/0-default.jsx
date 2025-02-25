import * as React from 'react';
import AttributeEditor from '../AttributeEditor';

export default (
  <AttributeEditor
    uxpId="attribute-editor-1"
    addButtonText="Add new item"
    empty="No items associated with the resource."
    items={[
      { key: 'some-key-1', value: 'some-value-1' },
      { key: 'some-key-2', value: 'some-value-2' },
    ]}
  />
);
