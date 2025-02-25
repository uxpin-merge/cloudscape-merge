import * as React from "react";
import FlashbarBase, { FlashbarProps } from "@cloudscape-design/components/flashbar";

const Flashbar = ({ items: propItems = [], ...props }: FlashbarProps) => {
  const [items, setItems] = React.useState(
    Array.isArray(propItems)
      ? propItems.map((item) =>
        item && typeof item === "object"
          ? { ...item, onDismiss: () => handleDismiss(item.id) } // Set up individual onDismiss
          : item
      )
      : []
  );

  // Function to handle dismissing an item by id
  const handleDismiss = (id: string | number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update state when `propItems` changes
  React.useEffect(() => {
    setItems(
      Array.isArray(propItems)
        ? propItems.map((item) =>
          item && typeof item === "object"
            ? { ...item, onDismiss: () => handleDismiss(item.id) } // Ensure individual dismiss functionality
            : item
        )
        : []
    );
  }, [propItems]); // Runs when propItems updates

  return <FlashbarBase items={items} {...props} />;
};

export default Flashbar;
