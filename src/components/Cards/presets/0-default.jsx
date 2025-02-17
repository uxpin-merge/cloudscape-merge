import * as React from 'react';
import Cards from '../Cards';
import Header from '../../Header/Header';

export default (
  <Cards
    uxpId="cards-1"
    header={<Header uxpId="cards-header-1">Example Cards</Header>}
    selectedItems={[{ name: 'Item 2' }]}
    items={[
      {
        name: 'Item 1',
        alt: 'First',
        description: 'This is the first item',
        type: '1A',
        size: 'Small',
      },
      {
        name: 'Item 2',
        alt: 'Second',
        description: 'This is the second item',
        type: '1B',
        size: 'Large',
      },
      {
        name: 'Item 3',
        alt: 'Third',
        description: 'This is the third item',
        type: '1A',
        size: 'Large',
      },
    ]}
    loadingText="Loading resources"
    cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
  />
);
