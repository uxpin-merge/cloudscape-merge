import * as React from 'react';
import SpaceBetween from '../SpaceBetween';
import Container from '../../Container/Container';

export default (
  <SpaceBetween size="m" direction="horizontal" uxpId="space-between-1">
    <Container uxpId="space-between-container-1">Container 1</Container>
    <Container uxpId="space-between-container-2">Container 2</Container>
    <Container uxpId="space-between-container-3">Container 3</Container>
  </SpaceBetween>
);
