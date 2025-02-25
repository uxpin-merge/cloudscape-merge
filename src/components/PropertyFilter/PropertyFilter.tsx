import React, { useState } from "react";
import PropertyFilterBase, { PropertyFilterProps } from "@cloudscape-design/components/property-filter";
/**
* @uxpindocurl https://cloudscape.design/components/property-filter/
* @uxpindescription With the property filter, users can find specific items in a collection of resources by using properties, property values, typing free text, and combining these with operators.
*/
const PropertyFilter = (props: PropertyFilterProps) => {
  const [query, setQuery] = useState<PropertyFilterProps["query"]>({
    tokens: [],
    operation: "and" as PropertyFilterProps["query"]["operation"],
  });

  return (
    <PropertyFilterBase
      {...props}
      query={query}
      onChange={({ detail }) => setQuery(detail)}
    />
  );
};

export default PropertyFilter;
