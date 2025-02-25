import React from "react";
import AttributeEditorBase, { AttributeEditorProps } from "@cloudscape-design/components/attribute-editor";
import Input, { InputProps } from "@cloudscape-design/components/input"; // ✅ Use Cloudscape's Input and InputProps

/**
 * @uxpindocurl https://cloudscape.design/components/attribute-editor/
 * @uxpindescription With the attribute editor, users can create, edit, and delete resource attributes.
 */

const AttributeEditor = (props: AttributeEditorProps<{ key: string; value: string }>) => {
  const [items, setItems] = React.useState<{ key: string; value: string }[]>(Array.from(props.items ?? []));

  React.useEffect(() => {
    setItems(Array.from(props.items ?? []))
  }, [props]);

  return (
    <AttributeEditorBase
      {...props}
      onAddButtonClick={() => setItems([...items, { key: "", value: "" }])}
      onRemoveButtonClick={({ detail: { itemIndex } }) => {
        const tmpItems = [...items];
        tmpItems.splice(itemIndex, 1);
        setItems(tmpItems);
      }}
      items={items}
      definition={[
        {
          label: "Key",
          control: (item) => (
            <Input
              value={item.key}
              onChange={({ detail }: { detail: InputProps.ChangeDetail }) => {
                const updatedItems = [...items];
                updatedItems[items.indexOf(item)] = { ...item, key: detail.value };
                setItems(updatedItems);
              }}
              placeholder="Enter key"
            />
          ),
        },
        {
          label: "Value",
          control: (item) => (
            <Input
              value={item.value}
              onChange={({ detail }: { detail: InputProps.ChangeDetail }) => {
                const updatedItems = [...items];
                updatedItems[items.indexOf(item)] = { ...item, value: detail.value };
                setItems(updatedItems);
              }}
              placeholder="Enter value"
            />
          ),
        },
      ]}
    />
  );
};

export default AttributeEditor;
