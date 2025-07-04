import * as React from "react";
import CardsBase, { CardsProps } from '@cloudscape-design/components/cards';
import Link from '../Link/Link';


interface CardsPropsExtended extends CardsProps {
  selectedIndex: string;
}

/**
 * @uxpindocurl https://cloudscape.design/components/cards/
 * @uxpindescription Represents a collection of resources.
 */
export default (props: CardsPropsExtended) => {
  const items = props.items

  // Generate sections dynamically based on the first item's keys (excluding `name` and `alt`).
  const itemKeys = Object.keys(items[0]).filter(key => key !== 'name' && key !== 'alt');
  const sections = itemKeys.map(key => ({
    id: key,
    header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
    content: (item: any) => item[key],
  }));


  const [
    selectedItems,
    setSelectedItems
  ] = React.useState(props.selectedItems);

  React.useEffect(() => {
    setSelectedItems(props.selectedItems);
    // @ts-ignore
    props.uxpinOnChange(props.selectedIndex, findIndicesByProps(props.items, props.selectedItems), 'selectedIndex');
  }, [props.selectedItems, props.items]);


  return (
    <CardsBase
      {...props}
      ariaLabels={{
        itemSelectionLabel: (e, i) => `select ${i.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={props.cardDefinition || {
        header: item => (
          <Link href="#" fontSize="heading-m">
            {item.name}
          </Link>
        ),
        sections: sections,
      }}
      cardsPerRow={props.cardsPerRow}
      items={items}
      loadingText={props.loadingText}
      onSelectionChange={(data) => {
        // @ts-ignore
        props.uxpinOnChange(props.selectedItems, data.detail?.selectedItems ?? [], 'selectedItems');
        if (props.onSelectionChange) {
          props.onSelectionChange(data);
        }
      }}
      selectedItems={selectedItems}

    />
  );
};

function findIndicesByProps(array:any[], criteria: object) {
  const criteriaArray = Array.isArray(criteria) ? criteria : [criteria];
  const indices:number[] = [];

  array.forEach((item, index) => {
    for (const crit of criteriaArray) {
      const match = Object.entries(crit).every(
        ([key, value]) => item[key] === value
      );
      if (match) {
        indices.push(index);
        break;
      }
    }
  });


  const uniqueIndices = Array.from(new Set(indices)).sort((a, b) => a - b);
  return uniqueIndices.join(',');
}
