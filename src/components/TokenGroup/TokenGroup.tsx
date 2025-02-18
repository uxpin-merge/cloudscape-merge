import React from 'react';
import TokenGroupBase, { TokenGroupProps } from '@cloudscape-design/components/token-group';
/**
* @uxpindocurl https://cloudscape.design/components/token-group/
* @uxpindescription A set of compact representations of an individual item selected from a list.
*/
const TokenGroup = (props: TokenGroupProps) => {

  // Ensure items is always an array
  const [items, setItems] = React.useState(props.items ?? []);

  React.useEffect(() => {
    setItems(props.items ?? []);
  }, [props.items]); // Only update when `props.items` changes

  return (
    <TokenGroupBase
      {...props}
      onDismiss={({ detail: { itemIndex } }) => {
        setItems((prevItems) => [
          ...prevItems.slice(0, itemIndex),
          ...prevItems.slice(itemIndex + 1)
        ]);
      }}
      items={items}
    />
  );
};

export default TokenGroup;
