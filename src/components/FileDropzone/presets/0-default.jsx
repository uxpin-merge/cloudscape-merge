import * as React from 'react';
import FileDropzone from '../FileDropzone';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Box from '../../Box/Box';
import FileInput from '../../FileInput/FileInput';

export default (
  <FileDropzone uxpId="file-dropzone-1">
    <SpaceBetween size="s" alignItems="center" uxpId="file-dropzone-spacebetween-1">
      <Box color="inherit" uxpId="file-dropzone-box-1">
        Drop files here or select from below
      </Box>
      <FileInput uxpId="file-dropzone-file-input-1">Choose files</FileInput>
    </SpaceBetween>
  </FileDropzone>
);
