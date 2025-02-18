import React from 'react';
import TextFilterBase, { TextFilterProps } from '@cloudscape-design/components/text-filter';
/**
* @uxpindocurl https://cloudscape.design/components/text-filter/
* @uxpindescription With a text filter, users can enter text that’s used to match specific items in a collection.
*/
const TextFilter = (props: TextFilterProps) => {
  const [
    filteringText,
    setFilteringText
  ] = React.useState(props.filteringText);

  React.useEffect(() => {
    setFilteringText(props.filteringText)
  }, [props]);

  return <TextFilterBase
    {...props}
    filteringText={filteringText}
    onChange={({ detail }) =>
      setFilteringText(detail.filteringText)
    }
  />;
};

export default TextFilter;
