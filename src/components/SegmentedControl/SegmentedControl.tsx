import React from 'react';
import SegmentedControlBase, { SegmentedControlProps } from '@cloudscape-design/components/segmented-control';
/**
* @uxpindocurl https://cloudscape.design/components/segmented-control/
* @uxpindescription With a segmented control, users can toggle between different ways of formatting a piece of content or data.
*/
interface ExtendedSegmentedControlProps extends SegmentedControlProps {
  /**
   *  ID of the selected option. If you want to clear the selection, use null.
  * @uxpinbind onChange 0.detail.selectedId
  */
  selectedId: string;
}

const SegmentedControl = (props: ExtendedSegmentedControlProps) => {

  return <SegmentedControlBase {...props} />;
};

export default SegmentedControl;
