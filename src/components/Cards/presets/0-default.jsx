// import * as React from 'react';
// import Cards from '../Cards';
// import Box from '../../Box/Box';
// import Header from '../../Header/Header';
// import SpaceBetween from '../../SpaceBetween/SpaceBetween';
// import Button from '../../Button/Button';
// import Link from '../../Link/Link';
// export default (
//   <Cards
//     uxpId="cards-1"
//     // ariaLabels={{
//     //   itemSelectionLabel: (e, t) => `select ${t.name}`,
//     //   selectionGroupLabel: 'Item selection',
//     // }}
//     cardDefinition={{
//       header: () => (
//         <Link href="#" fontSize="heading-m" uxpId="cards-link-1">
//           test
//         </Link>
//       ),
//       sections: [
//         {
//           id: 'description',
//           header: 'Description',
//           content: 'hello',
//         },
//         {
//           id: 'type',
//           header: 'Type',
//           content: 'hello',
//         },
//         {
//           id: 'size',
//           header: 'Size',
//           content: 'hello',
//         },
//       ],
//     }}
//     cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
//     items={[
//       {
//         name: 'Item 1',
//         alt: 'First',
//         description: 'This is the first item',
//         type: '1A',
//         size: 'Small',
//       },
//       {
//         name: 'Item 2',
//         alt: 'Second',
//         description: 'This is the second item',
//         type: '1B',
//         size: 'Large',
//       },
//       {
//         name: 'Item 3',
//         alt: 'Third',
//         description: 'This is the third item',
//         type: '1A',
//         size: 'Large',
//       },
//       {
//         name: 'Item 4',
//         alt: 'Fourth',
//         description: 'This is the fourth item',
//         type: '2A',
//         size: 'Small',
//       },
//       {
//         name: 'Item 5',
//         alt: 'Fifth',
//         description: 'This is the fifth item',
//         type: '2A',
//         size: 'Large',
//       },
//       {
//         name: 'Item 6',
//         alt: 'Sixth',
//         description: 'This is the sixth item',
//         type: '1A',
//         size: 'Small',
//       },
//     ]}
//     loadingText="Loading resources"
//     // empty={
//     //   <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit" uxpId="cards-box-1">
//     //     <SpaceBetween size="m" uxpId="cards-space-between-1">
//     //       <b>No resources</b>
//     //       <Button uxpId="cards-button-1">Create resource</Button>
//     //     </SpaceBetween>
//     //   </Box>
//     // }
//     header={<Header uxpId="cards-header-1">Example Cards</Header>}
//   />
// );
