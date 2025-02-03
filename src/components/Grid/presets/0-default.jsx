import * as React from 'react';
import Grid from '../Grid';
import Button from '../../Button/Button';

export default (
  <Grid gridDefinition={{ 0: { colspan: 4 }, 1: { colspan: 8 } }} uxpId="grid-1">
    <Button variant="primary" fullWidth={true} uxpId="grid-button-1">
      col-4
    </Button>
    <Button variant="primary" fullWidth={true} uxpId="grid-button-2">
      col-8
    </Button>
  </Grid>
);
