import * as React from "react";
import CardsBase, { CardsProps } from '@cloudscape-design/components/cards';
import Box from "../../components/Box/Box";
import SpaceBetween from "../../components/SpaceBetween/SpaceBetween";
import Button from "../../components/Button/Button";
import Link from '../Link/Link';

export default (props: CardsProps) => {
  const items = props.items

  // Generate sections dynamically based on the first item's keys (excluding `name` and `alt`).
  const itemKeys = Object.keys(items[0]).filter(key => key !== 'name' && key !== 'alt');
  const sections = itemKeys.map(key => ({
    id: key,
    header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
    content: (item: any) => item[key],
  }));

  return (
    <CardsBase
      {...props}
      ariaLabels={{
        itemSelectionLabel: (e, i) => `select ${i.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={{
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
    />
  );
};
