import React from 'react';
import ContentLayoutBase, { ContentLayoutProps } from '@cloudscape-design/components/content-layout';

const ContentLayout = (props: ContentLayoutProps) => {
  return <ContentLayoutBase {...props} >{props.children}</ContentLayoutBase>;
};

export default ContentLayout;
