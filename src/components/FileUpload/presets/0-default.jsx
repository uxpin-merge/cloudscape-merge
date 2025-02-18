import * as React from 'react';
import FileUpload from '../FileUpload';

export default (
  <FileUpload
    uxpId="file-upload-1"
    showFileLastModified
    showFileSize
    showFileThumbnail
    tokenLimit={3}
    constraintText="Hint text for file requirements"
  />
);
