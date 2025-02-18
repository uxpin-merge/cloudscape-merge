import React from 'react';
import SegmentedControlBase, { SegmentedControlProps } from '@cloudscape-design/components/segmented-control';
/**
* @uxpindocurl https://cloudscape.design/components/segmented-control/
* @uxpindescription With a segmented control, users can toggle between different ways of formatting a piece of content or data.
*/
const SegmentedControl = (props: SegmentedControlProps) => {
  const [selectedId, setSelectedId] = React.useState(
    props.selectedId
  );
  React.useEffect(() => {
    setSelectedId(props.selectedId)
  }, [props.selectedId]);

  return <SegmentedControlBase {...props}
    selectedId={selectedId}
    onChange={({ detail }) =>
      setSelectedId(detail.selectedId)
    }
  />;
};

export default SegmentedControl;
