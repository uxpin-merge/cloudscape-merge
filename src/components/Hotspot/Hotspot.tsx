import React from 'react';
import HotspotBase, { HotspotProps } from '@cloudscape-design/components/hotspot';
/**
 * @uxpindocurl https://cloudscape.design/components/hotspot/
 * @uxpindescription In hands-on tutorials, hotspots are invisible containers that mark the spots where hotspot icons should be placed. Hotspot icons are rendered by the annotation context and are used to open and close annotation popovers.
 */
const Hotspot = (props: HotspotProps) => {
  return <HotspotBase {...props} />;
};

export default Hotspot;
