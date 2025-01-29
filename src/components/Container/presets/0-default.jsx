import * as React from 'react';
import Container from '../Container';
import Header from '../../Header/Header';

export default (
  <Container
    uxpId="container-1"
    footer="Footer Content"
    header={
      <Header variant="h2" description="Container description" uxpId="container-header-1">
        Container title
      </Header>
    }
  >
    Container content
  </Container>
);
