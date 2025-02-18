import React from 'react';
import LiveRegionBase, { LiveRegionProps } from '@cloudscape-design/components/live-region';
/**
* @uxpindocurl https://cloudscape.design/components/live-region/
* @uxpindescription A non-visual component used to announce page changes to assistive technology.
*/
const LiveRegion = (props: LiveRegionProps) => {
  return <div><LiveRegionBase {...props} /></div>;
};

export default LiveRegion;
