import * as React from 'react';
import ColumnLayout from '../ColumnLayout';
import Box from '../../Box/Box';

export default (
  <ColumnLayout columns={2} minColumnWidth={1} uxpId="column-layout-1">
    <Box uxpId="box-1" variant="p">
      Item 1
    </Box>
    <Box uxpId="box-2" variant="p">
      Item 2
    </Box>
    <Box uxpId="box-3" variant="p">
      Item 3
    </Box>
    <Box uxpId="box-4" variant="p">
      Item 4
    </Box>
  </ColumnLayout>
);
