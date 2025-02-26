import * as React from 'react';
import FileTokenGroup from '../FileTokenGroup';

export default (
  <FileTokenGroup
    uxpId="file-token-group-1"
    items={[
      {
        name: 'file-1.pdf',
        type: 'application/pdf',
        size: 102400,
        lastModified: 1590962400000,
      },
      {
        name: 'file-2.pdf',
        type: 'application/pdf',
        size: 204800,
        lastModified: 1590962400000,
      },
      {
        name: 'file-3.pdf',
        type: 'application/pdf',
        size: 512000,
        lastModified: 1590962400000,
      },
    ]}
    showFileSize
    showFileLastModified
  />
);
