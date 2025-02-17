import React from 'react';
import PaginationBase, { PaginationProps } from '@cloudscape-design/components/pagination';
/**
 * @uxpindocurl https://cloudscape.design/components/pagination/
 * @uxpindescription Provides horizontal navigation between pages of a collection.
 */
export default (props: PaginationProps) => {
  const [
    currentPageIndex,
    setCurrentPageIndex
  ] = React.useState(1);

  return (
    <PaginationBase
      {...props}
      currentPageIndex={currentPageIndex}
      onChange={({ detail }) =>
        setCurrentPageIndex(detail.currentPageIndex)
      }
    />
  );
}

