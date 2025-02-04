import * as React from 'react';
import ContentLayout from '../ContentLayout';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Header from '../../Header/Header';
import Alert from '../../Alert/Alert';
import Container from '../../Container/Container';
import Link from '../../Link/Link';

export default (
  <ContentLayout
    uxpId="content-layout-1"
    variant="primary"
    defaultPadding={true}
    header={
      <SpaceBetween uxpId="content-layout-space-between-1" size="m">
        <Header
          uxpId="content-layout-header--1"
          variant="h1"
          description="This is a generic description used in the header."
          info={
            <Link uxpId="content-layout-link-1" variant="info">
              Info
            </Link>
          }
        >
          Header
        </Header>
        <Alert uxpId="content-layout-alert-1" statusIconAriaLabel="Info">
          This is a generic alert.
        </Alert>
      </SpaceBetween>
    }
  >
    <Container
      uxpId="content-layout-container-2"
      header={
        <Header variant="h2" description="Container description" uxpId="content-layout-header-2">
          Container header
        </Header>
      }
    >
      Container content
    </Container>
  </ContentLayout>
);
