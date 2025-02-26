import * as React from 'react';
import Table from '../Table';
import SpaceBetween from '../../SpaceBetween/SpaceBetween';
import Button from '../../Button/Button';
import Box from '../../Box/Box';
import TextFilter from '../../TextFilter/TextFilter';
import Pagination from '../../Pagination/Pagination';
import CollectionPreferences from '../../CollectionPreferences/CollectionPreferences';

export default (
  <Table
    items={[
      { name: 'Item 1', alt: 'First', description: 'This is the first item', type: '1A', size: 'Small' },
      { name: 'Item 2', alt: 'Second', description: 'This is the second item', type: '1B', size: 'Large' },
      { name: 'Item 3', alt: 'Third', description: '-', type: '1A', size: 'Large' },
      { name: 'Item 4', alt: 'Fourth', description: 'This is the fourth item', type: '2A', size: 'Small' },
    ]}
    loadingText="Loading resources"
    selectionType="multi"
    trackBy="name"
    header="Table with common features"
    empty={
      <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit" uxpId="table-box-1">
        <SpaceBetween size="m" uxpId="table-space-between-1">
          <Button uxpId="table-button-1">Create resource</Button>
        </SpaceBetween>
      </Box>
    }
    filter={
      <TextFilter
        filteringPlaceholder="Find resources"
        filteringText=""
        countText="0 matches"
        uxpId="table-text-filter-1"
      />
    }
    pagination={<Pagination currentPageIndex={1} pagesCount={2} uxpId="table-pagination-1" />}
    preferences={
      <CollectionPreferences
        uxpId="table-collection-preferences-1"
        title="Preferences"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        preferences={{
          pageSize: 10,
          contentDisplay: [
            { id: 'variable', visible: true },
            { id: 'value', visible: true },
            { id: 'type', visible: true },
            { id: 'description', visible: true },
          ],
        }}
        pageSizePreference={{
          title: 'Page size',
          options: [
            { value: 10, label: '10 resources' },
            { value: 20, label: '20 resources' },
          ],
        }}
        wrapLinesPreference={{}}
        stripedRowsPreference={{}}
        contentDensityPreference={{}}
        contentDisplayPreference={{
          options: [
            { id: 'variable', label: 'Variable name', alwaysVisible: true },
            { id: 'value', label: 'Text value' },
            { id: 'type', label: 'Type' },
            { id: 'description', label: 'Description' },
          ],
        }}
        stickyColumnsPreference={{
          firstColumns: {
            title: 'Stick first column(s)',
            description: 'Keep the first column(s) visible while horizontally scrolling the table content.',
            options: [
              { label: 'None', value: 0 },
              { label: 'First column', value: 1 },
              { label: 'First two columns', value: 2 },
            ],
          },
          lastColumns: {
            title: 'Stick last column',
            description: 'Keep the last column visible while horizontally scrolling the table content.',
            options: [
              { label: 'None', value: 0 },
              { label: 'Last column', value: 1 },
            ],
          },
        }}
      />
    }
    uxpId="table-1"
    enableKeyboardNavigation
  />
);
