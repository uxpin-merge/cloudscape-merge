import React from 'react';
import ContentLayoutBase, { ContentLayoutProps } from '@cloudscape-design/components/content-layout';
/**
 * @uxpindocurl https://cloudscape.design/components/content-layout/
 * @uxpindescription Provides page structure for expressive use cases.
 */
const ContentLayout = (props: ContentLayoutProps) => {
  return <ContentLayoutBase {...props} >{props.children}</ContentLayoutBase>;
};

export default ContentLayout;
