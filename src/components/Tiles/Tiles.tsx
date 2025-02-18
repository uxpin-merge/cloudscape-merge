import React from 'react';
import TilesBase, { TilesProps } from '@cloudscape-design/components/tiles';
/**
 * @uxpindocurl https://cloudscape.design/components/tiles/
 * @uxpindescription Tiles enable users to choose one of a predefined set of options, including additional metadata to facilitate comparisons or progressive disclosure.
 */
const Tiles = (props: TilesProps) => {
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    setValue(props.value)
  }, [props]);

  return <TilesBase {...props} onChange={({ detail }) => setValue(detail.value)}
    value={value}
  />;
};

export default Tiles;
