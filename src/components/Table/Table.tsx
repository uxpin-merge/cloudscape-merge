import * as React from "react";
import Header from "@cloudscape-design/components/header";
import { Link } from "@cloudscape-design/components";
import TableBase, { TableProps } from "@cloudscape-design/components/table";

// Define a type for serialized items
type SerializedItem = {
  name: string;
  alt?: string;
  description?: string;
  type?: string;
  size?: string;
};

// Define a type for serialized column definitions
type SerializedColumn = {
  id: string;
  header: string;
  sortingField?: string;
  isRowHeader?: boolean;
};

/**
 * Table component that accepts serialized props and ensures deserialization.
 */
const Table = ({
  items: propItems = [],
  columnDefinitions: propColumns = [],
  header,
  ...props
}: TableProps & { items?: SerializedItem[]; columnDefinitions?: SerializedColumn[]; header?: string }) => {
  // State to store the deserialized items
  const [items, setItems] = React.useState<SerializedItem[]>([]);
  // State to store the deserialized column definitions
  const [columnDefinitions, setColumnDefinitions] = React.useState<any[]>([]);
  // Ensure selectedItems match the full structure of items
  const [selectedItems, setSelectedItems] = React.useState<SerializedItem[]>([]);

  // Convert serialized `items` prop to state when `propItems` changes
  React.useEffect(() => {
    if (Array.isArray(propItems)) {
      setItems(propItems);
      setSelectedItems([]); // Reset selection when items change
    }
  }, [propItems]);

  // Convert serialized `columnDefinitions` prop to state when `propColumns` changes
  React.useEffect(() => {
    if (Array.isArray(propColumns) && propColumns.length > 0) {
      setColumnDefinitions(
        propColumns.map((col) => ({
          ...col,
          cell: (item: any) =>
            col.id && item[col.id] !== undefined ? (
              col.id === "variable" ? (
                <Link href="#">{item[col.id]}</Link>
              ) : (
                item[col.id]
              )
            ) : (
              "-"
            ),
        }))
      );
    } else {
      // Default column definitions if none are provided
      setColumnDefinitions([
        {
          id: "name",
          header: "Item Name",
          cell: (item: SerializedItem) => <Link href="#">{item.name}</Link>,
          sortingField: "name",
          isRowHeader: true,
        },
        {
          id: "alt",
          header: "Alt Text",
          cell: (item: SerializedItem) => item.alt || "-",
          sortingField: "alt",
        },
        {
          id: "type",
          header: "Item Type",
          cell: (item: SerializedItem) => item.type || "-",
        },
        {
          id: "description",
          header: "Item Description",
          cell: (item: SerializedItem) => item.description || "-",
        },
      ]);
    }
  }, [propColumns]);

  return (
    <TableBase
      {...props}
      renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: () => "Select all",
        itemSelectionLabel: ({ selectedItems }, item) => item?.name || "Unknown item",
      }}
      columnDefinitions={columnDefinitions} // ✅ Uses the deserialized column definitions
      items={items} // ✅ Uses the deserialized items
      header={
        <Header counter={selectedItems.length ? `(${selectedItems.length}/${items.length})` : `(${items.length})`}>
          {header || "Table"}
        </Header>
      }
    />
  );
};

export default Table;
