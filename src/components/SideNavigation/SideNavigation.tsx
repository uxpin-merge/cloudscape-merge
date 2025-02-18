import React from 'react';
import SideNavigationBase, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
/**
 * @uxpindocurl https://cloudscape.design/components/side-navigation/
 * @uxpindescription A list of navigational links that point to the pages within an application.
 */
const SideNavigation = (props: SideNavigationProps) => {
  const [activeHref, setActiveHref] = React.useState(props.activeHref);

  return <SideNavigationBase {...props}
    activeHref={activeHref}
    onFollow={event => {
      if (!event.detail.external) {
        event.preventDefault();
        setActiveHref(event.detail.href);
      }
    }}
  />;
};

export default SideNavigation;
