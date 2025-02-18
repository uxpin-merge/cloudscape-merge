import React from 'react';
import TopNavigationBase, { TopNavigationProps } from '@cloudscape-design/components/top-navigation';
/**
* @uxpindocurl https://cloudscape.design/components/top-navigation/
* @uxpindescription A global navigation element for services that is consistent and persists across all service pages.
*/
const TopNavigation = (props: TopNavigationProps) => {
  return <TopNavigationBase {...props} />;
};

export default TopNavigation;
